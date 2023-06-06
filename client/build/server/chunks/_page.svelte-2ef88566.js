import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape, b as null_to_empty } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { v as peterAssignedCompany, w as peterAssignedStudent } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-15hyn7y>.svelte-15hyn7y{padding:15px 0}.dash.svelte-15hyn7y .content .sidebar.svelte-15hyn7y{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-15hyn7y .content .sidebar .menu-item.svelte-15hyn7y{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-15hyn7y .content .sidebar .menu-item .square.svelte-15hyn7y{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-15hyn7y .content .sidebar .menu-item .rect.svelte-15hyn7y{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-15hyn7y .content .card.svelte-15hyn7y{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-15hyn7y .content .card .table.svelte-15hyn7y{display:flex}.dash.svelte-15hyn7y .content .card .table .column.svelte-15hyn7y{display:flex;flex-wrap:wrap;width:30%}.dash.svelte-15hyn7y .content .card .table .column.svelte-15hyn7y:last-of-type{width:40%}.dash.svelte-15hyn7y .content .card .table .column .data.svelte-15hyn7y,.dash.svelte-15hyn7y .content .card .table .column .button-container.svelte-15hyn7y{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-15hyn7y .content .card .table .column .button-container.svelte-15hyn7y{transform:translateY(-10px);justify-content:center}.dash.svelte-15hyn7y .content .card .table .column .header.svelte-15hyn7y{padding-bottom:20px}.dash.svelte-15hyn7y .content .card .table .column .action.svelte-15hyn7y{text-align:center;width:100%}.button.svelte-15hyn7y.svelte-15hyn7y{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;margin:20px;box-sizing:border-box;font-weight:500;border-radius:40px;padding:12px 30px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-15hyn7y.svelte-15hyn7y{background:var(--black-300)}.button.disabled.svelte-15hyn7y.svelte-15hyn7y:hover{cursor:unset;background:var(--black-300)}.button.svelte-15hyn7y.svelte-15hyn7y:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$result.css.add(css);
  $$unsubscribe_peterAssignedCompany();
  $$unsubscribe_peterAssignedStudent();
  return `<div class="${"container svelte-15hyn7y"}"><div class="${"heading svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your students have ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `returned from their internships abroad.`;
        }
      })} Let\u2019s verify
			their internship completion.
		`;
    }
  })}</div>
	<div class="${"sub-text svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view results button to see the outcome for the internationalisation course
			students.`;
    }
  })}</div>

	<div class="${"dash svelte-15hyn7y"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INTERNSHIP STUDENTS"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-15hyn7y"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-15hyn7y"}"><div class="${"square svelte-15hyn7y"}"></div>
						<div class="${"rect svelte-15hyn7y"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-15hyn7y"}"><div class="${"table svelte-15hyn7y"}"><div class="${"column svelte-15hyn7y"}"><div class="${"header svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div>
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-15hyn7y"}"><div class="${"header svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Placement`;
          }
        })}</div>
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div>
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div>
						<div class="${"data svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div></div>

					<div class="${"column svelte-15hyn7y"}"><div class="${"header action svelte-15hyn7y"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</div>
						<div class="${"button-container svelte-15hyn7y"}"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Sarah Jones" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div>

						<div class="${"button-container svelte-15hyn7y"}"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Ivar Leifsson" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div>
						<div class="${"button-container svelte-15hyn7y"}"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Lagertha Bonde" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2ef88566.js.map
