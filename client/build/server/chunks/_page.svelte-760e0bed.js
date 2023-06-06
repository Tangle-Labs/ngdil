import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as each } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { w as peterAssignedStudent, v as peterAssignedCompany, g as dominqueCourses } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1kokz7r>.svelte-1kokz7r{padding:15px 0}.dash.svelte-1kokz7r .content .sidebar.svelte-1kokz7r{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-1kokz7r .content .sidebar .menu-item.svelte-1kokz7r{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-1kokz7r .content .sidebar .menu-item .square.svelte-1kokz7r{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-1kokz7r .content .sidebar .menu-item .rect.svelte-1kokz7r{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-1kokz7r .content .text-block.svelte-1kokz7r{padding-bottom:20px}.dash.svelte-1kokz7r .content .dash-card.svelte-1kokz7r{width:72.5%;position:absolute;top:50px;right:5%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1kokz7r .content .dash-card .dash-content.svelte-1kokz7r{display:flex;width:100%;justify-content:space-between;padding-bottom:20px}.dash.svelte-1kokz7r .content .dash-card .dash-content .meta.svelte-1kokz7r{width:25%}.dash.svelte-1kokz7r .content .dash-card .dash-content .internship.svelte-1kokz7r{width:35%;padding:0}.dash.svelte-1kokz7r .content .dash-card .dash-content .internship img.svelte-1kokz7r{width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1kokz7r .content .dash-card .dash-content .internship .intern-content.svelte-1kokz7r{padding:20px}.dash.svelte-1kokz7r .content .dash-card .dash-content .internship .intern-content .button.svelte-1kokz7r{width:100%;margin:0;margin-top:20px}.dash.svelte-1kokz7r .content .card.svelte-1kokz7r{background:white;border-radius:20px;padding:20px;box-sizing:border-box;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.modal-content.svelte-1kokz7r.svelte-1kokz7r{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1kokz7r>.svelte-1kokz7r{padding:10px 0}.modal-content.svelte-1kokz7r img.svelte-1kokz7r{height:120px}.modal-content.svelte-1kokz7r .subtext.svelte-1kokz7r{width:100%}.modal-content.svelte-1kokz7r.svelte-1kokz7r{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1kokz7r>.svelte-1kokz7r{padding:10px 0}.modal-content.svelte-1kokz7r .p.svelte-1kokz7r{color:var(--black-500);font-weight:300}.modal-content.svelte-1kokz7r img.svelte-1kokz7r{height:120px}.modal-content.svelte-1kokz7r .subtext.svelte-1kokz7r{width:100%}.button.svelte-1kokz7r.svelte-1kokz7r{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.svelte-1kokz7r.svelte-1kokz7r:hover{cursor:pointer;background:var(--red-700)}",
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
    $$rendered = `<div class="${"container svelte-1kokz7r"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-1kokz7r"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-1kokz7r"}">
			${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `You are about to assign ${escape($peterAssignedStudent == null ? void 0 : $peterAssignedStudent.split(" ")[0])}&#39;s an internship placement
				with:<br class="${"svelte-1kokz7r"}">`;
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
          )}
			<div class="${"p svelte-1kokz7r"}">Click the ASSIGN INTERNSHIP button to assign your student internship placement.
			</div>
			<button class="${"button svelte-1kokz7r"}">ASSIGN PLACEMENT</button>
			<div class="${"subtext svelte-1kokz7r"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )}

	<div class="${"heading svelte-1kokz7r"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${escape($peterAssignedStudent == null ? void 0 : $peterAssignedStudent.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `two relevant internship opportunities.`;
          }
        })} Let\u2019s assign their placement.
		`;
      }
    })}</div>
	<div class="${"sub-text svelte-1kokz7r"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the assign placement button on the internship you wish to assign to the student.
		`;
      }
    })}</div>

	<div class="${"dash svelte-1kokz7r"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "STUDENT INTERNSHIP PLACEMENT"
      },
      {},
      {
        default: () => {
          return `<div class="${"sidebar svelte-1kokz7r"}">${each(Array(5), (i) => {
            return `<div class="${"menu-item svelte-1kokz7r"}"><div class="${"square svelte-1kokz7r"}"></div>
						<div class="${"rect svelte-1kokz7r"}"></div>
					</div>`;
          })}</div>
			<div class="${"card dash-card svelte-1kokz7r"}"><div class="${"dash-content svelte-1kokz7r"}"><div class="${"meta svelte-1kokz7r"}"><div class="${"text-block svelte-1kokz7r"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
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
                return `${escape($peterAssignedStudent == null ? void 0 : $peterAssignedStudent.toUpperCase())}`;
              }
            }
          )}</div></div>

						<div class="${"text-block svelte-1kokz7r"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
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
            return `<div class="${"card internship svelte-1kokz7r"}"><img src="${"/imgs/engineer.png"}" alt="${""}" class="${"svelte-1kokz7r"}">
							<div class="${"intern-content svelte-1kokz7r"}"><div class="${"location"}">${validate_component(Typography, "Typography").$$render(
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
								<button class="${"button svelte-1kokz7r"}">ASSIGN PLACEMENT</button></div>
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
//# sourceMappingURL=_page.svelte-760e0bed.js.map
