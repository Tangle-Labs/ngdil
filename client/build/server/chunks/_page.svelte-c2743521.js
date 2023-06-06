import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { x as peterAssignedBadges, w as peterAssignedStudent } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-cvm9m7>.svelte-cvm9m7{padding:15px 0}.dash.svelte-cvm9m7 .content .sidebar.svelte-cvm9m7{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-cvm9m7 .content .sidebar .menu-item.svelte-cvm9m7{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-cvm9m7 .content .sidebar .menu-item .square.svelte-cvm9m7{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-cvm9m7 .content .sidebar .menu-item .rect.svelte-cvm9m7{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-cvm9m7 .content .card.svelte-cvm9m7{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-cvm9m7 .content .card .table.svelte-cvm9m7{display:flex}.dash.svelte-cvm9m7 .content .card .table .column.svelte-cvm9m7{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-cvm9m7 .content .card .table .column .action.svelte-cvm9m7{text-align:center;width:100%}.dash.svelte-cvm9m7 .content .card .table .column .data.svelte-cvm9m7{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-cvm9m7 .content .card .table .column .header.svelte-cvm9m7{padding-bottom:20px}.dash.svelte-cvm9m7 .content .card .table .column:last-of-type .data.svelte-cvm9m7{justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedBadges, $$unsubscribe_peterAssignedBadges;
  $$unsubscribe_peterAssignedBadges = subscribe(peterAssignedBadges, (value) => $peterAssignedBadges = value);
  $$result.css.add(css);
  $$unsubscribe_peterAssignedBadges();
  return `<div class="${"container svelte-cvm9m7"}"><div class="${"heading svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Three students are ready to go. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Choose the student you want`;
        }
      })} to assign an
			internship placement for.
		`;
    }
  })}</div>
	<div class="${"sub-text svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the assign placement button to choose the internship for the student.
		`;
    }
  })}</div>

	<div class="${"dash svelte-cvm9m7"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INERNSHIP APPLICANTS"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-cvm9m7"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-cvm9m7"}"><div class="${"square svelte-cvm9m7"}"></div>
						<div class="${"rect svelte-cvm9m7"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-cvm9m7"}"><div class="${"table svelte-cvm9m7"}"><div class="${"column svelte-cvm9m7"}"><div class="${"header svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div>
						${each($peterAssignedBadges, (student) => {
          return `<div class="${"data svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-cvm9m7"}"><div class="${"header svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Category`;
          }
        })}</div>

						${each($peterAssignedBadges, (student) => {
          return `<div class="${"data svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column action svelte-cvm9m7"}"><div class="${"header action svelte-cvm9m7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Status`;
          }
        })}</div>

						${each($peterAssignedBadges, (student) => {
          return `<div class="${"data svelte-cvm9m7"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "kw1c",
              label: "ASSIGN PLACEMENT",
              onClick: () => {
                peterAssignedStudent.set(student);
                goto("/demo/journeys/peter/place-student");
              }
            },
            {},
            {}
          )}
							</div>`;
        })}</div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c2743521.js.map
