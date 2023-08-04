import { swaggerSpecification } from "@/utils";
import { Router } from "express";
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
	getSiopRequest
} from "@/controllers/openid";

const router = Router();

router.route("/.well-known/openid-credential-issuer").get(sendMetadata);
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

export { router };
