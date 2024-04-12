import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { B as Button } from './Button-925970aa.js';
import { C as Card } from './Card-42d79914.js';
import { M as Modal } from './Modal-268b07b6.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { Q as Qr } from './Qr-59f9ff74.js';
import { c as currStep } from './onboarding.store-7316f7a3.js';
import 'axios';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const wallets = [
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
const css = {
  code: ".container.svelte-1mzbji4.svelte-1mzbji4.svelte-1mzbji4{display:flex;flex-wrap:wrap;text-align:center;justify-content:center}.container.svelte-1mzbji4>.svelte-1mzbji4.svelte-1mzbji4{padding:20px 0;width:100%}.container.svelte-1mzbji4>.cards.svelte-1mzbji4.svelte-1mzbji4{display:flex;width:40vw;justify-content:space-between}.container.svelte-1mzbji4>.cards.svelte-1mzbji4>.card.svelte-1mzbji4{width:48%}.container.svelte-1mzbji4>.cards>.card .card-content.svelte-1mzbji4.svelte-1mzbji4{padding-bottom:15px}.container.svelte-1mzbji4>.cards>.card .card-content img.svelte-1mzbji4.svelte-1mzbji4{height:60px}.container.svelte-1mzbji4>.cards>.card .card-content .info.svelte-1mzbji4.svelte-1mzbji4{padding:10px}.container.svelte-1mzbji4 .subtitle.svelte-1mzbji4.svelte-1mzbji4{padding-bottom:10px}.container.svelte-1mzbji4 .heading.svelte-1mzbji4.svelte-1mzbji4,.container.svelte-1mzbji4 .desc.svelte-1mzbji4.svelte-1mzbji4{width:40vw}.modal.svelte-1mzbji4.svelte-1mzbji4.svelte-1mzbji4{display:flex}.modal.svelte-1mzbji4 .content.svelte-1mzbji4.svelte-1mzbji4{padding:20px;display:flex;flex-wrap:wrap;width:30vw;align-items:center;align-content:center;justify-content:center;text-align:center}.modal.svelte-1mzbji4 .content .title.svelte-1mzbji4.svelte-1mzbji4{width:100%;padding:10px 0}.modal.svelte-1mzbji4 .content .subtitle.svelte-1mzbji4.svelte-1mzbji4{padding-top:20px;width:100%}.modal.svelte-1mzbji4 .side.svelte-1mzbji4.svelte-1mzbji4{height:60vh;transform:translateX(15px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalVisible = false;
  function handleContinue() {
    currStep.set(2);
    goto("/demo/choose-journey");
  }
  let selectedWallet;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        withBorder: true,
        borderRadius: 8,
        isOpen: modalVisible
      },
      {
        isOpen: ($$value) => {
          modalVisible = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal svelte-1mzbji4"}"><div class="${"content svelte-1mzbji4"}">${validate_component(Qr, "Qr").$$render(
            $$result,
            {
              data: `${PUBLIC_CLIENT_URI}/demo/wallets/${wallets[selectedWallet].name}`
            },
            {},
            {}
          )}
			<div class="${"title svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `Scan the QR code to download the ${escape(wallets[selectedWallet].name)} identity wallet`;
            }
          })}</div>
			
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "secondary",
              onClick: () => goto("/demo/choose-journey"),
              label: "Continue"
            },
            {},
            {}
          )}
			<div class="${"subtitle svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click to continue once you have downloaded your wallet`;
            }
          })}</div></div>
		<img${add_attribute("src", wallets[selectedWallet].image, 0)} alt="${""}" class="${"side svelte-1mzbji4"}"></div>`;
        }
      }
    )}

<div class="${"container svelte-1mzbji4"}"><div class="${"heading svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `To begin with ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `self-sovereign identity`;
          }
        })} you must first have an identity wallet
			app.`;
      }
    })}</div>

	<div class="${"desc svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "body" }, {}, {
      default: () => {
        return `Select the application you wish to download by clicking the button and follow the onscreen
			installation instructions to get started.
		`;
      }
    })}</div>

	<div class="${"cards svelte-1mzbji4"}"><div class="${"card tl-wallet svelte-1mzbji4"}">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-1mzbji4"}"><img src="${"/imgs/vira.png"}" class="${"svelte-1mzbji4"}">
					<div class="${"wallet-name"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Vira Identity Wallet`;
          }
        })}</div>
					<div class="${"info svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `From Tangle Labs`;
          }
        })}</div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedWallet = 0;
              modalVisible = true;
            },
            label: "Download"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div>
		<div class="${"card impierce-wallet svelte-1mzbji4"}">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-1mzbji4"}"><img src="${"/imgs/unime-logo.jpg"}" class="${"svelte-1mzbji4"}">
					<div class="${"wallet-name"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `UniMe`;
          }
        })}</div>
					<div class="${"info svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `From Impierce`;
          }
        })}</div>

					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedWallet = 1;
              modalVisible = true;
            },
            label: "Download"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div>

	<div class="${"continue svelte-1mzbji4"}"><div class="${"subtitle svelte-1mzbji4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Already downloaded the wallet?`;
      }
    })}</div>
		${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "white",
        label: "continue",
        onClick: handleContinue
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-eda1c905.js.map
