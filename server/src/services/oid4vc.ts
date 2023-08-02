import { PUBLIC_BASE_URI } from "@/config";
import {
	IssuerStoreData,
	RelyingParty,
	SigningAlgs,
	SimpleStore,
	VcIssuer
} from "../../../../oid4vc/src/index";
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
	clientId: "did:iota:AUMDtBCbC6g8iUFMDQUzprUEMpZMgyE3jcxGtmTRAnmR",
	clientMetadata: {
		subjectSyntaxTypesSupported: ["did:iota"],
		idTokenSigningAlgValuesSupported: [SigningAlgs.EdDSA],
		client_name: "NGDIL",
		logo_uri:
			"https://uploads-ssl.webflow.com/6440ceac338a9203b5100c47/6440ceac338a920197100e60_NGDIL%20Logo%20Dark.svg"
	},
	...rpKeys
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
	client_name: "NGDIL",
	logo_uri:
		"https://uploads-ssl.webflow.com/6440ceac338a9203b5100c47/6440ceac338a920197100e60_NGDIL%20Logo%20Dark.svg",
	...rpKeys
});
