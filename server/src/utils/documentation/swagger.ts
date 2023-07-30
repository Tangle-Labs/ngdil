import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "app",
			version: "1.3.3"
		},
		components: {
			securitySchemas: {
				cookieAuth: {
					type: "apiKey",
					in: "cookie",
					name: "connect.sid"
				}
			}
		},
		security: [
			{
				cookieAuth: []
			}
		]
	},
	apis: ["./src/routers/*.ts", "./src/validators/*.ts"]
};

export const swaggerSpecification = swaggerJsdoc(swaggerOptions);
