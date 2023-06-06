import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as each } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { K as Kw1c } from './Kw1c-c981d846.js';
import { g as dominqueCourses, a as currNode, f as dominiqueSelectedCourse } from './flows.store-b2e554df.js';
import { C as Confetti } from './Confetti-2acc7c5b.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1dv1rmr>.svelte-1dv1rmr{padding:15px 0}.container.svelte-1dv1rmr .dashboard.svelte-1dv1rmr{padding:50px 15%}.container.svelte-1dv1rmr .dashboard .details.svelte-1dv1rmr{padding-top:20px;display:flex;align-items:center;align-content:center;width:100%;justify-content:space-between}.container.svelte-1dv1rmr .dashboard .cards.svelte-1dv1rmr{width:100%;display:flex;justify-content:space-between;padding-top:30px}.container.svelte-1dv1rmr .dashboard .cards .card.svelte-1dv1rmr{padding:20px;box-sizing:border-box;width:23%;border-radius:15px;background:white;height:fit-content;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-1dv1rmr .dashboard .cards .card .dash.svelte-1dv1rmr{height:20px;background:var(--white-900);border-radius:5px;margin-bottom:10px}.container.svelte-1dv1rmr .dashboard .cards .card .red-dash.svelte-1dv1rmr{height:15px;background:var(--red-700);width:60%}.container.svelte-1dv1rmr .dashboard .cards .card .blue-dash.svelte-1dv1rmr{background:var(--blue-700)}.container.svelte-1dv1rmr .dashboard .cards .card .gray-dash.svelte-1dv1rmr{height:14px;width:85%}.container.svelte-1dv1rmr .dashboard .cards .card .gray-dash.svelte-1dv1rmr:nth-last-of-type(2){width:70%}.button.svelte-1dv1rmr.svelte-1dv1rmr{width:250px;display:flex;justify-content:flex-end}.modal-content.svelte-1dv1rmr.svelte-1dv1rmr{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1dv1rmr>.svelte-1dv1rmr{padding:10px 0}.modal-content.svelte-1dv1rmr .p.svelte-1dv1rmr{color:var(--black-500);font-weight:300}.modal-content.svelte-1dv1rmr img.svelte-1dv1rmr{height:120px}.modal-content.svelte-1dv1rmr .button.svelte-1dv1rmr{width:100%;margin-top:20px}.modal-content.svelte-1dv1rmr .subtext.svelte-1dv1rmr{width:100%}.modal-content.svelte-1dv1rmr .checked.svelte-1dv1rmr{height:60px}.modal-content.svelte-1dv1rmr .button.svelte-1dv1rmr{justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let progress = 0;
  let studied = false;
  let showModal = false;
  let receivedCreds = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1dv1rmr"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-1dv1rmr"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-1dv1rmr"}">
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
                return `${escape(receivedCreds ? "YOU HAVE RECEIVED & ACCEPTED YOUR NEW COURSE CREDENTIAL." : "KW1C HAS SENT YOU A NEW COURSE CREDENTIAL")}`;
              }
            }
          )}
			<div class="${"p svelte-1dv1rmr"}">${escape(receivedCreds ? "This is now visible in your wallet and free for you to share with anyone, at any time. " : "In your mobile wallet accept the credential from KW1C to receive your new qualification.")}</div>
			${receivedCreds ? `<img class="${"checked svelte-1dv1rmr"}" src="${"/imgs/checked.png"}" alt="${""}">
				<div class="${"button svelte-1dv1rmr"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: "CONTINUE",
              variant: "kw1c",
              onClick: () => goto("/demo/journeys/dominique/finished-course")
            },
            {},
            {}
          )}</div>` : `${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`}
			<div class="${"subtext svelte-1dv1rmr"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click Continue to proceed" : "Awaiting credential acceptance...")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-1dv1rmr"}">${studied ? `${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `Exciting times. You have completed your course`;
          }
        })}with top marks. Let\u2019s
				get your credential.
			`;
      }
    })}` : `${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Congratulations. ${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `You have been accepted`;
          }
        })} on the course. Now you need
				to complete your studies.`;
      }
    })}`}</div>
	<div class="${"sub-text svelte-1dv1rmr"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${studied ? `Click the get credential button to receive your credential from KW1C.
			` : `Click the start studying button to continue and complete the course.
			`}`;
      }
    })}</div>
	${studied ? `<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}" class="${"svelte-1dv1rmr"}">${validate_component(Confetti, "Confetti").$$render(
      $$result,
      {
        x: [-5, 5],
        y: [0, 0.1],
        delay: [500, 5e3],
        duration: "2000",
        amount: "500",
        fallDistance: "100vh"
      },
      {},
      {}
    )}</div>` : ``}
	<div class="${"dash-outer svelte-1dv1rmr"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="${"dashboard svelte-1dv1rmr"}"><div class="${"title"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape(studied ? "CONGRATULATIONS DOMINIQUE, YOU HAVE COMPLETED YOUR COURSE!" : "HELLO DOMINIQUE, WELCOME TO YOUR NEW COURSE")}`;
            }
          }
        )}</div>
				<div class="${"details svelte-1dv1rmr"}"><div class="${"text"}"><div class="${"category"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].category.toUpperCase())}`;
            }
          }
        )}</div>
						<div class="${"course"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].name.toUpperCase())}`;
            }
          }
        )}</div></div>
					<div class="${"button svelte-1dv1rmr"}">${studied ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: "GET CREDENTIAL",
            onClick: () => {
              showModal = true;
              setTimeout(
                () => {
                  currNode.set(4);
                  receivedCreds = true;
                },
                9e3
              );
            }
          },
          {},
          {}
        )}` : `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: "START STUDYING",
            onClick: () => {
              currNode.set(3);
              studied = true;
              progress = 100;
            }
          },
          {},
          {}
        )}`}</div></div>
				<div class="${"cards svelte-1dv1rmr"}">${each(Array(4), (i) => {
          return `<div class="${"card svelte-1dv1rmr"}"><div class="${"dash red-dash svelte-1dv1rmr"}"></div>
							<div class="${"dash blue-dash svelte-1dv1rmr"}"></div>
							<div class="${"dash gray-dash svelte-1dv1rmr"}"></div>
							<div class="${"dash gray-dash svelte-1dv1rmr"}"></div>
							<div class="${"progress"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "status",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape(progress)}%`;
              }
            }
          )}</div>
						</div>`;
        })}</div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aa3ad7ac.js.map
