import { c as create_ssr_component, f as subscribe, v as validate_component, j as add_styles, e as escape, h as each } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { x as peterAssignedStudent, w as peterAssignedCompany, h as dominqueCourses } from './flows.store-72d7210a.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1sgib11>.svelte-1sgib11{padding:15px 0}.dash.svelte-1sgib11 .content .sidebar.svelte-1sgib11{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-1sgib11 .content .sidebar .menu-item.svelte-1sgib11{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-1sgib11 .content .sidebar .menu-item .square.svelte-1sgib11{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-1sgib11 .content .sidebar .menu-item .rect.svelte-1sgib11{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-1sgib11 .content .text-block.svelte-1sgib11{padding-bottom:20px}.dash.svelte-1sgib11 .content .dash-card.svelte-1sgib11{width:72.5%;position:absolute;top:50px;right:5%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content.svelte-1sgib11{display:flex;width:100%;justify-content:space-between;padding-bottom:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .meta.svelte-1sgib11{width:25%}.dash.svelte-1sgib11 .content .dash-card .dash-content .meta .header.svelte-1sgib11{padding-bottom:7.5px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship.svelte-1sgib11{width:35%;padding:0}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship img.svelte-1sgib11{width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship .intern-content.svelte-1sgib11{padding:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship .intern-content .button.svelte-1sgib11{width:100%;margin:0;margin-top:20px}.dash.svelte-1sgib11 .content .card.svelte-1sgib11{background:white;border-radius:20px;padding:20px;box-sizing:border-box;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.modal-content.svelte-1sgib11.svelte-1sgib11{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1sgib11>.svelte-1sgib11{padding:10px 0}.modal-content.svelte-1sgib11 img.svelte-1sgib11{height:120px}.modal-content.svelte-1sgib11 .subtext.svelte-1sgib11{width:100%}.modal-content.svelte-1sgib11.svelte-1sgib11{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1sgib11>.svelte-1sgib11{padding:10px 0}.modal-content.svelte-1sgib11 .p.svelte-1sgib11{color:var(--black-500);font-weight:300}.modal-content.svelte-1sgib11 img.svelte-1sgib11{height:120px}.modal-content.svelte-1sgib11 .subtext.svelte-1sgib11{width:100%}.button.svelte-1sgib11.svelte-1sgib11{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.svelte-1sgib11.svelte-1sgib11:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1sgib11"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-1sgib11"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-1sgib11"}">
			<span class="${"svelte-1sgib11"}"${add_styles({ "text-transform": `uppercase` })}>${`${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `You are about to assign ${escape($peterAssignedStudent?.split(" ")[0])} an internship placement with:<br>`;
              }
            }
          )}
					${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}`}</span>
			<div class="${"p svelte-1sgib11"}">${`Click the ASSIGN INTERNSHIP button to assign your student internship placement.`}</div>
			${`<button class="${"button svelte-1sgib11"}">${escape("ASSIGN PLACEMENT")}</button>`}
			<div class="${"subtext svelte-1sgib11"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )}

	<div class="${"heading svelte-1sgib11"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${escape($peterAssignedStudent?.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `two relevant internship opportunities.`;
          }
        })} Let’s assign their placement.
		`;
      }
    })}</div>
	<div class="${"sub-text svelte-1sgib11"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the assign placement button on the internship you wish to assign to the student.
		`;
      }
    })}</div>

	<div class="${"dash svelte-1sgib11"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "STUDENT INTERNSHIP PLACEMENT"
      },
      {},
      {
        default: () => {
          return `<div class="${"sidebar svelte-1sgib11"}">${each(Array(5), (i) => {
            return `<div class="${"menu-item svelte-1sgib11"}"><div class="${"square svelte-1sgib11"}"></div>
						<div class="${"rect svelte-1sgib11"}"></div>
					</div>`;
          })}</div>
			<div class="${"card dash-card svelte-1sgib11"}"><div class="${"dash-content svelte-1sgib11"}"><div class="${"meta svelte-1sgib11"}"><div class="${"text-block svelte-1sgib11"}"><div class="${"header svelte-1sgib11"}">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
            default: () => {
              return `Student Applicant`;
            }
          })}</div>
							<div class="${"content"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-header",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedStudent?.toUpperCase())}`;
              }
            }
          )}</div></div>

						<div class="${"text-block svelte-1sgib11"}"><div class="${"header svelte-1sgib11"}">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
            default: () => {
              return `Internship Category`;
            }
          })}</div>
							<div class="${"content"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-sub-text",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `3D Print Design`;
              }
            }
          )}</div></div></div>

					${each(dominqueCourses[2].internships, (internship) => {
            return `<div class="${"card internship svelte-1sgib11"}"><img src="${"/imgs/engineer.png"}" alt="${""}" class="${"svelte-1sgib11"}">
							<div class="${"intern-content svelte-1sgib11"}"><div class="${"location"}">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-sub-text",
                fontVariant: "kw1c",
                color: "--kw1c-red-900"
              },
              {},
              {
                default: () => {
                  return `${escape(internship.location)}`;
                }
              }
            )}</div>
								<div class="${"org"}">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape(internship.name)}`;
                }
              }
            )}</div>
								<button class="${"button svelte-1sgib11"}">ASSIGN PLACEMENT</button></div>
						</div>`;
          })}</div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_peterAssignedStudent();
  $$unsubscribe_peterAssignedCompany();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fff3a21b.js.map
