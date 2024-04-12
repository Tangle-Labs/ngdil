import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { M as Modal } from './Modal-de587996.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-f1be0896.js';
import { a as currNode, h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import { C as Confetti } from './Confetti-2ad5725a.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-10jyki1>.svelte-10jyki1.svelte-10jyki1{padding:15px 0}.container.svelte-10jyki1 .dash .card.svelte-10jyki1.svelte-10jyki1{margin:0px 10%;background:white;border-radius:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;transform:translateY(30px)}.container.svelte-10jyki1 .dash .card .left.svelte-10jyki1.svelte-10jyki1{padding-right:10px;width:70%}.container.svelte-10jyki1 .dash .card .left img.svelte-10jyki1.svelte-10jyki1{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-10jyki1 .dash .card .left .heading.svelte-10jyki1.svelte-10jyki1{padding:20px}.container.svelte-10jyki1 .dash .card .left .bars.svelte-10jyki1.svelte-10jyki1{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-10jyki1 .dash .card .left .bars .bar.svelte-10jyki1.svelte-10jyki1{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-10jyki1 .dash .card .right.svelte-10jyki1.svelte-10jyki1{padding:20px}.container.svelte-10jyki1 .dash .card .right.svelte-10jyki1>.svelte-10jyki1{padding:10px 0}.modal-header.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-10jyki1 img.svelte-10jyki1.svelte-10jyki1{height:30px;padding-bottom:5px}.modal-header.svelte-10jyki1>.logo-text.svelte-10jyki1.svelte-10jyki1{width:100%;text-align:center}.modal-content.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-10jyki1>.svelte-10jyki1.svelte-10jyki1{padding:10px 0}.modal-content.svelte-10jyki1 img.svelte-10jyki1.svelte-10jyki1{height:60px}.modal-content.svelte-10jyki1 .p.svelte-10jyki1.svelte-10jyki1{color:var(--black-500);width:100%}.modal-content.svelte-10jyki1 .subtext.svelte-10jyki1.svelte-10jyki1,.modal-content.svelte-10jyki1 .loading.svelte-10jyki1.svelte-10jyki1{width:100%}.modal-content.svelte-10jyki1 .checked.svelte-10jyki1.svelte-10jyki1{height:60px}.button-container.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{width:50%}.button-container.svelte-10jyki1 .button.svelte-10jyki1.svelte-10jyki1{margin:20px 0}.button.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-10jyki1.svelte-10jyki1.svelte-10jyki1:hover{cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .card {\\n  margin: 0px 10%;\\n  background: white;\\n  border-radius: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  transform: translateY(30px);\\n}\\n.container .dash .card .left {\\n  padding-right: 10px;\\n  width: 70%;\\n}\\n.container .dash .card .left img {\\n  border-top-left-radius: 20px;\\n  border-bottom-right-radius: 20px;\\n  width: 100%;\\n}\\n.container .dash .card .left .heading {\\n  padding: 20px;\\n}\\n.container .dash .card .left .bars {\\n  width: 100%;\\n  margin: 0px 15px;\\n  padding-bottom: 30px;\\n}\\n.container .dash .card .left .bars .bar {\\n  width: 80%;\\n  height: 10px;\\n  margin: 10px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n}\\n.container .dash .card .right {\\n  padding: 20px;\\n}\\n.container .dash .card .right > * {\\n  padding: 10px 0;\\n}\\n\\n.modal-header {\\n  background: var(--bbc-blue);\\n  width: 100%;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n}\\n.modal-header img {\\n  height: 30px;\\n  padding-bottom: 5px;\\n}\\n.modal-header > .logo-text {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 60px;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  width: 100%;\\n}\\n.modal-content .subtext,\\n.modal-content .loading {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button-container {\\n  width: 50%;\\n}\\n.button-container .button {\\n  margin: 20px 0;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  font-weight: 500;\\n  padding: 15px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport Confetti from \\"svelte-confetti\\";\\nlet showModal = false;\\nlet receivedCreds = false;\\nlet qr;\\nonMount(async () => {\\n    currNode.set(4);\\n    const { data } = await apiClient.post(\\"/api/credential-offer\\", {\\n        credential: \\"Staff ID\\",\\n        issuer: \\"bbc\\"\\n    });\\n    qr = data.uri;\\n});\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.creds) {\\n        currNode.set(5);\\n        receivedCreds = true;\\n    }\\n};\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal withoutPadding=\\"{true}\\" bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-header\\">\\n\\t\\t\\t<img src=\\"/imgs/bbc.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"logo-text\\">\\n\\t\\t\\t\\t<Typography color=\\"--white-300\\" variant=\\"card-header\\">Big Business Corp</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? \\"You have accepted the following credential:\\"\\n\\t\\t\\t\\t\\t: \\"Big Business Corp Staff ID\\"}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? \\"Big Business Corp Staff ID\\"\\n\\t\\t\\t\\t\\t: \\"In your mobile wallet scan the QR and accept the credential from Big Business Corp.\\"}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/job-secured')}\\"\\n\\t\\t\\t\\t\\t>Continue</button>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t<Loading size=\\"30px\\" img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds ? \\"Click continue to proceed\\" : \\"Awaiting on confirmation\\"}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t><Highlight>You’ve got the job! Congratulations,</Highlight> Big Business Corp now wants to issue\\n\\t\\t\\tyou with your staff ID.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the get staff ID button to receive your staff ID credential from Big Business Corp.</Typography>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\">\\n\\t\\t<Confetti\\n\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\tduration=\\"2000\\"\\n\\t\\t\\tamount=\\"500\\"\\n\\t\\t\\tfallDistance=\\"100vh\\" />\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"Congratulations! You got the job\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<img src=\\"{dominqueCourses[$dominiqueSelectedCourse].img}\\" alt=\\"\\" />\\n\\n\\t\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">Dominique Veritas</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography\\n\\t\\t\\t\\t\\t\\t\\t>Big Business Corp would like to welcome you to the team and send you the following\\n\\t\\t\\t\\t\\t\\t\\tcredential:</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Big Business Corp Staff ID</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t}}\\">Get Staff ID</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-10jyki1">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-header svelte-10jyki1"><img src="/imgs/bbc.png" alt="" class="logo svelte-10jyki1"> <div class="logo-text svelte-10jyki1">${validate_component(Typography, "Typography").$$render(
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
          )}</div></div> <div class="modal-content svelte-10jyki1">${validate_component(Typography, "Typography").$$render(
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
          )} <div class="p svelte-10jyki1">${escape(receivedCreds ? "Big Business Corp Staff ID" : "In your mobile wallet scan the QR and accept the credential from Big Business Corp.")}</div> ${receivedCreds ? `<img class="checked svelte-10jyki1" src="/imgs/check-circle.png" alt=""> <button class="button svelte-10jyki1" data-svelte-h="svelte-1vke5b9">Continue</button>` : `${``}`} <div class="subtext svelte-10jyki1">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Awaiting on confirmation")}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-10jyki1">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `You’ve got the job! Congratulations,`;
          }
        })} Big Business Corp now wants to issue
			you with your staff ID.`;
      }
    })}</div> <div class="sub-text svelte-10jyki1">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the get staff ID button to receive your staff ID credential from Big Business Corp.`;
      }
    })}</div> <div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-10jyki1">${validate_component(Confetti, "Confetti").$$render(
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
    )}</div> <div class="dash svelte-10jyki1">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render(
      $$result,
      {
        heading: "Congratulations! You got the job"
      },
      {},
      {
        default: () => {
          return `<div class="card svelte-10jyki1"><div class="left svelte-10jyki1"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="" class="svelte-10jyki1"> <div class="details"><div class="heading svelte-10jyki1">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="bars svelte-10jyki1" data-svelte-h="svelte-nrfuj7"><div class="bar svelte-10jyki1"></div> <div class="bar svelte-10jyki1"></div> <div class="bar svelte-10jyki1"></div></div></div></div> <div class="right svelte-10jyki1"><div class="heading svelte-10jyki1">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="sub-text svelte-10jyki1">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `Big Business Corp would like to welcome you to the team and send you the following
							credential:`;
            }
          })}</div> <div class="list svelte-10jyki1">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `Big Business Corp Staff ID`;
            }
          })}</div> <div class="button-container svelte-10jyki1"><button class="button svelte-10jyki1" data-svelte-h="svelte-z0nhax">Get Staff ID</button></div></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0a361843.js.map
