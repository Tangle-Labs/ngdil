import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute, h as each } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { M as Modal } from './Modal-268b07b6.js';
import { c as credentials } from './creds-54a304eb.js';
import { k as imaniChosenApplicant, a as currNode } from './flows.store-72d7210a.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

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
  code: ".container.svelte-d1txpn>.svelte-d1txpn{padding:15px 0}.container.svelte-d1txpn .header.svelte-d1txpn{width:100%;display:flex;justify-content:space-between}.container.svelte-d1txpn .details .detail.svelte-d1txpn{display:flex;width:100%;border-bottom:1px solid var(--white-500);justify-content:space-between;align-items:center}.container.svelte-d1txpn .details .detail.svelte-d1txpn:last-of-type{border-bottom:none}.container.svelte-d1txpn .details .side.svelte-d1txpn{display:flex;padding:10px 0;align-content:center;align-items:center}.container.svelte-d1txpn .details .side .circle-container.svelte-d1txpn{height:100%;padding-right:20px;display:flex}.container.svelte-d1txpn .details .side .circle-container .circle.svelte-d1txpn{width:30px;height:30px;background:var(--white-500);border-radius:25px;border:1px solid var(--white-900)}",
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
        currNode.set(3);
        currStatus = "loaded";
      },
      8e3
    );
  }
  $$result.css.add(css);
  $$unsubscribe_imaniChosenApplicant();
  return `<div class="${"container svelte-d1txpn"}"><div class="${"heading svelte-d1txpn"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${currStatus === "loaded" ? `Great! All of ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniChosenApplicant?.split(" ")[0])}’s credentials are verified.`;
        }
      })} With such a
				good CV let’s hire ${escape($imaniChosenApplicant?.split(" ")[0])}.` : `${escape($imaniChosenApplicant?.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `shared their digital CV with you.`;
        }
      })} It’s time to verify their credentials.`}`;
    }
  })}</div>
	<div class="${"sub-text svelte-d1txpn"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(currStatus === "loaded" ? "Click the hire applicant button to hire the candidate. You can view the candidate’s individual credentials by clicking the eye icon in each row." : `Click the verify CV button to verify ${$imaniChosenApplicant?.split(" ")[0]}’s credentials.`)}`;
    }
  })}</div>
	<div class="${"dash svelte-d1txpn"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "3D ENGINEER JOB APPLICANT" }, {}, {
    default: () => {
      return `<div class="${"header svelte-d1txpn"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
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

			<div class="${"details"}"><div class="${"detail svelte-d1txpn"}"><div class="${"side svelte-d1txpn"}"><div class="${"circle-container svelte-d1txpn"}">${currStatus === "init" ? `<div class="${"circle svelte-d1txpn"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="${"circle svelte-d1txpn"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
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

				<div class="${"detail svelte-d1txpn"}"><div class="${"side svelte-d1txpn"}"><div class="${"circle-container svelte-d1txpn"}">${currStatus === "init" ? `<div class="${"circle svelte-d1txpn"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="${"circle svelte-d1txpn"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
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

				<div class="${"detail svelte-d1txpn"}"><div class="${"side svelte-d1txpn"}"><div class="${"circle-container svelte-d1txpn"}">${currStatus === "init" ? `<div class="${"circle svelte-d1txpn"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="${"circle svelte-d1txpn"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Future Engineer Diploma`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Koning Willem I College`;
        }
      })}</div></div></div>
					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Koning Willem I College",
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

				<div class="${"detail svelte-d1txpn"}"><div class="${"side svelte-d1txpn"}"><div class="${"circle-container svelte-d1txpn"}">${currStatus === "init" ? `<div class="${"circle svelte-d1txpn"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="${"circle svelte-d1txpn"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
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
      )}</div>` : ``}</div>

				<div class="${"detail svelte-d1txpn"}"><div class="${"side svelte-d1txpn"}"><div class="${"circle-container svelte-d1txpn"}">${currStatus === "init" ? `<div class="${"circle svelte-d1txpn"}"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="${"circle svelte-d1txpn"}" src="${"/imgs/checked.png"}" alt="${""}">`}`}</div>
						<div class="${"meta"}"><div class="${"cred"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Volunteering Badge`;
        }
      })}</div>
							<div class="${"issuer"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Volunteer Corps`;
        }
      })}</div></div></div>
					${currStatus === "loaded" ? `<div class="${"verify"}">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Volunteer Corps",
          name: "Volunteering Badge",
          logo: "/imgs/volunteer.svg",
          credential: {
            ...credentials.volunteerBadge,
            "Holder Name": "Gilian O'Leary"
          }
        },
        {},
        {}
      )}</div>` : ``}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5018921c.js.map
