import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { METRICS_PORT, PORT } from "@/config";
import { Logger, initRestMetrics, initMetricsServer } from "@/utils";
import { db } from "@/models";
import { router } from "@/routers";
import { ExpressErrorHandler, corsConfig, AppInterceptor } from "@/middleware";
import { userDeserializer } from "./middleware/auth/auth.middleware";
import { initWebSocketManager } from "./services/ws";
import http from "http";
import { IdentityService } from "./services/identity.service";
import { ServiceFactory } from "./services/servicefactory";

const app = express();

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(userDeserializer);
app.use(initRestMetrics);

// app.use(AppInterceptor);
app.use("/", router);

app.use(ExpressErrorHandler);

const server = http.createServer(app);
export const wsServer = initWebSocketManager(server);

server.listen(PORT, async () => {
	await db.authenticate();
	/**
	 * Do not for fuck's sake set force to true, EVER,
	 * this is the `$ sudo rm -rf /*` equivalent to SQL
	 */
	await db.sync({ force: false, alter: true });
	const identityService = await IdentityService.build();
	ServiceFactory.register("identity", () => identityService);
	initMetricsServer(METRICS_PORT as string);
	Logger.info(`📝: Serving docs on http://localhost:${PORT}/api/docs`);
	Logger.info(`🚀: Server started on http://localhost:${PORT}`);
	Logger.info("🤠: Database connection instantiated");
});
