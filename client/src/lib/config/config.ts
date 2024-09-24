import { _ } from "svelte-i18n";
import { get } from "svelte/store";

const i18n = get(_);

export const wallets = [
	{
		name: i18n("onboarding.download_wallet.vira"),
		image: "/imgs/vira-side.png",
		downloads: {
			android: `https://play.google.com/store/apps/details?id=io.tanglelabs.vira&pli=1`,
			ios: "https://apps.apple.com/in/app/vira-wallet/id6466040524"
		}
	},
	{
		name: i18n("onboarding.download_wallet.unime"),
		image: "/imgs/unime-side.png",
		downloads: {
			android: "https://play.google.com/store/apps/details?id=com.impierce.identity_wallet",
			ios: "https://testflight.apple.com/join/cNfBowKB"
		}
	}
];
