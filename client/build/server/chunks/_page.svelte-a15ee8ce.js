import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as each, b as null_to_empty } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import './creds-cc54a4d0.js';
import { w as peterAssignedStudent, v as peterAssignedCompany, y as peterChosenStudent, z as peterAssignecCompanyCountry } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-15ksu37>.svelte-15ksu37{padding:15px 0}.dash.svelte-15ksu37 .content .sidebar.svelte-15ksu37{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-15ksu37 .content .sidebar .menu-item.svelte-15ksu37{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-15ksu37 .content .sidebar .menu-item .square.svelte-15ksu37{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-15ksu37 .content .sidebar .menu-item .rect.svelte-15ksu37{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-15ksu37 .content .card.svelte-15ksu37{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-15ksu37 .content .card .card-header.svelte-15ksu37{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-15ksu37 .content .card .card-header .button-container.svelte-15ksu37{width:40%;text-align:center}.dash.svelte-15ksu37 .content .card .table.svelte-15ksu37{display:flex}.dash.svelte-15ksu37 .content .card .table .column.svelte-15ksu37{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-15ksu37 .content .card .table .column.svelte-15ksu37:nth-of-type(1){max-width:60px}.dash.svelte-15ksu37 .content .card .table .column.type.svelte-15ksu37{width:50%}.dash.svelte-15ksu37 .content .card .table .column.svelte-15ksu37:nth-of-type(3){width:30%}.dash.svelte-15ksu37 .content .card .table .column.svelte-15ksu37:nth-of-type(4){width:10%}.dash.svelte-15ksu37 .content .card .table .column.svelte-15ksu37:nth-of-type(5){padding:0px 10px;width:30px}.dash.svelte-15ksu37 .content .card .table .column .data.svelte-15ksu37,.dash.svelte-15ksu37 .content .card .table .column .circle-container.svelte-15ksu37,.dash.svelte-15ksu37 .content .card .table .column .button-container.svelte-15ksu37{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-15ksu37 .content .card .table .column .header.svelte-15ksu37{height:30px}.dash.svelte-15ksu37 .content .card .table .column .action.svelte-15ksu37{text-align:center;width:100%}.dash.svelte-15ksu37 .content .card .table .column .circle-container.svelte-15ksu37{flex-basis:100%}.dash.svelte-15ksu37 .content .card .table .column .circle.svelte-15ksu37{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.button.svelte-15ksu37.svelte-15ksu37{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;font-weight:500;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;margin-bottom:0;transition:0.5s all}.button.loading.svelte-15ksu37.svelte-15ksu37{background:var(--black-300)}.button.loading.svelte-15ksu37.svelte-15ksu37:hover{cursor:unset;background:var(--black-300)}.button.svelte-15ksu37.svelte-15ksu37:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  let $$unsubscribe_peterChosenStudent;
  let $$unsubscribe_peterAssignecCompanyCountry;
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => value);
  $$unsubscribe_peterAssignecCompanyCountry = subscribe(peterAssignecCompanyCountry, (value) => value);
  let loading = false;
  $$result.css.add(css);
  $$unsubscribe_peterAssignedStudent();
  $$unsubscribe_peterAssignedCompany();
  $$unsubscribe_peterChosenStudent();
  $$unsubscribe_peterAssignecCompanyCountry();
  return `<div class="${"container svelte-15ksu37"}"><div class="${"heading svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${`To ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `confirm ${escape($peterAssignedStudent.split(" ")[0])}\u2019s internship completion,`;
        }
      })} let\u2019s request the credentials for verification.`}`;
    }
  })}</div>
	<div class="${"sub-text svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape("Make sure to check the credentials, and click continue to proceed")}`;
    }
  })}</div>

	<div class="${"dash svelte-15ksu37"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "white" }, {}, {
    default: () => {
      return `<div class="${"sidebar svelte-15ksu37"}">${each(Array(5), (i) => {
        return `<div class="${"menu-item svelte-15ksu37"}"><div class="${"square svelte-15ksu37"}"></div>
						<div class="${"rect svelte-15ksu37"}"></div>
					</div>`;
      })}</div>
			<div class="${"card svelte-15ksu37"}"><div class="${"card-header svelte-15ksu37"}"><div class="${"student"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "kw1c-header",
          fontVariant: "kw1c",
          color: "--kw1c-blue-900"
        },
        {},
        {
          default: () => {
            return `${escape($peterAssignedStudent == null ? void 0 : $peterAssignedStudent.toUpperCase())}`;
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
            return `3d Print Design`;
          }
        }
      )}</div></div>
					<div class="${"button-container svelte-15ksu37"}">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-15ksu37"}">${escape("REQUEST CREDENTIALS")}</button>`}</div></div>
				<div class="${"table svelte-15ksu37"}"><div class="${"column svelte-15ksu37"}"><div class="${"header svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
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
        return `<div class="${"circle-container svelte-15ksu37"}">${`${`<div class="${"circle svelte-15ksu37"}"></div>`}`}
							</div>`;
      })}</div>
					<div class="${"column type svelte-15ksu37"}"><div class="${"header svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
        default: () => {
          return `Credential Type`;
        }
      })}</div>
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-15ksu37"}"><div class="${"header svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
        default: () => {
          return `Issuer`;
        }
      })}</div>
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "kw1c-sub-text",
          fontVariant: "kw1c"
        },
        {},
        {
          default: () => {
            return `Koning Willem 1 College`;
          }
        }
      )}</div>
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "kw1c-sub-text",
          fontVariant: "kw1c"
        },
        {},
        {
          default: () => {
            return `Koning Willem 1 College`;
          }
        }
      )}</div>
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "kw1c-sub-text",
          fontVariant: "kw1c"
        },
        {},
        {
          default: () => {
            return `${escape($peterAssignedCompany)}`;
          }
        }
      )}</div>
						<div class="${"data svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "kw1c-sub-text",
          fontVariant: "kw1c"
        },
        {},
        {
          default: () => {
            return `${escape($peterAssignedCompany)}`;
          }
        }
      )}</div></div>

					<div class="${"column svelte-15ksu37"}"><div class="${"header svelte-15ksu37"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
        default: () => {
          return `Status`;
        }
      })}</div>
						${each(Array(4), (_, i) => {
        return `<div class="${"data svelte-15ksu37"}">${`${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-15ksu37"}">${``}</div></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a15ee8ce.js.map
