import { c as create_ssr_component, f as subscribe, v as validate_component, h as each, d as add_attribute, e as escape, b as null_to_empty } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-86ed361b.js';
import { g as dominiqueSelectedCourse, h as dominqueCourses } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-joamgx>.svelte-joamgx{padding:15px 0}.container.svelte-joamgx .courses.svelte-joamgx{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between}.container.svelte-joamgx .courses .course.svelte-joamgx{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-joamgx .courses .course .subtext.svelte-joamgx{padding:20px;padding-bottom:5px}.container.svelte-joamgx .courses .course .title.svelte-joamgx{padding:10px 20px;text-align:center;padding-bottom:0px}.container.svelte-joamgx .courses .course .bars.svelte-joamgx{width:100%;margin-top:30px}.container.svelte-joamgx .courses .course .bars .bar.svelte-joamgx{height:10px;margin:10px 20%;box-sizing:border-box;border-radius:10px;background-color:var(--white-900)}.container.svelte-joamgx .courses .course .bars .bar.svelte-joamgx:last-of-type{margin:10px 25%}.container.svelte-joamgx .courses .course img.svelte-joamgx{padding:0;width:100%;border-top-right-radius:20px;border-top-left-radius:20px;height:175px;object-fit:cover}.modal-content.svelte-joamgx.svelte-joamgx{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.button.svelte-joamgx.svelte-joamgx{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-joamgx.svelte-joamgx{background:var(--black-300)}.button.disabled.svelte-joamgx.svelte-joamgx:hover{cursor:unset;background:var(--black-300)}.button.svelte-joamgx.svelte-joamgx:hover{cursor:pointer;background:var(--blue-900)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  $$result.css.add(css);
  $$unsubscribe_dominiqueSelectedCourse();
  return `<div class="${"container svelte-joamgx"}"><div class="${"heading svelte-joamgx"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `There are a few jobs available. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let’s select the job to apply`;
        }
      })} for that
			is relevant to our new credential.`;
    }
  })}</div>
	<div class="${"sub-text svelte-joamgx"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Select the job you can now apply for with your new credential`;
    }
  })}</div>

	<div class="${"dash svelte-joamgx"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, { heading: "Big Business Corp Jobs Board" }, {}, {
    default: () => {
      return `<div class="${"content"}"><div class="${"courses svelte-joamgx"}">${each(dominqueCourses, (course, i) => {
        return `<div class="${"course svelte-joamgx"}"><img${add_attribute("src", course.img, 0)} alt="${""}" class="${"svelte-joamgx"}">
							<div class="${"title svelte-joamgx"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--bbc-blue"
          },
          {},
          {
            default: () => {
              return `${escape(course.jobName)}`;
            }
          }
        )}</div>
							<div class="${"bars svelte-joamgx"}"><div class="${"bar svelte-joamgx"}"></div>
								<div class="${"bar svelte-joamgx"}"></div></div>

							<button class="${escape(null_to_empty(`button ${$dominiqueSelectedCourse !== i && "disabled"}`), true) + " svelte-joamgx"}">Apply Now</button>
						</div>`;
      })}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-02a49474.js.map
