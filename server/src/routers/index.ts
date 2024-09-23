import { swaggerSpecification } from "@/utils";
import { Router, Request } from "express";
import swaggerUi from "swagger-ui-express";
import {
	auth,
	batchCredentialEndpoint,
	credentialEndpoint,
	singleOffer,
	sendMetadata,
	siopRequest,
	startingOffer,
	tokeEndpoint,
	vpRequest,
	getCredOffer,
	getSiopRequest,
	sendSpecificMetadata,
	sendOauthMetadata,
	sendSpecificOauthMetadata,
	getSessionIdController
} from "@/controllers/openid";
import path from "path";
import { fileURLToPath } from "url";
import { sse, ISseResponse } from "@toverux/expresse";
import { emitter } from "@/utils/sse";

const router = Router();

router.route("/.well-known/openid-credential-issuer").get(sendMetadata);
router.route("/.well-known/oauth-authorization-server").get(sendOauthMetadata);
router.route("/:issuer/.well-known/openid-credential-issuer").get(sendSpecificMetadata);
router.route("/:issuer/.well-known/oauth-authorization-server").get(sendSpecificOauthMetadata);
router.route("/api/session").get(getSessionIdController);
router.route("/api/credential").post(credentialEndpoint);
router.route("/api/credentials").post(batchCredentialEndpoint);
router.route("/api/oid4vp").post(vpRequest);
router.route("/token").post(tokeEndpoint);
router.route("/api/credential-offer").post(singleOffer);
router.route("/api/starting-offer").post(startingOffer);
router.route("/api/offers/creds/:id").get(getCredOffer);
router.route("/api/offers/siop/:id").get(getSiopRequest);
router.route("/siop").post(siopRequest);
router.route("/auth").post(auth);
router.get("/", (req, res) => {
	res.status(204).send();
});
const __filename = fileURLToPath(import.meta.url);

router.get("/events/:sessionId", sse(), (req: Request, res: ISseResponse) => {
	emitter.on("oid-event", (event) => {
		console.log(req.params.sessionId, event.state);
		if (req.params.sessionId === event.state) {
			console.log(req.params.sessionId, event.state);
			console.log("sent event");
			res.sse.data(event);
		}
	});
});

const __dirname = path.dirname(__filename);
router.get("/downloads/vira", (req, res) => {
	const file = path.resolve(__dirname, "../vira-demo-app.apk");
	res.set("Content-Type", "application/vnd.android.package-archive");
	res.download(file, (err) => {
		if (err) res.sendStatus(404);
		res.end();
	});
});

export { router };
