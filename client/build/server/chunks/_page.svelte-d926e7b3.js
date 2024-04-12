import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-86ed361b.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-b8xejm>.svelte-b8xejm.svelte-b8xejm{padding:15px 0}.container.svelte-b8xejm .dash .card.svelte-b8xejm.svelte-b8xejm{margin:0px 10%;background:white;border-radius:20px;display:flex;transform:translateY(30px);filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-b8xejm .dash .card .left.svelte-b8xejm.svelte-b8xejm{padding-right:10px;width:60%}.container.svelte-b8xejm .dash .card .left img.svelte-b8xejm.svelte-b8xejm{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-b8xejm .dash .card .left .heading.svelte-b8xejm.svelte-b8xejm{padding:20px}.container.svelte-b8xejm .dash .card .left .bars.svelte-b8xejm.svelte-b8xejm{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-b8xejm .dash .card .left .bars .bar.svelte-b8xejm.svelte-b8xejm{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-b8xejm .dash .card .right.svelte-b8xejm.svelte-b8xejm{padding:20px}.container.svelte-b8xejm .dash .card .right.svelte-b8xejm>.svelte-b8xejm{padding:10px 0}.modal-header.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-b8xejm img.svelte-b8xejm.svelte-b8xejm{height:30px;padding-bottom:5px}.modal-header.svelte-b8xejm>.logo-text.svelte-b8xejm.svelte-b8xejm{width:100%;text-align:center}.modal-content.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-b8xejm>.svelte-b8xejm.svelte-b8xejm{padding:10px 0}.modal-content.svelte-b8xejm .p.svelte-b8xejm.svelte-b8xejm{color:var(--black-500);font-weight:300}.modal-content.svelte-b8xejm img.svelte-b8xejm.svelte-b8xejm{height:60px}.modal-content.svelte-b8xejm .subtext.svelte-b8xejm.svelte-b8xejm{width:100%}.modal-content.svelte-b8xejm .checked.svelte-b8xejm.svelte-b8xejm{height:60px}.modal-content.svelte-b8xejm .loading.svelte-b8xejm.svelte-b8xejm{width:100%}.button-container.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{width:50%}.button-container.svelte-b8xejm .button.svelte-b8xejm.svelte-b8xejm{margin:20px 0}.button.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);font-weight:500;margin:20px;box-sizing:border-box;border-radius:40px;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm:hover{cursor:pointer}",
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
    if (data.received) {
      receivedCreds = true;
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-b8xejm"}">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-header svelte-b8xejm"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"logo svelte-b8xejm"}">
			<div class="${"logo-text svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render(
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
		<div class="${"modal-content svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape(receivedCreds ? "Your application via digital CV has been received by Big Business Corp!" : "Big Business Corp is requesting you share your digital CV.")}`;
              }
            }
          )}
			<div class="${"p svelte-b8xejm"}">${escape(receivedCreds ? "You may continue further in your browser." : "In your mobile wallet scan the QR accept the request to share credentials with Big Business Corp ")}</div>

			${receivedCreds ? `<img class="${"checked svelte-b8xejm"}" src="${"/imgs/check-circle.png"}" alt="${""}">
				<button class="${"button svelte-b8xejm"}">Continue</button>` : `${``}`}
			<div class="${"subtext svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"heading svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Looks like you have all the credentials required. Let’s apply for the position and ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `share your credentials.`;
          }
        })}`;
      }
    })}</div>
	<div class="${"sub-text svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the apply now button to share multiple credentials as your digital CV.`;
      }
    })}</div>

	<div class="${"dash svelte-b8xejm"}">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, { heading: "Big Business Corp Jobs Board" }, {}, {
      default: () => {
        return `<div class="${"card svelte-b8xejm"}"><div class="${"left svelte-b8xejm"}"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="${""}" class="${"svelte-b8xejm"}">

					<div class="${"details"}"><div class="${"heading svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render(
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

						<div class="${"bars svelte-b8xejm"}"><div class="${"bar svelte-b8xejm"}"></div>
							<div class="${"bar svelte-b8xejm"}"></div>
							<div class="${"bar svelte-b8xejm"}"></div></div></div></div>

				<div class="${"right svelte-b8xejm"}"><div class="${"heading svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render(
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
					<div class="${"sub-text svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `To apply for this role, applicants are required to share the following credentials:`;
          }
        })}</div>
					<div class="${"list svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `National ID`;
          }
        })}</div>
					<div class="${"list svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `KW1C Diploma`;
          }
        })}</div>
					<div class="${"list svelte-b8xejm"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)} Certificate`;
          }
        })}</div>

					<div class="${"button-container svelte-b8xejm"}"><button class="${"button svelte-b8xejm"}">Apply Now</button></div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d926e7b3.js.map
