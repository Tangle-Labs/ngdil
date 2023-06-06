import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { C as Card } from './Card-10be3654.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { P as Phone } from './Phone-735234be.js';

const css = {
  code: ".container.svelte-1mx240b>.svelte-1mx240b{padding:15px 0}.container.svelte-1mx240b .card.svelte-1mx240b{background:white;width:300px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.container.svelte-1mx240b .card .card-content.svelte-1mx240b{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1mx240b .card .card-content img.svelte-1mx240b{padding:10px 0;width:250px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Phone, "Phone").$$render(
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
<div class="${"container svelte-1mx240b"}"><div class="${"heading svelte-1mx240b"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You&#39;ve made it to the KW1C website, ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `let&#39;s log in to enrol on your`;
          }
        })} course
			of choice.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1mx240b"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your identity wallet, scan the QR code and accept the connection request to the KW1C
			learners portal.`;
      }
    })}</div>
	<div class="${"dash svelte-1mx240b"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="${"card svelte-1mx240b"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"card-content svelte-1mx240b"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render(
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
            )}</div>
						<img src="${"/imgs/qr.png"}" alt="${""}" class="${"svelte-1mx240b"}">
						<div class="${"desc"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
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
//# sourceMappingURL=_page.svelte-c57444b3.js.map
