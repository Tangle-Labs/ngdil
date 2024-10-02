import { $ as $format } from './runtime-Bjsr9Bul.js';
import { j as get_store_value } from './ssr-DGHpauN6.js';

const i18n = get_store_value($format);
const wallets = [
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

export { wallets as w };
//# sourceMappingURL=config-DTlk9cBk.js.map
