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
  code: ".container.svelte-14n9qyr>.svelte-14n9qyr.svelte-14n9qyr{padding:15px 0}.container.svelte-14n9qyr .dash .card.svelte-14n9qyr.svelte-14n9qyr{margin:0px 10%;background:white;border-radius:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;transform:translateY(30px)}.container.svelte-14n9qyr .dash .card .left.svelte-14n9qyr.svelte-14n9qyr{padding-right:10px;width:50%}.container.svelte-14n9qyr .dash .card .left img.svelte-14n9qyr.svelte-14n9qyr{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-14n9qyr .dash .card .left .heading.svelte-14n9qyr.svelte-14n9qyr{padding:20px}.container.svelte-14n9qyr .dash .card .left .bars.svelte-14n9qyr.svelte-14n9qyr{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-14n9qyr .dash .card .left .bars .bar.svelte-14n9qyr.svelte-14n9qyr{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-14n9qyr .dash .card .right.svelte-14n9qyr.svelte-14n9qyr{padding:20px}.container.svelte-14n9qyr .dash .card .right.svelte-14n9qyr>.svelte-14n9qyr{padding:10px 0}.modal-header.svelte-14n9qyr.svelte-14n9qyr.svelte-14n9qyr{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-14n9qyr img.svelte-14n9qyr.svelte-14n9qyr{height:30px;padding-bottom:5px}.modal-header.svelte-14n9qyr>.logo-text.svelte-14n9qyr.svelte-14n9qyr{width:100%;text-align:center}.modal-content.svelte-14n9qyr.svelte-14n9qyr.svelte-14n9qyr{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-14n9qyr>.svelte-14n9qyr.svelte-14n9qyr{padding:10px 0}.modal-content.svelte-14n9qyr img.svelte-14n9qyr.svelte-14n9qyr{height:60px}.modal-content.svelte-14n9qyr .p.svelte-14n9qyr.svelte-14n9qyr{color:var(--black-500)}.modal-content.svelte-14n9qyr .subtext.svelte-14n9qyr.svelte-14n9qyr{width:100%}.modal-content.svelte-14n9qyr .checked.svelte-14n9qyr.svelte-14n9qyr{height:60px}.button-container.svelte-14n9qyr.svelte-14n9qyr.svelte-14n9qyr{width:50%}.button-container.svelte-14n9qyr .button.svelte-14n9qyr.svelte-14n9qyr{margin:20px 0}.button.svelte-14n9qyr.svelte-14n9qyr.svelte-14n9qyr{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:12px;margin-bottom:0;transition:0.5s all}.button.svelte-14n9qyr.svelte-14n9qyr.svelte-14n9qyr:hover{cursor:pointer;background:var(--blue-900)}",
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
    $$rendered = `<div class="${"container svelte-14n9qyr"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-header svelte-14n9qyr"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"logo svelte-14n9qyr"}">
			<div class="${"logo-text svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render(
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
		<div class="${"modal-content svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape("Big Business Corp Staff ID")}`;
            }
          })}
			<div class="${"p svelte-14n9qyr"}">${escape("In your mobile wallet accept the credential from Big Business Corp.")}</div>
			${`${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`}
			<div class="${"subtext svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape("Awaiting on confirmation")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `You\u2019ve got the job! Congratulations,`;
          }
        })} Big Business Corp now wants to issue
			you with your staff ID.`;
      }
    })}</div>
	<div class="${"sub-text svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the get staff ID button to receive your staff ID credential from Big Business Corp.`;
      }
    })}</div>

	<div class="${"dash svelte-14n9qyr"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"card svelte-14n9qyr"}"><div class="${"left svelte-14n9qyr"}"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="${""}" class="${"svelte-14n9qyr"}">

					<div class="${"details"}"><div class="${"heading svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render(
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

						<div class="${"bars svelte-14n9qyr"}"><div class="${"bar svelte-14n9qyr"}"></div>
							<div class="${"bar svelte-14n9qyr"}"></div>
							<div class="${"bar svelte-14n9qyr"}"></div></div></div></div>

				<div class="${"right svelte-14n9qyr"}"><div class="${"heading svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--bbc-blue"
          },
          {},
          {
            default: () => {
              return `Dominique Veritas`;
            }
          }
        )}</div>
					<div class="${"sub-text svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Big Business Corp would like to welcome you to the team and send you the following
							credential:`;
          }
        })}</div>
					<div class="${"list svelte-14n9qyr"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Big Business Corp Staff ID`;
          }
        })}</div>

					<div class="${"button-container svelte-14n9qyr"}"><button class="${"button svelte-14n9qyr"}">Get Staff ID</button></div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c5fb23a6.js.map
