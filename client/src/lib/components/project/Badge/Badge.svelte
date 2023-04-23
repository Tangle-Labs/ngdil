<script lang="ts">
	import Hexagon from "./kinds/hexagon.svelte";
	import RoundedHexagon from "./kinds/RoundedHexagon.svelte";
	import Crest from "./kinds/crest.svelte";
	import Circle from "./kinds/circle.svelte";

	export let fill = "#CACBD6";
	export let variant: "hexagon" | "rounded-hexagon" | "circle" | "crest";
</script>

{#if variant === "hexagon"}
	<Hexagon fill="{fill}" />
{:else if variant === "rounded-hexagon"}
	<RoundedHexagon fill="{fill}" />
{:else if variant === "circle"}
	<Circle fill="{fill}" />
{:else}
	<Crest fill="{fill}" />
{/if}
