import { c as create_ssr_component, f as subscribe, v as validate_component, j as add_styles, e as escape, h as each, b as null_to_empty } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import './creds-54a304eb.js';
import { x as peterAssignedStudent, w as peterAssignedCompany, z as peterAssignecCompanyCountry, A as peterChosenStudent } from './flows.store-72d7210a.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-rlunxg>.svelte-rlunxg{padding:15px 0}.dash.svelte-rlunxg .content .sidebar.svelte-rlunxg{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-rlunxg .content .sidebar .menu-item.svelte-rlunxg{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-rlunxg .content .sidebar .menu-item .square.svelte-rlunxg{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-rlunxg .content .sidebar .menu-item .rect.svelte-rlunxg{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-rlunxg .content .card.svelte-rlunxg{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-rlunxg .content .card .card-header.svelte-rlunxg{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-rlunxg .content .card .card-header .button-container.svelte-rlunxg{width:40%;text-align:center}.dash.svelte-rlunxg .content .card .table.svelte-rlunxg{display:flex}.dash.svelte-rlunxg .content .card .table .column.svelte-rlunxg{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-rlunxg .content .card .table .column.svelte-rlunxg:nth-of-type(1){max-width:60px}.dash.svelte-rlunxg .content .card .table .column.type.svelte-rlunxg{width:50%}.dash.svelte-rlunxg .content .card .table .column.svelte-rlunxg:nth-of-type(3){width:30%}.dash.svelte-rlunxg .content .card .table .column.svelte-rlunxg:nth-of-type(4){width:10%}.dash.svelte-rlunxg .content .card .table .column.svelte-rlunxg:nth-of-type(5){padding:0px 10px;width:30px}.dash.svelte-rlunxg .content .card .table .column .data.svelte-rlunxg,.dash.svelte-rlunxg .content .card .table .column .circle-container.svelte-rlunxg,.dash.svelte-rlunxg .content .card .table .column .button-container.svelte-rlunxg{width:100%;height:50px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-rlunxg .content .card .table .column .header.svelte-rlunxg{height:30px}.dash.svelte-rlunxg .content .card .table .column .action.svelte-rlunxg{text-align:center;width:100%}.dash.svelte-rlunxg .content .card .table .column .circle-container.svelte-rlunxg{flex-basis:100%}.dash.svelte-rlunxg .content .card .table .column .circle.svelte-rlunxg{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.modal-content.svelte-rlunxg.svelte-rlunxg{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-rlunxg>.svelte-rlunxg{padding:10px 0}.modal-content.svelte-rlunxg img.svelte-rlunxg{height:120px}.modal-content.svelte-rlunxg .subtext.svelte-rlunxg{width:100%}.button.svelte-rlunxg.svelte-rlunxg{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;font-weight:500;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;margin-bottom:0;transition:0.5s all}.button.loading.svelte-rlunxg.svelte-rlunxg{background:var(--black-300)}.button.loading.svelte-rlunxg.svelte-rlunxg:hover{cursor:unset;background:var(--black-300)}.button.svelte-rlunxg.svelte-rlunxg:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  let $peterAssignecCompanyCountry, $$unsubscribe_peterAssignecCompanyCountry;
  let $$unsubscribe_peterChosenStudent;
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  $$unsubscribe_peterAssignecCompanyCountry = subscribe(peterAssignecCompanyCountry, (value) => $peterAssignecCompanyCountry = value);
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => value);
  let loading = false;
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: 16, isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-rlunxg"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-rlunxg"}">
		<span class="${"svelte-rlunxg"}"${add_styles({ "text-transform": `uppercase` })}>${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `YOU ARE ABOUT TO REQUEST THE FOLLOWING CREDENTIALS:
			`;
              }
            }
          )}</span>
		<div class="${"credentials svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
            default: () => {
              return `KW1C College ID <br>
				Internationalisation Badge <br>
				Internship Completion Badge <br>
				Internship Reference <br>`;
            }
          })}</div>
		<div class="${"p svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click the REQUEST CREDENTIALS button to confirm and issue the request.`;
            }
          })}</div>
		<button class="${"button svelte-rlunxg"}">REQUEST CREDENTIALS</button>
		<div class="${"subtext svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )}
<div class="${"container svelte-rlunxg"}"><div class="${"heading svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${`To ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `confirm ${escape($peterAssignedStudent.split(" ")[0])}’s internship completion,`;
          }
        })} let’s request
				the credentials for verification.`}`;
      }
    })}</div>
	<div class="${"sub-text svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(
          "Click the request credentials button to verify the student credentials."
        )}`;
      }
    })}</div>

	<div class="${"dash svelte-rlunxg"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "STUDENT INTERNSHIP PROGRESS"
      },
      {},
      {
        default: () => {
          return `<div class="${"sidebar svelte-rlunxg"}">${each(Array(5), (i) => {
            return `<div class="${"menu-item svelte-rlunxg"}"><div class="${"square svelte-rlunxg"}"></div>
						<div class="${"rect svelte-rlunxg"}"></div>
					</div>`;
          })}</div>
			<div class="${"card svelte-rlunxg"}"><div class="${"card-header svelte-rlunxg"}"><div class="${"student"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedStudent?.toUpperCase())}`;
              }
            }
          )}</div>
						<div class="${"course"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-sub-text",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}, ${escape($peterAssignecCompanyCountry)}`;
              }
            }
          )}</div></div>
					<div class="${"button-container svelte-rlunxg"}">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-rlunxg"}">${escape("REQUEST CREDENTIALS")}</button>`}</div></div>
				<div class="${"table svelte-rlunxg"}"><div class="${"column svelte-rlunxg"}"><div class="${"header svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "sub-text",
              fontVariant: "kw1c",
              color: "--white-300"
            },
            {},
            {
              default: () => {
                return `.`;
              }
            }
          )}</div>
						${each(Array(4), (_, i) => {
            return `<div class="${"circle-container svelte-rlunxg"}">${`${`<div class="${"circle svelte-rlunxg"}"></div>`}`}
							</div>`;
          })}</div>
					<div class="${"column type svelte-rlunxg"}"><div class="${"header svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Credential Type`;
            }
          })}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `KW1C COLLEGE ID`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `INTERNATIONALISATION BADGE`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `INTERNSHIP BADGE`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `INTERNSHIP REFERENCE`;
              }
            }
          )}</div></div>

					<div class="${"column svelte-rlunxg"}"><div class="${"header svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `Issuer`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `Koning Willem I College`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `Koning Willem I College`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}</div>
						<div class="${"data svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}</div></div>

					<div class="${"column svelte-rlunxg"}"><div class="${"header svelte-rlunxg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Status`;
            }
          })}</div>
						${each(Array(4), (_, i) => {
            return `<div class="${"data svelte-rlunxg"}">${`${validate_component(Typography, "Typography").$$render(
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
            )}`}
							</div>`;
          })}</div>

					<div class="${"column svelte-rlunxg"}">${``}</div></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_peterAssignedStudent();
  $$unsubscribe_peterAssignedCompany();
  $$unsubscribe_peterAssignecCompanyCountry();
  $$unsubscribe_peterChosenStudent();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-148a1198.js.map
