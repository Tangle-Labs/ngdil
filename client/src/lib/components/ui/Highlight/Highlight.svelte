<style lang="scss">
	.highlight {
		position: relative;

		.swoosh {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 60px;
			z-index: -1;
		}
	}
</style>

<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<span class="highlight">
	<slot />
	{#if animate}
		<img in:fly="{{ duration: 1000, x: 10 }}" src="/imgs/swoosh.svg" class="swoosh" alt="" />
	{/if}
</span>
