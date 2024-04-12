import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { M as Modal } from './Modal-268b07b6.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { k as imaniChosenApplicant, a as currNode } from './flows.store-72d7210a.js';
import { C as Confetti } from './Confetti-c29a6534.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td .loading.svelte-1d37gdf{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1d37gdf .table td .loading .text.svelte-1d37gdf{padding-left:5px}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1d37gdf.svelte-1d37gdf{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1d37gdf>.svelte-1d37gdf{padding:10px 0;width:100%}.modal-content.svelte-1d37gdf img.svelte-1d37gdf{height:120px;width:unset}.modal-content.svelte-1d37gdf .p.svelte-1d37gdf{padding:20px 0}.modal-content.svelte-1d37gdf .subtext.svelte-1d37gdf{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
  $$unsubscribe_imaniChosenApplicant = subscribe(imaniChosenApplicant, (value) => $imaniChosenApplicant = value);
  let currStage = "init";
  let showModal = false;
  function handleIssueCred() {
    showModal = false;
    currStage = "loading";
    setTimeout(
      () => {
        currNode.set(5);
        currStage = "issued";
      },
      8e3
    );
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1d37gdf"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-1d37gdf"}"><img src="${"/imgs/future-tech.png"}" alt="${""}" class="${"logo svelte-1d37gdf"}">
			<div class="${"heading svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render(
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
                return `You are about to issue ${escape($imaniChosenApplicant)} with an Employee ID Credential`;
              }
            }
          )}
			<div class="${"p svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `To continue and issue the credential please click the issue credential button.
				`;
            }
          })}</div>
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Credential",
              onClick: handleIssueCred
            },
            {},
            {}
          )}
			<div class="${"subtext svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${currStage === "issued" ? `
				Great work. ${escape($imaniChosenApplicant?.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `received their employee ID card.`;
          }
        })} Let’s continue to see what’s next.
			` : `
				${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant?.split(" ")[0])} has accepted your job offer`;
          }
        })} and
				joined the system. Let’s issue their employee ID credential.
			`}`;
      }
    })}</div>
	<div class="${"sub-text svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${currStage === "issued" ? `
				Click the continue button to proceed and see what you have achieved so far.
			` : `
				Click the issue ID button to issue ${escape($imaniChosenApplicant?.split(" ")[0])} with an employee ID
				credential from the company.
			`}`;
      }
    })}</div>
	<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}" class="${"svelte-1d37gdf"}">${validate_component(Confetti, "Confetti").$$render(
      $$result,
      {
        x: [-5, 5],
        y: [0, 0.1],
        delay: [500, 5e3],
        duration: "2000",
        amount: "500",
        fallDistance: "100vh"
      },
      {},
      {}
    )}</div>
	<div class="${"dash svelte-1d37gdf"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY EMPLOYEES" }, {}, {
      default: () => {
        return `<table class="${"table svelte-1d37gdf"}"><tr><th class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Employee Name`;
          }
        })}</th>
					<th class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Designation`;
          }
        })}</th>
					<th class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</th></tr>
				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant)}`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${currStage === "init" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: "Issue ID",
            onClick: () => {
              showModal = true;
            }
          },
          {},
          {}
        )}` : `${currStage === "loading" ? `<div class="${"loading svelte-1d37gdf"}">${validate_component(Loading, "Loading").$$render($$result, { size: "1.125rem" }, {}, {})}
								<div class="${"text svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div></div>` : `${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}`}`}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Marcus Lithero`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Ada Liefsson`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Carter Jorvig`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `Expired`;
            }
          }
        )}</td></tr>

				<tr><td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Malik Chaudry`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1d37gdf"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr></table>

			${currStage === "issued" ? `<div class="${"button-container svelte-1d37gdf"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: "Continue",
            onClick: () => {
              goto("/demo/journeys/imani/hired-applicant");
            }
          },
          {},
          {}
        )}</div>` : ``}`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_imaniChosenApplicant();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-df99b19d.js.map
