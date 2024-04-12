import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { P as Phone } from './Phone-e0ce2f7c.js';
import './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-l726h2>.svelte-l726h2{padding:15px 0}.container.svelte-l726h2 .card-container.svelte-l726h2{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.container.svelte-l726h2 .card-container .header.svelte-l726h2{padding-bottom:10px}.container.svelte-l726h2 .card-container .login-card.svelte-l726h2{background:var(--future-tech-green);width:240px;padding:20px}.container.svelte-l726h2 .card-container .login-card .heading.svelte-l726h2{padding:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.received) {
      goto("/demo/journeys/imani/applications");
    }
  };
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

<div class="${"container svelte-l726h2"}"><div class="${"heading svelte-l726h2"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `It’s a new day, so ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `let’s get started by logging in`;
          }
        })} to the Future Tech Co.
			staff dashboard using your SSI.`;
      }
    })}</div>
	<div class="${"sub-text svelte-l726h2"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.`;
      }
    })}</div>
	<div class="${"dash svelte-l726h2"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { withSidebar: false }, {}, {
      default: () => {
        return `<div class="${"card-container svelte-l726h2"}"><div class="${"header svelte-l726h2"}">${validate_component(Typography, "Typography").$$render(
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
				<div class="${"login-card svelte-l726h2"}">${``}
					<div class="${"heading svelte-l726h2"}">${validate_component(Typography, "Typography").$$render(
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
//# sourceMappingURL=_page.svelte-4cccef91.js.map
