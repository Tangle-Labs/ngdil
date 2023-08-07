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
		}
	}
</style>

<script lang="ts">
	import { goto } from "$app/navigation";
	import { Typography, Button } from "$lib/components";
	import { currStep } from "$lib/stores/onboarding.store";
	import { onMount } from "svelte";

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
		<Typography variant="heading"
			>Welcome to the NGDIL interactive demo for self-sovereign identity in learning.</Typography>
	</div>
	<div class="desc">
		<Typography variant="button">
			Here we will explore the value SSI can bring to the individual participants within the
			education and learning space, from learners, to educators, and employers.
		</Typography>
	</div>

	<div class="button">
		<Button variant="secondary" label="start your journey" onClick="{handleContinue}" />
	</div>
</div>
