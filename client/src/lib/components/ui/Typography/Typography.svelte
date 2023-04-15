<style lang="scss">
	.main-font {
		font-family: var(--header-font);
	}

	.kw1c-font {
		font-family: var(--kw1c-font);
	}

	.typography {
		color: var(--black-900);
	}

	.heading {
		font-size: var(--header-text-size);
		font-weight: 500;
	}

	.card-header {
		font-size: var(--card-header-size);
	}

	.status {
		font-size: var(--status-text-size);
		color: var(--green-900);
		font-weight: 600;
	}

	.button {
		font-size: var(--button-text-size);
		font-weight: 500;
	}

	.list {
		font-size: var(--list-text-size);
		color: var(--black-700);
		font-weight: 500;
	}

	.body {
		font-size: var(--body-text-size);
		color: var(--black-700);
		font-weight: 300;
	}

	.sub-text {
		font-size: var(--sub-text-size);
		color: var(--black-500);
		font-weight: 300;
	}
</style>

<script lang="ts">
	import type { TypographyVariants } from "./Typography.types";
	export let variant: TypographyVariants = "body";
	export let fontVariant: "main" | "kw1c" = "main";
	export let color = "";
</script>

<span
	class="{`typography ${variant} ${fontVariant}-font`}"
	style="{color && `color: var(${color});`}"><slot /></span
>
