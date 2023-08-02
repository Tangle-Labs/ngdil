import { SESSION_SECRET } from "@/config";
import jwt from "jsonwebtoken";

export const createJsonWebToken = (
	payload: Record<string, unknown>,
	expiresIn: string | number = "1h"
) => {
	return jwt.sign(payload, SESSION_SECRET as string, { expiresIn });
};

export const validateJsonWebToken = (token: string) => {
	try {
		const payload = jwt.verify(token, SESSION_SECRET as string);
		return { payload, expired: false };
	} catch (error: any) {
		return { payload: null, expired: error.message.includes("token expired") };
	}
};
