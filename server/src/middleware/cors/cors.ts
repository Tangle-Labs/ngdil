import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
	origin: function (origin, callback) {
		callback(null, true);
	},
	// origin: "http://localhost:5169",

	// [
	// 	"http://ngdil-demo.tanglelabs.io",
	// 	"https://ngdil-demo.tanglelabs.io",
	// 	"http://localhost"
	// ],
	credentials: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: [
		"Origin",
		"X-Requested-With",
		"Content-Type",
		"Accept",
		"token",
		"Authorization"
	],
	preflightContinue: true
};
