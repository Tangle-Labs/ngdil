import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as null_to_empty } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { R as Radio } from './Radio-4e78fa18.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-bwlrzy>.svelte-bwlrzy{padding:15px 0}.dash.svelte-bwlrzy .content .sidebar.svelte-bwlrzy{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-bwlrzy .content .sidebar .menu-item.svelte-bwlrzy{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-bwlrzy .content .sidebar .menu-item .square.svelte-bwlrzy{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-bwlrzy .content .sidebar .menu-item .rect.svelte-bwlrzy{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-bwlrzy .content .card.svelte-bwlrzy{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-bwlrzy .content .card .table.svelte-bwlrzy{display:flex}.dash.svelte-bwlrzy .content .card .table .column.svelte-bwlrzy{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-bwlrzy .content .card .table .column.col-1.svelte-bwlrzy{width:50px}.dash.svelte-bwlrzy .content .card .table .column .data.svelte-bwlrzy,.dash.svelte-bwlrzy .content .card .table .column .button-container.svelte-bwlrzy{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-bwlrzy .content .card .table .column .button-container.svelte-bwlrzy{transform:translateY(-10px)}.dash.svelte-bwlrzy .content .card .table .column .header.svelte-bwlrzy{padding-bottom:20px}.button-container.svelte-bwlrzy.svelte-bwlrzy{margin-left:60%;width:40%}.modal-content.svelte-bwlrzy.svelte-bwlrzy{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-bwlrzy>.svelte-bwlrzy{padding:10px 0}.modal-content.svelte-bwlrzy .p.svelte-bwlrzy{color:var(--black-500);font-weight:300}.modal-content.svelte-bwlrzy img.svelte-bwlrzy{height:120px}.modal-content.svelte-bwlrzy .subtext.svelte-bwlrzy{width:100%}.button.svelte-bwlrzy.svelte-bwlrzy{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:12px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-bwlrzy.svelte-bwlrzy{background:var(--black-300)}.button.disabled.svelte-bwlrzy.svelte-bwlrzy:hover{cursor:unset;background:var(--black-300)}.button.svelte-bwlrzy.svelte-bwlrzy:hover{cursor:pointer;background:var(--red-700)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let students = {
    "Sarah Jones": false,
    "Ivar Leifsson": false,
    "Lagertha Bonde": false
  };
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    selected = Object.keys(students).filter((s) => students[s]);
    $$rendered = `<div class="${"container svelte-bwlrzy"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-bwlrzy"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-bwlrzy"}">
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
                return `YOU ARE ABOUT TO ISSUE ${escape(selected.length)} STUDENT INTERNATIONALISATION COURSE BADGES`;
              }
            }
          )}
			<div class="${"p svelte-bwlrzy"}">Click ISSUE BADGES button to issue the selected students.</div>
			<button class="${"button svelte-bwlrzy"}">ISSUE BADGES</button>
			<div class="${"subtext svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )}

	<div class="${"heading svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `All the students have passed!`;
          }
        })} That\u2019s great news. Let\u2019s issue their course
			badges.
		`;
      }
    })}</div>
	<div class="${"sub-text svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the checkboxes next to the students and click the issue course badges button to issue
			their badges.
		`;
      }
    })}</div>

	<div class="${"dash svelte-bwlrzy"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "INTERNATIONALISATION COURSE STUDENTS"
      },
      {},
      {
        default: () => {
          return `<div class="${"sidebar svelte-bwlrzy"}">${each(Array(5), (i) => {
            return `<div class="${"menu-item svelte-bwlrzy"}"><div class="${"square svelte-bwlrzy"}"></div>
						<div class="${"rect svelte-bwlrzy"}"></div>
					</div>`;
          })}</div>
			<div class="${"card svelte-bwlrzy"}"><div class="${"table svelte-bwlrzy"}"><div class="${"column col-1 svelte-bwlrzy"}"><div class="${"header svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-bwlrzy"}">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Sarah Jones"] },
            {
              checked: ($$value) => {
                students["Sarah Jones"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
						<div class="${"data svelte-bwlrzy"}">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Ivar Leifsson"] },
            {
              checked: ($$value) => {
                students["Ivar Leifsson"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
						<div class="${"data svelte-bwlrzy"}">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Lagertha Bonde"] },
            {
              checked: ($$value) => {
                students["Lagertha Bonde"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div>

					<div class="${"column svelte-bwlrzy"}"><div class="${"header svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Student Applicant`;
            }
          })}</div>
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-bwlrzy"}"><div class="${"header svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Internship Category`;
            }
          })}</div>
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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
						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
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

					<div class="${"column svelte-bwlrzy"}"><div class="${"header action svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Course Result`;
            }
          })}</div>

						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--green-900"
            },
            {},
            {
              default: () => {
                return `PASS`;
              }
            }
          )}</div>

						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--green-900"
            },
            {},
            {
              default: () => {
                return `PASS`;
              }
            }
          )}</div>

						<div class="${"data svelte-bwlrzy"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--green-900"
            },
            {},
            {
              default: () => {
                return `PASS`;
              }
            }
          )}</div></div></div>

				<div class="${"button-container svelte-bwlrzy"}"><button class="${escape(null_to_empty(`button ${selected.length <= 0 && "disabled"}`), true) + " svelte-bwlrzy"}">ISSUE COURSE BADGES</button></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a960f28f.js.map
