import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each, b as null_to_empty } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import './creds-54a304eb.js';
import { A as peterChosenStudent } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-4kg7bv>.svelte-4kg7bv{padding:15px 0}.dash.svelte-4kg7bv .content .sidebar.svelte-4kg7bv{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-4kg7bv .content .sidebar .menu-item.svelte-4kg7bv{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-4kg7bv .content .sidebar .menu-item .square.svelte-4kg7bv{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-4kg7bv .content .sidebar .menu-item .rect.svelte-4kg7bv{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-4kg7bv .content .card.svelte-4kg7bv{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-4kg7bv .content .card .card-header.svelte-4kg7bv{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-4kg7bv .content .card .card-header .button-container.svelte-4kg7bv{width:40%;text-align:center}.dash.svelte-4kg7bv .content .card .table.svelte-4kg7bv{display:flex}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-4kg7bv .content .card .table .column.badge.svelte-4kg7bv{width:30px}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:last-of-type{padding-left:10px}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(1){max-width:60px}.dash.svelte-4kg7bv .content .card .table .column.type.svelte-4kg7bv{width:50%}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(3){width:30%}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(4){width:10%}.dash.svelte-4kg7bv .content .card .table .column .data.svelte-4kg7bv,.dash.svelte-4kg7bv .content .card .table .column .circle-container.svelte-4kg7bv,.dash.svelte-4kg7bv .content .card .table .column .button-container.svelte-4kg7bv{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-4kg7bv .content .card .table .column .header.svelte-4kg7bv{height:30px}.dash.svelte-4kg7bv .content .card .table .column .action.svelte-4kg7bv{text-align:center;width:100%}.dash.svelte-4kg7bv .content .card .table .column .circle-container.svelte-4kg7bv{flex-basis:100%}.dash.svelte-4kg7bv .content .card .table .column .circle.svelte-4kg7bv{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.button.svelte-4kg7bv.svelte-4kg7bv{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.loading.svelte-4kg7bv.svelte-4kg7bv{background:var(--black-300)}.button.loading.svelte-4kg7bv.svelte-4kg7bv:hover{cursor:unset;background:var(--black-300)}.button.svelte-4kg7bv.svelte-4kg7bv:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterChosenStudent, $$unsubscribe_peterChosenStudent;
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => $peterChosenStudent = value);
  let loading = false;
  $$result.css.add(css);
  $$unsubscribe_peterChosenStudent();
  return `<div class="${"container svelte-4kg7bv"}"><div class="${"heading svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${`To evaluate ${escape($peterChosenStudent?.split(" ")[0])}’s eligibility ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `let’s request the credentials`;
        }
      })}
				required to participate in the internship.`}`;
    }
  })}</div>
	<div class="${"sub-text svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape("Click the request credentials button to get the students credentials")}`;
    }
  })}</div>

	<div class="${"dash svelte-4kg7bv"}">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "STUDENT APPLICANT"
    },
    {},
    {
      default: () => {
        return `<div class="${"sidebar svelte-4kg7bv"}">${each(Array(5), (i) => {
          return `<div class="${"menu-item svelte-4kg7bv"}"><div class="${"square svelte-4kg7bv"}"></div>
						<div class="${"rect svelte-4kg7bv"}"></div>
					</div>`;
        })}</div>
			<div class="${"card svelte-4kg7bv"}"><div class="${"card-header svelte-4kg7bv"}"><div class="${"student"}"><div class="${"name"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterChosenStudent?.toLocaleUpperCase())}`;
            }
          }
        )}</div>
						<div class="${"course"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `3D PRINT DESIGN`;
            }
          }
        )}</div></div>
					<div class="${"button-container svelte-4kg7bv"}">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-4kg7bv"}">${escape("REQUEST CREDENTIALS")}</button>`}</div></div>
				<div class="${"table svelte-4kg7bv"}"><div class="${"column svelte-4kg7bv"}"><div class="${"header svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render(
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
          return `<div class="${"circle-container svelte-4kg7bv"}">${`${`<div class="${"circle svelte-4kg7bv"}"></div>`}`}
							</div>`;
        })}</div>
					<div class="${"column type svelte-4kg7bv"}"><div class="${"header svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Credential Type`;
          }
        })}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `NATIONAL ID`;
            }
          }
        )}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `COLLEGE ID`;
            }
          }
        )}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `COURSE BADGE`;
            }
          }
        )}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render(
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
        )}</div></div>

					<div class="${"column svelte-4kg7bv"}"><div class="${"header svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Issuer`;
          }
        })}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `The Government`;
          }
        })}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div>
						<div class="${"data svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div></div>

					<div class="${"column svelte-4kg7bv"}"><div class="${"header svelte-4kg7bv"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Status`;
          }
        })}</div>
						${each(Array(4), (_, i) => {
          return `<div class="${"data svelte-4kg7bv"}">${`${validate_component(Typography, "Typography").$$render(
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
					<div class="${"column badge svelte-4kg7bv"}">${``}</div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f0db9055.js.map
