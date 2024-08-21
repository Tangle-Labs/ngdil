<script lang="ts">
	import { Qr } from "$lib/components";
	import { _ } from "svelte-i18n";

	let siopv2: string;
	let oid4vci: string;
</script>

{#if siopv2 && oid4vci}
	<h1>{$_("qr.open_id_4_vci")}</h1>
	<Qr data="{oid4vci}" />
	<br />
	<h1>{$_("qr.self_issued_op_v2")}</h1>
	<Qr data="{siopv2}" />
{/if}
