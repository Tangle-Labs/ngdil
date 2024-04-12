import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { C as Card } from './Card-cff9afa0.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { P as Phone } from './Phone-6aa841cf.js';
import { Q as Qr } from './Qr-fe109a8a.js';
import { a as currNode, n as nodeCount } from './flows.store-656655d6.js';
import { a as apiClient, P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-188s0du>.svelte-188s0du{padding:15px 0}.container.svelte-188s0du .card.svelte-188s0du{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-188s0du .card .card-content.svelte-188s0du{padding:10px;display:flex;justify-content:flex-start;box-sizing:border-box;flex-wrap:wrap;text-align:left}.container.svelte-188s0du .card .card-content .heading .crowns.svelte-188s0du{height:15px;width:unset;padding:0}.container.svelte-188s0du .card .card-content .qr.svelte-188s0du{padding:10px 0}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 240px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: flex-start;\\n  box-sizing: border-box;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content .heading .crowns {\\n  height: 15px;\\n  width: unset;\\n  padding: 0;\\n}\\n.container .card .card-content .qr {\\n  padding: 10px 0;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Card, Hightlight, Phone } from \\"$lib/components\\";\\nimport { currNode, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet animatePhone = false;\\nlet qr;\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/kw1c-white.png`,\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.login) {\\n        goto(\\"/demo/journeys/dominique/choose-course\\");\\n    }\\n};\\nloadQr();\\ncurrNode.set(0);\\nnodeCount.set(5);\\n// ws.onopen = () => {\\n// \\t// ws.send(JSON.stringify({ action: \\"join\\" }));\\n// };\\nonMount(() => { });\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Phone variant=\\"kw1c\\" bind:animatePhone=\\"{animatePhone}\\" />\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You\'ve made it to the <Hightlight>KW1C website, let\'s log in</Hightlight> to enrol on your course\\n\\t\\t\\tof choice.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>In your identity wallet, scan the QR code and accept the connection request to access the\\n\\t\\t\\tKW1C learners portal.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"blue\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-crowns.png\\" alt=\\"\\" class=\\"crowns\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"heading-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>LOGIN TO KW1C</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"qr\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Qr size=\\"{200}\\" data=\\"{qr}\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Scan the QR to access the KW1C learners portal.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,sBAAQ,CAC9C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CACX,CACA,yBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAI,CACjC,OAAO,CAAE,IAAI,CAAC,CAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.login) {
      goto();
    }
  };
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
        return `You&#39;ve made it to the ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `KW1C website, let&#39;s log in`;
          }
        })} to enrol on your course
			of choice.`;
      }
    })}</div> <div class="sub-text svelte-188s0du">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your identity wallet, scan the QR code and accept the connection request to access the
			KW1C learners portal.`;
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
                  return `LOGIN TO KW1C`;
                }
              }
            )}</div></div> ${qr ? `<div class="qr svelte-188s0du">${validate_component(Qr, "Qr").$$render($$result, { size: 200, data: qr }, {}, {})}</div>` : ``} <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
              default: () => {
                return `Scan the QR to access the KW1C learners portal.`;
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
//# sourceMappingURL=_page.svelte-17e843c0.js.map
