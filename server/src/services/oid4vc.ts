import { PUBLIC_BASE_URI, PUBLIC_CLIENT_URI } from "@/config";
import { resolver } from "@/utils";
import {
	IssuerStoreData,
	RelyingParty,
	SigningAlgs,
	SimpleStore,
	VcIssuer
} from "@tanglelabs/oid4vc";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rpKeys = {
	privKeyHex: "e402aa94b0113c14bc10259dbbb15fba9042029ddf2e9243238237af025a05f3",
	did: "did:iota:2UPUvGJkHuoJwFoFuZYqhmCipERNecdvqXebpfD7mKSB",
	kid: "did:iota:2UPUvGJkHuoJwFoFuZYqhmCipERNecdvqXebpfD7mKSB#vc-signature"
};

export const rp = new RelyingParty({
	redirectUri: `${PUBLIC_BASE_URI}/auth`,
	clientId: rpKeys.did,
	clientMetadata: {
		subjectSyntaxTypesSupported: ["did:iota"],
		idTokenSigningAlgValuesSupported: [SigningAlgs.EdDSA],
		clientName: "NGDIL",
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
	cryptographicBindingMethodsSupported: ["did:iota"],
	cryptographicSuitesSupported: ["EdDSA"],
	proofTypesSupported: ["jwt"],
	store: new SimpleStore<IssuerStoreData>({ reader, writer }),
	clientName: "NGDIL",
	logoUri:
		"https://uploads-ssl.webflow.com/6440ceac338a9203b5100c47/6440ceac338a920197100e60_NGDIL%20Logo%20Dark.svg",
	...rpKeys,
	resolver
});
export const issuers = {
	bbc: new VcIssuer({
		credentialEndpoint: `${PUBLIC_BASE_URI}/api/credential`,
		batchCredentialEndpoint: `${PUBLIC_BASE_URI}/api/credentials`,
		credentialIssuer: new URL("/bbc", PUBLIC_BASE_URI).toString(),
		cryptographicBindingMethodsSupported: ["did:iota"],
		cryptographicSuitesSupported: ["EdDSA"],
		proofTypesSupported: ["jwt"],
		store: new SimpleStore<IssuerStoreData>({ reader, writer }),
		clientName: "Big Business Corp",
		logoUri: new URL("/imgs/bbc.png", PUBLIC_CLIENT_URI).toString(),
		...rpKeys,
		resolver
	}),
	kw1c: new VcIssuer({
		credentialEndpoint: `${PUBLIC_BASE_URI}/api/credential`,
		batchCredentialEndpoint: `${PUBLIC_BASE_URI}/api/credentials`,
		credentialIssuer: new URL("/kw1c", PUBLIC_BASE_URI).toString(),
		cryptographicBindingMethodsSupported: ["did:iota"],
		cryptographicSuitesSupported: ["EdDSA"],
		proofTypesSupported: ["jwt"],
		store: new SimpleStore<IssuerStoreData>({ reader, writer }),
		clientName: "Koning Willem I College",
		logoUri: new URL("/imgs/kw1c-white.png", PUBLIC_CLIENT_URI).toString(),
		...rpKeys,
		resolver
	})
};
