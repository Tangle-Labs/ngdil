import { c as create_ssr_component, v as validate_component, f as each } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-icpowt>.svelte-icpowt{padding:15px 0}.dash.svelte-icpowt .content .sidebar.svelte-icpowt{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-icpowt .content .sidebar .menu-item.svelte-icpowt{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-icpowt .content .sidebar .menu-item .square.svelte-icpowt{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-icpowt .content .sidebar .menu-item .rect.svelte-icpowt{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-icpowt .content .card.svelte-icpowt{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-icpowt .content .card .table.svelte-icpowt{display:flex}.dash.svelte-icpowt .content .card .table .column.svelte-icpowt{display:flex;flex-wrap:wrap;width:32%}.dash.svelte-icpowt .content .card .table .column .data.svelte-icpowt,.dash.svelte-icpowt .content .card .table .column .button-container.svelte-icpowt{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px;text-align:left}.dash.svelte-icpowt .content .card .table .column .blue-bar.svelte-icpowt{height:20px;border-radius:5px;width:70%;background:var(--kw1c-blue-900);opacity:0.5}.dash.svelte-icpowt .content .card .table .column .red-bar.svelte-icpowt{height:14px;width:40%;background:var(--kw1c-red-900);opacity:0.5;border-radius:10px}.dash.svelte-icpowt .content .card .table .column .mock-button.svelte-icpowt{height:30px;width:70%;background:var(--white-300);box-sizing:border-box;transform:translateY(10px);border:10px solid var(--kw1c-red-900);border-radius:30px;opacity:0.5}.dash.svelte-icpowt .content .card .table .column .button-container.svelte-icpowt{transform:translateY(-10px)}.dash.svelte-icpowt .content .card .table .column .header.svelte-icpowt{padding-bottom:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-icpowt"}"><div class="${"heading svelte-icpowt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `students have competed their course.`;
        }
      })} Let\u2019s check their results and
			issue their badges.
		`;
    }
  })}</div>
	<div class="${"sub-text svelte-icpowt"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view results button to see the outcome for the internationalisation course
			students.`;
    }
  })}</div>

	<div class="${"dash svelte-icpowt"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "ACTIVE COURSES"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-icpowt"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-icpowt"}"><div class="${"square svelte-icpowt"}"></div>
						<div class="${"rect svelte-icpowt"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-icpowt"}"><div class="${"table svelte-icpowt"}"><div class="${"column svelte-icpowt"}"><div class="${"header svelte-icpowt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Name`;
          }
        })}</div>
						<div class="${"data svelte-icpowt"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `Internationalisation`;
            }
          }
        )}</div>
						<div class="${"data svelte-icpowt"}"><div class="${"blue-bar svelte-icpowt"}"></div></div>
						<div class="${"data svelte-icpowt"}"><div class="${"blue-bar svelte-icpowt"}"></div></div></div>

					<div class="${"column svelte-icpowt"}"><div class="${"header svelte-icpowt"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Status`;
          }
        })}</div>
						<div class="${"data svelte-icpowt"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            fontVariant: "kw1c",
            color: "--green-900"
          },
          {},
          {
            default: () => {
              return `Complete`;
            }
          }
        )}</div>
						<div class="${"data svelte-icpowt"}"><div class="${"red-bar svelte-icpowt"}"></div></div>
						<div class="${"data svelte-icpowt"}"><div class="${"red-bar svelte-icpowt"}"></div></div></div>

					<div class="${"column svelte-icpowt"}"><div class="${"header svelte-icpowt"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "sub-text",
            fontVariant: "kw1c",
            color: "--white-300"
          },
          {},
          {
            default: () => {
              return `Action`;
            }
          }
        )}</div>
						<div class="${"button-container svelte-icpowt"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: "VIEW RESULTS",
            variant: "kw1c",
            onClick: () => {
              goto("/demo/journeys/peter/course-results");
            }
          },
          {},
          {}
        )}</div>

						<div class="${"button-container svelte-icpowt"}"><div class="${"mock-button svelte-icpowt"}"></div></div>

						<div class="${"button-container svelte-icpowt"}"><div class="${"mock-button svelte-icpowt"}"></div></div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a0187e34.js.map
