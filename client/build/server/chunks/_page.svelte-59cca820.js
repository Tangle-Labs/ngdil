import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { C as Card } from './Card-10be3654.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-69393c21.js';
import { P as Phone } from './Phone-735234be.js';
import './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-u7edtm>.svelte-u7edtm{padding:15px 0}.container.svelte-u7edtm .card.svelte-u7edtm{width:50%;background:white;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:300px}.container.svelte-u7edtm .card .card-content.svelte-u7edtm{padding:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:left}.container.svelte-u7edtm .card .card-content img.svelte-u7edtm{padding:20px 0;padding-top:0;width:200px}",
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
      { variant: "openJobs", animatePhone },
      {
        animatePhone: ($$value) => {
          animatePhone = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="${"container svelte-u7edtm"}"><div class="${"heading svelte-u7edtm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `It\u2019s time to spread the word. ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let\u2019s connect to the Open Jobs Network`;
          }
        })}
			to share your credential.`;
      }
    })}</div>
	<div class="${"sub-text svelte-u7edtm"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `In your mobile wallet, scan the QR code &amp; accept the connection request to login privately to
			the Open Jobs Network.`;
      }
    })}</div>
	<div class="${"dash svelte-u7edtm"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-u7edtm"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"card-content svelte-u7edtm"}"><img src="${"/imgs/qr.png"}" alt="${""}" class="${"svelte-u7edtm"}">
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
                return `Scan the QR to access the Open Jobs Network`;
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
//# sourceMappingURL=_page.svelte-59cca820.js.map
