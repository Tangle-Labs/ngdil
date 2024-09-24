import { FILTER_KEYS } from "@/config";
import { sanitizeObject } from "@/utils";
import { responseHandler } from "express-intercept";

function isValidJSON(jsonString: string): boolean {
	try {
		JSON.parse(jsonString);
		return true;
	} catch (error) {
		return false;
	}
}

export const AppInterceptor = responseHandler()
	.if((res) => {
		return !["video/mp4"].includes(res.getHeaders()["content-type"] as string);
	})
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ingore
	.replaceBuffer((body, req) => {
		if (!isValidJSON(body.toString())) return body;

		const sanitizedObject = sanitizeObject(
			JSON.parse(body.toString()),
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			FILTER_KEYS.split(",").map((e) => e.trim())
		);

		return Buffer.from(JSON.stringify(sanitizedObject));
	});
