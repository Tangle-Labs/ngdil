import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, f as each } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { M as Modal } from './Modal-b22cf575.js';
import { c as credentials } from './creds-cc54a4d0.js';
import { j as imaniChosenApplicant } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css$1 = {
  code: ".show.svelte-uvueln.svelte-uvueln{cursor:pointer}.card-content.svelte-uvueln.svelte-uvueln{max-width:400px;width:90vw;display:flex;justify-content:center;flex-wrap:wrap;padding:30px;box-sizing:border-box}.card-content.svelte-uvueln>.svelte-uvueln{width:100%;box-sizing:border-box}.card-content.svelte-uvueln .logo.svelte-uvueln{display:flex;justify-content:center}.card-content.svelte-uvueln .logo img.svelte-uvueln{height:100px}.card-content.svelte-uvueln .cred-name.svelte-uvueln{width:100%;padding:10px;padding-bottom:0;text-align:center}.card-content.svelte-uvueln .cred-issuer.svelte-uvueln{width:100%;padding:10px;text-align:center;padding-bottom:20px}.card-content.svelte-uvueln .text-block.svelte-uvueln{padding:15px 0;border-top:1px solid var(--black-300)}",
  map: null
};
const CredModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { credential } = $$props;
  let { name } = $$props;
  let { issuer } = $$props;
  let { logo } = $$props;
  let isOpen = false;
  if ($$props.credential === void 0 && $$bindings.credential && credential !== void 0)
    $$bindings.credential(credential);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.issuer === void 0 && $$bindings.issuer && issuer !== void 0)
    $$bindings.issuer(issuer);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<img src="${"/imgs/show.svg"}" class="${"show svelte-uvueln"}" alt="${""}">

