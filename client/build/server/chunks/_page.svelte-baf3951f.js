import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { b as dominiqueSharedCred } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1jsjsox>.svelte-1jsjsox{padding:15px 0}.container.svelte-1jsjsox .card.svelte-1jsjsox{width:100%}.container.svelte-1jsjsox .card .card-content.svelte-1jsjsox{padding:20px;display:flex}.container.svelte-1jsjsox .card .card-content .content.svelte-1jsjsox{width:50%}.container.svelte-1jsjsox .card .card-content .content .list.svelte-1jsjsox{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-1jsjsox .card .card-content .content .list img.svelte-1jsjsox{height:25px;padding-right:5px}.container.svelte-1jsjsox .card .card-content .content .p.svelte-1jsjsox{padding:30px 0}.container.svelte-1jsjsox .card .card-content .img.svelte-1jsjsox{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-1jsjsox .card .card-content .img img.svelte-1jsjsox{display:block;position:absolute;top:50%;left:50%;height:100px;transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishShare() {
    dominiqueSharedCred.set(true);
    goto("/demo/journeys/dominique");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-1jsjsox"}"><div class="${"heading svelte-1jsjsox"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `A new credential, a job invite,`;
        }
      })} all that\u2019s left to do now is to land that
			job.`;
    }
  })}</div>
	<div class="${"sub-text svelte-1jsjsox"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Here is what you have achieved so far with your self-sovereign identity:`;
    }
  })}</div>
	<div class="${"card svelte-1jsjsox"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1jsjsox"}"><div class="${"content svelte-1jsjsox"}"><div class="${"list svelte-1jsjsox"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-1jsjsox"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Passwordless sign on to a social network`;
        }
      })}</div>
					<div class="${"list svelte-1jsjsox"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-1jsjsox"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Shared your credential with potential employers`;
        }
      })}</div>
					<div class="${"list svelte-1jsjsox"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-1jsjsox"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Received a job invitation`;
        }
      })}</div>
					<div class="${"p svelte-1jsjsox"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `With a job invitation at hand, let\u2019s get sharing your digital CV with the potential
							employer and get that job! Click continue to proceed
						`;
        }
      })}</div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: "continue",
          onClick: handleFinishShare
        },
        {},
        {}
      )}</div>
				<div class="${"img svelte-1jsjsox"}"><img src="${"/imgs/pic-placeholder.png"}" alt="${""}" class="${"svelte-1jsjsox"}"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-baf3951f.js.map
