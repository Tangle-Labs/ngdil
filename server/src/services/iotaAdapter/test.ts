import { GenericStore, IdentityManager, encryptWithAES } from "@tanglelabs/identity-manager";
import { IotaAccount, IotaAdapter } from "./iota-adapter";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

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

(async () => {
	const manager = await IdentityManager.build({
		adapter: IotaAdapter,
		storage: constructFileStore({
			path: path.resolve(__dirname, "./tests/file"),
			password: "asdf"
		})
	});

	const did = await manager.getDid({
		alias: "1_)123544",
		store: constructFileStore({
			path: path.resolve(__dirname, `./tests/booyaaaa`),
			password: "asdf"
		})
	});

	console.log(did);

	const credential = await did.credentials.create({
		id: "http://cred.com/wa_driving_license",
		body: {
			name: "Joe Schmoe",
			"date of birth": "24-12-2002",
			SSN: 42069,
			"Maritial Status": "Single",
			"Volunteered At": "Cape Canevral"
		},
		keyIndex: 0,
		recipientDid: "did:iota:Efey9yaBCgvLmWJ8HhRA9ufbSCaty8LJyC1f7eXXpVC",
		type: "Volunteering Badge"
	});
	console.log(credential);

	did.credentials.store.create({ name: "asdf" });

	console.log(did.getDid());
})();
