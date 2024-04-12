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
  code: ".container.svelte-wu4iii>.svelte-wu4iii{padding:15px 0}.container.svelte-wu4iii .card.svelte-wu4iii{width:100%}.container.svelte-wu4iii .card .card-content.svelte-wu4iii{padding:20px;display:flex}.container.svelte-wu4iii .card .card-content .content.svelte-wu4iii{width:50%}.container.svelte-wu4iii .card .card-content .content .list.svelte-wu4iii{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-wu4iii .card .card-content .content .list img.svelte-wu4iii{height:25px;padding-right:5px}.container.svelte-wu4iii .card .card-content .content .p.svelte-wu4iii{padding:30px 0}.container.svelte-wu4iii .card .card-content .img.svelte-wu4iii{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-wu4iii .card .card-content .img img.svelte-wu4iii{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishCourse() {
    goto("/demo/choose-journey");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-wu4iii"}"><div class="${"heading svelte-wu4iii"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Congratulations. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully created`;
        }
      })} a new open badge and issued
			them to your team.`;
    }
  })}</div>
	<div class="${"sub-text svelte-wu4iii"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Here is what you have achieved so far with your self-sovereign identity:`;
    }
  })}</div>
	<div class="${"card svelte-wu4iii"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-wu4iii"}"><div class="${"content svelte-wu4iii"}"><div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Created an open badge template`;
        }
      })}</div>
					<div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Trained eligible staff`;
        }
      })}</div>
					<div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Issued open badges to successful employees`;
        }
      })}</div>

					<div class="${"p svelte-wu4iii"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully completed Imani’s journey verifying applicant credentials,
							hiring new employees, issuing employee ID, creating new open badges, and training and
							issuing of open badges to the team.
							<br><br>
							To explore other journeys for educators and learners click continue.
						`;
        }
      })}</div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: "continue",
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
				<div class="${"img svelte-wu4iii"}"><img src="${"/imgs/imani-2.svg"}" alt="${""}" class="${"svelte-wu4iii"}"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-35c5829f.js.map
