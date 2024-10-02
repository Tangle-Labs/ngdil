import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { P as Phone } from './Phone-DVPz68sN.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { C as Card } from './Card-Cx9DTC_H.js';
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
  code: ".container.svelte-zomzda>.svelte-zomzda{padding:15px 0}.container.svelte-zomzda .card.svelte-zomzda{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:270px}.container.svelte-zomzda .card .card-content.svelte-zomzda{padding:10px;display:flex;justify-content:flex-start;flex-wrap:wrap;text-align:left}.container.svelte-zomzda .card .card-content .heading .crowns.svelte-zomzda{height:15px;width:unset;padding:0}.container.svelte-zomzda .card .card-content img.svelte-zomzda{padding:20px 0;width:200px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 270px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: flex-start;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content .heading .crowns {\\n  height: 15px;\\n  width: unset;\\n  padding: 0;\\n}\\n.container .card .card-content img {\\n  padding: 20px 0;\\n  width: 200px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Card, Phone } from \\"$lib/components\\";\\nimport { currNode, eventUri, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nlet animatePhone = false;\\nlet qr;\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"peterLogin\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/kw1c-white.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vp\\")\\n            goto(\\"/demo/journeys/peter/view-applications\\");\\n    });\\n}\\n$: watchQr(qr);\\nonMount(() => {\\n    nodeCount.set(5);\\n    currNode.set(0);\\n    loadQr();\\n});\\n<\/script>\\n\\n<Phone variant=\\"kw1cStaff\\" bind:animatePhone=\\"{animatePhone}\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.use_passwordless_login_to_access_kw1c_staff_portal\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.peter.scan_qr_and_accept_request_to_access_kw1c_portal\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"blue\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-crowns.png\\" alt=\\"\\" class=\\"crowns\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"heading-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.login_to_kw1c\\").toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\" size=\\"{220}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.scan_qr_to_access_kw1c_staff_portal\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,qBAAQ,CAC9C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,iBAAI,CACjC,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,KACT"}'
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
      { variant: "kw1cStaff", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container svelte-zomzda"><div class="heading svelte-zomzda">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.use_passwordless_login_to_access_kw1c_staff_portal"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-zomzda">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.peter.scan_qr_and_accept_request_to_access_kw1c_portal"))}`;
      }
    })}</div> <div class="dash svelte-zomzda">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="card svelte-zomzda">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="card-content svelte-zomzda"><div class="heading"><img src="/imgs/kw1c-crowns.png" alt="" class="crowns svelte-zomzda"> <div class="heading-text">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "card-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape($_("journeys.peter.login_to_kw1c").toUpperCase())}`;
                }
              }
            )}</div></div> ${``} <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
              default: () => {
                return `${escape($_("journeys.peter.scan_qr_to_access_kw1c_staff_portal"))}`;
              }
            })}</div></div>`;
          }
        })}</div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D51A2bKX.js.map
