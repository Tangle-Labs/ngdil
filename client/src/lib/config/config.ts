import { PUBLIC_CLIENT_URI } from "$env/static/public";

export const BASE_URL = `http://127.0.0.1:4269/api/`;

export const wallets = [
	{
		name: "Vira",
		image: "/imgs/vira-side.png",
		downloads: {
			android: `${PUBLIC_CLIENT_URI}/downloads/vira-demo-app.apk`,
			ios: "https://testflight.apple.com/join/QTm6DhIt"
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
