import { DID, DID_SEED, KID, PUBLIC_BASE_URI, PUBLIC_CLIENT_URI } from "@/config";
import { resolver } from "@/utils";
import {
	IssuerStoreData,
	RelyingParty,
	SigningAlgs,
	SimpleStore,
	stringToBytes,
	VcIssuer
} from "@tanglelabs/oid4vc";
import { ES256Signer } from "did-jwt";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rpKeys = {
	signer: ES256Signer(stringToBytes(DID_SEED as string)),
	did: DID as string,
	kid: KID as string,
	signingAlgorithm: SigningAlgs.ES256
};

export const rp = new RelyingParty({
	redirectUri: `${PUBLIC_BASE_URI}/auth`,
	clientId: rpKeys.did,
	clientMetadata: {
		subjectSyntaxTypesSupported: ["did:jwk", "did:key"],
		idTokenSigningAlgValuesSupported: [SigningAlgs.ES256],
		clientName: "NGDIL",
		vpFormats: {
			jwt_vc_json: {
				alg: ["EdDSA"]
			}
		},
		logoUri:
			"https://uploads-ssl.webflow.com/6440ceac338a9203b5100c47/6440ceac338a920197100e60_NGDIL%20Logo%20Dark.svg"
	},
	...rpKeys,
	resolver: resolver
});

const reader = async () => {
	const raw = await readFile(path.resolve(__dirname, "../../../test.log"));
	try {
		return JSON.parse(raw.toString());
	} catch {
		return [];
	}
};

const writer = async (data: IssuerStoreData[]) => {
	await writeFile(path.resolve(__dirname, "../../../test.log"), JSON.stringify(data));
};

export const issuer = new VcIssuer({
	credentialEndpoint: `${PUBLIC_BASE_URI}/api/credential`,
	batchCredentialEndpoint: `${PUBLIC_BASE_URI}/api/credentials`,
	credentialIssuer: `${PUBLIC_BASE_URI}/`,
	cryptographicBindingMethodsSupported: ["did:jwk", "did:key"],
	credentialSigningAlgValuesSupported: [SigningAlgs.ES256],
	proofTypesSupported: ["jwt"],
	store: new SimpleStore<IssuerStoreData>({ reader, writer }),
	clientName: "NGDIL",
	logoUri:
		"https://uploads-ssl.webflow.com/6440ceac338a9203b5100c47/6440ceac338a920197100e60_NGDIL%20Logo%20Dark.svg",
	...rpKeys,
	resolver,
	tokenEndpoint: `${PUBLIC_BASE_URI}/token`,
	supportedCredentials: [
		{
			name: "National ID",
			type: ["National ID"],
			raw: {
				credential_definition: {
					type: ["VerifiableCredential"]
				}
			},
			display: [
				{
					name: "National ID",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/gov.svg`
					}
				}
			]
		},
		{
			name: "Volunteer Badge",
			type: ["Volunteer Badge"],
			raw: {
				credential_definition: {
					type: ["VerifiableCredential"]
				}
			},
			display: [
				{
					name: "Volunteer Badge",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/volunteer.svg`
					}
				}
			]
		},
		{
			name: "School Course Certificate",
			type: ["School Course Certificate"],
			raw: {
				credential_definition: {
					type: ["VerifiableCredential"]
				}
			},
			display: [
				{
					name: "School Course Certificate",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			]
		},
		{
			name: "Staff ID",
			type: ["Staff ID"],
			raw: {
				credential_definition: {
					type: ["VerifiableCredential"]
				}
			},
			display: [
				{
					name: "Staff ID",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
					}
				}
			]
		},
		{
			name: "Employee ID",
			type: ["Employee ID"],
			raw: {
				credential_definition: {
					type: ["VerifiableCredential"]
				}
			},
			display: [
				{
					name: "Employee ID",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`
					}
				}
			]
		},
		{
			name: "Higher Education Information Literacy Level 1",
			type: ["Higher Education Information Literacy Level 1"],
			raw: {
				credential_definition: {
					type: ["OpenBadgeCredential"]
				}
			},
			display: [
				{
					name: "Higher Education Information Literacy Level 1",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/werk.png`
					}
				}
			]
		},
		{
			name: "Business Innovation & Interdisciplinair Samenwerken",
			type: ["Business Innovation & Interdisciplinair Samenwerken"],
			raw: {
				credential_definition: {
					type: ["OpenBadgeCredential"]
				}
			},
			display: [
				{
					name: "Business Innovation & Interdisciplinair Samenwerken",
					logo: {
						uri: `${PUBLIC_CLIENT_URI}/imgs/hta.png`
					}
				}
			]
		}
	]
});
export const issuers = {
	bbc: new VcIssuer({
		credentialEndpoint: `${PUBLIC_BASE_URI}/api/credential`,
		batchCredentialEndpoint: `${PUBLIC_BASE_URI}/api/credentials`,
		credentialIssuer: new URL("/bbc", PUBLIC_BASE_URI).toString(),
		cryptographicBindingMethodsSupported: ["did:key"],
		credentialSigningAlgValuesSupported: ["EdDSA"],
		proofTypesSupported: ["jwt"],
		store: new SimpleStore<IssuerStoreData>({ reader, writer }),
		clientName: "Big Business Corp",
		logoUri: new URL("/imgs/bbc.png", PUBLIC_CLIENT_URI).toString(),
		...rpKeys,
		resolver,
		tokenEndpoint: `${PUBLIC_BASE_URI}/token`,
		supportedCredentials: [
			{
				name: "Staff ID",
				type: ["Staff ID"],
				raw: {
					credential_definition: {
						type: ["VerifiableCredential"]
					}
				},
				display: [
					{
						name: "Staff ID",
						logo: {
							uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
						}
					}
				]
			}
		]
	}),
	kw1c: new VcIssuer({
		credentialEndpoint: `${PUBLIC_BASE_URI}/api/credential`,
		batchCredentialEndpoint: `${PUBLIC_BASE_URI}/api/credentials`,
		credentialIssuer: new URL("/kw1c", PUBLIC_BASE_URI).toString(),
		cryptographicBindingMethodsSupported: ["did:jwk", "did:key"],
		credentialSigningAlgValuesSupported: [SigningAlgs.ES256],
		proofTypesSupported: ["jwt"],
		store: new SimpleStore<IssuerStoreData>({ reader, writer }),
		tokenEndpoint: `${PUBLIC_BASE_URI}/token`,
		clientName: "Koning Willem I College",
		logoUri: new URL("/imgs/kw1c-white.png", PUBLIC_CLIENT_URI).toString(),
		...rpKeys,
		resolver,
		supportedCredentials: [
			{
				name: "All-Round Carpentry Certificate",
				type: ["All-Round Carpentry Certificate"],
				raw: {
					credential_definition: {
						type: ["VerifiableCredential"]
					}
				},
				display: [
					{
						name: "All-Round Carpentry Certificate",
						logo: {
							uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
						}
					}
				]
			},
			{
				name: "Marketing Certificate",
				type: ["Marketing Certificate"],
				raw: {
					credential_definition: {
						type: ["VerifiableCredential"]
					}
				},
				display: [
					{
						name: "Marketing Certificate",
						logo: {
							uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
						}
					}
				]
			},
			{
				name: "Future Engineer Certificate",
				type: ["Future Engineer Certificate"],
				raw: {
					credential_definition: {
						type: ["VerifiableCredential"]
					}
				},
				display: [
					{
						name: "Future Engineer Certificate",
						logo: {
							uri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`
						}
					}
				]
			}
		]
	})
};
