import { Resolver } from "did-resolver";
import JwkResolver from "@sphereon/did-resolver-jwk";
import DidKeyResolver from "@sphereon/did-resolver-key";
import * as WebResolver from "web-did-resolver";

const keyResolver = DidKeyResolver.getResolver();
const webDidResolver = WebResolver.getResolver();

export const resolver = new Resolver({
	...webDidResolver,
	...JwkResolver.getDidJwkResolver(),
	...keyResolver
});
