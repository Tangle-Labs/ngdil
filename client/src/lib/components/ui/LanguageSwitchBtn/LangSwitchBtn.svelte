<style lang="scss">
	.lang-switch {
		margin: 0 50px 50px 0;
		display: flex;
		justify-content: end;

		& > .lang-select {
			display: flex;
			align-items: center;

			img {
				background: var(--white-500);
				padding: 5px;
				border-top-left-radius: 7px;
				border-bottom-left-radius: 7px;
			}

			select {
				background: var(--white-300);
				border: none;
				padding: 5px;
				min-width: max-content;
				user-select: none;
				outline: none;
				width: 90px;
			}
		}
	}
</style>

<script>
	import { Typography } from "..";
	import { _ } from "svelte-i18n";
	import { locale, locales } from "svelte-i18n";

	const langsMap = {
		en: "English",
		nl: "Nederlands"
	};
</script>

<div class="lang-switch">
	<div class="lang-select">
		<img src="/imgs/lang.svg" alt="" />
		<select bind:value="{$locale}">
			<option value="" disabled>
				<Typography variant="button">Select Language</Typography>
			</option>
			{#each $locales as locale}
				<option value="{locale}">{langsMap[locale]}</option>
			{/each}
		</select>
	</div>
</div>
