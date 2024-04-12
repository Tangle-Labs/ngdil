import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { C as Card } from './Card-cff9afa0.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-c91b6749.js';
import { P as Phone } from './Phone-6aa841cf.js';
import './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-1hyfz9z>.svelte-1hyfz9z{padding:15px 0}.container.svelte-1hyfz9z .card.svelte-1hyfz9z{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-1hyfz9z .card .card-content.svelte-1hyfz9z{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:left}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 240px;\\n}\\n.container .card .card-content {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: left;\\n}\\n.container .card .card-content img {\\n  padding: 20px 0;\\n  padding-top: 0;\\n  width: 200px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, OpenJobsNetwork, Phone, Card, Hightlight } from \\"$lib/components\\";\\nimport { currNode, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet animatePhone = false;\\nlet qr;\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/openjobs.png`,\\n            clientName: \\"Open Jobs Network\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.login) {\\n        goto(\\"/demo/journeys/dominique/open-jobs\\");\\n    }\\n};\\nonMount(() => {\\n    loadQr();\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<Phone bind:animatePhone=\\"{animatePhone}\\" variant=\\"openJobs\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>It’s time to spread the word. <Hightlight>Let’s connect to the Open Jobs Network</Hightlight>\\n\\t\\t\\tto share your credential.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>In your mobile wallet, scan the QR code & accept the connection request to login privately to\\n\\t\\t\\tthe Open Jobs Network.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<OpenJobsNetwork>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Login to Open Jobs Network</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Scan the QR code to login to the Open Jobs Network website</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</OpenJobsNetwork>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KACT,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.login) {
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
        return `It’s time to spread the word. ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let’s connect to the Open Jobs Network`;
          }
        })}
			to share your credential.`;
      }
    })}</div> <div class="sub-text svelte-1hyfz9z">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Open Jobs Network.`;
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
                  return `Login to Open Jobs Network`;
                }
              }
            )}</div> <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `Scan the QR code to login to the Open Jobs Network website`;
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
//# sourceMappingURL=_page.svelte-a85414d1.js.map
