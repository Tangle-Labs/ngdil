import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { M as Modal } from './Modal-de587996.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-f1be0896.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-b8xejm>.svelte-b8xejm.svelte-b8xejm{padding:15px 0}.container.svelte-b8xejm .dash .card.svelte-b8xejm.svelte-b8xejm{margin:0px 10%;background:white;border-radius:20px;display:flex;transform:translateY(30px);filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-b8xejm .dash .card .left.svelte-b8xejm.svelte-b8xejm{padding-right:10px;width:60%}.container.svelte-b8xejm .dash .card .left img.svelte-b8xejm.svelte-b8xejm{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-b8xejm .dash .card .left .heading.svelte-b8xejm.svelte-b8xejm{padding:20px}.container.svelte-b8xejm .dash .card .left .bars.svelte-b8xejm.svelte-b8xejm{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-b8xejm .dash .card .left .bars .bar.svelte-b8xejm.svelte-b8xejm{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-b8xejm .dash .card .right.svelte-b8xejm.svelte-b8xejm{padding:20px}.container.svelte-b8xejm .dash .card .right.svelte-b8xejm>.svelte-b8xejm{padding:10px 0}.modal-header.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-b8xejm img.svelte-b8xejm.svelte-b8xejm{height:30px;padding-bottom:5px}.modal-header.svelte-b8xejm>.logo-text.svelte-b8xejm.svelte-b8xejm{width:100%;text-align:center}.modal-content.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-b8xejm>.svelte-b8xejm.svelte-b8xejm{padding:10px 0}.modal-content.svelte-b8xejm .p.svelte-b8xejm.svelte-b8xejm{color:var(--black-500);font-weight:300}.modal-content.svelte-b8xejm img.svelte-b8xejm.svelte-b8xejm{height:60px}.modal-content.svelte-b8xejm .subtext.svelte-b8xejm.svelte-b8xejm{width:100%}.modal-content.svelte-b8xejm .checked.svelte-b8xejm.svelte-b8xejm{height:60px}.modal-content.svelte-b8xejm .loading.svelte-b8xejm.svelte-b8xejm{width:100%}.button-container.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{width:50%}.button-container.svelte-b8xejm .button.svelte-b8xejm.svelte-b8xejm{margin:20px 0}.button.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);font-weight:500;margin:20px;box-sizing:border-box;border-radius:40px;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-b8xejm.svelte-b8xejm.svelte-b8xejm:hover{cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .card {\\n  margin: 0px 10%;\\n  background: white;\\n  border-radius: 20px;\\n  display: flex;\\n  transform: translateY(30px);\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .dash .card .left {\\n  padding-right: 10px;\\n  width: 60%;\\n}\\n.container .dash .card .left img {\\n  border-top-left-radius: 20px;\\n  border-bottom-right-radius: 20px;\\n  width: 100%;\\n}\\n.container .dash .card .left .heading {\\n  padding: 20px;\\n}\\n.container .dash .card .left .bars {\\n  width: 100%;\\n  margin: 0px 15px;\\n  padding-bottom: 30px;\\n}\\n.container .dash .card .left .bars .bar {\\n  width: 80%;\\n  height: 10px;\\n  margin: 10px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n}\\n.container .dash .card .right {\\n  padding: 20px;\\n}\\n.container .dash .card .right > * {\\n  padding: 10px 0;\\n}\\n\\n.modal-header {\\n  background: var(--bbc-blue);\\n  width: 100%;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n}\\n.modal-header img {\\n  height: 30px;\\n  padding-bottom: 5px;\\n}\\n.modal-header > .logo-text {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 60px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n.modal-content .loading {\\n  width: 100%;\\n}\\n\\n.button-container {\\n  width: 50%;\\n}\\n.button-container .button {\\n  margin: 20px 0;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  font-weight: 500;\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 15px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueEarnedCourseCred, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet showModal = false;\\nlet receivedCreds = false;\\nlet qr;\\nonMount(async () => {\\n    currNode.set(3);\\n    const { data: { uri } } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"dominiqueApplyForJob\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/bbc.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Big Business Corp\\"\\n        }\\n    });\\n    qr = uri;\\n});\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.received) {\\n        receivedCreds = true;\\n    }\\n};\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal withoutPadding=\\"{true}\\" bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-header\\">\\n\\t\\t\\t<img src=\\"/imgs/bbc.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"logo-text\\">\\n\\t\\t\\t\\t<Typography color=\\"--white-300\\" variant=\\"card-header\\">Big Business Corp</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? \\"Your application via digital CV has been received by Big Business Corp!\\"\\n\\t\\t\\t\\t\\t: \\"Big Business Corp is requesting you share your digital CV.\\"}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? \\"You may continue further in your browser.\\"\\n\\t\\t\\t\\t\\t: \\"In your mobile wallet scan the QR accept the request to share credentials with Big Business Corp \\"}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/get-staff-id')}\\"\\n\\t\\t\\t\\t\\t>Continue</button>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t<Loading size=\\"30px\\" img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds ? \\"Click continue to proceed\\" : \\"Waiting for credentials\\"}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Looks like you have all the credentials required. Let’s apply for the position and <Highlight>\\n\\t\\t\\t\\tshare your credentials.</Highlight\\n\\t\\t\\t></Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the apply now button to share multiple credentials as your digital CV.</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"Big Business Corp Jobs Board\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<img src=\\"{dominqueCourses[$dominiqueSelectedCourse].img}\\" alt=\\"\\" />\\n\\n\\t\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t>Application Requirements</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography\\n\\t\\t\\t\\t\\t\\t\\t>To apply for this role, applicants are required to share the following credentials:</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">National ID</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">KW1C Diploma</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name} Certificate</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t}}\\">Apply Now</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-b8xejm">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-header svelte-b8xejm"><img src="/imgs/bbc.png" alt="" class="logo svelte-b8xejm"> <div class="logo-text svelte-b8xejm">${validate_component(Typography, "Typography").$$render(
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
          )}</div></div> <div class="modal-content svelte-b8xejm">${validate_component(Typography, "Typography").$$render(
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
          )} <div class="p svelte-b8xejm">${escape(receivedCreds ? "You may continue further in your browser." : "In your mobile wallet scan the QR accept the request to share credentials with Big Business Corp ")}</div> ${receivedCreds ? `<img class="checked svelte-b8xejm" src="/imgs/check-circle.png" alt=""> <button class="button svelte-b8xejm" data-svelte-h="svelte-1157tz3">Continue</button>` : `${``}`} <div class="subtext svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Looks like you have all the credentials required. Let’s apply for the position and ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `share your credentials.`;
          }
        })}`;
      }
    })}</div> <div class="sub-text svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the apply now button to share multiple credentials as your digital CV.`;
      }
    })}</div> <div class="dash svelte-b8xejm">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, { heading: "Big Business Corp Jobs Board" }, {}, {
      default: () => {
        return `<div class="card svelte-b8xejm"><div class="left svelte-b8xejm"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="" class="svelte-b8xejm"> <div class="details"><div class="heading svelte-b8xejm">${validate_component(Typography, "Typography").$$render(
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
        )}</div> <div class="bars svelte-b8xejm" data-svelte-h="svelte-nrfuj7"><div class="bar svelte-b8xejm"></div> <div class="bar svelte-b8xejm"></div> <div class="bar svelte-b8xejm"></div></div></div></div> <div class="right svelte-b8xejm"><div class="heading svelte-b8xejm">${validate_component(Typography, "Typography").$$render(
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
        )}</div> <div class="sub-text svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `To apply for this role, applicants are required to share the following credentials:`;
          }
        })}</div> <div class="list svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `National ID`;
          }
        })}</div> <div class="list svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `KW1C Diploma`;
          }
        })}</div> <div class="list svelte-b8xejm">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)} Certificate`;
          }
        })}</div> <div class="button-container svelte-b8xejm"><button class="button svelte-b8xejm" data-svelte-h="svelte-1nl4g1k">Apply Now</button></div></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-06e5dcba.js.map
