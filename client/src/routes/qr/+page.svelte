<script lang="ts">
	import { Qr } from "$lib/components";
	import { apiClient } from "$lib/utils/axios.utils";
	import { onMount } from "svelte";

	let siopv2: string;
	let oid4vci: string;
</script>

{#if siopv2 && oid4vci}
	<h1>Open ID 4 VCI</h1>
	<Qr data="{oid4vci}" />
	<br />
	<h1>Self Issued OP v2</h1>
	<Qr data="{siopv2}" />
{/if}
