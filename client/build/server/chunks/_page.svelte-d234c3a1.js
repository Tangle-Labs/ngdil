import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { M as Modal } from './Modal-268b07b6.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { K as Kw1c } from './Kw1c-0e0548f6.js';
import { Q as Qr } from './Qr-59f9ff74.js';
import { a as currNode, g as dominiqueSelectedCourse, h as dominqueCourses } from './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-qlxolw>.svelte-qlxolw{padding:15px 0}.container.svelte-qlxolw .courses.svelte-qlxolw{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between}.container.svelte-qlxolw .courses .course.svelte-qlxolw{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-qlxolw .courses .course .subtext.svelte-qlxolw{padding:20px;padding-bottom:5px}.container.svelte-qlxolw .courses .course .requirements.svelte-qlxolw{padding:0 20px;padding-bottom:20px}.container.svelte-qlxolw .courses .course .title.svelte-qlxolw{padding:0 20px;padding-bottom:20px}.container.svelte-qlxolw .courses .course img.svelte-qlxolw{padding:0;height:160px;object-fit:cover;width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.container.svelte-qlxolw .courses .course .button.svelte-qlxolw{width:100%;display:flex;justify-content:center}.modal-content.svelte-qlxolw.svelte-qlxolw{width:400px;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-qlxolw .p.svelte-qlxolw{color:var(--black-500);font-weight:300}.modal-content.svelte-qlxolw .qr.svelte-qlxolw{width:100%}.modal-content.svelte-qlxolw>.svelte-qlxolw{padding:10px 0}.modal-content.svelte-qlxolw img.svelte-qlxolw{height:120px}.modal-content.svelte-qlxolw .subtext.svelte-qlxolw{width:100%}.modal-content.svelte-qlxolw .checked.svelte-qlxolw{height:60px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let receivedCreds = false;
  let qr;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.received) {
      receivedCreds = true;
    }
  };
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-qlxolw"}"><div class="${"heading svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You’re in! Now let’s ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `take a look at the courses`;
          }
        })}available and select
			the course you wish to study.`;
      }
    })}</div>
	<div class="${"sub-text svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the enrol now button to select the course you wish to study to begin the application
			process.`;
      }
    })}</div>
	${validate_component(Modal, "Modal").$$render(
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
          return `<div class="${"modal-content svelte-qlxolw"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-qlxolw"}">
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
			<div class="${"p svelte-qlxolw"}">${escape(receivedCreds ? "You may continue further in the browser. " : "In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.")}</div>
			${!receivedCreds ? `<div class="${"qr svelte-qlxolw"}">${validate_component(Qr, "Qr").$$render($$result, { data: qr, size: 200 }, {}, {})}</div>` : ``}
			${receivedCreds ? `<img class="${"checked svelte-qlxolw"}" src="${"/imgs/checked.png"}" alt="${""}">
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
			<div class="${"subtext svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-qlxolw"}">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "AVAILABLE COURSES"
      },
      {},
      {
        default: () => {
          return `<div class="${"content"}"><div class="${"courses svelte-qlxolw"}">${each(dominqueCourses, (course, i) => {
            return `<div class="${"course svelte-qlxolw"}"><img${add_attribute("src", course.img, 0)} alt="${""}" class="${"svelte-qlxolw"}">
							<div class="${"subtext svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render(
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
							<div class="${"title svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render(
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

							<div class="${"requirements svelte-qlxolw"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `This course requires the following credentials:`;
              }
            })}
								<ul><li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `National ID`;
              }
            })}</li>
									<li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `School Course Certificate`;
              }
            })}</li>
								</ul></div>

							<div class="${"button svelte-qlxolw"}">${validate_component(Button, "Button").$$render(
              $$result,
              {
                onClick: () => {
                  showModal = true;
                  dominiqueSelectedCourse.set(i);
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
//# sourceMappingURL=_page.svelte-d234c3a1.js.map
