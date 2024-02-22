import { Resolver } from "did-resolver";
import KeyResolver from "key-did-resolver";
import * as WebResolver from "web-did-resolver";

const keyDIDResolver = KeyResolver.getResolver();
const webDidResolver = WebResolver.getResolver();
export const resolver = new Resolver({ ...keyDIDResolver, ...webDidResolver });
