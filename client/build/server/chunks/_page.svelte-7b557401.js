import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { l as imaniBadgeName } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1hm6y22>.svelte-1hm6y22{padding:15px 0}.container.svelte-1hm6y22 .table.svelte-1hm6y22{width:100%}.container.svelte-1hm6y22 .table td.svelte-1hm6y22{height:50px}.container.svelte-1hm6y22 .table td.svelte-1hm6y22:last-of-type{text-align:center}.container.svelte-1hm6y22 .button-container.svelte-1hm6y22{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  $$result.css.add(css);
  $$unsubscribe_imaniBadgeName();
  return `<div class="${"container svelte-1hm6y22"}"><div class="${"heading svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `You\u2019ve successfully ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `created a new badge template.`;
        }
      })} Let\u2019s continue to get
			training the staff.`;
    }
  })}</div>
	<div class="${"sub-text svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click continue to proceed to staff training.`;
    }
  })}</div>
	<div class="${"dash svelte-1hm6y22"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY BADGES" }, {}, {
    default: () => {
      return `<table class="${"table svelte-1hm6y22"}"><tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($imaniBadgeName)}`;
        }
      })}</td>
					<td class="${"svelte-1hm6y22"}"></td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Health &amp; Safety`;
        }
      })}</td>
					<td class="${"svelte-1hm6y22"}"></td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Communication`;
        }
      })}</td>
					<td class="${"svelte-1hm6y22"}"></td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Problem Solving`;
        }
      })}</td>
					<td class="${"svelte-1hm6y22"}"></td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Print Automation`;
        }
      })}</td>
					<td class="${"svelte-1hm6y22"}"></td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr></table>

			<div class="${"button-container svelte-1hm6y22"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "future-tech",
          label: "Continue",
          onClick: () => {
            goto("/demo/journeys/imani/train-staff");
          }
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7b557401.js.map
