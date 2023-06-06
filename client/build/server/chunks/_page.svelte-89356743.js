import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { j as imaniChosenApplicant } from './flows.store-b2e554df.js';
import { C as Confetti } from './Confetti-2acc7c5b.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1hm6y22>.svelte-1hm6y22{padding:15px 0}.container.svelte-1hm6y22 .table.svelte-1hm6y22{width:100%}.container.svelte-1hm6y22 .table td.svelte-1hm6y22{height:50px}.container.svelte-1hm6y22 .table td.svelte-1hm6y22:last-of-type{text-align:center}.container.svelte-1hm6y22 .table td .loading.svelte-1hm6y22{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1hm6y22 .table td .loading .text.svelte-1hm6y22{padding-left:5px}.container.svelte-1hm6y22 .button-container.svelte-1hm6y22{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1hm6y22.svelte-1hm6y22{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1hm6y22>.svelte-1hm6y22{padding:10px 0;width:100%}.modal-content.svelte-1hm6y22 img.svelte-1hm6y22{height:120px;width:unset}.modal-content.svelte-1hm6y22 .p.svelte-1hm6y22{padding:20px 0}.modal-content.svelte-1hm6y22 .subtext.svelte-1hm6y22{width:100%}",
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
    $$rendered = `<div class="${"container svelte-1hm6y22"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-1hm6y22"}"><img src="${"/imgs/future-tech.png"}" alt="${""}" class="${"logo svelte-1hm6y22"}">
			<div class="${"heading svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render(
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
			<div class="${"p svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
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
			<div class="${"subtext svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${currStage === "issued" ? `
				Great work. ${escape($imaniChosenApplicant == null ? void 0 : $imaniChosenApplicant.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `received their employee ID card.`;
          }
        })} Let\u2019s continue to see what\u2019s next.
			` : `
				${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant == null ? void 0 : $imaniChosenApplicant.split(" ")[0])} has accepted your job offer`;
          }
        })} and
				joined the system. Let\u2019s issue their employee ID credential.
			`}`;
      }
    })}</div>
	<div class="${"sub-text svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(currStage === "issued" ? "Click the continue button to proceed and see what you have achieved so far." : "Click the issue ID button to issue Gillian with an employee ID credential from the company.")}`;
      }
    })}</div>
	<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}" class="${"svelte-1hm6y22"}">${validate_component(Confetti, "Confetti").$$render(
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
	<div class="${"dash svelte-1hm6y22"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY EMPLOYEES" }, {}, {
      default: () => {
        return `<table class="${"table svelte-1hm6y22"}"><tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant)}`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${currStage === "init" ? `${validate_component(Button, "Button").$$render(
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
        )}` : `${currStage === "loading" ? `<div class="${"loading svelte-1hm6y22"}">${validate_component(Loading, "Loading").$$render($$result, { size: "1.125rem" }, {}, {})}
								<div class="${"text svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render(
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

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Marcus Lithero`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Ada Liefsson`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr>

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Carter Jorvig`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render(
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

				<tr><td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Malik Chaudry`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td>
					<td class="${"svelte-1hm6y22"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr></table>

			${currStage === "issued" ? `<div class="${"button-container svelte-1hm6y22"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-89356743.js.map
