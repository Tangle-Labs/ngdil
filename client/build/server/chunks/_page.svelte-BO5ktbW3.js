import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import '@tanglelabs/open-id-qr';
import { g as goto } from './client-DpIAX_q0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-DBm3hKoN.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { P as Phone } from './Phone-DVPz68sN.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { a as PUBLIC_CLIENT_URI } from './public-4gV5o9PL.js';
import { a as apiClient } from './axios.utils-CIq7LE2y.js';
import { g as eventUri } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import 'axios';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1p8zimz>.svelte-1p8zimz{padding:15px 0}.container.svelte-1p8zimz .card.svelte-1p8zimz{width:50%;width:240px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.container.svelte-1p8zimz .card .text.svelte-1p8zimz{width:100%;text-align:center;padding-bottom:15px}.container.svelte-1p8zimz .card .card-content.svelte-1p8zimz{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  width: 240px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.container .card .text {\\n  width: 100%;\\n  text-align: center;\\n  padding-bottom: 15px;\\n}\\n.container .card .card-content {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}</style>\\n\\n<script lang=\\"ts\\">import \\"@tanglelabs/open-id-qr\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { Phone, Typography, BigBusinessCorp, Card } from \\"$lib/components\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { eventUri } from \\"$lib/stores/flows.store\\";\\nlet qr;\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"id\\")\\n            goto(\\"/demo/journeys/dominique/view-jobs\\");\\n    });\\n}\\n$: watchQr(qr);\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,\\n            clientName: \\"Big Business Corp\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nlet animatePhone = false;\\nloadQr();\\n<\/script>\\n\\n<Phone variant=\\"bbc\\" bind:animatePhone=\\"{animatePhone}\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.view_jobs\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.dominique.scan_and_conn_to_bbc\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">\\n\\t\\t\\t\\t\\t\\t{$_(\\"journeys.dominique.passwordless_login\\")}\\n\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\" size=\\"{200}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.dominique.scan_qr_to_login\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.dominique.scan_qr_login_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC,CACA,yBAAU,CAAC,KAAK,CAAC,oBAAM,CACrB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAClB,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $eventUri, $$unsubscribe_eventUri;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => $eventUri = value);
  let qr;
  function watchQr(qr2) {
    if (!qr2) return;
    document.addEventListener("open-id-qr-success", (e) => {
      if (e.detail.type === "id") goto();
    });
  }
  const loadQr = async function() {
    const { data } = await apiClient.post("/siop", {
      clientMetadata: {
        logoUri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,
        clientName: "Big Business Corp"
      }
    });
    qr = data.uri;
  };
  let animatePhone = false;
  loadQr();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      watchQr(qr);
    }
    $$rendered = `${validate_component(Phone, "Phone").$$render(
      $$result,
      { variant: "bbc", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container svelte-1p8zimz"><div class="heading svelte-1p8zimz">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.view_jobs"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-1p8zimz">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.scan_and_conn_to_bbc"))}`;
      }
    })}</div> <div class="dash svelte-1p8zimz">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="card svelte-1p8zimz"><div class="text svelte-1p8zimz">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--bbc-blue"
          },
          {},
          {
            default: () => {
              return `${escape($_("journeys.dominique.passwordless_login"))}`;
            }
          }
        )}</div> ${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="card-content svelte-1p8zimz">${qr ? `<open-id-qr${add_attribute("request-uri", qr, 0)}${add_attribute("event-stream-uri", $eventUri, 0)}${add_attribute("size", 200, 0)}></open-id-qr>` : ``} <div class="heading">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "card-header",
                color: "--bbc-blue"
              },
              {},
              {
                default: () => {
                  return `${escape($_("journeys.dominique.scan_qr_to_login"))}`;
                }
              }
            )}</div> <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape($_("journeys.dominique.scan_qr_login_desc"))}`;
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
//# sourceMappingURL=_page.svelte-BO5ktbW3.js.map
