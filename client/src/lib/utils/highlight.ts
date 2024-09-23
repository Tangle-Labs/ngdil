import { get } from "svelte/store";
import { _ } from "svelte-i18n";

const i18n = get(_);

export function highlight(str: string): string {
	const placeholderRegex = /\[(.*?)\]/g;

	let index = 0;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return str.replace(placeholderRegex, (_, match) => {
		return `<span class="highlight-swoosh">
		<img src="/imgs/swoosh.svg" class="swoosh" alt="" />
            ${match}
        </span>`;
	});
}
