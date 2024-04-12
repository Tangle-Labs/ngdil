import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { C as Card } from './Card-42d79914.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { s as peterEnrolledStudent } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-wu4iii>.svelte-wu4iii{padding:15px 0}.container.svelte-wu4iii .card.svelte-wu4iii{width:100%}.container.svelte-wu4iii .card .card-content.svelte-wu4iii{padding:20px;display:flex}.container.svelte-wu4iii .card .card-content .content.svelte-wu4iii{width:50%}.container.svelte-wu4iii .card .card-content .content .list.svelte-wu4iii{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-wu4iii .card .card-content .content .list img.svelte-wu4iii{height:25px;padding-right:5px}.container.svelte-wu4iii .card .card-content .content .p.svelte-wu4iii{padding:30px 0}.container.svelte-wu4iii .card .card-content .img.svelte-wu4iii{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-wu4iii .card .card-content .img img.svelte-wu4iii{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishCourse() {
    peterEnrolledStudent.set(true);
    goto("/demo/journeys/peter");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-wu4iii"}"><div class="${"heading svelte-wu4iii"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Amazing, you’ve ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `successfully enrolled students`;
        }
      })} with KW1C!`;
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
          return `Passwordless login to the KW1C staff portal`;
        }
      })}</div>
					<div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Verified student applicants credentials`;
        }
      })}</div>
					<div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Issued course invitations`;
        }
      })}</div>
					<div class="${"list svelte-wu4iii"}"><img src="${"/imgs/check-circle.png"}" alt="${""}" class="${"svelte-wu4iii"}">
						${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Enrolled students onto a course`;
        }
      })}</div>
					<div class="${"p svelte-wu4iii"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `You have privately and securely managed the verification and enrolment of students
							onto the internationalisation course, to prepare them for their future international
							internships.
							<br><br>
							Click continue to get them their course badges and find some suitable internship placements.
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
      )}</div>
				<div class="${"img svelte-wu4iii"}"><img src="${"/imgs/peter-1.svg"}" alt="${""}" class="${"svelte-wu4iii"}"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-52c35b60.js.map
