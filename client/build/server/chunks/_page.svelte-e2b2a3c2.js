import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1d37gdf"}"><div class="${"heading svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Future Tech Co. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `is big on employee development.`;
        }
      })} Let’s create a new badge
			so we can train staff.`;
    }
  })}</div>
	<div class="${"sub-text svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the Create New Badge button to continue and create a new open badge template.`;
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
          label: "Create New Badge",
          onClick: () => {
            goto("/demo/journeys/imani/new-badge");
          }
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e2b2a3c2.js.map
