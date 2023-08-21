<style>
	.qr {
		padding: 10px 0;
	}
</style>

<script lang="ts">
	import { qrcode } from "svelte-qrcode-action";
	import type { Options } from "qr-code-styling";

	export let data: string;
	export let logo: string = "/imgs/tl-logo.png";
	export let size = 220;
	export let bgColor = "#ffffff";
	export let fgColor = "#3d3d3d";

	let options: Options = {
		data,
		width: size,
		height: size,
		margin: 0,
		type: "svg",
		qrOptions: {
			errorCorrectionLevel: "M"
		},
		dotsOptions: {
			color: fgColor,
			type: "classy-rounded"
		},
		backgroundOptions: {
			color: bgColor
		}
	};
</script>

<div class="qr">
	<div use:qrcode="{options}"></div>
</div>
