import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { M as Modal } from './Modal-de587996.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { Q as Qr } from './Qr-fe109a8a.js';
import { a as currNode, g as dominiqueSelectedCourse, h as dominqueCourses } from './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-qlxolw>.svelte-qlxolw{padding:15px 0}.container.svelte-qlxolw .courses.svelte-qlxolw{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between}.container.svelte-qlxolw .courses .course.svelte-qlxolw{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-qlxolw .courses .course .subtext.svelte-qlxolw{padding:20px;padding-bottom:5px}.container.svelte-qlxolw .courses .course .requirements.svelte-qlxolw{padding:0 20px;padding-bottom:20px}.container.svelte-qlxolw .courses .course .title.svelte-qlxolw{padding:0 20px;padding-bottom:20px}.container.svelte-qlxolw .courses .course img.svelte-qlxolw{padding:0;height:160px;object-fit:cover;width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.container.svelte-qlxolw .courses .course .button.svelte-qlxolw{width:100%;display:flex;justify-content:center}.modal-content.svelte-qlxolw.svelte-qlxolw{width:400px;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-qlxolw .p.svelte-qlxolw{color:var(--black-500);font-weight:300}.modal-content.svelte-qlxolw .qr.svelte-qlxolw{width:100%}.modal-content.svelte-qlxolw>.svelte-qlxolw{padding:10px 0}.modal-content.svelte-qlxolw img.svelte-qlxolw{height:120px}.modal-content.svelte-qlxolw .subtext.svelte-qlxolw{width:100%}.modal-content.svelte-qlxolw .checked.svelte-qlxolw{height:60px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .courses {\\n  width: 90%;\\n  display: flex;\\n  transform: translate(6%, 10%);\\n  justify-content: space-between;\\n}\\n.container .courses .course {\\n  width: 32%;\\n  box-sizing: border-box;\\n  background: white;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  padding-bottom: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .courses .course .subtext {\\n  padding: 20px;\\n  padding-bottom: 5px;\\n}\\n.container .courses .course .requirements {\\n  padding: 0 20px;\\n  padding-bottom: 20px;\\n}\\n.container .courses .course .title {\\n  padding: 0 20px;\\n  padding-bottom: 20px;\\n}\\n.container .courses .course img {\\n  padding: 0;\\n  height: 160px;\\n  object-fit: cover;\\n  width: 100%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n}\\n.container .courses .course .button {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content .qr {\\n  width: 100%;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet receivedCreds = false;\\nlet qr;\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.received) {\\n        receivedCreds = true;\\n    }\\n};\\nlet showModal = false;\\nonMount(async () => {\\n    currNode.set(1);\\n    const { data: { uri } } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"dominiqueEnrolCourse\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/kw1c-white.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = uri;\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You’re in! Now let’s <Highlight>take a look at the courses</Highlight>available and select\\n\\t\\t\\tthe course you wish to study.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the enrol now button to select the course you wish to study to begin the application\\n\\t\\t\\tprocess.</Typography>\\n\\t</div>\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? \\"KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS.\\"\\n\\t\\t\\t\\t\\t: \\"KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION\\"}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? \\"You may continue further in the browser. \\"\\n\\t\\t\\t\\t\\t: \\"In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.\\"}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if !receivedCreds}\\n\\t\\t\\t\\t<div class=\\"qr\\">\\n\\t\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tlabel=\\"CONTINUE\\"\\n\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tcurrNode.set(2);\\n\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/dominique/study');\\n\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds ? \\"Click continue to proceed\\" : \\"Waiting for credentials\\"}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{'AVAILABLE COURSES'}\\">\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"courses\\">\\n\\t\\t\\t\\t\\t{#each dominqueCourses as course, i (course.name)}\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"{course.img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{course.category.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{course.name.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"requirements\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography>This course requires the following credentials:</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><Typography>National ID</Typography></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><Typography>School Course Certificate</Typography></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdominiqueSelectedCourse.set(i);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"ENROL NOW\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,sBAAS,CAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,GAAG,CAAC,CAC7B,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAAI,CACpB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,sBAAS,CACnC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,2BAAc,CACxC,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,oBAAO,CACjC,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,iBAAI,CAC9B,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAC1B,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,qBAAQ,CAClC,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CAEA,0CAAe,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,4BAAc,CAAC,gBAAG,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CACA,4BAAc,CAAC,iBAAI,CACjB,KAAK,CAAE,IACT,CACA,4BAAc,CAAG,cAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,4BAAc,CAAC,iBAAI,CACjB,MAAM,CAAE,KACV,CACA,4BAAc,CAAC,sBAAS,CACtB,KAAK,CAAE,IACT,CACA,4BAAc,CAAC,sBAAS,CACtB,MAAM,CAAE,IACV"}`
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-qlxolw"><div class="heading svelte-qlxolw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You’re in! Now let’s ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `take a look at the courses`;
          }
        })}available and select
			the course you wish to study.`;
      }
    })}</div> <div class="sub-text svelte-qlxolw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the enrol now button to select the course you wish to study to begin the application
			process.`;
      }
    })}</div> ${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-qlxolw"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-qlxolw"> ${validate_component(Typography, "Typography").$$render(
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
          )} <div class="p svelte-qlxolw">${escape(receivedCreds ? "You may continue further in the browser. " : "In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.")}</div> ${!receivedCreds ? `<div class="qr svelte-qlxolw">${validate_component(Qr, "Qr").$$render($$result, { data: qr, size: 200 }, {}, {})}</div>` : ``} ${receivedCreds ? `<img class="checked svelte-qlxolw" src="/imgs/checked.png" alt=""> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: "CONTINUE",
              variant: "kw1c",
              onClick: () => {
                currNode.set(2);
                goto();
              }
            },
            {},
            {}
          )}` : `${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`} <div class="subtext svelte-qlxolw">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="dash svelte-qlxolw">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "AVAILABLE COURSES"
      },
      {},
      {
        default: () => {
          return `<div class="content"><div class="courses svelte-qlxolw">${each(dominqueCourses, (course, i) => {
            return `<div class="course svelte-qlxolw"><img${add_attribute("src", course.img, 0)} alt="" class="svelte-qlxolw"> <div class="subtext svelte-qlxolw">${validate_component(Typography, "Typography").$$render(
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
            )}</div> <div class="title svelte-qlxolw">${validate_component(Typography, "Typography").$$render(
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
            )}</div> <div class="requirements svelte-qlxolw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `This course requires the following credentials:`;
              }
            })} <ul><li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `National ID`;
              }
            })}</li> <li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `School Course Certificate`;
              }
            })}</li> </ul></div> <div class="button svelte-qlxolw">${validate_component(Button, "Button").$$render(
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
            )}</div> </div>`;
          })}</div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5f7e20d8.js.map
