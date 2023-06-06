import { c as create_ssr_component, v as validate_component, e as escape, f as each, d as add_attribute } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { f as dominiqueSelectedCourse, g as dominqueCourses, a as currNode } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-77aq7l>.svelte-77aq7l{padding:15px 0}.container.svelte-77aq7l .courses.svelte-77aq7l{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between}.container.svelte-77aq7l .courses .course.svelte-77aq7l{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-77aq7l .courses .course .subtext.svelte-77aq7l{padding:20px;padding-bottom:5px}.container.svelte-77aq7l .courses .course .title.svelte-77aq7l{padding:0 20px;padding-bottom:20px}.container.svelte-77aq7l .courses .course img.svelte-77aq7l{padding:0;height:160px;object-fit:cover;width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.container.svelte-77aq7l .courses .course .button.svelte-77aq7l{width:100%;display:flex;justify-content:center}.modal-content.svelte-77aq7l.svelte-77aq7l{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-77aq7l .p.svelte-77aq7l{color:var(--black-500);font-weight:300}.modal-content.svelte-77aq7l>.svelte-77aq7l{padding:10px 0}.modal-content.svelte-77aq7l img.svelte-77aq7l{height:120px}.modal-content.svelte-77aq7l .subtext.svelte-77aq7l{width:100%}.modal-content.svelte-77aq7l .checked.svelte-77aq7l{height:60px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let receivedCreds = false;
  function handleWait() {
    setTimeout(
      () => {
        receivedCreds = true;
      },
      8e3
    );
  }
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-77aq7l"}"><div class="${"heading svelte-77aq7l"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You\u2019re in! Now let\u2019s ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `take a look at the courses`;
          }
        })}available and select
			the course you wish to study.`;
      }
    })}</div>
	<div class="${"sub-text svelte-77aq7l"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the enrol now button to select the course you wish to study to begin the application
			process.`;
      }
    })}</div>
	${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-77aq7l"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-77aq7l"}">
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
                return `${escape(receivedCreds ? "KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS." : "KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION")}`;
              }
            }
          )}
			<div class="${"p svelte-77aq7l"}">${escape(receivedCreds ? "You may continue further in the browser. " : "In your mobile wallet accept the request to share the credentials with KW1C to privately send the credentials required.")}</div>
			${receivedCreds ? `<img class="${"checked svelte-77aq7l"}" src="${"/imgs/checked.png"}" alt="${""}">
				${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: "CONTINUE",
              variant: "kw1c",
              onClick: () => {
                currNode.set(2);
                goto("/demo/journeys/dominique/study");
              }
            },
            {},
            {}
          )}` : `${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`}
			<div class="${"subtext svelte-77aq7l"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-77aq7l"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "AVAILABLE COURSES"
      },
      {},
      {
        default: () => {
          return `<div class="${"content"}"><div class="${"courses svelte-77aq7l"}">${each(dominqueCourses, (course, i) => {
            return `<div class="${"course svelte-77aq7l"}"><img${add_attribute("src", course.img, 0)} alt="${""}" class="${"svelte-77aq7l"}">
							<div class="${"subtext svelte-77aq7l"}">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-sub-text",
                fontVariant: "kw1c",
                color: "--kw1c-red-900"
              },
              {},
              {
                default: () => {
                  return `${escape(course.category.toUpperCase())}`;
                }
              }
            )}</div>
							<div class="${"title svelte-77aq7l"}">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape(course.name.toUpperCase())}`;
                }
              }
            )}</div>

							<div class="${"button svelte-77aq7l"}">${validate_component(Button, "Button").$$render(
              $$result,
              {
                onClick: () => {
                  showModal = true;
                  dominiqueSelectedCourse.set(i);
                  handleWait();
                },
                variant: "kw1c",
                label: "ENROL NOW"
              },
              {},
              {}
            )}</div>
						</div>`;
          })}</div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-030bf504.js.map
