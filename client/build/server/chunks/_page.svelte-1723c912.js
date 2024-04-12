import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { M as Modal } from './Modal-de587996.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { Q as Qr } from './Qr-fe109a8a.js';
import { c as currStep } from './onboarding.store-97913595.js';
import './exports-4ef2d035.js';
import 'axios';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

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
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  text-align: center;\\n  justify-content: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container > .cards {\\n  display: flex;\\n  width: 40vw;\\n  justify-content: space-between;\\n}\\n.container > .cards > .card {\\n  width: 48%;\\n}\\n.container > .cards > .card .card-content {\\n  padding-bottom: 15px;\\n}\\n.container > .cards > .card .card-content img {\\n  height: 60px;\\n}\\n.container > .cards > .card .card-content .info {\\n  padding: 10px;\\n}\\n.container .subtitle {\\n  padding-bottom: 10px;\\n}\\n.container .heading,\\n.container .desc {\\n  width: 40vw;\\n}\\n\\n.modal {\\n  display: flex;\\n}\\n.modal .content {\\n  padding: 20px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 30vw;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal .content .qr {\\n  height: 200px;\\n  margin-bottom: 20px;\\n}\\n.modal .content .title,\\n.modal .content .caption {\\n  width: 100%;\\n  padding: 10px 0;\\n}\\n.modal .content .icons {\\n  width: 100%;\\n  padding: 20px 0;\\n}\\n.modal .content .icons .icon {\\n  height: 50px;\\n}\\n.modal .content .subtitle {\\n  padding-top: 20px;\\n  width: 100%;\\n}\\n.modal .side {\\n  height: 60vh;\\n  transform: translateX(15px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { PUBLIC_BASE_URI, PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport { Typography, Card, Button, Modal } from \\"$lib/components\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { wallets } from \\"$lib/config/config\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nlet modalVisible = false;\\nfunction handleContinue() {\\n    currStep.set(2);\\n    goto(\\"/demo/choose-journey\\");\\n}\\nlet selectedWallet;\\nonMount(() => {\\n    currStep.set(1);\\n});\\n<\/script>\\n\\n<Modal bind:isOpen=\\"{modalVisible}\\" withBorder=\\"{true}\\" borderRadius=\\"{8}\\">\\n\\t<div class=\\"modal\\">\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<Qr data=\\"{`${PUBLIC_CLIENT_URI}/demo/wallets/${wallets[selectedWallet].name}`}\\" />\\n\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t>Scan the QR code to download the {wallets[selectedWallet].name} identity wallet</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<!-- <div class=\\"icons\\">\\n\\t\\t\\t\\t<img src=\\"/imgs/apple.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t<img src=\\"/imgs/linux.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t<img src=\\"/imgs/windows.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t</div> -->\\n\\t\\t\\t<Button variant=\\"secondary\\" onClick=\\"{() => goto(\'/demo/choose-journey\')}\\" label=\\"Continue\\" />\\n\\t\\t\\t<div class=\\"subtitle\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>Click to continue once you have downloaded your wallet</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<img src=\\"{wallets[selectedWallet].image}\\" alt=\\"\\" class=\\"side\\" />\\n\\t</div>\\n</Modal>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>To begin with <Highlight>self-sovereign identity</Highlight> you must first have an identity wallet\\n\\t\\t\\tapp.</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"body\\">\\n\\t\\t\\tSelect the application you wish to download by clicking the button and follow the onscreen\\n\\t\\t\\tinstallation instructions to get started.\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card tl-wallet\\">\\n\\t\\t\\t<Card borderRadius=\\"{8}\\" withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/vira.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"wallet-name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">Vira Identity Wallet</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">From Tangle Labs</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tselectedWallet = 0;\\n\\t\\t\\t\\t\\t\\t\\tmodalVisible = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"Download\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card impierce-wallet\\">\\n\\t\\t\\t<Card borderRadius=\\"{8}\\" withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/unime-logo.jpg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"wallet-name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">UniMe</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">From Impierce</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tselectedWallet = 1;\\n\\t\\t\\t\\t\\t\\t\\tmodalVisible = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"Download\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"continue\\">\\n\\t\\t<div class=\\"subtitle\\">\\n\\t\\t\\t<Typography>Already downloaded the wallet?</Typography>\\n\\t\\t</div>\\n\\t\\t<Button variant=\\"white\\" label=\\"continue\\" onClick=\\"{handleContinue}\\" />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MACnB,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAG,oCAAO,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aACnB,CACA,yBAAU,CAAG,qBAAM,CAAG,oBAAM,CAC1B,KAAK,CAAE,GACT,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,2CAAc,CACxC,cAAc,CAAE,IAClB,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,iCAAI,CAC5C,MAAM,CAAE,IACV,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC9C,OAAO,CAAE,IACX,CACA,yBAAU,CAAC,uCAAU,CACnB,cAAc,CAAE,IAClB,CACA,yBAAU,CAAC,sCAAQ,CACnB,yBAAU,CAAC,mCAAM,CACf,KAAK,CAAE,IACT,CAEA,mDAAO,CACL,OAAO,CAAE,IACX,CACA,qBAAM,CAAC,sCAAS,CACd,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CAKA,qBAAM,CAAC,QAAQ,CAAC,oCACS,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CAQA,qBAAM,CAAC,QAAQ,CAAC,uCAAU,CACxB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACT,CACA,qBAAM,CAAC,mCAAM,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,WAAW,IAAI,CAC5B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalVisible = false;
  function handleContinue() {
    currStep.set(2);
    goto();
  }
  let selectedWallet;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
          return `<div class="modal svelte-1mzbji4"><div class="content svelte-1mzbji4">${validate_component(Qr, "Qr").$$render(
            $$result,
            {
              data: `${PUBLIC_CLIENT_URI}/demo/wallets/${wallets[selectedWallet].name}`
            },
            {},
            {}
          )} <div class="title svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `Scan the QR code to download the ${escape(wallets[selectedWallet].name)} identity wallet`;
            }
          })}</div>  ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "secondary",
              onClick: () => goto(),
              label: "Continue"
            },
            {},
            {}
          )} <div class="subtitle svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click to continue once you have downloaded your wallet`;
            }
          })}</div></div> <img${add_attribute("src", wallets[selectedWallet].image, 0)} alt="" class="side svelte-1mzbji4"></div>`;
        }
      }
    )} <div class="container svelte-1mzbji4"><div class="heading svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `To begin with ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `self-sovereign identity`;
          }
        })} you must first have an identity wallet
			app.`;
      }
    })}</div> <div class="desc svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "body" }, {}, {
      default: () => {
        return `Select the application you wish to download by clicking the button and follow the onscreen
			installation instructions to get started.`;
      }
    })}</div> <div class="cards svelte-1mzbji4"><div class="card tl-wallet svelte-1mzbji4">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="card-content svelte-1mzbji4"><img src="/imgs/vira.png" class="svelte-1mzbji4"> <div class="wallet-name">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Vira Identity Wallet`;
          }
        })}</div> <div class="info svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `From Tangle Labs`;
          }
        })}</div> ${validate_component(Button, "Button").$$render(
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
    })}</div> <div class="card impierce-wallet svelte-1mzbji4">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="card-content svelte-1mzbji4"><img src="/imgs/unime-logo.jpg" class="svelte-1mzbji4"> <div class="wallet-name">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `UniMe`;
          }
        })}</div> <div class="info svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `From Impierce`;
          }
        })}</div> ${validate_component(Button, "Button").$$render(
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
    })}</div></div> <div class="continue svelte-1mzbji4"><div class="subtitle svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Already downloaded the wallet?`;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-1723c912.js.map
