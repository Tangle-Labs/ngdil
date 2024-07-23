import { GenericStore, IdentityManager, encryptWithAES } from "@tanglelabs/ssimon";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";
import { DidJwkAccount, DidJwkAdapter } from "@tanglelabs/jwk-identity-adapter";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const constructFileStore = ({ path, password }: { path: string; password: string }) => {
	const writer = async (body: string) => {
		await writeFile(path, body);
	};
	const reader = async () => {
		const data = await readFile(path).catch(async (e) => {
			if (e.code === "ENOENT") {
				const encryptedEmptyArray = encryptWithAES("[]", password);
				await writer(encryptedEmptyArray);
				return encryptedEmptyArray;
			}
			throw new Error();
		});

		return data.toString();
	};
	const store = new GenericStore({ path, password, reader, writer });

	return store;
};

export class IdentityService {
	//@ts-ignore
	manager: IdentityManager<IotaAdapter>;
	// @ts-ignore
	did: DidJwkAccount;

	static async build() {
		const service = new IdentityService();
		console.log(__dirname);
		service.manager = await IdentityManager.build({
			adapters: [DidJwkAdapter],
			storage: constructFileStore({
				path: path.resolve(__dirname, "./identity"),
				password: "asdf"
			})
		});
		const store = constructFileStore({
			path: path.resolve(__dirname, `./identity-vc`),
			password: "asdf"
		});

		// @ts-ignore
		service.did = await service.manager
			.getDid({
				alias: "ngdil",
				store
			})
			.catch(() => service.manager.createDid({ alias: "ngdil", method: "jwk", store }));
		return service;
	}

	async createCredential({
		recipient,
		body,
		type,
		domain
	}: {
		recipient: string;
		body: Record<string, any>;
		type: string;
		domain: string;
	}) {
		const credential = await this.did.credentials.create({
			id: `http://${domain}/${nanoid()}`,
			body,
			keyIndex: 0,
			recipientDid: recipient,
			type
		});
		return credential;
	}

	async createBadge({
		recipient,
		body,
		type,
		domain,
		image,
		issuer
	}: {
		recipient: string;
		body: Record<string, any>;
		type: string;
		domain: string;
		image: string;
		issuer: string;
	}) {
		const { name, description, ...rest } = body;
		const badge = await this.did.credentials.createBadge({
			recipientDid: recipient,
			body,
			type,
			keyIndex: 0,
			id: `http://${domain}/${nanoid()}`,
			description: description,
			badgeName: name,
			issuerName: issuer,
			criteria: "",
			image
		});
		return badge;
	}
}
