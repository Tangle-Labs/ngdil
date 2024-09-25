<style lang="scss">
	.desktop-view {
		display: block;
		@media screen and (max-width: 1000px) {
			display: none;
		}
	}

	.mobile-view {
		display: none;
		@media screen and (max-width: 1000px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			.body {
				padding: 30px;
				padding-top: 40px;
				padding-bottom: 40px;
				text-align: center;
			}
		}
	}
</style>

<script>
	import LangSwitchBtn from "$lib/components/ui/LanguageSwitchBtn/LangSwitchBtn.svelte";
	import Typography from "$lib/components/ui/Typography/Typography.svelte";
	import { _ } from "svelte-i18n";
</script>

<LangSwitchBtn />

<div class="desktop-view">
	<slot />
</div>

<div class="mobile-view">
	<img class="logo" src="/imgs/ngdil.svg" alt="" />
	<div class="body">
		<Typography>{$_("components.small_screen")}</Typography>
	</div>
	<a href="https://ngdil.com">
		<Typography variant="button">{$_("components.go_back_to_ngdil")}</Typography></a>
</div>
