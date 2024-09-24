export function highlight(str: string): string {
	const placeholderRegex = /\[(.*?)\]/g;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return str.replace(placeholderRegex, (_, match) => {
		return `<span class="highlight-swoosh">
		<img src="/imgs/swoosh.svg" class="swoosh" alt="" />
            ${match}
        </span>`;
	});
}
