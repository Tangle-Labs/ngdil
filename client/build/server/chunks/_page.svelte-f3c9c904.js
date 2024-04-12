import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { M as Modal } from './Modal-268b07b6.js';
import { T as Typography } from './Typography-011834f4.js';
import { R as Radio } from './Radio-d9d9faff.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { r as imaniChosenStaff, m as imaniBadgeName, l as imaniIssuedStaff } from './flows.store-72d7210a.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1cr370x>.svelte-1cr370x{padding:15px 0}.container.svelte-1cr370x .table.svelte-1cr370x{width:100%}.container.svelte-1cr370x .table th.svelte-1cr370x{text-align:left}.container.svelte-1cr370x .table td.svelte-1cr370x{height:50px}.container.svelte-1cr370x .button-container.svelte-1cr370x{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1cr370x.svelte-1cr370x{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1cr370x>.svelte-1cr370x{padding:10px 0;width:100%}.modal-content.svelte-1cr370x img.svelte-1cr370x{height:120px;width:unset}.modal-content.svelte-1cr370x .p.svelte-1cr370x{padding:20px 0}.modal-content.svelte-1cr370x .subtext.svelte-1cr370x{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenStaff, $$unsubscribe_imaniChosenStaff;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniChosenStaff = subscribe(imaniChosenStaff, (value) => $imaniChosenStaff = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));
  let staffCount = staff.length;
  let showModal = false;
  function handleIssueCred() {
    imaniIssuedStaff.set(staff.filter((s) => s.selected));
    goto("/demo/journeys/imani/badge-holders");
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1cr370x"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: "16", isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-1cr370x"}"><img src="${"/imgs/future-tech.png"}" alt="${""}" class="${"logo svelte-1cr370x"}">
			<div class="${"heading svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--future-tech-green"
            },
            {},
            {
              default: () => {
                return `FUTURE TECH CO.`;
              }
            }
          )}</div>
			${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `You are about to issue ${escape(staffCount)} badges - ${escape($imaniBadgeName)}`;
              }
            }
          )}
			<div class="${"p svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `To continue and issue the badges click the issue badges button.
				`;
            }
          })}</div>
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Badges",
              onClick: handleIssueCred
            },
            {},
            {}
          )}
			<div class="${"subtext svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Not bad at all, the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `staff were successful in their training.`;
          }
        })} Let’s issue
			them their badges.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the check boxes next to the employees that passed, then click the issue badges button
			to continue.`;
      }
    })}</div>
	<div class="${"dash svelte-1cr370x"}">${validate_component(FutureTech, "FutureTech").$$render(
      $$result,
      {
        header: `${$imaniBadgeName.toUpperCase()} TRAINEES`
      },
      {},
      {
        default: () => {
          return `<table class="${"table svelte-1cr370x"}"><tr><th class="${"svelte-1cr370x"}"></th>
					<th class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
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
              return `Course Result`;
            }
          })}</th></tr>
				${each(staff, (emp) => {
            return `<tr><td class="${"svelte-1cr370x"}">${validate_component(Radio, "Radio").$$render(
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
						<td class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
              default: () => {
                return `${escape(emp.name)}`;
              }
            })}</td>
						<td class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape(emp.role)}`;
              }
            })}</td>
						<td class="${"svelte-1cr370x"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
              default: () => {
                return `Passed`;
              }
            })}</td>
					</tr>`;
          })}</table>

			<div class="${"button-container svelte-1cr370x"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Badges",
              onClick: () => {
                showModal = true;
                staffCount = staff.filter((e) => e.selected).length;
              }
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_imaniChosenStaff();
  $$unsubscribe_imaniBadgeName();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f3c9c904.js.map
