<style lang="scss">
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		width: 100vw;
		height: 100vh;
		z-index: 5;
		background: rgba($color: rgb(93, 102, 107), $alpha: 0.3);
		backdrop-filter: blur(5px);
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		background: var(--white-300);
		width: max-content;
		max-width: 90vw;
		.modal-header {
			padding-bottom: 10px;
			border-bottom: 1px solid var(--border);
		}
	}

	@media only screen and (max-width: 700px) {
		.modal {
			min-width: 80vw;
		}
	}
</style>

<script lang="ts">
	import { Card } from "../";
	import { fade, fly } from "svelte/transition";

	export let isOpen = false;
	export let withBorder = false;
	export let withoutPadding = false;
	export let borderRadius = 0;
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="backdrop" on:click="{() => (isOpen = false)}" transition:fade></div>
	<div
		class="modal"
		transition:fly="{{ y: 50, duration: 400 }}"
		style:border-radius="{`${borderRadius}px`}">
		<Card withBorder="{withBorder}" withoutPadding="{withoutPadding}" borderRadius="{borderRadius}">
			<slot />
		</Card>
	</div>
{/if}
