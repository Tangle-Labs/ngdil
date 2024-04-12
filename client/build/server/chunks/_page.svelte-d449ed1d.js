import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { P as Phone } from './Phone-6aa841cf.js';
import './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-l726h2>.svelte-l726h2{padding:15px 0}.container.svelte-l726h2 .card-container.svelte-l726h2{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.container.svelte-l726h2 .card-container .header.svelte-l726h2{padding-bottom:10px}.container.svelte-l726h2 .card-container .login-card.svelte-l726h2{background:var(--future-tech-green);width:240px;padding:20px}.container.svelte-l726h2 .card-container .login-card .heading.svelte-l726h2{padding:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card-container {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  text-align: center;\\n}\\n.container .card-container .header {\\n  padding-bottom: 10px;\\n}\\n.container .card-container .login-card {\\n  background: var(--future-tech-green);\\n  width: 240px;\\n  padding: 20px;\\n}\\n.container .card-container .login-card img {\\n  width: 200px;\\n}\\n.container .card-container .login-card img:hover {\\n  cursor: pointer;\\n}\\n.container .card-container .login-card .heading {\\n  padding: 10px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Phone } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet animatePhone = false;\\nlet qr;\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"imaniLogin\\",\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/future-tech.png`,\\n            clientName: \\"Future Tech Co.\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.received) {\\n        goto(\\"/demo/journeys/imani/applications\\");\\n    }\\n};\\nonMount(() => {\\n    currNode.set(0);\\n    nodeCount.set(5);\\n    loadQr();\\n});\\n<\/script>\\n\\n<Phone variant=\\"futureTech\\" bind:animatePhone=\\"{animatePhone}\\" />\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>It’s a new day, so <Highlight>let’s get started by logging in</Highlight> to the Future Tech Co.\\n\\t\\t\\tstaff dashboard using your SSI.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech withSidebar=\\"{false}\\">\\n\\t\\t\\t<div class=\\"card-container\\">\\n\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t>STAFF CONNECT</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"login-card\\">\\n\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" fgColor=\\"white\\" bgColor=\\"var(--future-tech-green)\\" />\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" color=\\"--future-tech-green-300\\">Scan QR to Login</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography color=\\"--white-300\\"\\n\\t\\t\\t\\t\\t\\t\\t>Scan the QR to login to connect to Future Tech Co.</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,6BAAgB,CACzB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,MACd,CACA,wBAAU,CAAC,eAAe,CAAC,qBAAQ,CACjC,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,eAAe,CAAC,yBAAY,CACrC,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IACX,CAOA,wBAAU,CAAC,eAAe,CAAC,WAAW,CAAC,sBAAS,CAC9C,OAAO,CAAE,IACX"}'
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
      { variant: "futureTech", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container svelte-l726h2"><div class="heading svelte-l726h2">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `It’s a new day, so ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `let’s get started by logging in`;
          }
        })} to the Future Tech Co.
			staff dashboard using your SSI.`;
      }
    })}</div> <div class="sub-text svelte-l726h2">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.`;
      }
    })}</div> <div class="dash svelte-l726h2">${validate_component(FutureTech, "FutureTech").$$render($$result, { withSidebar: false }, {}, {
      default: () => {
        return `<div class="card-container svelte-l726h2"><div class="header svelte-l726h2">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c",
            color: "--future-tech-green"
          },
          {},
          {
            default: () => {
              return `STAFF CONNECT`;
            }
          }
        )}</div> <div class="login-card svelte-l726h2">${``} <div class="heading svelte-l726h2">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "list",
            color: "--future-tech-green-300"
          },
          {},
          {
            default: () => {
              return `Scan QR to Login`;
            }
          }
        )}</div> <div class="p">${validate_component(Typography, "Typography").$$render($$result, { color: "--white-300" }, {}, {
          default: () => {
            return `Scan the QR to login to connect to Future Tech Co.`;
          }
        })}</div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d449ed1d.js.map
