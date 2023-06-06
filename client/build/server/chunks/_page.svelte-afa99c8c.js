import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { i as imaniHiredEmployee, h as imaniIssuedBadge } from './flows.store-b2e554df.js';
import './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

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
      return `Hi Imani. Let\u2019s ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `get you hiring some experienced staff`;
        }
      })}. Select your
			first experience to get started.`;
    }
  })}</div>
	<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the first experience to start Imani\u2019s journey and get hiring a new employee.
		`;
    }
  })}</div>

	<div class="${"cards svelte-1vk882u"}"><div class="${"card svelte-1vk882u"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/pic-placeholder.png" }, {}, {})}
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
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/pic-placeholder.png" }, {}, {})}
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
//# sourceMappingURL=_page.svelte-afa99c8c.js.map
