import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { T as Typography } from './Typography-011834f4.js';
import { C as Card } from './Card-42d79914.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { P as Phone } from './Phone-e0ce2f7c.js';
import './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-zomzda>.svelte-zomzda{padding:15px 0}.container.svelte-zomzda .card.svelte-zomzda{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:270px}.container.svelte-zomzda .card .card-content.svelte-zomzda{padding:10px;display:flex;justify-content:flex-start;flex-wrap:wrap;text-align:left}.container.svelte-zomzda .card .card-content .heading .crowns.svelte-zomzda{height:15px;width:unset;padding:0}.container.svelte-zomzda .card .card-content img.svelte-zomzda{padding:20px 0;width:200px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.received) {
      goto("/demo/journeys/peter/view-applications");
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
    )}
<div class="${"container svelte-zomzda"}"><div class="${"heading svelte-zomzda"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Time to get to work. Let’s use ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `passwordless login`;
          }
        })} to access the KW1C staff
			portal.`;
      }
    })}</div>
	<div class="${"sub-text svelte-zomzda"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your identity wallet, scan the QR code and accept the connection request to access the
			KW1C staff portal.`;
      }
    })}</div>
	<div class="${"dash svelte-zomzda"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="${"card svelte-zomzda"}">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="${"card-content svelte-zomzda"}"><div class="${"heading"}"><img src="${"/imgs/kw1c-crowns.png"}" alt="${""}" class="${"crowns svelte-zomzda"}">
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
						${``}
						<div class="${"desc"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
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
//# sourceMappingURL=_page.svelte-b4e094fa.js.map
