export const corsConfig = {
	origin: function (origin: any, callback: any) {
		callback(null, true);
	},
	credentials: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "token", "Authorization"]
};
