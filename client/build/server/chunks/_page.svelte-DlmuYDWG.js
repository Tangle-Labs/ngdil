import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { P as Phone } from './Phone-DVPz68sN.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { g as eventUri, a as currNode, n as nodeCount } from './flows.store-Ch_DhNys.js';
import { a as apiClient } from './axios.utils-CIq7LE2y.js';
import { a as PUBLIC_CLIENT_URI } from './public-4gV5o9PL.js';
import '@tanglelabs/open-id-qr';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".container.svelte-188s0du>.svelte-188s0du{padding:15px 0}.container.svelte-188s0du .card.svelte-188s0du{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-188s0du .card .card-content.svelte-188s0du{padding:10px;display:flex;justify-content:flex-start;box-sizing:border-box;flex-wrap:wrap;text-align:left}.container.svelte-188s0du .card .card-content .heading .crowns.svelte-188s0du{height:15px;width:unset;padding:0}.container.svelte-188s0du .card .card-content .qr.svelte-188s0du{padding:10px 0}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 240px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: flex-start;\\n  box-sizing: border-box;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content .heading .crowns {\\n  height: 15px;\\n  width: unset;\\n  padding: 0;\\n}\\n.container .card .card-content .qr {\\n  padding: 10px 0;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Card, Phone } from \\"$lib/components\\";\\nimport { currNode, eventUri, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nlet animatePhone = false;\\nlet qr;\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`,\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"id\\") {\\n            goto(\\"/demo/journeys/dominique/choose-course\\");\\n        }\\n    });\\n}\\nloadQr();\\n$: watchQr(qr);\\ncurrNode.set(0);\\nnodeCount.set(5);\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Phone variant=\\"kw1c\\" bind:animatePhone=\\"{animatePhone}\\" />\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.enroll_to_course_of_choice\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>{$_(\\"journeys.dominique.scan_and_conn_to_kw1c\\")}</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"blue\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-crowns.png\\" alt=\\"\\" class=\\"crowns\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"heading-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.dominique.login_to_kw1c\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"qr\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<open-id-qr size=\\"{180}\\" request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.dominique.scan_to_access_kw1c\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,sBAAQ,CAC9C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CACX,CACA,yBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAI,CACjC,OAAO,CAAE,IAAI,CAAC,CAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $eventUri, $$unsubscribe_eventUri;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => $eventUri = value);
  let animatePhone = false;
  let qr;
  const loadQr = async function() {
    const { data } = await apiClient.post("/siop", {
      clientMetadata: {
        logoUri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`,
        clientName: "Koning Willem I College"
      }
    });
    qr = data.uri;
  };
  function watchQr(qr2) {
    if (!qr2) return;
    document.addEventListener("open-id-qr-success", (e) => {
      if (e.detail.type === "id") {
        goto();
      }
    });
  }
  loadQr();
  currNode.set(0);
  nodeCount.set(5);
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
    $$rendered = `<div class="container svelte-188s0du">${validate_component(Phone, "Phone").$$render(
      $$result,
      { variant: "kw1c", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="heading svelte-188s0du">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.enroll_to_course_of_choice"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-188s0du">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.scan_and_conn_to_kw1c"))}`;
      }
    })}</div> <div class="dash svelte-188s0du">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="card svelte-188s0du">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="card-content svelte-188s0du"><div class="heading"><img src="/imgs/kw1c-crowns.png" alt="" class="crowns svelte-188s0du"> <div class="heading-text">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "card-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape($_("journeys.dominique.login_to_kw1c").toUpperCase())}`;
                }
              }
            )}</div></div> ${qr ? `<div class="qr svelte-188s0du"><open-id-qr${add_attribute("size", 180, 0)}${add_attribute("request-uri", qr, 0)}${add_attribute("event-stream-uri", $eventUri, 0)}></open-id-qr></div>` : ``} <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
              default: () => {
                return `${escape($_("journeys.dominique.scan_to_access_kw1c"))}`;
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
//# sourceMappingURL=_page.svelte-DlmuYDWG.js.map
