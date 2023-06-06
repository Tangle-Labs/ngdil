import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as each } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { R as Radio } from './Radio-4e78fa18.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { q as imaniChosenStaff, l as imaniBadgeName, k as imaniIssuedStaff } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-fc21pt>.svelte-fc21pt{padding:15px 0}.container.svelte-fc21pt .table.svelte-fc21pt{width:100%}.container.svelte-fc21pt .table td.svelte-fc21pt{height:50px}.container.svelte-fc21pt .button-container.svelte-fc21pt{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-fc21pt.svelte-fc21pt{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-fc21pt>.svelte-fc21pt{padding:10px 0;width:100%}.modal-content.svelte-fc21pt img.svelte-fc21pt{height:120px;width:unset}.modal-content.svelte-fc21pt .p.svelte-fc21pt{padding:20px 0}.modal-content.svelte-fc21pt .subtext.svelte-fc21pt{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenStaff, $$unsubscribe_imaniChosenStaff;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniChosenStaff = subscribe(imaniChosenStaff, (value) => $imaniChosenStaff = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));
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
    $$rendered = `<div class="${"container svelte-fc21pt"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      { isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-fc21pt"}"><img src="${"/imgs/future-tech.png"}" alt="${""}" class="${"logo svelte-fc21pt"}">
			<div class="${"heading svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render(
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
                return `You are about to issue ${escape($imaniChosenStaff.length)} badges - ${escape($imaniBadgeName)}`;
              }
            }
          )}
			<div class="${"p svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
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
			<div class="${"subtext svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Not bad at all, the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `staff were successful in their training.`;
          }
        })} Let\u2019s issue
			them their badges.`;
      }
    })}</div>
	<div class="${"sub-text svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the check boxes next to the employees that passed, then click the issue badges button
			to continue.`;
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
						<td class="${"svelte-fc21pt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
              default: () => {
                return `Passed`;
              }
            })}</td>
					</tr>`;
          })}</table>

			<div class="${"button-container svelte-fc21pt"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Badges",
              onClick: () => showModal = true
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
//# sourceMappingURL=_page.svelte-2de5ceb2.js.map
