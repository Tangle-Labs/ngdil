import { c as create_ssr_component, f as subscribe, v as validate_component, h as each, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { l as imaniIssuedStaff, m as imaniBadgeName } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1cr370x>.svelte-1cr370x{padding:15px 0}.container.svelte-1cr370x .table.svelte-1cr370x{width:100%}.container.svelte-1cr370x .table th.svelte-1cr370x{text-align:left}.container.svelte-1cr370x .table td.svelte-1cr370x{height:50px}.container.svelte-1cr370x .table td .loading.svelte-1cr370x{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1cr370x .table td .loading .text.svelte-1cr370x{padding-left:5px}.container.svelte-1cr370x .button-container.svelte-1cr370x{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniIssuedStaff, $$unsubscribe_imaniIssuedStaff;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniIssuedStaff = subscribe(imaniIssuedStaff, (value) => $imaniIssuedStaff = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = $imaniIssuedStaff.map((s) => ({ ...s, selected: false }));
  $$result.css.add(css);
  $$unsubscribe_imaniIssuedStaff();
  $$unsubscribe_imaniBadgeName();
  return `${``}

<div class="${"container svelte-1cr370x"}"><div class="${"heading svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `And they’re away. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully trained and issued`;
        }
      })} open badges
			to your employees.`;
    }
  })}</div>
	<div class="${"sub-text svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the continue button to proceed and see what you have achieved with self-sovereign
			identity.`;
    }
  })}</div>
	<div class="${"dash svelte-1cr370x"}">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: `${$imaniBadgeName.toUpperCase()} BADGE HOLDERS`
    },
    {},
    {
      default: () => {
        return `<table class="${"table svelte-1cr370x"}"><tr><th class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Employee Name`;
          }
        })}</th>
					<th class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Designation`;
          }
        })}</th>
					<th class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Badge Status`;
          }
        })}</th></tr>
				${each(staff, (emp) => {
          return `<tr><td class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape(emp.name)}`;
            }
          })}</td>
						<td class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(emp.role)}`;
            }
          })}</td>
						<td class="${"svelte-1cr370x"}">${`<div class="${"loading svelte-1cr370x"}">${validate_component(Loading, "Loading").$$render($$result, { size: "1rem" }, {}, {})}
									<div class="${"text svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "status",
              color: "--secondary-900"
            },
            {},
            {
              default: () => {
                return `Pending`;
              }
            }
          )}</div>
								</div>`}</td>
					</tr>`;
        })}</table>

			<div class="${"button-container svelte-1cr370x"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech-disabled",
            label: "Continue",
            onClick: () => goto("/demo/journeys/imani/issued-badge")
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-da8ea9f4.js.map
