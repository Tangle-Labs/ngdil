import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { C as Card } from './Card-cff9afa0.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-f1be0896.js';
import { P as Phone } from './Phone-6aa841cf.js';
import { Q as Qr } from './Qr-fe109a8a.js';
import { a as apiClient, P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import 'axios';

const css = {
  code: ".container.svelte-1p8zimz>.svelte-1p8zimz{padding:15px 0}.container.svelte-1p8zimz .card.svelte-1p8zimz{width:50%;width:240px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.container.svelte-1p8zimz .card .text.svelte-1p8zimz{width:100%;text-align:center;padding-bottom:15px}.container.svelte-1p8zimz .card .card-content.svelte-1p8zimz{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 50%;\\n  width: 240px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.container .card .text {\\n  width: 100%;\\n  text-align: center;\\n  padding-bottom: 15px;\\n}\\n.container .card .card-content {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Phone, Typography, BigBusinessCorp, Card } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nlet animatePhone = false;\\nlet qr;\\nconst loadQr = async function () {\\n    const { data } = await apiClient.post(\\"/siop\\", {\\n        clientMetadata: {\\n            logoUri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,\\n            clientName: \\"Big Business Corp\\"\\n        }\\n    });\\n    qr = data.uri;\\n};\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.login) {\\n        goto(\\"/demo/journeys/dominique/view-jobs\\");\\n    }\\n};\\nloadQr();\\n<\/script>\\n\\n<Phone variant=\\"bbc\\" bind:animatePhone=\\"{animatePhone}\\" />\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\tYou made it to the <Highlight>Big Business Corp website. Let’s login</Highlight> to view their\\n\\t\\t\\tjobs board.\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>In your mobile wallet, scan the QR code & accept the connection request to login privately to\\n\\t\\t\\tthe Big Business Corp website.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">Passwordless Login</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<Card borderRadius=\\"{16}\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">Scan QR to Login</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Scan the QR to login to the Big Business Corp website.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Card>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,oBAAM,CACf,KAAK,CAAE,GAAG,CACV,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC,CACA,yBAAU,CAAC,KAAK,CAAC,oBAAM,CACrB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAClB,CACA,yBAAU,CAAC,KAAK,CAAC,4BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  let qr;
  const loadQr = async function() {
    const { data } = await apiClient.post("/siop", {
      clientMetadata: {
        logoUri: `${PUBLIC_CLIENT_URI}/imgs/bbc.png`,
        clientName: "Big Business Corp"
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
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
        return `You made it to the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Big Business Corp website. Let’s login`;
          }
        })} to view their
			jobs board.`;
      }
    })}</div> <div class="sub-text svelte-1p8zimz">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Big Business Corp website.`;
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
              return `Passwordless Login`;
            }
          }
        )}</div> ${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="card-content svelte-1p8zimz">${qr ? `${validate_component(Qr, "Qr").$$render($$result, { data: qr, size: 200 }, {}, {})}` : ``} <div class="heading">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "card-header",
                color: "--bbc-blue"
              },
              {},
              {
                default: () => {
                  return `Scan QR to Login`;
                }
              }
            )}</div> <div class="desc">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `Scan the QR to login to the Big Business Corp website.`;
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
//# sourceMappingURL=_page.svelte-8baf4994.js.map
