import { PUBLIC_BASE_URI, PUBLIC_CLIENT_URI } from "$env/static/public";

export const BASE_URL = `http://127.0.0.1:4269/api/`;

export const wallets = [
	{
		name: "Vira",
		image: "/imgs/vira-side.png",
		downloads: {
			android: `https://play.google.com/store/apps/details?id=io.tanglelabs.vira&pli=1`,
			ios: "https://apps.apple.com/in/app/vira-wallet/id6466040524"
		}
	},
	{
		name: "UniMe",
		image: "/imgs/unime-side.png",
		downloads: {
			android: "https://play.google.com/store/apps/details?id=com.impierce.identity_wallet",
			ios: "https://testflight.apple.com/join/cNfBowKB"
		}
	}
];
