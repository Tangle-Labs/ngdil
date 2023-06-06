import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { u as peterChosenStudents } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-9l4igi>.svelte-9l4igi{padding:15px 0}.dash.svelte-9l4igi .content .sidebar.svelte-9l4igi{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-9l4igi .content .sidebar .menu-item.svelte-9l4igi{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-9l4igi .content .sidebar .menu-item .square.svelte-9l4igi{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-9l4igi .content .sidebar .menu-item .rect.svelte-9l4igi{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-9l4igi .content .card.svelte-9l4igi{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-9l4igi .content .card .table.svelte-9l4igi{display:flex}.dash.svelte-9l4igi .content .card .table .column.svelte-9l4igi{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-9l4igi .content .card .table .column .action.svelte-9l4igi{text-align:center;width:100%;display:flex;justify-content:center}.dash.svelte-9l4igi .content .card .table .column .data.svelte-9l4igi{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-9l4igi .content .card .table .column .header.svelte-9l4igi{padding-bottom:20px}.button-continue.svelte-9l4igi.svelte-9l4igi{margin-left:60%;width:40% !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterChosenStudents, $$unsubscribe_peterChosenStudents;
  $$unsubscribe_peterChosenStudents = subscribe(peterChosenStudents, (value) => $peterChosenStudents = value);
  $$result.css.add(css);
  $$unsubscribe_peterChosenStudents();
  return `<div class="${"container svelte-9l4igi"}"><div class="${"heading svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Exciting times. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully enrolled`;
        }
      })} your students onto the internationalisation
			course.
		`;
    }
  })}</div>
	<div class="${"sub-text svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the continue button to proceed and see what you have achieved so far with self-sovereign
			identity.
		`;
    }
  })}</div>

	<div class="${"dash svelte-9l4igi"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INTERNATIONALISATION COURSE STUDENTS"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-9l4igi"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-9l4igi"}"><div class="${"square svelte-9l4igi"}"></div>
						<div class="${"rect svelte-9l4igi"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-9l4igi"}"><div class="${"table svelte-9l4igi"}"><div class="${"column svelte-9l4igi"}"><div class="${"header svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div>
						${each($peterChosenStudents, (student) => {
          return `<div class="${"data svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape(student.toUpperCase())}`;
              }
            }
          )}
							</div>`;
        })}</div>

					<div class="${"column svelte-9l4igi"}"><div class="${"header svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Category`;
          }
        })}</div>

						${each($peterChosenStudents, (student) => {
          return `<div class="${"data svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `3D Print Design`;
              }
            }
          )}
							</div>`;
        })}</div>

					<div class="${"column action svelte-9l4igi"}"><div class="${"header action svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Status`;
          }
        })}</div>

						${each($peterChosenStudents, (student) => {
          return `<div class="${"data action svelte-9l4igi"}">${validate_component(Typography, "Typography").$$render(
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
          )}
							</div>`;
        })}</div></div>
				<div class="${"button-continue svelte-9l4igi"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: "CONTINUE",
            variant: "kw1c",
            onClick: () => {
              goto("/demo/journeys/peter/enrolled-students");
            }
          },
          {},
          {}
        )}</div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-94357d28.js.map
