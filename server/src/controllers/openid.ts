import { issuer, rp } from "@/services/oid4vc";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { DIDResolutionOptions, DIDResolutionResult, Resolver } from "did-resolver";
import { Client } from "@iota/identity-node";
import { init } from "../../../../oid4vc/src";
import { SessionsService } from "@/services";
import { wsServer } from "@/server";
import { ServiceFactory } from "@/services/servicefactory";
import { IdentityService } from "@/services/identity.service";
import { nanoid } from "nanoid";
import { validateJsonWebToken } from "@/utils";
import * as didJWT from "did-jwt";
import { presentationDefinitions } from "./presentationDefinitions";

const clientConfig = {
	permanodes: [{ url: "https://chrysalis-chronicle.iota.org/api/mainnet/" }]
};

class IotaDIDResolver extends Resolver {
	async resolve(
		did: string,
		options?: DIDResolutionOptions | undefined
	): Promise<DIDResolutionResult> {
		const client = await Client.fromConfig(clientConfig);
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
				recipient,
				type: "National ID",
				body: {
					Surname: "Jameson",
					"Given Name": "Imani",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "24/12/1997"
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "Employee ID",
				body: {
					Issuer: "Future Tech Co.",
					"Staff Name": "Imani Jameson",
					"Job Title": "Senior Manager",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase()
				}
			})
		);
	} else if (persona === "peter") {
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "National ID",
				body: {
					Surname: "van de Meijden",
					"Given Name": "Peter",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "08/08/1978"
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "Staff ID",
				body: {
					Issuer: "Koning Willem I College",
					"Staff Name": "Peter van de Meijden",
					"Job Title": "Chief Enrolment Officer",
					Department: "Human Resources",
					"Staff Number": nanoid().toUpperCase()
				}
			})
		);
	} else {
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "National ID",
				body: {
					Surname: "Veritas",
					"Given Name": "Dominique",
					"Passport Number": nanoid().toUpperCase(),
					"Date of Birth": "22/12/2001"
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "School Course Certificate",
				body: {
					"Course Name": "Certificate of Secondary Education",
					Faculty: "Academics and Humanities",
					"Course Type": "National Certificate",
					"EQF Level": 3,
					Duration: "2 Years",
					Description:
						"Finalisation of standard national education to a National Certificate level passed with distinction in Dutch, English, Sciences, Geography, Technology, and Mathematics",
					Language: "Dutch"
				}
			})
		);
		creds.push(
			await identityService.createCredential({
				recipient,
				type: "Volunteer Badge",
				body: {
					Issuer: "Volunteer Org",
					"Holder Name": "Dominique Veritas",
					"Badge Name": "Community Volunteer",
					Description:
						"This is to certify that the named badge holder has participated with and supported the Volunteer Org. through volunteer practices within the local community over a three month period.",
					Country: "Netherlands",
					Language: "Dutch",
					"Activity Start": "07/01/2023",
					"Activity End": "27/03/2023"
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

	const credentials = await getPersonaCreds(persona, req.session.did);
	req.session.credentials = credentials;
	await req.session.save();

	const credOffer = await issuer.createCredentialOffer(
		{
			credentials: [...req.body.credentials],
			pinRequired: true
		},
		{ sessionId: req.session.id }
	);
	res.json(credOffer);
});

export const offer = expressAsyncHandler(async (req: Request, res: Response) => {});

export const credentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split("Bearer ")[1];
	const response = await issuer.createSendCredentialsResponse({
		token: token,
		credentials: [
			"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA0NDIxMDYsImF1ZCI6ImRpZDppb3RhOkVmZXk5eWFCQ2d2TG1XSjhIaFJBOXVmYlNDYXR5OExKeUMxZjdlWFhwVkMiLCJuYmYiOjE2OTA0NDIxMDYsImp0aSI6Imh0dHA6Ly9jcmVkLmNvbS93YV9kcml2aW5nX2xpY2Vuc2UiLCJzdWIiOiJkaWQ6aW90YTpFZmV5OXlhQkNndkxtV0o4SGhSQTl1ZmJTQ2F0eThMSnlDMWY3ZVhYcFZDIiwidmMiOnsiQGNvbnRleHQiOiJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImlkIjoiaHR0cDovL2NyZWQuY29tL3dhX2RyaXZpbmdfbGljZW5zZSIsInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJWb2x1bnRlZXJpbmcgQmFkZ2UiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiaWQiOiJkaWQ6aW90YTpFZmV5OXlhQkNndkxtV0o4SGhSQTl1ZmJTQ2F0eThMSnlDMWY3ZVhYcFZDIiwiTWFyaXRpYWwgU3RhdHVzIjoiU2luZ2xlIiwiU1NOIjo0MjA2OSwiVm9sdW50ZWVyZWQgQXQiOiJDYXBlIENhbmV2cmFsIiwiZGF0ZSBvZiBiaXJ0aCI6IjI0LTEyLTIwMDIiLCJuYW1lIjoiSm9lIFNjaG1vZSJ9LCJpc3N1ZXIiOiJkaWQ6aW90YToyVVBVdkdKa0h1b0p3Rm9GdVpZcWhtQ2lwRVJOZWNkdnFYZWJwZkQ3bUtTQiIsImlzc3VhbmNlRGF0ZSI6IjIwMjMtMDctMjdUMDc6MTU6MDZaIn0sImlzcyI6ImRpZDppb3RhOjJVUFV2R0prSHVvSndGb0Z1WllxaG1DaXBFUk5lY2R2cVhlYnBmRDdtS1NCIn0.EIOhVhBI0fiC22CeDK_9fwV6hXPIe6OF91gD8XQzzttQKFVarjjWj0Scnwu5Wldf3dq4wfmecUiVSUyf10-XAw"
		]
	});
	res.json(response);
});

