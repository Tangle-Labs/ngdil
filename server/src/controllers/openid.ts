import { issuer, rp } from "@/services/oid4vc";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { DIDResolutionOptions, DIDResolutionResult, Resolver } from "did-resolver";
import * as iotaIdentity from "@iota/identity-wasm";
import { init } from "oid4vc";
import { SessionsService } from "@/services";
import { wsServer } from "@/server";
import { ServiceFactory } from "@/services/servicefactory";
import { IdentityService } from "@/services/identity.service";
import { nanoid } from "nanoid";
import * as didJWT from "did-jwt";
import { presentationDefinitions } from "./presentationDefinitions";
import { credentialDefs } from "./credentials";
import { PUBLIC_CLIENT_URI } from "@/config";

const clientConfig = {
	permanodes: [{ url: "https://chrysalis-chronicle.iota.org/api/mainnet/" }]
};

class IotaDIDResolver extends Resolver {
	async resolve(
		did: string,
		options?: DIDResolutionOptions | undefined
	): Promise<DIDResolutionResult> {
		const client = await iotaIdentity.Client.fromConfig(clientConfig);
		const doc = await client.resolve(did);
		return {
			didResolutionMetadata: {
				contentType: "application/did+ld+json"
			},
			didDocument: doc.document().toJSON().doc,
			didDocumentMetadata: {}
		};
	}
}

const reoslver = new IotaDIDResolver();

const getPersonaCreds = async (persona: "imani" | "peter" | "dominique", recipient: string) => {
	const identityService = ServiceFactory.get<IdentityService>("identity");
	const creds = [];
	if (persona === "imani") {
		creds.push(
			await identityService.createCredential({
				domain: "gov.ngdil.com",
				recipient,
				type: "National ID",
				body: {
					Surname: "Jameson",
					"Given Name": "Imani",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "24/12/1997",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "futuretech.ngdil.com",
				type: "Employee ID",
				body: {
					Issuer: "Future Tech Co.",
					"Staff Name": "Imani Jameson",
					"Job Title": "Senior Manager",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase(),
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`
					}
				}
			})
		);
	} else if (persona === "peter") {
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "gov.ngdil.com",
				type: "National ID",
				body: {
					Surname: "van de Meijden",
					"Given Name": "Peter",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "08/08/1978",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "kw1c.ngdil.com",
				type: "Staff ID",
				body: {
					Issuer: "Koning Willem I College",
					"Staff Name": "Peter van de Meijden",
					"Job Title": "Chief Enrolment Officer",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase(),
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			})
		);
	} else {
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "National ID",
				domain: "gov.ngdil.com",
				body: {
					Surname: "Veritas",
					"Given Name": "Dominique",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "22/12/2001",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "kw1c.ngdil.com",
				type: "School Course Certificate",
				body: {
					"Course Name": "Certificate of Secondary Education",
					Faculty: "Academics and Humanities",
					"Course Type": "National Certificate",
					"EQF Level": 3,
					Duration: "2 Years",
					Description:
						"Finalisation of standard national education to a National Certificate level passed with distinction in Dutch, English, Sciences, Geography, Technology, and Mathematics",
					Language: "Dutch",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				domain: "volunteercorps.ngdil.com",
				type: "Volunteer Badge",
				body: {
					Issuer: "Volunteer Corps",
					"Holder Name": "Dominique Veritas",
					"Badge Name": "Community Volunteer",
					Description:
						"This is to certify that the named badge holder has participated with and supported the Volunteer Org. through volunteer practices within the local community over a three month period.",
					Country: "Netherlands",
					Language: "Dutch",
					"Activity Start": "07/01/2023",
					"Activity End": "27/03/2023",
					enrichment: {
						logo_uri: `${PUBLIC_CLIENT_URI}/imgs/volunteer.svg`
					}
				}
			})
		);
	}

	return creds.map((c) => c.cred);
};

init(reoslver);

export const sendMetadata = expressAsyncHandler(async (req: Request, res: Response) => {
	res.json(issuer.getIssuerMetadata());
});

export const tokeEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const response = await issuer.createTokenResponse(req.body);
	res.json(response);
});

export const startingOffer = expressAsyncHandler(async (req: Request, res: Response) => {
	const persona = req.body.credentials.includes("School Course Certificate")
		? "dominique"
		: req.body.credentials.includes("Staff ID")
		? "peter"
		: "imani";

	req.session.credentialDef = persona;
	await req.session.save();

	const credOffer = await issuer.createCredentialOffer(
		{
			credentials: [...req.body.credentials]
		},
		{ sessionId: req.session.id }
	);
	res.json(credOffer);
});

export const singleOffer = expressAsyncHandler(async (req: Request, res: Response) => {
	const { credential } = req.body;

	// @ts-ignore
	const credDef = credentialDefs[credential];

	req.session.credentialDef = credential;
	await req.session.save();
	const offer = await issuer.createCredentialOffer(
		{ credentials: [credDef.type] },
		{ sessionId: req.session.id }
	);
	res.json(offer);
});

export const credentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split("Bearer ")[1];
	if (!token) throw new Error("401::missing token");
	const { payload } = await didJWT.verifyJWT(token, {
		policies: { aud: false },
		resolver: new IotaDIDResolver()
	});
	const did = await issuer.validateCredentialsResponse({ token, proof: req.body.proof.jwt });

	const identityService = ServiceFactory.get<IdentityService>("identity");
	const session = await SessionsService.findById(payload.sessionId);
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
	wsServer.broadcast(payload.sessionId, { creds: true });
	res.json(response);
});

export const batchCredentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split("Bearer ")[1];
	if (!token) throw new Error("401::missing token");
	const { payload } = await didJWT.verifyJWT(token, {
		policies: { aud: false },
		resolver: new IotaDIDResolver()
	});

	const did = await issuer.validateCredentialsResponse({ token, proof: req.body.proof.jwt });

	const session = await SessionsService.findById(payload.sessionId);
	const credentials = await getPersonaCreds(
		session.credentialDef as "peter" | "imani" | "dominique",
		did
	);

	const response = await issuer.createSendCredentialsResponse({
		credentials
	});
	wsServer.broadcast(payload.sessionId, { creds: true });
	res.json(response);
});

export const siopRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = req.session.id;
	const { overrideLogo, overrideClientName } = req.body;
	const request = rp.createRequest({
		requestBy: "value",
		responseType: "id_token",
		nonce: id,
		overrideLogo,
		overrideClientName
	});
	res.json({ request });
});

export const vpRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = req.session.id;
	const { presentationStage, overrideLogo } = req.body;
	const request = rp.createRequest({
		requestBy: "value",
		responseType: "vp_token",
		// @ts-ignore
		presentationDefinition: presentationDefinitions[presentationStage],
		nonce: `${presentationStage}::${id}`,
		overrideLogo
	});
	res.json({ request });
});

export const auth = expressAsyncHandler(async (req: Request, res: Response) => {
	const { nonce, vp_token, id_token } = req.body;
	if (vp_token) {
		// @ts-ignore
		await rp.verifyAuthResponse(req.body, presentationDefinitions[nonce.split("::")[0]]);
		console.log("verified?");
		wsServer.broadcast(nonce.split("::")[1], { received: true });
		res.status(200).send();
	} else if (id_token) {
		await rp.verifyAuthResponse(req.body);
		const { iss } = await rp.validateJwt(id_token);
		// @ts-ignore
		await SessionsService.findByIdAndUpdate(nonce, {
			isValid: true,
			did: iss
		});

		wsServer.broadcast(nonce, { login: true });

		res.status(200).send();
	}
});
