import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { C as Card } from './Card-42d79914.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-ccob9i>.svelte-ccob9i{padding:15px 0}.container.svelte-ccob9i .card.svelte-ccob9i{width:100%}.container.svelte-ccob9i .card .card-content.svelte-ccob9i{padding:20px;display:flex}.container.svelte-ccob9i .card .card-content .content.svelte-ccob9i{width:50%}.container.svelte-ccob9i .card .card-content .content .list.svelte-ccob9i{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-ccob9i .card .card-content .content .list img.svelte-ccob9i{height:25px;padding-right:5px}.container.svelte-ccob9i .card .card-content .content .p.svelte-ccob9i{padding:30px 0}.container.svelte-ccob9i .card .card-content .img.svelte-ccob9i{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px;min-height:320px}.container.svelte-ccob9i .card .card-content .img img.svelte-ccob9i{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishCourse() {
    goto("/demo/choose-journey");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-ccob9i"}"><div class="${"heading svelte-ccob9i"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You are now an employee of the Big Business Corp.`;
        }
      })} Let’s see what you have
			achieved.`;
    }
  })}</div>
	<div class="${"sub-text svelte-ccob9i"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Here is what you have achieved so far with your self-sovereign identity:`;
    }
  })}</div>
	<div class="${"card svelte-ccob9i"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-ccob9i"}"><div class="${"content svelte-ccob9i"}"><div class="${"list svelte-ccob9i"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-ccob9i"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Connected privately to Big Business Corp website`;
        }
      })}</div>
					<div class="${"list svelte-ccob9i"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-ccob9i"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Shared multiple credentials as a digital CV`;
        }
      })}</div>
					<div class="${"list svelte-ccob9i"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-ccob9i"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Got the job!`;
        }
      })}</div>
					<div class="${"list svelte-ccob9i"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-ccob9i"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Securely received your new Staff ID credential`;
        }
      })}</div>
					<div class="${"p svelte-ccob9i"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully completed Dominique’s journey enrolling and obtaining a new
							course credential, sharing your credential to potential employers, and successfully
							landing a new job.
							<br><br>
							To explore other journeys for employers and educators click continue.
						`;
        }
      })}</div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: "Continue",
          onClick: handleFinishCourse
        },
        {},
        {}
      )} 
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "white",
          label: "Contact NGDIL",
          onClick: () => window.open("https://ngdil.com/contact", "_blank")
        },
        {},
        {}
      )}</div>
				<div class="${"img svelte-ccob9i"}"><img src="${"/imgs/dominique-3.svg"}" alt="${""}" class="${"svelte-ccob9i"}"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-983cafe8.js.map
