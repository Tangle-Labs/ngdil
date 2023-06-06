import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { R as Radio } from './Radio-4e78fa18.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { l as imaniBadgeName, q as imaniChosenStaff } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-fc21pt>.svelte-fc21pt{padding:15px 0}.container.svelte-fc21pt .table.svelte-fc21pt{width:100%}.container.svelte-fc21pt .table td.svelte-fc21pt{height:50px}.container.svelte-fc21pt .button-container.svelte-fc21pt{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = [
    {
      name: "Gilean O'Leary",
      role: "3D Print Designer",
      selected: false
    },
    {
      name: "Marcus Lithero",
      role: "Technical Engineer",
      selected: false
    },
    {
      name: "Ada Liefsson",
      role: "Senior 3D Print Operator",
      selected: false
    },
    {
      name: "Malik Chaudry",
      role: "3D Print Designer",
      selected: false
    }
  ];
  function handleTrainStaff() {
    imaniChosenStaff.set(staff.filter((s) => s.selected));
    goto("/demo/journeys/imani/results");
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-fc21pt"}"><div class="${"heading svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `There are four staff ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `available for the new badge training.`;
          }
        })} Select the staff
			to train.`;
      }
    })}</div>
	<div class="${"sub-text svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the check boxes next to the employees you wish to train, then click the train staff
			button to continue.`;
      }
    })}</div>
	<div class="${"dash svelte-fc21pt"}">${validate_component(FutureTech, "FutureTech").$$render(
      $$result,
      {
        header: `${$imaniBadgeName.toUpperCase()} TRAINEES`
      },
      {},
      {
        default: () => {
          return `<table class="${"table svelte-fc21pt"}">${each(staff, (emp) => {
            return `<tr><td class="${"svelte-fc21pt"}">${validate_component(Radio, "Radio").$$render(
              $$result,
              { checked: emp.selected },
              {
                checked: ($$value) => {
                  emp.selected = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td>
						<td class="${"svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
              default: () => {
                return `${escape(emp.name)}`;
              }
            })}</td>
						<td class="${"svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape(emp.role)}`;
              }
            })}</td>
						<td class="${"svelte-fc21pt"}"></td>
					</tr>`;
          })}</table>

			<div class="${"button-container svelte-fc21pt"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Train Staff",
              onClick: handleTrainStaff
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_imaniBadgeName();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9b7afd6.js.map
