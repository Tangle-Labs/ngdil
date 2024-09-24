<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		& > * {
			padding: 20px 0;
			text-align: center;
		}

		& > .button {
			padding-top: 60px;
			width: 100%;
		}

		& > .heading,
		& > .desc {
			width: 40vw;
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Button } from "$lib/components";
	import Highlight from "$lib/components/ui/Highlight/Highlight.svelte";
	import { currStep } from "$lib/stores/onboarding.store";
	import { highlight } from "$lib/utils/highlight";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	function handleContinue() {
		currStep.set(1);
		goto("/demo/download-wallet");
	}

	onMount(() => {
		currStep.set(0);
	});
</script>

<div class="container">
	<div class="heading">
		<Typography variant="heading">
			<!-- Welcome to the <Highlight>NGDIL interactive demo</Highlight> for self-sovereign identity in learning. -->
			{@html highlight($_("onboarding.welcome_to_ngdil"))}
		</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			{$_("onboarding.intro")}
		</Typography>
	</div>

	<div class="button">
		<Button
			variant="secondary"
			label="{$_('onboarding.start_journey')}"
			onClick="{handleContinue}"
		/>
	</div>
</div>
