<script lang="ts">
	import Kw1cBlue from "./variants/Kw1cBlue.svelte";
	import Kw1cWhite from "./variants/Kw1cWhite.svelte";

	export let variant: "blue" | "white";
	export let title = "";
</script>

{#if variant === "blue"}
	<Kw1cBlue>
		<slot />
	</Kw1cBlue>
{:else}
	<Kw1cWhite title="{title}">
		<slot />
	</Kw1cWhite>
{/if}
