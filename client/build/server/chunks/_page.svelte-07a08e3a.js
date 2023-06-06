import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { P as Phone } from './Phone-735234be.js';

const css = {
  code: ".container.svelte-1oil2jx>.svelte-1oil2jx{padding:15px 0}.container.svelte-1oil2jx .card-container.svelte-1oil2jx{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.container.svelte-1oil2jx .card-container .login-card.svelte-1oil2jx{background:var(--future-tech-green);width:200px;padding:20px}.container.svelte-1oil2jx .card-container .login-card img.svelte-1oil2jx{width:200px}.container.svelte-1oil2jx .card-container .login-card img.svelte-1oil2jx:hover{cursor:pointer}.container.svelte-1oil2jx .card-container .login-card .heading.svelte-1oil2jx{padding:10px}",
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
      { variant: "futureTech", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<div class="${"container svelte-1oil2jx"}"><div class="${"heading svelte-1oil2jx"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `It\u2019s a new day, so ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `let\u2019s get started by logging in`;
          }
        })} to the Future Tech Co.
			staff dashboard using your SSI.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1oil2jx"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.`;
      }
    })}</div>
	<div class="${"dash svelte-1oil2jx"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { withSidebar: false }, {}, {
      default: () => {
        return `<div class="${"card-container svelte-1oil2jx"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div>
				<div class="${"login-card svelte-1oil2jx"}"><img src="${"/imgs/qr.png"}" alt="${""}" class="${"svelte-1oil2jx"}">
					<div class="${"heading svelte-1oil2jx"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div>

					<div class="${"p"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--white-300" }, {}, {
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
//# sourceMappingURL=_page.svelte-07a08e3a.js.map
