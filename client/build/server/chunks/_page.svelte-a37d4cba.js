import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { T as Typography } from './Typography-011834f4.js';
import { C as Card } from './Card-42d79914.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-86ed361b.js';
import { P as Phone } from './Phone-e0ce2f7c.js';
import { Q as Qr } from './Qr-59f9ff74.js';
import { a as apiClient, P as PUBLIC_CLIENT_URI } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import 'axios';

const css = {
  code: ".container.svelte-1p8zimz>.svelte-1p8zimz{padding:15px 0}.container.svelte-1p8zimz .card.svelte-1p8zimz{width:50%;width:240px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.container.svelte-1p8zimz .card .text.svelte-1p8zimz{width:100%;text-align:center;padding-bottom:15px}.container.svelte-1p8zimz .card .card-content.svelte-1p8zimz{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}",
  map: null
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
      goto("/demo/journeys/dominique/view-jobs");
    }
  };
  loadQr();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
    )}
<div class="${"container svelte-1p8zimz"}"><div class="${"heading svelte-1p8zimz"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You made it to the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Big Business Corp website. Let’s login`;
          }
        })} to view their
			jobs board.
		`;
      }
    })}</div>
	<div class="${"sub-text svelte-1p8zimz"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Big Business Corp website.`;
      }
    })}</div>
	<div class="${"dash svelte-1p8zimz"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-1p8zimz"}"><div class="${"text svelte-1p8zimz"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div>
				${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="${"card-content svelte-1p8zimz"}">${qr ? `${validate_component(Qr, "Qr").$$render($$result, { data: qr, size: 200 }, {}, {})}` : ``}

						<div class="${"heading"}">${validate_component(Typography, "Typography").$$render(
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
            )}</div>
						<div class="${"desc"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
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
//# sourceMappingURL=_page.svelte-a37d4cba.js.map
