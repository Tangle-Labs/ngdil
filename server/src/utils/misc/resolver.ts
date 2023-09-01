import { DIDResolutionOptions, DIDResolutionResult, Resolver } from "did-resolver";
import * as iotaIdentity from "@iota/identity-wasm/node";
import KeyResolver from "key-did-resolver";

const keyDIDResolver = KeyResolver.getResolver();
export const resolver = new Resolver(keyDIDResolver);
