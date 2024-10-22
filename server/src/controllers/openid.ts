import { issuer, issuers, rp } from "@/services/oid4vc";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { CredOfferService, SessionsService, SiopOfferService } from "@/services";
import { ServiceFactory } from "@/services/servicefactory";
import { IdentityService } from "@/services/identity.service";
import { nanoid } from "nanoid";
import * as didJWT from "did-jwt";
import { presentationDefinitions } from "./presentationDefinitions";
import { credentialDefs, getPersonaCreds } from "./credentials";
import { PUBLIC_BASE_URI } from "@/config";
import { resolver } from "@/utils";
import { emitter } from "@/utils/sse";

export const sendMetadata = expressAsyncHandler(async (req: Request, res: Response) => {
	const metadata = issuer.getIssuerMetadata();
	res.json(metadata);
});
export const sendSpecificMetadata = expressAsyncHandler(async (req: Request, res: Response) => {
	const metadata = issuers[req.params.issuer as "kw1c" | "bbc"].getIssuerMetadata();
	res.json(metadata);
});

export const sendOauthMetadata = expressAsyncHandler(async (req: Request, res: Response) => {
	const metadata = issuer.getOauthServerMetadata();
	res.json(metadata);
});
export const sendSpecificOauthMetadata = expressAsyncHandler(
	async (req: Request, res: Response) => {
		const metadata = issuers[req.params.issuer as "kw1c" | "bbc"].getOauthServerMetadata();
		res.json(metadata);
	}
);

export const tokeEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const response = await issuer.createTokenResponse(req.body);
	res.json(response);
});

export const getCredOffer = expressAsyncHandler(async (req: Request, res: Response) => {
	const { offer } = await CredOfferService.findById(req.params.id);
	res.json(offer);
});

export const getSiopRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const { request } = await SiopOfferService.findById(req.params.id);
	res.send(request);
});
export const startingOffer = expressAsyncHandler(async (req: Request, res: Response) => {
	const persona = req.body.credentials.includes("School Course Certificate")
		? "dominique"
		: req.body.credentials.includes("Staff ID")
		? "peter"
		: "imani";

	req.session.credentialDef = persona;
	await req.session.save();
	const id = nanoid();

	const credOffer = await issuer.createCredentialOffer(
		{
			requestBy: "reference",
			credentialOfferUri: new URL(`/api/offers/creds/${id}`, PUBLIC_BASE_URI).toString(),
			credentials: [...req.body.credentials]
		},
		{ sessionId: req.session.id }
	);
	await CredOfferService.create({ id, offer: credOffer.offer });
	res.json(credOffer);
});

export const getSessionIdController = expressAsyncHandler(async (req: Request, res: Response) => {
	res.json({ id: req.session.id });
});

export const singleOffer = expressAsyncHandler(async (req: Request, res: Response) => {
	const { credential, issuer } = req.body;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const credDef = credentialDefs[credential];
	const id = nanoid();

	req.session.credentialDef = credential;
	await req.session.save();
	const offer = await issuers[issuer as "bbc" | "kw1c"].createCredentialOffer(
		{
			credentials: [credDef.type],
			requestBy: "reference",
			credentialOfferUri: new URL(`/api/offers/creds/${id}`, PUBLIC_BASE_URI).toString()
		},
		{ sessionId: req.session.id }
	);

	await CredOfferService.create({ id, offer: offer.offer });
	res.json(offer);
});

export const credentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split("Bearer ")[1];
	if (!token) throw new Error("401::missing token");
	const { payload } = await didJWT.verifyJWT(token, {
		policies: { aud: false },
		resolver
	});
	const did = await issuer.validateCredentialsResponse({ token, proof: req.body.proof.jwt });

	const identityService = ServiceFactory.get<IdentityService>("identity");
	const session = await SessionsService.findById(payload.sessionId);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const credDef = credentialDefs[session.credentialDef];
	if (!credDef) throw new Error("definition not found");
	const cred = await identityService.createCredential({
		recipient: did,
		type: credDef.type,
		body: credDef.body,
		domain: credDef.domain
	});

	const response = await issuer.createSendCredentialsResponse({
		credentials: [cred.cred]
	});
	emitter.emit("oid-event", { type: "vc", status: "success", state: payload.sessionId });
	res.json(response);
});

export const batchCredentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split("Bearer ")[1];
	if (!token) throw new Error("401::missing token");
	const { payload } = await didJWT.verifyJWT(token, {
		policies: { aud: false },
		resolver
	});

	const did = await issuer.validateCredentialsResponse({
		token,
		proof: req.body.credential_requests[0].proof.jwt
	});

	const session = await SessionsService.findById(payload.sessionId);
	const credentials = await getPersonaCreds(
		session.credentialDef as "peter" | "imani" | "dominique",
		did
	);

	const response = await issuer.createSendCredentialsResponse({
		credentials
	});

	emitter.emit("oid-event", { type: "vc", status: "success", state: payload.sessionId });
	res.json(response);
});

export const siopRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = nanoid();
	const { clientMetadata } = req.body;
	const request = await rp.createRequest({
		requestBy: "reference",
		requestUri: new URL(`/api/offers/siop/${id}`, PUBLIC_BASE_URI).toString(),
		responseType: "id_token",
		state: req.session.id,
		clientMetadata
	});
	SiopOfferService.create({ id, request: request.request });

	res.json({ ...request });
});

export const vpRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = nanoid();
	const { presentationStage, clientMetadata } = req.body;
	const request = await rp.createRequest({
		requestBy: "reference",
		requestUri: new URL(`/api/offers/siop/${id}`, PUBLIC_BASE_URI).toString(),
		responseType: "vp_token",
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		presentationDefinition: presentationDefinitions[presentationStage],
		state: `${presentationStage}::${req.session.id}`,
		clientMetadata
	});

	SiopOfferService.create({ id, request: request.request });
	res.json({ ...request });
});

export const auth = expressAsyncHandler(async (req: Request, res: Response) => {
	const { state, vp_token, id_token } = req.body;
	if (vp_token) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		await rp.verifyAuthResponse(req.body, presentationDefinitions[state.split("::")[0]]);
		console.log("oid4vp: verified");
		const stateId = state.split("::")[1];
		emitter.emit("oid-event", { type: "vp", status: "success", state: stateId });
		res.status(200).send();
	} else if (id_token) {
		await rp.verifyAuthResponse(req.body);
		const { iss } = await rp.validateJwt(id_token);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		await SessionsService.findByIdAndUpdate(state, {
			isValid: true,
			did: iss
		});

		emitter.emit("oid-event", { type: "id", status: "success", state });

		res.status(200).send();
	}
});
