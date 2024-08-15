import { DIDResolutionOptions, Resolvable, Resolver, ParsedDID } from "did-resolver";
import KeyResolver from "key-did-resolver";
import * as WebResolver from "web-did-resolver";
import JwkResolver from "@sphereon/did-resolver-jwk";
import DidKeyResolver from "@sphereon/did-resolver-key";

const keyResolver = DidKeyResolver.getResolver();
const webDidResolver = WebResolver.getResolver();
export const resolver = new Resolver({
	...webDidResolver,
	...JwkResolver.getDidJwkResolver(),
	...keyResolver
});
