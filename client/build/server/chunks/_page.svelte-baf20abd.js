import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { T as Typography } from './Typography-011834f4.js';
import { C as Card } from './Card-42d79914.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { P as Phone } from './Phone-e0ce2f7c.js';
import { Q as Qr } from './Qr-59f9ff74.js';
import { a as currNode, n as nodeCount } from './flows.store-72d7210a.js';
import { a as apiClient, P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-188s0du>.svelte-188s0du{padding:15px 0}.container.svelte-188s0du .card.svelte-188s0du{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-188s0du .card .card-content.svelte-188s0du{padding:10px;display:flex;justify-content:flex-start;box-sizing:border-box;flex-wrap:wrap;text-align:left}.container.svelte-188s0du .card .card-content .heading .crowns.svelte-188s0du{height:15px;width:unset;padding:0}.container.svelte-188s0du .card .card-content .qr.svelte-188s0du{padding:10px 0}",
  map: null
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
      goto("/demo/journeys/dominique/choose-course");
    }
  };
  loadQr();
  currNode.set(0);
  nodeCount.set(5);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-188s0du"}">${validate_component(Phone, "Phone").$$render(
      $$result,
      { variant: "kw1c", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div class="${"heading svelte-188s0du"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You&#39;ve made it to the ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `KW1C website, let&#39;s log in`;
          }
        })} to enrol on your course
			of choice.`;
      }
    })}</div>
	<div class="${"sub-text svelte-188s0du"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your identity wallet, scan the QR code and accept the connection request to access the
			KW1C learners portal.`;
      }
    })}</div>
	<div class="${"dash svelte-188s0du"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="${"card svelte-188s0du"}">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="${"card-content svelte-188s0du"}"><div class="${"heading"}"><img src="${"/imgs/kw1c-crowns.png"}" alt="${""}" class="${"crowns svelte-188s0du"}">
							<div class="${"heading-text"}">${validate_component(Typography, "Typography").$$render(
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
            )}</div></div>
						${qr ? `<div class="${"qr svelte-188s0du"}">${validate_component(Qr, "Qr").$$render($$result, { size: 200, data: qr }, {}, {})}</div>` : ``}
						<div class="${"desc"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
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
//# sourceMappingURL=_page.svelte-baf20abd.js.map
