import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-86ed361b.js';
import { a as currNode, h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import { C as Confetti } from './Confetti-c29a6534.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-10jyki1>.svelte-10jyki1.svelte-10jyki1{padding:15px 0}.container.svelte-10jyki1 .dash .card.svelte-10jyki1.svelte-10jyki1{margin:0px 10%;background:white;border-radius:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;transform:translateY(30px)}.container.svelte-10jyki1 .dash .card .left.svelte-10jyki1.svelte-10jyki1{padding-right:10px;width:70%}.container.svelte-10jyki1 .dash .card .left img.svelte-10jyki1.svelte-10jyki1{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-10jyki1 .dash .card .left .heading.svelte-10jyki1.svelte-10jyki1{padding:20px}.container.svelte-10jyki1 .dash .card .left .bars.svelte-10jyki1.svelte-10jyki1{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-10jyki1 .dash .card .left .bars .bar.svelte-10jyki1.svelte-10jyki1{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-10jyki1 .dash .card .right.svelte-10jyki1.svelte-10jyki1{padding:20px}.container.svelte-10jyki1 .dash .card .right.svelte-10jyki1>.svelte-10jyki1{padding:10px 0}.modal-header.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-10jyki1 img.svelte-10jyki1.svelte-10jyki1{height:30px;padding-bottom:5px}.modal-header.svelte-10jyki1>.logo-text.svelte-10jyki1.svelte-10jyki1{width:100%;text-align:center}.modal-content.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-10jyki1>.svelte-10jyki1.svelte-10jyki1{padding:10px 0}.modal-content.svelte-10jyki1 img.svelte-10jyki1.svelte-10jyki1{height:60px}.modal-content.svelte-10jyki1 .p.svelte-10jyki1.svelte-10jyki1{color:var(--black-500);width:100%}.modal-content.svelte-10jyki1 .subtext.svelte-10jyki1.svelte-10jyki1,.modal-content.svelte-10jyki1 .loading.svelte-10jyki1.svelte-10jyki1{width:100%}.modal-content.svelte-10jyki1 .checked.svelte-10jyki1.svelte-10jyki1{height:60px}.button-container.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{width:50%}.button-container.svelte-10jyki1 .button.svelte-10jyki1.svelte-10jyki1{margin:20px 0}.button.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1:hover{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let showModal = false;
  let receivedCreds = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.creds) {
      currNode.set(5);
      receivedCreds = true;
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-10jyki1"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        withoutPadding: true,
        borderRadius: 16,
        isOpen: showModal
      },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-header svelte-10jyki1"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"logo svelte-10jyki1"}">
			<div class="${"logo-text svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render(
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
		<div class="${"modal-content svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape(receivedCreds ? "You have accepted the following credential:" : "Big Business Corp Staff ID")}`;
              }
            }
          )}
			<div class="${"p svelte-10jyki1"}">${escape(receivedCreds ? "Big Business Corp Staff ID" : "In your mobile wallet scan the QR and accept the credential from Big Business Corp.")}</div>
			${receivedCreds ? `<img class="${"checked svelte-10jyki1"}" src="${"/imgs/check-circle.png"}" alt="${""}">
				<button class="${"button svelte-10jyki1"}">Continue</button>` : `${``}`}
			<div class="${"subtext svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Awaiting on confirmation")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `You’ve got the job! Congratulations,`;
          }
        })} Big Business Corp now wants to issue
			you with your staff ID.`;
      }
    })}</div>
	<div class="${"sub-text svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the get staff ID button to receive your staff ID credential from Big Business Corp.`;
      }
    })}</div>
	<div style="${"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"}" class="${"svelte-10jyki1"}">${validate_component(Confetti, "Confetti").$$render(
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
    )}</div>

	<div class="${"dash svelte-10jyki1"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render(
      $$result,
      {
        heading: "Congratulations! You got the job"
      },
      {},
      {
        default: () => {
          return `<div class="${"card svelte-10jyki1"}"><div class="${"left svelte-10jyki1"}"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="${""}" class="${"svelte-10jyki1"}">

					<div class="${"details"}"><div class="${"heading svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render(
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

						<div class="${"bars svelte-10jyki1"}"><div class="${"bar svelte-10jyki1"}"></div>
							<div class="${"bar svelte-10jyki1"}"></div>
							<div class="${"bar svelte-10jyki1"}"></div></div></div></div>

				<div class="${"right svelte-10jyki1"}"><div class="${"heading svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render(
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
					<div class="${"sub-text svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `Big Business Corp would like to welcome you to the team and send you the following
							credential:`;
            }
          })}</div>
					<div class="${"list svelte-10jyki1"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `Big Business Corp Staff ID`;
            }
          })}</div>

					<div class="${"button-container svelte-10jyki1"}"><button class="${"button svelte-10jyki1"}">Get Staff ID</button></div></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a25797d4.js.map