export const batchCredentialEndpoint = expressAsyncHandler(async (req: Request, res: Response) => {
	console.log("batch here?");
	const token = req.headers.authorization?.split("Bearer ")[1];
	if (!token) throw new Error("401::missing token");
	const { payload } = await didJWT.verifyJWT(token, {
		policies: { aud: false },
		resolver: new IotaDIDResolver()
	});
	const { credentials } = await SessionsService.findById(payload.sessionId);

	const response = await issuer.createSendCredentialsResponse({
		token,
		credentials
	});
	wsServer.broadcast(payload.sessionId, { creds: true });
	res.json(response);
});

export const siopRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = req.session.id;
	const request = rp.createRequest({
		requestBy: "value",
		responseType: "id_token",
		nonce: id
	});
	res.json({ request });
});

export const vpRequest = expressAsyncHandler(async (req: Request, res: Response) => {
	const id = req.session.id;
	const { presentationStage } = req.body;
	const request = rp.createRequest({
		requestBy: "value",
		responseType: "vp_token",
		// @ts-ignore
		presentationDefinition: presentationDefinitions[presentationStage],
		nonce: `${presentationStage}::${id}`
	});
	res.json({ request });
});

export const auth = expressAsyncHandler(async (req: Request, res: Response) => {
	const { nonce, vp_token, id_token } = req.body;
	if (vp_token) {
		await rp.verifyAuthResponse(req.body, presentationDefinitions[nonce.split("::")[0]]);
		console.log("verified?");
		wsServer.broadcast(nonce.split("::")[1], { received: true });
		res.status(200).send();
	} else if (id_token) {
		await rp.verifyAuthResponse(req.body);
		const { iss } = await rp.validateJwt(id_token);
		await SessionsService.findByIdAndUpdate(nonce, {
			isValid: true,
			did: iss
		});

		wsServer.broadcast(nonce, { login: true });

		res.status(200).send();
	}
});
