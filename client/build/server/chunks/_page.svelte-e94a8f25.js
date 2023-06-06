import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { C as Card } from './Card-10be3654.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-6bf902ab.js';
import { P as Phone } from './Phone-735234be.js';

const css = {
  code: ".container.svelte-1rcwwvo>.svelte-1rcwwvo{padding:15px 0}.container.svelte-1rcwwvo .card.svelte-1rcwwvo{width:50%;width:300px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.container.svelte-1rcwwvo .card .text.svelte-1rcwwvo{width:100%;text-align:center;padding-bottom:5px}.container.svelte-1rcwwvo .card .card-content.svelte-1rcwwvo{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1rcwwvo .card .card-content img.svelte-1rcwwvo{padding:20px 0;width:250px;padding-top:0}",
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
      { variant: "bbc", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="${"container svelte-1rcwwvo"}"><div class="${"heading svelte-1rcwwvo"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You made it to the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Big Business Corp website. Let\u2019s login`;
          }
        })} to view their
			jobs board.
		`;
      }
    })}</div>
	<div class="${"sub-text svelte-1rcwwvo"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Big Business Corp website.`;
      }
    })}</div>
	<div class="${"dash svelte-1rcwwvo"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-1rcwwvo"}"><div class="${"text svelte-1rcwwvo"}">${validate_component(Typography, "Typography").$$render(
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
				${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"card-content svelte-1rcwwvo"}"><img src="${"/imgs/qr.png"}" alt="${""}" class="${"svelte-1rcwwvo"}">
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
//# sourceMappingURL=_page.svelte-e94a8f25.js.map
