import { CorsOptions } from "cors";

var whitelist = [
	"http://localhost:5169",
	"http://localhost",
	"https://ngdil-demo.tanglelabs.io",
	"http://ngdil-demo.tanglelabs.io"
];
export const corsConfig: CorsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
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
