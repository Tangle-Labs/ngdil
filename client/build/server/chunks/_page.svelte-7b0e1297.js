import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { T as Typography } from './Typography-011834f4.js';
import { C as Card } from './Card-42d79914.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-eebcb667.js';
import { P as Phone } from './Phone-e0ce2f7c.js';
import './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-1hyfz9z>.svelte-1hyfz9z{padding:15px 0}.container.svelte-1hyfz9z .card.svelte-1hyfz9z{width:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:240px}.container.svelte-1hyfz9z .card .card-content.svelte-1hyfz9z{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let animatePhone = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.login) {
      goto("/demo/journeys/dominique/open-jobs");
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
    )}
<div class="${"container svelte-1hyfz9z"}"><div class="${"heading svelte-1hyfz9z"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `It’s time to spread the word. ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let’s connect to the Open Jobs Network`;
          }
        })}
			to share your credential.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1hyfz9z"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Open Jobs Network.`;
      }
    })}</div>
	<div class="${"dash svelte-1hyfz9z"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-1hyfz9z"}">${validate_component(Card, "Card").$$render($$result, { borderRadius: 16 }, {}, {
          default: () => {
            return `<div class="${"card-content svelte-1hyfz9z"}">${``}
						<div class="${"heading"}">${validate_component(Typography, "Typography").$$render(
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
            )}</div>
						<div class="${"desc"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
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
//# sourceMappingURL=_page.svelte-7b0e1297.js.map
