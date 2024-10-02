import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { a as PUBLIC_CLIENT_URI } from './public-4gV5o9PL.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { w as wallets } from './config-DTlk9cBk.js';
import { c as currStep } from './onboarding.store-gJCzGVTB.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css$1 = {
  code: ".qr.svelte-1dafya1{padding:10px 0}",
  map: '{"version":3,"file":"Qr.svelte","sources":["Qr.svelte"],"sourcesContent":["<style>\\n\\t.qr {\\n\\t\\tpadding: 10px 0;\\n\\t}\\n</style>\\n\\n<script lang=\\"ts\\">import { qrcode } from \\"svelte-qrcode-action\\";\\nexport let data;\\nexport let size = 220;\\nexport let bgColor = \\"#ffffff\\";\\nexport let fgColor = \\"#3d3d3d\\";\\nlet options = {\\n    data,\\n    width: size,\\n    height: size,\\n    margin: 0,\\n    type: \\"svg\\",\\n    qrOptions: {\\n        errorCorrectionLevel: \\"M\\"\\n    },\\n    dotsOptions: {\\n        color: fgColor,\\n        type: \\"classy-rounded\\"\\n    },\\n    cornersDotOptions: {\\n        color: fgColor\\n    },\\n    cornersSquareOptions: {\\n        color: fgColor\\n    },\\n    backgroundOptions: {\\n        color: bgColor\\n    }\\n};\\n<\/script>\\n\\n<div class=\\"qr\\">\\n\\t<div use:qrcode=\\"{options}\\"></div>\\n</div>\\n"],"names":[],"mappings":"AACC,kBAAI,CACH,OAAO,CAAE,IAAI,CAAC,CACf"}'
};
const Qr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { size = 220 } = $$props;
  let { bgColor = "#ffffff" } = $$props;
  let { fgColor = "#3d3d3d" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.fgColor === void 0 && $$bindings.fgColor && fgColor !== void 0) $$bindings.fgColor(fgColor);
  $$result.css.add(css$1);
  return `<div class="qr svelte-1dafya1"><div></div></div>`;
});
const css = {
  code: ".container.svelte-1mzbji4.svelte-1mzbji4.svelte-1mzbji4{display:flex;flex-wrap:wrap;text-align:center;justify-content:center}.container.svelte-1mzbji4>.svelte-1mzbji4.svelte-1mzbji4{padding:20px 0;width:100%}.container.svelte-1mzbji4>.cards.svelte-1mzbji4.svelte-1mzbji4{display:flex;width:40vw;justify-content:space-between}.container.svelte-1mzbji4>.cards.svelte-1mzbji4>.card.svelte-1mzbji4{width:48%}.container.svelte-1mzbji4>.cards>.card .card-content.svelte-1mzbji4.svelte-1mzbji4{padding-bottom:15px}.container.svelte-1mzbji4>.cards>.card .card-content img.svelte-1mzbji4.svelte-1mzbji4{height:60px}.container.svelte-1mzbji4>.cards>.card .card-content .info.svelte-1mzbji4.svelte-1mzbji4{padding:10px}.container.svelte-1mzbji4 .subtitle.svelte-1mzbji4.svelte-1mzbji4{padding-bottom:10px}.container.svelte-1mzbji4 .heading.svelte-1mzbji4.svelte-1mzbji4,.container.svelte-1mzbji4 .desc.svelte-1mzbji4.svelte-1mzbji4{width:40vw}.modal.svelte-1mzbji4.svelte-1mzbji4.svelte-1mzbji4{display:flex}.modal.svelte-1mzbji4 .content.svelte-1mzbji4.svelte-1mzbji4{padding:20px;display:flex;flex-wrap:wrap;width:30vw;align-items:center;align-content:center;justify-content:center;text-align:center}.modal.svelte-1mzbji4 .content .title.svelte-1mzbji4.svelte-1mzbji4{width:100%;padding:10px 0}.modal.svelte-1mzbji4 .content .subtitle.svelte-1mzbji4.svelte-1mzbji4{padding-top:20px;width:100%}.modal.svelte-1mzbji4 .side.svelte-1mzbji4.svelte-1mzbji4{height:60vh;transform:translateX(15px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  text-align: center;\\n  justify-content: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container > .cards {\\n  display: flex;\\n  width: 40vw;\\n  justify-content: space-between;\\n}\\n.container > .cards > .card {\\n  width: 48%;\\n}\\n.container > .cards > .card .card-content {\\n  padding-bottom: 15px;\\n}\\n.container > .cards > .card .card-content img {\\n  height: 60px;\\n}\\n.container > .cards > .card .card-content .info {\\n  padding: 10px;\\n}\\n.container .subtitle {\\n  padding-bottom: 10px;\\n}\\n.container .heading,\\n.container .desc {\\n  width: 40vw;\\n}\\n\\n.modal {\\n  display: flex;\\n}\\n.modal .content {\\n  padding: 20px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 30vw;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal .content .qr {\\n  height: 200px;\\n  margin-bottom: 20px;\\n}\\n.modal .content .title,\\n.modal .content .caption {\\n  width: 100%;\\n  padding: 10px 0;\\n}\\n.modal .content .icons {\\n  width: 100%;\\n  padding: 20px 0;\\n}\\n.modal .content .icons .icon {\\n  height: 50px;\\n}\\n.modal .content .subtitle {\\n  padding-top: 20px;\\n  width: 100%;\\n}\\n.modal .side {\\n  height: 60vh;\\n  transform: translateX(15px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport { Typography, Card, Button, Modal } from \\"$lib/components\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { wallets } from \\"$lib/config/config\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet modalVisible = false;\\nlet selectedWallet;\\nfunction handleContinue() {\\n    currStep.set(2);\\n    goto(\\"/demo/choose-journey\\");\\n}\\nonMount(() => {\\n    currStep.set(1);\\n});\\n<\/script>\\n\\n<Modal bind:isOpen=\\"{modalVisible}\\" withBorder=\\"{true}\\" borderRadius=\\"{8}\\">\\n\\t<div class=\\"modal\\">\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<Qr data=\\"{\`\${PUBLIC_CLIENT_URI}/demo/wallets/\${wallets[selectedWallet].name}\`}\\" />\\n\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\">\\n\\t\\t\\t\\t\\t{$_(\\"onboarding.download_wallet.scan_qr_desc\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { walletName: wallets[selectedWallet].name }\\n\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<!-- <div class=\\"icons\\">\\n\\t\\t\\t\\t<img src=\\"/imgs/apple.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t<img src=\\"/imgs/linux.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t<img src=\\"/imgs/windows.png\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t</div> -->\\n\\t\\t\\t<Button\\n\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<div class=\\"subtitle\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t{$_(\\"onboarding.download_wallet.click_to_continue\\")}\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<img src=\\"{wallets[selectedWallet].image}\\" alt=\\"\\" class=\\"side\\" />\\n\\t</div>\\n</Modal>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"onboarding.download_wallet.must_have_wallet\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"body\\">\\n\\t\\t\\t{$_(\\"onboarding.download_wallet.select_application\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card tl-wallet\\">\\n\\t\\t\\t<Card borderRadius=\\"{8}\\" withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/vira.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t<div class=\\"wallet-name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"onboarding.download_wallet.vira_id_wallet\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"onboarding.download_wallet.tangle_labs\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tselectedWallet = 0;\\n\\t\\t\\t\\t\\t\\t\\tmodalVisible = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.download')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card impierce-wallet\\">\\n\\t\\t\\t<Card borderRadius=\\"{8}\\" withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/unime-logo.jpg\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t<div class=\\"wallet-name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">{$_(\\"onboarding.download_wallet.unime\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"onboarding.download_wallet.impierce\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tselectedWallet = 1;\\n\\t\\t\\t\\t\\t\\t\\tmodalVisible = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.download')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"continue\\">\\n\\t\\t<div class=\\"subtitle\\">\\n\\t\\t\\t<Typography>{$_(\\"onboarding.download_wallet.already_downloaded\\")}</Typography>\\n\\t\\t</div>\\n\\t\\t<Button variant=\\"white\\" label=\\"{$_('components.continue')}\\" onClick=\\"{handleContinue}\\" />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MACnB,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAG,oCAAO,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aACnB,CACA,yBAAU,CAAG,qBAAM,CAAG,oBAAM,CAC1B,KAAK,CAAE,GACT,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,2CAAc,CACxC,cAAc,CAAE,IAClB,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,iCAAI,CAC5C,MAAM,CAAE,IACV,CACA,yBAAU,CAAG,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC9C,OAAO,CAAE,IACX,CACA,yBAAU,CAAC,uCAAU,CACnB,cAAc,CAAE,IAClB,CACA,yBAAU,CAAC,sCAAQ,CACnB,yBAAU,CAAC,mCAAM,CACf,KAAK,CAAE,IACT,CAEA,mDAAO,CACL,OAAO,CAAE,IACX,CACA,qBAAM,CAAC,sCAAS,CACd,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CAKA,qBAAM,CAAC,QAAQ,CAAC,oCACS,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CAQA,qBAAM,CAAC,QAAQ,CAAC,uCAAU,CACxB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACT,CACA,qBAAM,CAAC,mCAAM,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,WAAW,IAAI,CAC5B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let modalVisible = false;
  let selectedWallet;
  function handleContinue() {
    currStep.set(2);
    goto();
  }
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
              return `${escape($_("onboarding.download_wallet.scan_qr_desc", {
                values: { walletName: wallets[selectedWallet].name }
              }))}`;
            }
          })}</div>  ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "secondary",
              onClick: () => goto(),
              label: $_("components.continue")
            },
            {},
            {}
          )} <div class="subtitle svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("onboarding.download_wallet.click_to_continue"))}`;
            }
          })}</div></div> <img${add_attribute("src", wallets[selectedWallet].image, 0)} alt="" class="side svelte-1mzbji4"></div>`;
        }
      }
    )} <div class="container svelte-1mzbji4"><div class="heading svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("onboarding.download_wallet.must_have_wallet"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="desc svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "body" }, {}, {
      default: () => {
        return `${escape($_("onboarding.download_wallet.select_application"))}`;
      }
    })}</div> <div class="cards svelte-1mzbji4"><div class="card tl-wallet svelte-1mzbji4">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="card-content svelte-1mzbji4"><img src="/imgs/vira.png" alt="" class="svelte-1mzbji4"> <div class="wallet-name">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `${escape($_("onboarding.download_wallet.vira_id_wallet"))}`;
          }
        })}</div> <div class="info svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("onboarding.download_wallet.tangle_labs"))}`;
          }
        })}</div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedWallet = 0;
              modalVisible = true;
            },
            label: $_("components.download")
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> <div class="card impierce-wallet svelte-1mzbji4">${validate_component(Card, "Card").$$render($$result, { borderRadius: 8, withBorder: true }, {}, {
      default: () => {
        return `<div class="card-content svelte-1mzbji4"><img src="/imgs/unime-logo.jpg" alt="" class="svelte-1mzbji4"> <div class="wallet-name">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `${escape($_("onboarding.download_wallet.unime"))}`;
          }
        })}</div> <div class="info svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("onboarding.download_wallet.impierce"))}`;
          }
        })}</div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedWallet = 1;
              modalVisible = true;
            },
            label: $_("components.download")
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div> <div class="continue svelte-1mzbji4"><div class="subtitle svelte-1mzbji4">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("onboarding.download_wallet.already_downloaded"))}`;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "white",
        label: $_("components.continue"),
        onClick: handleContinue
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DkwLZgjH.js.map