${validate_component(Modal, "Modal").$$render(
      $$result,
      { isOpen },
      {
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"card-content svelte-uvueln"}"><div class="${"logo svelte-uvueln"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"svelte-uvueln"}"></div>
		<div class="${"cred-name svelte-uvueln"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(name)}`;
            }
          })}</div>
		<div class="${"cred-issuer svelte-uvueln"}">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `Issued by ${escape(issuer)}`;
            }
          })}</div>
		${each(Object.keys(credential), (key) => {
            return `<div class="${"text-block svelte-uvueln"}"><div class="${"caption"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape(key)}`;
              }
            })}</div>
				<div class="${"data"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(credential[key])}`;
              }
            })}</div>
			</div>`;
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".container.svelte-1drc5kd>.svelte-1drc5kd{padding:15px 0}.container.svelte-1drc5kd .header.svelte-1drc5kd{width:100%;display:flex;justify-content:space-between}.container.svelte-1drc5kd .details .detail.svelte-1drc5kd{display:flex;width:100%;border-bottom:1px solid var(--white-500);justify-content:space-between;align-items:center}.container.svelte-1drc5kd .details .detail.svelte-1drc5kd:last-of-type{border-bottom:none}.container.svelte-1drc5kd .details .side.svelte-1drc5kd{display:flex;padding:10px 0;align-content:center}.container.svelte-1drc5kd .details .side .circle-container.svelte-1drc5kd{height:100%;padding-right:20px}.container.svelte-1drc5kd .details .side .circle-container .circle.svelte-1drc5kd{width:50px;height:50px;background:var(--white-500);border-radius:25px;border:1px solid var(--white-900)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
  $$unsubscribe_imaniChosenApplicant = subscribe(imaniChosenApplicant, (value) => $imaniChosenApplicant = value);
  let currStatus = "init";
  function handleVerify() {
    currStatus = "loading";
    setTimeout(
      () => {
        currStatus = "loaded";
      },
      8e3
    );
  }
  $$result.css.add(css);
  $$unsubscribe_imaniChosenApplicant();
  return `<div class="${"container svelte-1drc5kd"}"><div class="${"heading svelte-1drc5kd"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${currStatus === "loaded" ? `Great! All of ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniChosenApplicant == null ? void 0 : $imaniChosenApplicant.split(" ")[0])}\u2019s credentials are verified.`;
        }
      })} With such a good CV let\u2019s hire Gillian.` : `${escape($imaniChosenApplicant == null ? void 0 : $imaniChosenApplicant.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `shared their digital CV with you.`;
        }
      })} It\u2019s time to verify their credentials.`}`;
    }
  })}</div>
	<div class="${"sub-text svelte-1drc5kd"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(currStatus === "loaded" ? "Click the hire applicant button to hire the candidate. You can view the candidate\u2019s individual credentials by clicking the eye icon in each row." : `Click the verify CV button to verify ${$imaniChosenApplicant == null ? void 0 : $imaniChosenApplicant.split(" ")[0]}\u2019s credentials.`)}`;
    }
  })}</div>
	<div class="${"dash svelte-1drc5kd"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "3D ENGINEER JOB APPLICATIONS" }, {}, {
    default: () => {
      return `<div class="${"header svelte-1drc5kd"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "card-header",
          color: "--future-tech-green",
          fontVariant: "kw1c"
        },
        {},
        {
          default: () => {
            return `${escape($imaniChosenApplicant)} Digital CV`;
          }
        }
      )}</div>

				${currStatus === "init" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Verify CV",
          variant: "future-tech",
          onClick: handleVerify
        },
        {},
        {}
      )}` : `${currStatus === "loading" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Verifying",
          variant: "future-tech-disabled",
          onClick: () => {
          }
        },
        {},
        {}
      )}` : `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Hire Applicant",
          variant: "future-tech",
          onClick: () => {
            goto("/demo/journeys/imani/issue-id");
          }
        },
        {},
        {}
      )}`}`}</div>

			<div class="${"details"}"><div class="${"detail svelte-1drc5kd"}"><div class="${"side svelte-1drc5kd"}"><div class="${"circle-container svelte-1drc5kd"}">${currStatus === "init" ? `<div class="${"circle svelte-1drc5kd"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `<img class="${"circle svelte-1drc5kd"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `National ID`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by The Government`;
        }
      })}</div></div></div>
					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "The Government",
          name: "National ID",
          credential: {
            ...credentials.nationalId,
            "Full Name": $imaniChosenApplicant
          },
          logo: "/imgs/gov.svg"
        },
        {},
        {}
      )}</div>` : ``}</div>

				<div class="${"detail svelte-1drc5kd"}"><div class="${"side svelte-1drc5kd"}"><div class="${"circle-container svelte-1drc5kd"}">${currStatus === "init" ? `<div class="${"circle svelte-1drc5kd"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `<img class="${"circle svelte-1drc5kd"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Personal Statement`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by ${escape($imaniChosenApplicant)}`;
        }
      })}</div></div></div>

					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: $imaniChosenApplicant,
          logo: "/imgs/verified.png",
          name: "Personal Statement",
          credential: {
            ...credentials.personalStatement,
            "Full Name": $imaniChosenApplicant
          }
        },
        {},
        {}
      )}</div>` : ``}</div>

				<div class="${"detail svelte-1drc5kd"}"><div class="${"side svelte-1drc5kd"}"><div class="${"circle-container svelte-1drc5kd"}">${currStatus === "init" ? `<div class="${"circle svelte-1drc5kd"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `<img class="${"circle svelte-1drc5kd"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Future Engineer Diploma`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Koning Willem 1 College`;
        }
      })}</div></div></div>
					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Koning Willem 1 College",
          name: "Future Engineer Diploma",
          logo: "/imgs/kw1c-white.png",
          credential: {
            ...credentials.courseCred,
            "Student Name": $imaniChosenApplicant
          }
        },
        {},
        {}
      )}</div>` : ``}</div>

				<div class="${"detail svelte-1drc5kd"}"><div class="${"side svelte-1drc5kd"}"><div class="${"circle-container svelte-1drc5kd"}">${currStatus === "init" ? `<div class="${"circle svelte-1drc5kd"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `<img class="${"circle svelte-1drc5kd"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Internship Certificate`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Irish Future Print Co.`;
        }
      })}</div></div></div>
					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Irish Future Print Co.",
          name: "Internship Certificate",
          logo: "/imgs/irish.svg",
          credential: {
            ...credentials.internshipBadge,
            "Intern Name": $imaniChosenApplicant,
            Issuer: "Irish Future Print Co.",
            Country: "Ireland"
          }
        },
        {},
        {}
      )}</div>` : ``}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f2fa7c81.js.map
