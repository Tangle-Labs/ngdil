import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { M as Modal } from './Modal-268b07b6.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse, a as currNode } from './flows.store-72d7210a.js';
import { C as Confetti } from './Confetti-c29a6534.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-pu9wmb>.svelte-pu9wmb{padding:15px 0}.container.svelte-pu9wmb .dashboard.svelte-pu9wmb{padding:50px 15%}.container.svelte-pu9wmb .dashboard .details.svelte-pu9wmb{padding-top:20px;display:flex;align-items:center;align-content:center;width:100%;justify-content:space-between}.container.svelte-pu9wmb .dashboard .cards.svelte-pu9wmb{width:100%;display:flex;justify-content:space-between;padding-top:30px}.container.svelte-pu9wmb .dashboard .cards .card.svelte-pu9wmb{padding:20px;box-sizing:border-box;width:23%;border-radius:15px;background:white;height:fit-content;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-pu9wmb .dashboard .cards .card .dash.svelte-pu9wmb{height:20px;background:var(--white-900);border-radius:5px;margin-bottom:10px}.container.svelte-pu9wmb .dashboard .cards .card .red-dash.svelte-pu9wmb{height:15px;background:var(--red-700);width:60%}.container.svelte-pu9wmb .dashboard .cards .card .blue-dash.svelte-pu9wmb{background:var(--blue-700)}.container.svelte-pu9wmb .dashboard .cards .card .gray-dash.svelte-pu9wmb{height:14px;width:85%}.container.svelte-pu9wmb .dashboard .cards .card .gray-dash.svelte-pu9wmb:nth-last-of-type(2){width:70%}.button.svelte-pu9wmb.svelte-pu9wmb{width:250px;display:flex;justify-content:flex-end}.modal-content.svelte-pu9wmb.svelte-pu9wmb{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-pu9wmb>.svelte-pu9wmb{padding:10px 0}.modal-content.svelte-pu9wmb .p.svelte-pu9wmb{color:var(--black-500);font-weight:300}.modal-content.svelte-pu9wmb img.svelte-pu9wmb{height:120px}.modal-content.svelte-pu9wmb .button.svelte-pu9wmb{width:100%;margin-top:20px}.modal-content.svelte-pu9wmb .loading.svelte-pu9wmb{width:100%}.modal-content.svelte-pu9wmb .subtext.svelte-pu9wmb{width:100%}.modal-content.svelte-pu9wmb .checked.svelte-pu9wmb{height:60px}.modal-content.svelte-pu9wmb .button.svelte-pu9wmb{justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let progress = 0;
  let studied = false;
  let showModal = false;
  let receivedCreds = false;
  const handleStudy = () => {
    currNode.set(3);
    studied = true;
    const counting = setInterval(
      () => {
        if (progress > 100)
          clearInterval(counting);
        progress = progress < 100 ? progress + 1 : progress;
      },
      1
    );
  };
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.creds) {
      receivedCreds = true;
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-pu9wmb"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: 16, isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-pu9wmb"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-pu9wmb"}">
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
			<div class="${"p svelte-pu9wmb"}">${escape(receivedCreds ? "This is now visible in your wallet and free for you to share with anyone, at any time. " : "In your mobile wallet scan the QR and accept the credential from KW1C to receive your new qualification.")}</div>
			${receivedCreds ? `<img class="${"checked svelte-pu9wmb"}" src="${"/imgs/checked.png"}" alt="${""}">
				<div class="${"button svelte-pu9wmb"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: "CONTINUE",
              variant: "kw1c",
              onClick: () => goto("/demo/journeys/dominique/finished-course")
            },
            {},
            {}
          )}</div>` : `${``}`}
			<div class="${"subtext svelte-pu9wmb"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click Continue to proceed" : "Awaiting credential acceptance...")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-pu9wmb"}">${studied ? `${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Hightlight").$$render($$result, {}, {}, {
          default: () => {
            return `Exciting times. You have completed your course`;
          }
        })}with top marks. Let’s
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
	<div class="${"sub-text svelte-pu9wmb"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${studied ? `Click the get credential button to receive your credential from KW1C.
			` : `Click the start studying button to continue and complete the course.
			`}`;
      }
    })}</div>
	${studied ? `<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}" class="${"svelte-pu9wmb"}">${validate_component(Confetti, "Confetti").$$render(
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
	<div class="${"dash-outer svelte-pu9wmb"}">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="${"dashboard svelte-pu9wmb"}"><div class="${"title"}">${validate_component(Typography, "Typography").$$render(
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
				<div class="${"details svelte-pu9wmb"}"><div class="${"text"}"><div class="${"category"}">${validate_component(Typography, "Typography").$$render(
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
					<div class="${"button svelte-pu9wmb"}">${studied ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: "GET CREDENTIAL",
            onClick: () => {
              showModal = true;
            }
          },
          {},
          {}
        )}` : `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: "START STUDYING",
            onClick: handleStudy
          },
          {},
          {}
        )}`}</div></div>
				<div class="${"cards svelte-pu9wmb"}">${each(Array(4), (i) => {
          return `<div class="${"card svelte-pu9wmb"}"><div class="${"dash red-dash svelte-pu9wmb"}"></div>
							<div class="${"dash blue-dash svelte-pu9wmb"}"></div>
							<div class="${"dash gray-dash svelte-pu9wmb"}"></div>
							<div class="${"dash gray-dash svelte-pu9wmb"}"></div>
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
//# sourceMappingURL=_page.svelte-f1a6f0fb.js.map
