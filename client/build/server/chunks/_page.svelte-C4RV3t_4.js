import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, f as add_attribute } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { L as Loading } from './Loading-Dqtoqnil.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { g as eventUri, h as dominiqueSelectedCourse, i as dominqueCourses } from './flows.store-Ch_DhNys.js';
import './axios.utils-CIq7LE2y.js';
import '@tanglelabs/open-id-qr';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".container.svelte-ptq6nv>.svelte-ptq6nv{padding:15px 0}.container.svelte-ptq6nv .courses.svelte-ptq6nv{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between;padding-bottom:25px}.container.svelte-ptq6nv .courses .course.svelte-ptq6nv{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-ptq6nv .courses .course .subtext.svelte-ptq6nv{padding:20px;padding-bottom:5px}.container.svelte-ptq6nv .courses .course .requirements.svelte-ptq6nv{padding:0 20px;padding-bottom:20px}.container.svelte-ptq6nv .courses .course .title.svelte-ptq6nv{padding:0 20px;padding-bottom:20px}.container.svelte-ptq6nv .courses .course img.svelte-ptq6nv{padding:0;height:160px;object-fit:cover;width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.container.svelte-ptq6nv .courses .course .button.svelte-ptq6nv{width:100%;display:flex;justify-content:center}.modal-content.svelte-ptq6nv.svelte-ptq6nv{width:400px;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center;flex-direction:column;align-items:center}.modal-content.svelte-ptq6nv .p.svelte-ptq6nv{color:var(--black-500);font-weight:300}.modal-content.svelte-ptq6nv .qr.svelte-ptq6nv{width:100%}.modal-content.svelte-ptq6nv>.svelte-ptq6nv{padding:10px 0}.modal-content.svelte-ptq6nv img.svelte-ptq6nv{height:120px}.modal-content.svelte-ptq6nv .subtext.svelte-ptq6nv{width:100%}.modal-content.svelte-ptq6nv .checked.svelte-ptq6nv{height:60px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .courses {\\n  width: 90%;\\n  display: flex;\\n  transform: translate(6%, 10%);\\n  justify-content: space-between;\\n  padding-bottom: 25px;\\n}\\n.container .courses .course {\\n  width: 32%;\\n  box-sizing: border-box;\\n  background: white;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  padding-bottom: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .courses .course .subtext {\\n  padding: 20px;\\n  padding-bottom: 5px;\\n}\\n.container .courses .course .requirements {\\n  padding: 0 20px;\\n  padding-bottom: 20px;\\n}\\n.container .courses .course .title {\\n  padding: 0 20px;\\n  padding-bottom: 20px;\\n}\\n.container .courses .course img {\\n  padding: 0;\\n  height: 160px;\\n  object-fit: cover;\\n  width: 100%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n}\\n.container .courses .course .button {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content .qr {\\n  width: 100%;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, Button } from \\"$lib/components\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nlet receivedCreds = false;\\nlet qr;\\nlet showModal = false;\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vp\\")\\n            receivedCreds = true;\\n    });\\n}\\nonMount(async () => {\\n    currNode.set(1);\\n    const { data: { uri } } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"dominiqueEnrolCourse\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/kw1c-white.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Koning Willem I College\\"\\n        }\\n    });\\n    qr = uri;\\n});\\n$: watchQr(qr);\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.select_course\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>{$_(\\"journeys.dominique.click_to_enroll\\")}</Typography>\\n\\t</div>\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.kw1c_recieved_cred\\").toUpperCase()\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.kw1c_requesting_cred\\").toUpperCase()}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.continue_further_in_browser\\")\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.scan_qr_and_accept_request\\")}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if !receivedCreds}\\n\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t<div class=\\"qr\\">\\n\\t\\t\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" size=\\"{200}\\" event-stream-uri=\\"{$eventUri}\\"\\n\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue').toUpperCase()}\\"\\n\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tcurrNode.set(2);\\n\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/dominique/study');\\n\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.click_to_proceed\\")\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.waiting_for_creds\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{$_('journeys.dominique.available_courses').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"courses\\">\\n\\t\\t\\t\\t\\t{#each dominqueCourses as course, i (course.name)}\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"{course.img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{course.category.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{course.name.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"requirements\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography>{$_(\\"journeys.dominique.creds_required\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><Typography>{$_(\\"creds.national_id\\")}</Typography></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<li><Typography>{$_(\\"creds.school_course_certificate\\")}</Typography></li>\\n\\t\\t\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdominiqueSelectedCourse.set(i);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.enroll_now').toUpperCase()}\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,sBAAS,CAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,GAAG,CAAC,CAC7B,eAAe,CAAE,aAAa,CAC9B,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAAI,CACpB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,sBAAS,CACnC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,2BAAc,CACxC,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,oBAAO,CACjC,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,iBAAI,CAC9B,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAC1B,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,qBAAQ,CAClC,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CAEA,0CAAe,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CACA,4BAAc,CAAC,gBAAG,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CACA,4BAAc,CAAC,iBAAI,CACjB,KAAK,CAAE,IACT,CACA,4BAAc,CAAG,cAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,4BAAc,CAAC,iBAAI,CACjB,MAAM,CAAE,KACV,CACA,4BAAc,CAAC,sBAAS,CACtB,KAAK,CAAE,IACT,CACA,4BAAc,CAAC,sBAAS,CACtB,MAAM,CAAE,IACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $$unsubscribe_eventUri;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-ptq6nv"><div class="heading svelte-ptq6nv">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.select_course"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-ptq6nv">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.click_to_enroll"))}`;
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
          return `<div class="modal-content svelte-ptq6nv"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-ptq6nv"> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.dominique.kw1c_requesting_cred").toUpperCase())}`;
              }
            }
          )} <div class="p svelte-ptq6nv">${escape($_("journeys.dominique.scan_qr_and_accept_request"))}</div> ${`${``}`} ${`${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`} <div class="subtext svelte-ptq6nv">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.waiting_for_creds"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="dash svelte-ptq6nv">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: $_("journeys.dominique.available_courses").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<div class="content"><div class="courses svelte-ptq6nv">${each(dominqueCourses, (course, i) => {
            return `<div class="course svelte-ptq6nv"><img${add_attribute("src", course.img, 0)} alt="" class="svelte-ptq6nv"> <div class="subtext svelte-ptq6nv">${validate_component(Typography, "Typography").$$render(
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
            )}</div> <div class="title svelte-ptq6nv">${validate_component(Typography, "Typography").$$render(
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
            )}</div> <div class="requirements svelte-ptq6nv">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($_("journeys.dominique.creds_required"))}`;
              }
            })} <ul><li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($_("creds.national_id"))}`;
              }
            })}</li> <li>${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($_("creds.school_course_certificate"))}`;
              }
            })}</li> </ul></div> <div class="button svelte-ptq6nv">${validate_component(Button, "Button").$$render(
              $$result,
              {
                onClick: () => {
                  showModal = true;
                  dominiqueSelectedCourse.set(i);
                },
                variant: "kw1c",
                label: $_("components.enroll_now").toUpperCase()
              },
              {},
              {}
            )}</div> </div>`;
          })}</div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4RV3t_4.js.map
