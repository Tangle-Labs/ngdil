export const sanitizeObject = (obj: object | Array<object>, filterKeys: string[]) => {
	const result = Array.isArray(obj) ? [] : {};

	for (const key of Object.keys(obj)) {
		if (!filterKeys.includes(key)) {
			// @ts-ignore
			if (typeof obj[key] != "object") {
				// @ts-ignore
				result[key] = obj[key];
			} else {
				// @ts-ignore
				const buff = sanitizeObject(obj[key], filterKeys);

				// @ts-ignore
				if (Object.keys(buff).length > 0) result[key] = buff;
			}
		}
	}
	return result;
};
