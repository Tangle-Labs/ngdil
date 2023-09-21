<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { wallets } from "$lib/config/config";
	import { onMount } from "svelte";

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		}
	};
	onMount(() => {
		if (browser) {
			const wallet = wallets.find((w) => w.name === $page.params.slug);
			if (!wallet) return goto("/demo/download-wallet");
			if (isMobile.iOS()) window.location.href = wallet.downloads.ios;
			if (isMobile.Android()) window.location.href = wallet.downloads.android;
		}
	});
</script>
