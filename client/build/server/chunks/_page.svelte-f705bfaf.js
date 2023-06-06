import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-6bf902ab.js';
import { g as dominqueCourses, f as dominiqueSelectedCourse } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-7u40he>.svelte-7u40he.svelte-7u40he{padding:15px 0}.container.svelte-7u40he .dash .card.svelte-7u40he.svelte-7u40he{margin:0px 10%;background:white;border-radius:20px;display:flex;transform:translateY(30px);filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-7u40he .dash .card .left.svelte-7u40he.svelte-7u40he{padding-right:10px;width:50%}.container.svelte-7u40he .dash .card .left img.svelte-7u40he.svelte-7u40he{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-7u40he .dash .card .left .heading.svelte-7u40he.svelte-7u40he{padding:20px}.container.svelte-7u40he .dash .card .left .bars.svelte-7u40he.svelte-7u40he{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-7u40he .dash .card .left .bars .bar.svelte-7u40he.svelte-7u40he{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-7u40he .dash .card .right.svelte-7u40he.svelte-7u40he{padding:20px}.container.svelte-7u40he .dash .card .right.svelte-7u40he>.svelte-7u40he{padding:10px 0}.modal-header.svelte-7u40he.svelte-7u40he.svelte-7u40he{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-7u40he img.svelte-7u40he.svelte-7u40he{height:30px;padding-bottom:5px}.modal-header.svelte-7u40he>.logo-text.svelte-7u40he.svelte-7u40he{width:100%;text-align:center}.modal-content.svelte-7u40he.svelte-7u40he.svelte-7u40he{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-7u40he>.svelte-7u40he.svelte-7u40he{padding:10px 0}.modal-content.svelte-7u40he .p.svelte-7u40he.svelte-7u40he{color:var(--black-500)}.modal-content.svelte-7u40he img.svelte-7u40he.svelte-7u40he{height:60px}.modal-content.svelte-7u40he .subtext.svelte-7u40he.svelte-7u40he{width:100%}.modal-content.svelte-7u40he .checked.svelte-7u40he.svelte-7u40he{height:60px}.button-container.svelte-7u40he.svelte-7u40he.svelte-7u40he{width:50%}.button-container.svelte-7u40he .button.svelte-7u40he.svelte-7u40he{margin:20px 0}.button.svelte-7u40he.svelte-7u40he.svelte-7u40he{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);font-weight:500;margin:20px;box-sizing:border-box;border-radius:40px;padding:12px;margin-bottom:0;transition:0.5s all}.button.svelte-7u40he.svelte-7u40he.svelte-7u40he:hover{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-7u40he"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      { withoutPadding: true, isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-header svelte-7u40he"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"logo svelte-7u40he"}">
			<div class="${"logo-text svelte-7u40he"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              color: "--white-300",
              variant: "card-header"
            },
            {},
            {
              default: () => {
                return `Big Business Corp`;
              }
            }
          )}</div></div>
		<div class="${"modal-content svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape("Big Business Corp is requesting you share your digital CV.")}`;
            }
          })}
			<div class="${"p svelte-7u40he"}">${escape("In your mobile wallet accept the request to share credentials with Big Business Corp (you may also add additional credentials that you feel may boost your CV)")}</div>
			${`${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`}
			<div class="${"subtext svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape("Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Looks like you have all the credentials required. Let\u2019s apply for the position and ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `share your credentials.`;
          }
        })}`;
      }
    })}</div>
	<div class="${"sub-text svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the apply now button to share multiple credentials as your digital CV.`;
      }
    })}</div>

	<div class="${"dash svelte-7u40he"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-7u40he"}"><div class="${"left svelte-7u40he"}"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="${""}" class="${"svelte-7u40he"}">

					<div class="${"details"}"><div class="${"heading svelte-7u40he"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--bbc-blue"
          },
          {},
          {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)}`;
            }
          }
        )}</div>

						<div class="${"bars svelte-7u40he"}"><div class="${"bar svelte-7u40he"}"></div>
							<div class="${"bar svelte-7u40he"}"></div>
							<div class="${"bar svelte-7u40he"}"></div></div></div></div>

				<div class="${"right svelte-7u40he"}"><div class="${"heading svelte-7u40he"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--bbc-blue"
          },
          {},
          {
            default: () => {
              return `Application Requirements`;
            }
          }
        )}</div>
					<div class="${"sub-text svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `To apply for this role, applicants are required to share the following credentials`;
          }
        })}</div>
					<div class="${"list svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `National ID`;
          }
        })}</div>
					<div class="${"list svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `KW1C Diploma`;
          }
        })}</div>
					<div class="${"list svelte-7u40he"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Personal Statement`;
          }
        })}</div>

					<div class="${"button-container svelte-7u40he"}"><button class="${"button svelte-7u40he"}">Apply Now</button></div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f705bfaf.js.map
