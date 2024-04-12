import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { M as Modal } from './Modal-de587996.js';
import { A as Avatar } from './Avatar-85141636.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-c91b6749.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-656655d6.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-1yjsebg>.svelte-1yjsebg{padding:15px 0}.container.svelte-1yjsebg .dash .content.svelte-1yjsebg{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-1yjsebg .dash .content .avatar.svelte-1yjsebg{width:25%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:20px;border:1px solid var(--white-700);background:white}.container.svelte-1yjsebg .dash .content .avatar .welcome.svelte-1yjsebg{padding-top:20px}.container.svelte-1yjsebg .dash .content .avatar .big-bar.svelte-1yjsebg{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-1yjsebg .dash .content .avatar .bars.svelte-1yjsebg{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg{width:100%;height:10px;background:var(--white-900);margin:30px 0;border-radius:10px}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg:nth-of-type(2){width:80%}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg:nth-of-type(4){width:70%}.container.svelte-1yjsebg .dash .content .cards.svelte-1yjsebg{width:40%;margin:0px 20px}.container.svelte-1yjsebg .dash .content .cards .card.svelte-1yjsebg{height:30%;width:100%;padding:15px;background:white;border-radius:20px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--white-700);display:flex;align-items:center;padding:20px 30px;align-content:center}.container.svelte-1yjsebg .dash .content .cards .card .pic.svelte-1yjsebg{height:80px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-1yjsebg .dash .content .cards .card .bars.svelte-1yjsebg{padding:0 12.5px;width:calc(100% - 115px)}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg{width:100%;height:12.5px;border-radius:10px;background:var(--black-300);margin:15px 10px}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg:nth-of-type(1){width:70%}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg:nth-of-type(3){width:40%}.container.svelte-1yjsebg .dash .content .share.svelte-1yjsebg{width:25%;padding:20px;background:white;border:1px solid var(--white-700);border-radius:20px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1yjsebg .dash .content .share .button.svelte-1yjsebg{margin-bottom:50px}.container.svelte-1yjsebg .dash .content .share .header.svelte-1yjsebg{margin-bottom:20px}.container.svelte-1yjsebg .dash .content .share .header.svelte-1yjsebg,.container.svelte-1yjsebg .dash .content .share img.svelte-1yjsebg,.container.svelte-1yjsebg .dash .content .share .issued-by.svelte-1yjsebg{width:100%;padding-bottom:15px}.container.svelte-1yjsebg .dash .content .share .credential.svelte-1yjsebg{width:100%}.container.svelte-1yjsebg .dash .content .share img.svelte-1yjsebg{height:60px;width:unset}.modal-content.svelte-1yjsebg.svelte-1yjsebg{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1yjsebg>.svelte-1yjsebg{padding:20px 0}.modal-content.svelte-1yjsebg .loading.svelte-1yjsebg{width:100%}.modal-content.svelte-1yjsebg .p.svelte-1yjsebg{color:var(--black-500);font-weight:300}.modal-content.svelte-1yjsebg img.svelte-1yjsebg{height:80px;padding-bottom:20px}.modal-content.svelte-1yjsebg .subtext.svelte-1yjsebg{width:100%}.modal-content.svelte-1yjsebg .checked.svelte-1yjsebg{height:60px}.button.svelte-1yjsebg.svelte-1yjsebg{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:1.15rem;width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:15px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.svelte-1yjsebg.svelte-1yjsebg:hover{cursor:pointer;background:var(--blue-900)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .content {\\n  width: 100%;\\n  padding: 40px;\\n  box-sizing: border-box;\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: flex-start;\\n  align-items: flex-start;\\n}\\n.container .dash .content .avatar {\\n  width: 25%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  justify-content: center;\\n  text-align: center;\\n  padding: 20px;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  border: 1px solid var(--white-700);\\n  background: white;\\n}\\n.container .dash .content .avatar .welcome {\\n  padding-top: 20px;\\n}\\n.container .dash .content .avatar .big-bar {\\n  width: 70%;\\n  height: 15px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n  margin-top: 20px;\\n}\\n.container .dash .content .avatar .bars {\\n  width: 80%;\\n  padding-left: 0 10%;\\n  margin-top: 20px;\\n}\\n.container .dash .content .avatar .bars .bar {\\n  width: 100%;\\n  height: 10px;\\n  background: var(--white-900);\\n  margin: 30px 0;\\n  border-radius: 10px;\\n}\\n.container .dash .content .avatar .bars .bar:nth-of-type(2) {\\n  width: 80%;\\n}\\n.container .dash .content .avatar .bars .bar:nth-of-type(4) {\\n  width: 70%;\\n}\\n.container .dash .content .cards {\\n  width: 40%;\\n  margin: 0px 20px;\\n}\\n.container .dash .content .cards .card {\\n  height: 30%;\\n  width: 100%;\\n  padding: 15px;\\n  background: white;\\n  border-radius: 20px;\\n  box-sizing: border-box;\\n  margin-bottom: 20px;\\n  border: 1px solid var(--white-700);\\n  display: flex;\\n  align-items: center;\\n  padding: 20px 30px;\\n  align-content: center;\\n}\\n.container .dash .content .cards .card .pic {\\n  height: 80px;\\n  width: 100px;\\n  background: var(--white-700);\\n  border-radius: 10px;\\n}\\n.container .dash .content .cards .card .bars {\\n  padding: 0 12.5px;\\n  width: calc(100% - 115px);\\n}\\n.container .dash .content .cards .card .bars .bar {\\n  width: 100%;\\n  height: 12.5px;\\n  border-radius: 10px;\\n  background: var(--black-300);\\n  margin: 15px 10px;\\n}\\n.container .dash .content .cards .card .bars .bar:nth-of-type(1) {\\n  width: 70%;\\n}\\n.container .dash .content .cards .card .bars .bar:nth-of-type(3) {\\n  width: 40%;\\n}\\n.container .dash .content .share {\\n  width: 25%;\\n  padding: 20px;\\n  background: white;\\n  border: 1px solid var(--white-700);\\n  border-radius: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}\\n.container .dash .content .share .button {\\n  margin-bottom: 50px;\\n}\\n.container .dash .content .share .header {\\n  margin-bottom: 20px;\\n}\\n.container .dash .content .share .header,\\n.container .dash .content .share img,\\n.container .dash .content .share .issued-by {\\n  width: 100%;\\n  padding-bottom: 15px;\\n}\\n.container .dash .content .share .credential {\\n  width: 100%;\\n}\\n.container .dash .content .share img {\\n  height: 60px;\\n  width: unset;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 20px 0;\\n}\\n.modal-content .loading {\\n  width: 100%;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 80px;\\n  padding-bottom: 20px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--open-jobs-blue-900);\\n  color: var(--white-300);\\n  font-size: 1.15rem;\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 15px;\\n  font-weight: 500;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--blue-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, OpenJobsNetwork, Avatar, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nlet receivedCreds = false;\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { qrcode } from \\"svelte-qrcode-action\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nlet qr;\\nonMount(async () => {\\n    currNode.set(1);\\n    const { data: { uri } } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"dominiqueShareCred\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/openjobs.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Open Jobs Network\\"\\n        }\\n    });\\n    qr = uri;\\n});\\nconst ws = createWebsocket();\\nws.onmessage = (event) => {\\n    const data = JSON.parse(event.data);\\n    if (data.received) {\\n        receivedCreds = true;\\n    }\\n};\\nlet showModal = false;\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You’re all <Highlight>logged in to the Open Jobs Network.</Highlight> Now, share your credential\\n\\t\\t\\twith potential employers.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the share credential button to share your credential on your Open Jobs Network profile.</Typography>\\n\\t</div>\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/openjobs.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? \\"The Open Jobs Network has received your confirmation to share your credential!\\"\\n\\t\\t\\t\\t\\t: \\"Allow the Open Jobs Network to share your credential \\"}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? \\"You may continue further in the browser. \\"\\n\\t\\t\\t\\t\\t: \\"In your mobile wallet scan the QR and accept the request to share the credentials with Open Jobs Network to get share your credentials to employers.\\"}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/open-jobs-check.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/new-message')}\\"\\n\\t\\t\\t\\t\\t>Continue</button>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t<Qr data=\\"{qr}\\" size=\\"{200}\\" />\\n\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t<Loading size=\\"30px\\" img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds ? \\"Click continue to proceed\\" : \\"Waiting for credentials\\"}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"dash\\">\\n\\t\\t<OpenJobsNetwork>\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t\\t<Avatar variant=\\"small\\" image=\\"/imgs/dominique.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"welcome\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">Welcome, Dominique Veritas</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"big-bar\\"></div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"cards\\">\\n\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"pic\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"pic\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"pic\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"share\\">\\n\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Your Latest Credentials</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t\\t\\t<div class=\\"credential\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"issued-by\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by<br /> Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t}}\\">Share Credential</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</OpenJobsNetwork>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let receivedCreds = false;
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
    $$rendered = `<div class="container svelte-1yjsebg"><div class="heading svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You’re all ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `logged in to the Open Jobs Network.`;
          }
        })} Now, share your credential
			with potential employers.`;
      }
    })}</div> <div class="sub-text svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the share credential button to share your credential on your Open Jobs Network profile.`;
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
          return `<div class="modal-content svelte-1yjsebg"><img src="/imgs/openjobs.png" alt="" class="logo svelte-1yjsebg"> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape(receivedCreds ? "The Open Jobs Network has received your confirmation to share your credential!" : "Allow the Open Jobs Network to share your credential ")}`;
              }
            }
          )} <div class="p svelte-1yjsebg">${escape(receivedCreds ? "You may continue further in the browser. " : "In your mobile wallet scan the QR and accept the request to share the credentials with Open Jobs Network to get share your credentials to employers.")}</div> ${receivedCreds ? `<img class="checked svelte-1yjsebg" src="/imgs/open-jobs-check.png" alt=""> <button class="button svelte-1yjsebg" data-svelte-h="svelte-746ofk">Continue</button>` : `${``}`} <div class="subtext svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="dash svelte-1yjsebg">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="content svelte-1yjsebg"><div class="avatar svelte-1yjsebg">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )} <div class="welcome svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div> <div class="big-bar svelte-1yjsebg"></div> <div class="bars svelte-1yjsebg" data-svelte-h="svelte-10j1e48"><div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div></div></div> <div class="cards svelte-1yjsebg" data-svelte-h="svelte-1pjwo74"><div class="card svelte-1yjsebg"><div class="pic svelte-1yjsebg"></div> <div class="bars svelte-1yjsebg"><div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div></div></div> <div class="card svelte-1yjsebg"><div class="pic svelte-1yjsebg"></div> <div class="bars svelte-1yjsebg"><div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div></div></div> <div class="card svelte-1yjsebg"><div class="pic svelte-1yjsebg"></div> <div class="bars svelte-1yjsebg"><div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div> <div class="bar svelte-1yjsebg"></div></div></div></div> <div class="share svelte-1yjsebg"><div class="header svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Your Latest Credentials`;
          }
        })}</div> <img src="/imgs/kw1c-white.png" alt="" class="logo svelte-1yjsebg"> <div class="credential svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)}`;
          }
        })}</div> <div class="issued-by svelte-1yjsebg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by<br> Koning Willem I College`;
          }
        })}</div> <button class="button svelte-1yjsebg" data-svelte-h="svelte-11z3wqg">Share Credential</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cdc42658.js.map
