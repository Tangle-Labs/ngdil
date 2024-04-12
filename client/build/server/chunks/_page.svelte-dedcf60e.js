import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { C as Card } from './Card-42d79914.js';
import { A as Avatar } from './Avatar-db3679f9.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { i as imaniHiredEmployee, j as imaniIssuedBadge } from './flows.store-72d7210a.js';
import './onboarding.store-7316f7a3.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniHiredEmployee, $$unsubscribe_imaniHiredEmployee;
  let $imaniIssuedBadge, $$unsubscribe_imaniIssuedBadge;
  $$unsubscribe_imaniHiredEmployee = subscribe(imaniHiredEmployee, (value) => $imaniHiredEmployee = value);
  $$unsubscribe_imaniIssuedBadge = subscribe(imaniIssuedBadge, (value) => $imaniIssuedBadge = value);
  $$result.css.add(css);
  $$unsubscribe_imaniHiredEmployee();
  $$unsubscribe_imaniIssuedBadge();
  return `<div class="${"container svelte-1vk882u"}"><div class="${"heading svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${$imaniHiredEmployee ? `
				${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Great new hire.`;
        }
      })} Let’s get creating a new open badge and training the staff.
			` : `
				Hi Imani. Let’s ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `get you hiring some experienced staff`;
        }
      })}. Select your
				first experience to get started.
			`}`;
    }
  })}</div>
	<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `${escape($imaniHiredEmployee ? "Select the next experience to continue Imani’s journey and train some employees." : "Select the first experience to start Imani’s journey and get hiring a new employee.")}`;
    }
  })}</div>

	<div class="${"cards svelte-1vk882u"}"><div class="${"card svelte-1vk882u"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani-1.svg" }, {}, {})}
					<div class="${"text svelte-1vk882u"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Hiring an employee with a digital CV`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will login to your business portal using your self-sovereign identity,
								verify applicant credentials, select a new hire, and issue an employee ID card.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $imaniHiredEmployee ? "completed" : "secondary",
          onClick: () => {
            goto("/demo/journeys/imani/login");
          },
          label: $imaniHiredEmployee ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>

		<div class="${"card svelte-1vk882u"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani-2.svg" }, {}, {})}
					<div class="${"text svelte-1vk882u"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Create and issue company skills badge`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will create a reusable open badge template, select your employees for
								training, and privately issue skills badges to successful trainees.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $imaniIssuedBadge ? "completed" : $imaniHiredEmployee ? "secondary" : "disabled",
          onClick: () => {
            goto("/demo/journeys/imani/company-badges");
          },
          label: $imaniIssuedBadge ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>
		${$imaniHiredEmployee && $imaniIssuedBadge ? `<div class="${"other"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      onClick: () => goto("/demo/choose-journey"),
      label: "Try Another Journey"
    },
    {},
    {}
  )}</div>` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dedcf60e.js.map
