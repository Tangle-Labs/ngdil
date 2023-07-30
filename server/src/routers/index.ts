import { swaggerSpecification } from "@/utils";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import usersRouter from "./users.routers";
import {
	auth,
	batchCredentialEndpoint,
	credentialEndpoint,
	offer,
	sendMetadata,
	siopRequest,
	startingOffer,
	tokeEndpoint,
	vpRequest
} from "@/controllers/openid";

const router = Router();

router.use("/users", usersRouter);
router.route("/.well-known/openid-credential-issuer").get(sendMetadata);
router.route("/api/credential").post(credentialEndpoint);
router.route("/api/credentials").post(batchCredentialEndpoint);
router.route("/api/oid4vp").post(vpRequest);
router.route("/token").post(tokeEndpoint);
router.route("/offer").get(offer);
router.route("/api/starting-offer").post(startingOffer);
router.route("/siop").get(siopRequest);
router.route("/auth").post(auth);

export { router };
