import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { r as peterEnrolledStudent, s as peterAssignedInternship, t as peterVerifiedInternship } from './flows.store-b2e554df.js';
import './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterEnrolledStudent, $$unsubscribe_peterEnrolledStudent;
  let $peterAssignedInternship, $$unsubscribe_peterAssignedInternship;
  let $peterVerifiedInternship, $$unsubscribe_peterVerifiedInternship;
  $$unsubscribe_peterEnrolledStudent = subscribe(peterEnrolledStudent, (value) => $peterEnrolledStudent = value);
  $$unsubscribe_peterAssignedInternship = subscribe(peterAssignedInternship, (value) => $peterAssignedInternship = value);
  $$unsubscribe_peterVerifiedInternship = subscribe(peterVerifiedInternship, (value) => $peterVerifiedInternship = value);
  $$result.css.add(css);
  $$unsubscribe_peterEnrolledStudent();
  $$unsubscribe_peterAssignedInternship();
  $$unsubscribe_peterVerifiedInternship();
  return `<div class="${"container svelte-1vk882u"}"><div class="${"heading svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Hi Peter. Let\u2019s get you ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `started with enrolling your students.`;
        }
      })} Select your
			experience to get started.`;
    }
  })}</div>
	<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the experience to start Peter\u2019s journey and evaluate and enrol students.
		`;
    }
  })}</div>

	<div class="${"cards svelte-1vk882u"}"><div class="${"card svelte-1vk882u"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-1vk882u"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/pic-placeholder.png" }, {}, {})}
					<div class="${"text svelte-1vk882u"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Verify Student and enrol on Internationalisation course.`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will use your self-sovereign identity to connect to the KW1C staff
								dashboard, assess student eligibility for international internships, and enrol
								students onto the internationalisation course.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterEnrolledStudent ? "completed" : "secondary",
          onClick: () => {
            goto("/demo/journeys/peter/login-kw1c");
          },
          label: $peterEnrolledStudent ? "Retry" : "Get Started"
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
          return `Issue internationalisation course badges and assign student internship placements.`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `In this journey you will issue internationalisation badges to students who were
								successful in their course studies and assign a student an international internship
								placement.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterAssignedInternship ? "completed" : $peterEnrolledStudent ? "secondary" : "disabled",
          onClick: () => {
            goto("/demo/journeys/peter/view-courses");
          },
          label: $peterAssignedInternship ? "Retry" : "Get Started"
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
          return `Verify students internship credentials`;
        }
      })}</div>
						<div class="${"desc svelte-1vk882u"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `After the return of students from their international internship you will verify
								their participation and successful completion of their internship by verifying their
								new credentials issued by international companies.
							`;
        }
      })}</div></div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterVerifiedInternship ? "completed" : $peterAssignedInternship ? "secondary" : "disabled",
          onClick: () => {
            goto("/demo/journeys/peter/internship-results");
          },
          label: $peterVerifiedInternship ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>
		${$peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent ? `<div class="${"other"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-39f7bdf0.js.map
