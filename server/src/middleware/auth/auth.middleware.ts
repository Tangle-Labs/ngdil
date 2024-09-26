import { PUBLIC_BASE_URI } from "@/config";
import { SessionsService } from "@/services";
import { createJsonWebToken, validateJsonWebToken } from "@/utils";
import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const userDeserializer = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { refreshToken } = req.cookies;

		let newRefreshToken;
		if (!refreshToken) {
			const session = await SessionsService.create({ isValid: false });
			const token = createJsonWebToken({ sessionId: session.id }, "1y");

			newRefreshToken = token;

			const isSSLSecuredEnvironment = PUBLIC_BASE_URI?.startsWith("https");

			if (isSSLSecuredEnvironment) {
				res.cookie("refreshToken", token, {
					maxAge: 365 * 24 * 60 * 60 * 1000,
					httpOnly: true,
					sameSite: "none",
					secure: PUBLIC_BASE_URI?.startsWith("https")
				});
			} else {
				res.cookie("refreshToken", token, {
					maxAge: 365 * 24 * 60 * 60 * 1000,
					sameSite: "none",
					secure: false
				});
			}
		}

		const { payload: refresh } = refreshToken
			? validateJsonWebToken(refreshToken)
			: newRefreshToken
				? validateJsonWebToken(newRefreshToken)
				: { payload: null };
		if (!refresh) return next();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const session = await SessionsService.findOne({ id: refresh.sessionId });

		req.session = session;
		if (!session || !session.isValid) return next();

		return next();
	}
);
