export const sanitizeObject = (obj: object | Array<object>, filterKeys: string[]) => {
	const result = Array.isArray(obj) ? [] : {};

	for (const key of Object.keys(obj)) {
		if (!filterKeys.includes(key)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (typeof obj[key] != "object") {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				result[key] = obj[key];
			} else {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const buff = sanitizeObject(obj[key], filterKeys);
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				if (Object.keys(buff).length > 0) result[key] = buff;
			}
		}
	}
	return result;
};
