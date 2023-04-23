<style lang="scss">
	.backdrop {
		position: absolute;
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
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		background: var(--background);
		border-radius: 5px;
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
	import { Card, Button } from "../";
	import { fade, fly } from "svelte/transition";

	export let isOpen = false;
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" on:click="{() => (isOpen = false)}" transition:fade></div>
	<div class="modal" transition:fly="{{ y: 50, duration: 400 }}">
		<Card>
			<div class="modal-header">
				<slot name="header" />
			</div>
			<slot />
		</Card>
	</div>
{/if}
