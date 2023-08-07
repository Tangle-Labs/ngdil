import { SessionModel } from "@/models/session.model";
import { UserModel } from "@/models/user.model";
import { RelyingParty } from "@tanglelabs/oid4vc";

declare global {
	namespace Express {
		interface User extends UserModel {}
		interface Session extends SessionModel {}

		interface Request {
			user: User;
			session: Session;
			rp: RelyingParty;
		}
	}
}
