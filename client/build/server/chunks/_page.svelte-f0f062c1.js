import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { a as currNode, m as imaniBadgeName } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let loading = true;
  setTimeout(
    () => {
      loading = false;
      currNode.set(5);
    },
    5e3
  );
  $$result.css.add(css);
  $$unsubscribe_imaniBadgeName();
  return `<div class="${"container svelte-1d37gdf"}"><div class="${"heading svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `You’ve successfully ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `created a new badge template.`;
        }
      })} Let’s continue to get
			training the staff.`;
    }
  })}</div>
	<div class="${"sub-text svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click continue to proceed to staff training.`;
    }
  })}</div>
	<div class="${"dash svelte-1d37gdf"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY BADGES" }, {}, {
    default: () => {
      return `<table class="${"table svelte-1d37gdf"}"><tr><th class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Badge Name`;
        }
      })}</th>
					<th class="${"svelte-1d37gdf"}"></th>
					<th class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Badge Status`;
        }
      })}</th></tr>
				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($imaniBadgeName)}`;
        }
      })}</td>
					<td class="${"svelte-1d37gdf"}"></td>
					<td class="${"svelte-1d37gdf"}">${loading ? `${validate_component(Loading, "Loading").$$render($$result, { size: "16px" }, {}, {})}` : ``}
						${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "status",
          color: loading ? "--secondary-900" : "--green-900"
        },
        {},
        {
          default: () => {
            return `${escape(loading ? "Pending" : "Active")}`;
          }
        }
      )}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Health &amp; Safety`;
        }
      })}</td>
					<td class="${"svelte-1d37gdf"}"></td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Communication`;
        }
      })}</td>
					<td class="${"svelte-1d37gdf"}"></td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Problem Solving`;
        }
      })}</td>
					<td class="${"svelte-1d37gdf"}"></td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Print Automation`;
        }
      })}</td>
					<td class="${"svelte-1d37gdf"}"></td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr></table>

			<div class="${"button-container svelte-1d37gdf"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-f0f062c1.js.map
