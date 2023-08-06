import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { connections } from "@/utils/sse";

export const sseStreamBySession = expressAsyncHandler(async (req: Request, res: Response) => {
	const sessionId = req.params.sessionId;
	if (req.session.id !== sessionId) throw new Error("incorrect session");

	res.setHeader("Content-Type", "text/event-stream");
	res.setHeader("Cache-Control", "no-cache");
	res.setHeader("Connection", "keep-alive");

	connections.set(sessionId, res);

	res.on("close", () => {
		connections.delete(sessionId);
	});
});

export const sseHandler = expressAsyncHandler(async (req: Request, res: Response) => {
	res.redirect(`/api/sse/${req.session.id}`);
});
