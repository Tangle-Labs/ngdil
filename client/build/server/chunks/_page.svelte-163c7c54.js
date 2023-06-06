import { c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { n as nodeCount, d as dominiqueEarnedCourseCred, b as dominiqueSharedCred, e as dominiqueAppliedForJob } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueEarnedCourseCred, $$unsubscribe_dominiqueEarnedCourseCred;
  let $dominiqueSharedCred, $$unsubscribe_dominiqueSharedCred;
  let $dominiqueAppliedForJob, $$unsubscribe_dominiqueAppliedForJob;
  $$unsubscribe_dominiqueEarnedCourseCred = subscribe(dominiqueEarnedCourseCred, (value) => $dominiqueEarnedCourseCred = value);
  $$unsubscribe_dominiqueSharedCred = subscribe(dominiqueSharedCred, (value) => $dominiqueSharedCred = value);
  $$unsubscribe_dominiqueAppliedForJob = subscribe(dominiqueAppliedForJob, (value) => $dominiqueAppliedForJob = value);
  $$result.css.add(css);
  $$unsubscribe_dominiqueEarnedCourseCred();
  $$unsubscribe_dominiqueSharedCred();
  $$unsubscribe_dominiqueAppliedForJob();
  return `<div class="${"container svelte-1vk882u"}"><div class="${"heading svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Hi Dominique. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let\u2019s get you started on your learning journey.`;
        }
      })}Select
			your experienceto get started.`;
    }
  })}</div>
	<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the first experience to start Dominique\u2019s journey and enrol at KW1C to obtain your
			course credential.
		`;
    }
  })}</div>

	<div class="${"cards svelte-1vk882u"}"><div class="${"card svelte-1vk882u"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/pic-placeholder.png" }, {}, {})}
					<div class="${"text svelte-1vk882u"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Enrol at KW1C and earn a course credential.`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueEarnedCourseCred ? "completed" : "secondary",
          onClick: () => {
            nodeCount.set(5);
            goto("/demo/journeys/dominique/earn-a-cred");
          },
          label: $dominiqueEarnedCourseCred ? "Retry" : "Get Started"
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
          return `Share your new credential on social media.`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will connect your identity to a social job network and share your new
								credential with prospective employers as you search for a new job.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueSharedCred ? "completed" : $dominiqueEarnedCourseCred ? "secondary" : "disabled",
          onClick: () => {
            nodeCount.set(4);
            goto("/demo/journeys/dominique/share-a-cred");
          },
          label: $dominiqueSharedCred ? "Retry" : "Get Started"
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
          return `Apply for a job with your digital CV.`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will connect to an interested employer and share a number of credentials as
								a combined digital CV to land you your new job.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueAppliedForJob ? "completed" : $dominiqueSharedCred ? "secondary" : "disabled",
          onClick: () => {
            nodeCount.set(5);
            goto("/demo/journeys/dominique/apply-for-job");
          },
          label: $dominiqueAppliedForJob ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>
		${$dominiqueAppliedForJob && $dominiqueEarnedCourseCred && $dominiqueSharedCred ? `<div class="${"other"}"${add_attribute("style", "padding-top: 20px", 0)}>${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-163c7c54.js.map
