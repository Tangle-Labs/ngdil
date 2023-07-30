<style>
	.qr {
		padding: 10px 0;
	}
</style>

<script lang="ts">
	import { qrcode } from "svelte-qrcode-action";
	import { onMount } from "svelte";
	import type { Options } from "qr-code-styling";

	export let data: string;
	export let logo: string = "/imgs/tl-logo.png";
	export let size = 220;

	let options: Options = {
		data,
		type: "svg",
		height: size,
		width: size,
		dotsOptions: {
			color: "#3d3d3d",
			type: "classy-rounded"
		}
	};
	onMount(() => {
		setTimeout(() => {
			// @ts-ignore
		}, 2_000);
	});
</script>

<div class="qr">
	<div use:qrcode="{options}"></div>
</div>
