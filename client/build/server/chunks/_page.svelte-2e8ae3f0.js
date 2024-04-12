import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { C as Card } from './Card-cff9afa0.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { P as Phone } from './Phone-6aa841cf.js';
import './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-zomzda>.svelte-zomzda{padding:15px 0}.container.svelte-zomzda .card.svelte-zomzda{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:270px}.container.svelte-zomzda .card .card-content.svelte-zomzda{padding:10px;display:flex;justify-content:flex-start;flex-wrap:wrap;text-align:left}.container.svelte-zomzda .card .card-content .heading .crowns.svelte-zomzda{height:15px;width:unset;padding:0}.container.svelte-zomzda .card .card-content img.svelte-zomzda{padding:20px 0;width:200px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 270px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: flex-start;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content .heading .crowns {\\n  height: 15px;\\n  width: unset;\\n  padding: 0;\\n}\\n.container .card .card-content img {\\n  padding: 20px 0;\\n  width: 200px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Card, Phone } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet animatePhone = false;\\nlet qr;\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"peterLogin\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/kw1c-white.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.received) {\\n        goto(\\"/demo/journeys/peter/view-applications\\");\\n    }\\n};\\nonMount(() => {\\n    nodeCount.set(5);\\n    currNode.set(0);\\n    loadQr();\\n});\\n<\/script>\\n\\n<Phone variant=\\"kw1cStaff\\" bind:animatePhone=\\"{animatePhone}\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Time to get to work. Let’s use <Highlight>passwordless login</Highlight> to access the KW1C staff\\n\\t\\t\\tportal.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>In your identity wallet, scan the QR code and accept the connection request to access the\\n\\t\\t\\tKW1C staff portal.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"blue\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-crowns.png\\" alt=\\"\\" class=\\"crowns\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"heading-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>LOGIN TO KW1C</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Scan the QR to access the KW1C staff portal.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,qBAAQ,CAC9C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,iBAAI,CACjC,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,KACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.received) {
      goto();
    }
  };
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
        return `Time to get to work. Let’s use ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `passwordless login`;
          }
        })} to access the KW1C staff
			portal.`;
      }
    })}</div> <div class="sub-text svelte-zomzda">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your identity wallet, scan the QR code and accept the connection request to access the
			KW1C staff portal.`;
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
                  return `LOGIN TO KW1C`;
                }
              }
            )}</div></div> ${``} <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
              default: () => {
                return `Scan the QR to access the KW1C staff portal.`;
              }
            })}</div></div>`;
          }
        })}</div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2e8ae3f0.js.map
