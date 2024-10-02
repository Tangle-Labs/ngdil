import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-D9LcPVre.js';
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
  code: ".container.svelte-1hyfz9z>.svelte-1hyfz9z{padding:15px 0}.container.svelte-1hyfz9z .card.svelte-1hyfz9z{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-1hyfz9z .card .card-content.svelte-1hyfz9z{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:left}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 240px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content img {\\n  padding: 20px 0;\\n  padding-top: 0;\\n  width: 200px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, OpenJobsNetwork, Phone, Card } from \\"$lib/components\\";\\nimport { currNode, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"id\\")\\n            goto(\\"/demo/journeys/dominique/open-jobs\\");\\n    });\\n}\\n$: watchQr(qr);\\nlet animatePhone = false;\\nlet qr;\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/openjobs.png`,\\n            clientName: \\"Open Jobs Network\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nonMount(() => {\\n    loadQr();\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<Phone bind:animatePhone=\\"{animatePhone}\\" variant=\\"openJobs\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.lets_conn_to_open_jobs_network\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.dominique.scan_qr_and_conn_pvtly_to_open_jobs\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<OpenJobsNetwork>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\" size=\\"{200}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.dominique.login_to_open_jobs_network\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.dominique.scan_qr_to_login_to_open_jobs_network\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</OpenJobsNetwork>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd"}'
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
      { variant: "openJobs", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container svelte-1hyfz9z"><div class="heading svelte-1hyfz9z">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.lets_conn_to_open_jobs_network"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-1hyfz9z">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.scan_qr_and_conn_pvtly_to_open_jobs"))}`;
      }
    })}</div> <div class="dash svelte-1hyfz9z">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="card svelte-1hyfz9z">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="card-content svelte-1hyfz9z">${``} <div class="heading">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "card-header",
                color: "--bbc-blue"
              },
              {},
              {
                default: () => {
                  return `${escape($_("journeys.dominique.login_to_open_jobs_network"))}`;
                }
              }
            )}</div> <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape($_("journeys.dominique.scan_qr_to_login_to_open_jobs_network"))}`;
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
//# sourceMappingURL=_page.svelte-yY4vNaHX.js.map
