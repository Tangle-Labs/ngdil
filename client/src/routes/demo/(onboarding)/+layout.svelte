<style lang="scss">
	.background {
		min-height: 100vh;
		width: 100%;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		padding: 10vh 22.5vw;

		@media screen and (max-width: 1200px) {
			padding: 15vh 15vw;
		}

		@media screen and (max-width: 900px) {
			padding: 15vh 5vw;
		}

		& > .container {
			display: flex;
			height: 100%;
			flex-wrap: wrap;
			justify-content: center;
			align-items: stretch;
			align-content: space-between;

			& > .slot {
				min-height: calc(70vh - 160px);
				padding-bottom: 20px;
			}

			& > .bottom {
				width: 80%;
				display: flex;
				justify-content: end;
				position: relative;

				& > .back {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 0;
				}

				.progress {
					width: calc(100% - 200px);
					justify-content: center;
					display: flex;

					& > .bar {
						width: 50%;

						@media screen and (max-width: 900px) {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>

<script>
	import { ProgressBar, Typography } from "$lib/components";
	import LangSwitchBtn from "$lib/components/ui/LanguageSwitchBtn/LangSwitchBtn.svelte";
	import { completedJourneys } from "$lib/stores/flows.store";
	import { currStep } from "$lib/stores/onboarding.store";
	import { apiClient } from "$lib/utils/axios.utils";
	import { _ } from "svelte-i18n";

	apiClient.get("/");
</script>

<LangSwitchBtn />
<div class="background">
	<div class="container">
		<img src="/imgs/ngdil.svg" class="logo" alt="" />
		<div class="slot">
			<slot />
		</div>
		{#if !(window.location.pathname === "/demo/choose-journey" && $completedJourneys.length > 0)}
			<div class="bottom">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="back"
					on:click="{() => {
						history.back();
					}}">
					<img src="/imgs/back.svg" alt="" class="icon" />
					<Typography variant="button" color="--black-300">{$_("components.back")}</Typography>
				</div>
				<div class="progress">
					<ProgressBar nodes="{5}" current="{$currStep}" />
				</div>
			</div>
		{/if}
	</div>
</div>
