import { c as create_ssr_component, v as validate_component, h as each } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { A as peterChosenStudent } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-bd7nx0>.svelte-bd7nx0{padding:15px 0}.dash.svelte-bd7nx0 .content .sidebar.svelte-bd7nx0{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-bd7nx0 .content .sidebar .menu-item.svelte-bd7nx0{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-bd7nx0 .content .sidebar .menu-item .square.svelte-bd7nx0{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-bd7nx0 .content .sidebar .menu-item .rect.svelte-bd7nx0{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-bd7nx0 .content .card.svelte-bd7nx0{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-bd7nx0 .content .card .table.svelte-bd7nx0{display:flex}.dash.svelte-bd7nx0 .content .card .table .column.svelte-bd7nx0{display:flex;flex-wrap:wrap;width:32%}.dash.svelte-bd7nx0 .content .card .table .column .data.svelte-bd7nx0,.dash.svelte-bd7nx0 .content .card .table .column .button-container.svelte-bd7nx0{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-bd7nx0 .content .card .table .column .button-container.svelte-bd7nx0{display:flex;justify-content:center}.dash.svelte-bd7nx0 .content .card .table .column .header.svelte-bd7nx0{padding-bottom:20px}.dash.svelte-bd7nx0 .content .card .table .column .action.svelte-bd7nx0{text-align:center;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-bd7nx0"}"><div class="${"heading svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `The students are keen to get on their international internships. Let’s see ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `if they meet the requirements.`;
        }
      })}`;
    }
  })}</div>
	<div class="${"sub-text svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view application button to check a student’s application.`;
    }
  })}</div>

	<div class="${"dash svelte-bd7nx0"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INTERNSHIP APPLICATIONS"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-bd7nx0"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-bd7nx0"}"><div class="${"square svelte-bd7nx0"}"></div>
						<div class="${"rect svelte-bd7nx0"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-bd7nx0"}"><div class="${"table svelte-bd7nx0"}"><div class="${"column svelte-bd7nx0"}"><div class="${"header svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `SARAH JONES`;
            }
          }
        )}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `IVAR LEIFSSON`;
            }
          }
        )}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `LAGERTHA BONDE`;
            }
          }
        )}</div></div>

					<div class="${"column svelte-bd7nx0"}"><div class="${"header svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Category`;
          }
        })}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div>
						<div class="${"data svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div></div>

					<div class="${"column svelte-bd7nx0"}"><div class="${"header action svelte-bd7nx0"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</div>
						<div class="${"button-container svelte-bd7nx0"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Sarah Jones");
              goto("/demo/journeys/peter/view-application");
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div>

						<div class="${"button-container svelte-bd7nx0"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Ivar Leifsson");
              goto("/demo/journeys/peter/view-application");
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div>

						<div class="${"button-container svelte-bd7nx0"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Lagertha Bonde");
              goto("/demo/journeys/peter/view-application");
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8622e330.js.map
