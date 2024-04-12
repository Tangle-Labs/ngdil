import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { k as imaniChosenApplicant } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-n6o7nw>.svelte-n6o7nw{padding:15px 0}.container.svelte-n6o7nw .application.svelte-n6o7nw{display:flex;width:100%;justify-content:space-between;padding:20px;box-sizing:border-box}.container.svelte-n6o7nw .application .info.svelte-n6o7nw{width:50%}.container.svelte-n6o7nw .application .info .bar.svelte-n6o7nw{height:10px;width:100%;background:var(--white-700);margin-top:10px;border-radius:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-n6o7nw"}"><div class="${"heading svelte-n6o7nw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `You’re in, and it appears you have ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `three new applications`;
        }
      })}. View
			applicants to choose who to hire.`;
    }
  })}</div>
	<div class="${"sub-text svelte-n6o7nw"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view applicant button next to the applicant you want to hire.`;
    }
  })}</div>
	<div class="${"dash svelte-n6o7nw"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "3D ENGINEER JOB APPLICATIONS" }, {}, {
    default: () => {
      return `<div class="${"application svelte-n6o7nw"}"><div class="${"info svelte-n6o7nw"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Gilian O&#39;Leary`;
          }
        }
      )}</div>
					<div class="${"bar svelte-n6o7nw"}"></div></div>
				<div class="${"action"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
          variant: "future-tech",
          onClick: () => {
            imaniChosenApplicant.set("Gilian O'Leary");
            goto("/demo/journeys/imani/applicant");
          }
        },
        {},
        {}
      )}</div></div>

			<div class="${"application svelte-n6o7nw"}"><div class="${"info svelte-n6o7nw"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Marcus Erikson`;
          }
        }
      )}</div>
					<div class="${"bar svelte-n6o7nw"}"></div></div>
				<div class="${"action"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
          variant: "future-tech",
          onClick: () => {
            imaniChosenApplicant.set("Marcus Erikson");
            goto("/demo/journeys/imani/applicant");
          }
        },
        {},
        {}
      )}</div></div>

			<div class="${"application svelte-n6o7nw"}"><div class="${"info svelte-n6o7nw"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Cassandra Blanc`;
          }
        }
      )}</div>
					<div class="${"bar svelte-n6o7nw"}"></div></div>
				<div class="${"action"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
          variant: "future-tech",
          onClick: () => {
            imaniChosenApplicant.set("Cassandra Blanc");
            goto("/demo/journeys/imani/applicant");
          }
        },
        {},
        {}
      )}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3544ad6f.js.map
