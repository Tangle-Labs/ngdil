import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { k as imaniIssuedStaff, l as imaniBadgeName } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-fc21pt>.svelte-fc21pt{padding:15px 0}.container.svelte-fc21pt .table.svelte-fc21pt{width:100%}.container.svelte-fc21pt .table td.svelte-fc21pt{height:50px}.container.svelte-fc21pt .table td .loading.svelte-fc21pt{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-fc21pt .table td .loading .text.svelte-fc21pt{padding-left:5px}.container.svelte-fc21pt .button-container.svelte-fc21pt{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
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
  return `<div class="${"container svelte-fc21pt"}"><div class="${"heading svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Almost there! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Just confirm the issuing of the badges`;
        }
      })}to the successful
			employees.`;
    }
  })}</div>
	<div class="${"sub-text svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the Issue Badges button to confirm and issue the open badges.`;
    }
  })}</div>
	<div class="${"dash svelte-fc21pt"}">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: `${$imaniBadgeName.toUpperCase()} BADGE HOLDERS`
    },
    {},
    {
      default: () => {
        return `<table class="${"table svelte-fc21pt"}">${each(staff, (emp) => {
          return `<tr><td class="${"svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape(emp.name)}`;
            }
          })}</td>
						<td class="${"svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(emp.role)}`;
            }
          })}</td>
						<td class="${"svelte-fc21pt"}">${`<div class="${"loading svelte-fc21pt"}">${validate_component(Loading, "Loading").$$render($$result, { size: "1rem" }, {}, {})}
									<div class="${"text svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render(
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

			<div class="${"button-container svelte-fc21pt"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-318fb89f.js.map
