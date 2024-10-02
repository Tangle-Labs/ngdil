<style lang="scss">
	.main {
		position: fixed;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		// padding-bottom: 100px;

		.background {
			padding: 10vh 22.5vw;
			margin: auto;
			display: flex;
			height: 100%;

			& > .container {
				display: flex;
				height: 100%;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;

				& > .slot {
					padding-bottom: 20px;
				}

				& > .bottom {
					width: 50%;
					display: flex;
					gap: 20px;
					justify-items: center;
					justify-content: center;

					& > .back {
						width: max-content;
						display: block;
						align-self: center;
						justify-self: start;
					}

					& > .progress {
						width: 60%;
					}
				}
			}

			.lang-btn {
				display: flex;
				align-self: end;
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

<div class="main">
	<div class="background">
		<div class="container">
			<img src="/imgs/ngdil.svg" class="logo" alt="" />
			<div class="slot">
				<slot />
			</div>
			{#if !(window.location.pathname === "/demo/choose-journey" && $completedJourneys.length > 0)}
				<div class="bottom">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
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
</div>
