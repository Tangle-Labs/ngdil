import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { P as Phone } from './Phone-DVPz68sN.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { g as eventUri } from './flows.store-Ch_DhNys.js';
import './axios.utils-CIq7LE2y.js';
import '@tanglelabs/open-id-qr';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".container.svelte-weonlw>.svelte-weonlw{padding:15px 0}.container.svelte-weonlw .card-container.svelte-weonlw{width:100%;display:flex;flex-direction:column;text-align:center;align-items:center;align-self:center}.container.svelte-weonlw .card-container .header.svelte-weonlw{padding-bottom:10px}.container.svelte-weonlw .card-container .login-card.svelte-weonlw{background:var(--future-tech-green);width:240px;padding:20px}.container.svelte-weonlw .card-container .login-card .heading.svelte-weonlw{padding:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  align-items: center;\\n  align-self: center;\\n}\\n.container .card-container .header {\\n  padding-bottom: 10px;\\n}\\n.container .card-container .login-card {\\n  background: var(--future-tech-green);\\n  width: 240px;\\n  padding: 20px;\\n}\\n.container .card-container .login-card img {\\n  width: 200px;\\n}\\n.container .card-container .login-card img:hover {\\n  cursor: pointer;\\n}\\n.container .card-container .login-card .heading {\\n  padding: 10px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Phone } from \\"$lib/components\\";\\nimport { currNode, eventUri, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nlet animatePhone = false;\\nlet qr;\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"imaniLogin\\",\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`,\\n            clientName: \\"Future Tech Co.\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vp\\")\\n            goto(\\"/demo/journeys/imani/applications\\");\\n    });\\n}\\n$: watchQr(qr);\\nonMount(() => {\\n    currNode.set(0);\\n    nodeCount.set(5);\\n    loadQr();\\n});\\n<\/script>\\n\\n<Phone variant=\\"futureTech\\" bind:animatePhone=\\"{animatePhone}\\" />\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.lets_login_to_future_tech_co_staff_dashboard_by_ssi\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.scan_qr_to_conn_to_future_tech_co_dashboard\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech withSidebar=\\"{false}\\">\\n\\t\\t\\t<div class=\\"card-container\\">\\n\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.staff_connect\\").toUpperCase()}</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"login-card\\">\\n\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\" size=\\"{240}\\"\\n\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" color=\\"--future-tech-green-300\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.scan_qr_to_login\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography color=\\"--white-300\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.scan_qr_to_login_to_future_tech_co\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,6BAAgB,CACzB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd,CACA,wBAAU,CAAC,eAAe,CAAC,qBAAQ,CACjC,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,eAAe,CAAC,yBAAY,CACrC,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IACX,CAOA,wBAAU,CAAC,eAAe,CAAC,WAAW,CAAC,sBAAS,CAC9C,OAAO,CAAE,IACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $$unsubscribe_eventUri;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => value);
  let animatePhone = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Phone, "Phone").$$render(
      $$result,
      { variant: "futureTech", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container svelte-weonlw"><div class="heading svelte-weonlw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.lets_login_to_future_tech_co_staff_dashboard_by_ssi"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-weonlw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.imani.scan_qr_to_conn_to_future_tech_co_dashboard"))}`;
      }
    })}</div> <div class="dash svelte-weonlw">${validate_component(FutureTech, "FutureTech").$$render($$result, { withSidebar: false }, {}, {
      default: () => {
        return `<div class="card-container svelte-weonlw"><div class="header svelte-weonlw">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c",
            color: "--future-tech-green"
          },
          {},
          {
            default: () => {
              return `${escape($_("journeys.imani.staff_connect").toUpperCase())}`;
            }
          }
        )}</div> <div class="login-card svelte-weonlw">${``} <div class="heading svelte-weonlw">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "list",
            color: "--future-tech-green-300"
          },
          {},
          {
            default: () => {
              return `${escape($_("journeys.imani.scan_qr_to_login"))}`;
            }
          }
        )}</div> <div class="p">${validate_component(Typography, "Typography").$$render($$result, { color: "--white-300" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.scan_qr_to_login_to_future_tech_co"))}`;
          }
        })}</div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-vCUgsHY7.js.map
