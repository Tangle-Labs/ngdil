<style lang="scss">
	.lang-switch {
		margin: 30px 30px 0 0;
		display: flex;
		justify-content: end;
		align-items: center;
		align-content: center;
		gap: 7px;

		& > .lang-select {
			display: flex;
			align-items: center;

			select {
				border: none;
				width: min-content;
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
		<select class="translator" bind:value="{$locale}">
			<option value="" selected disabled>
				<Typography variant="button">Select Language</Typography>
			</option>
			{#each $locales as locale}
				<option value="{locale}">{langsMap[locale]}</option>
			{/each}
		</select>
	</div>
</div>
