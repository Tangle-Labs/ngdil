import { DIDResolutionOptions, Resolvable, Resolver, ParsedDID } from "did-resolver";
import KeyResolver from "key-did-resolver";
import * as WebResolver from "web-did-resolver";
import JwkResolver from "@sphereon/did-resolver-jwk";

const keyDIDResolver = KeyResolver.getResolver();
const webDidResolver = WebResolver.getResolver();
const { key } = keyDIDResolver;
console.log(key);
export const resolver = new Resolver({
	key: async (
		did: string,
		parsed: ParsedDID,
		resolver: Resolvable,
		options: DIDResolutionOptions
	) => {
		const doc = await key(did, parsed, resolver, options);
		console.log("resolved", JSON.stringify(doc));
		return doc;
	},
	...webDidResolver,
	...JwkResolver.getDidJwkResolver()
});
