import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-DBm3hKoN.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { g as eventUri, h as dominiqueSelectedCourse, i as dominqueCourses } from './flows.store-Ch_DhNys.js';
import './axios.utils-CIq7LE2y.js';
import { C as Confetti } from './Confetti-CC7EIop2.js';
import '@tanglelabs/open-id-qr';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".container.svelte-c4u7v8>.svelte-c4u7v8.svelte-c4u7v8{padding:15px 0}.container.svelte-c4u7v8 .dash .card.svelte-c4u7v8.svelte-c4u7v8{margin:0px 10% 10%;background:white;border-radius:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;transform:translateY(30px)}.container.svelte-c4u7v8 .dash .card .left.svelte-c4u7v8.svelte-c4u7v8{padding-right:10px;width:70%}.container.svelte-c4u7v8 .dash .card .left img.svelte-c4u7v8.svelte-c4u7v8{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-c4u7v8 .dash .card .left .heading.svelte-c4u7v8.svelte-c4u7v8{padding:20px}.container.svelte-c4u7v8 .dash .card .left .bars.svelte-c4u7v8.svelte-c4u7v8{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-c4u7v8 .dash .card .left .bars .bar.svelte-c4u7v8.svelte-c4u7v8{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-c4u7v8 .dash .card .right.svelte-c4u7v8.svelte-c4u7v8{padding:20px}.container.svelte-c4u7v8 .dash .card .right.svelte-c4u7v8>.svelte-c4u7v8{padding:10px 0}.modal-header.svelte-c4u7v8.svelte-c4u7v8.svelte-c4u7v8{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-c4u7v8 img.svelte-c4u7v8.svelte-c4u7v8{height:30px;padding-bottom:5px}.modal-header.svelte-c4u7v8>.logo-text.svelte-c4u7v8.svelte-c4u7v8{width:100%;text-align:center}.modal-content.svelte-c4u7v8.svelte-c4u7v8.svelte-c4u7v8{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-c4u7v8>.svelte-c4u7v8.svelte-c4u7v8{padding:10px 0}.modal-content.svelte-c4u7v8 img.svelte-c4u7v8.svelte-c4u7v8{height:60px}.modal-content.svelte-c4u7v8 .p.svelte-c4u7v8.svelte-c4u7v8{color:var(--black-500);width:100%}.modal-content.svelte-c4u7v8 .subtext.svelte-c4u7v8.svelte-c4u7v8,.modal-content.svelte-c4u7v8 .loading.svelte-c4u7v8.svelte-c4u7v8{width:100%}.modal-content.svelte-c4u7v8 .checked.svelte-c4u7v8.svelte-c4u7v8{height:60px}.button-container.svelte-c4u7v8.svelte-c4u7v8.svelte-c4u7v8{min-width:max-content}.button-container.svelte-c4u7v8 .button.svelte-c4u7v8.svelte-c4u7v8{margin:20px 0}.button.svelte-c4u7v8.svelte-c4u7v8.svelte-c4u7v8{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-c4u7v8.svelte-c4u7v8.svelte-c4u7v8:hover{cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .card {\\n  margin: 0px 10% 10%;\\n  background: white;\\n  border-radius: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  transform: translateY(30px);\\n}\\n.container .dash .card .left {\\n  padding-right: 10px;\\n  width: 70%;\\n}\\n.container .dash .card .left img {\\n  border-top-left-radius: 20px;\\n  border-bottom-right-radius: 20px;\\n  width: 100%;\\n}\\n.container .dash .card .left .heading {\\n  padding: 20px;\\n}\\n.container .dash .card .left .bars {\\n  width: 100%;\\n  margin: 0px 15px;\\n  padding-bottom: 30px;\\n}\\n.container .dash .card .left .bars .bar {\\n  width: 80%;\\n  height: 10px;\\n  margin: 10px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n}\\n.container .dash .card .right {\\n  padding: 20px;\\n}\\n.container .dash .card .right > * {\\n  padding: 10px 0;\\n}\\n\\n.modal-header {\\n  background: var(--bbc-blue);\\n  width: 100%;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n}\\n.modal-header img {\\n  height: 30px;\\n  padding-bottom: 5px;\\n}\\n.modal-header > .logo-text {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 60px;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  width: 100%;\\n}\\n.modal-content .subtext,\\n.modal-content .loading {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button-container {\\n  min-width: max-content;\\n}\\n.button-container .button {\\n  margin: 20px 0;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  font-weight: 500;\\n  padding: 15px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp, Modal, Loading } from \\"$lib/components\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nimport Confetti from \\"svelte-confetti\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vc\\")\\n            receivedCreds = true;\\n    });\\n}\\n$: watchQr(qr);\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nlet showModal = false;\\nlet receivedCreds = false;\\nlet qr;\\nonMount(async () => {\\n    currNode.set(4);\\n    const { data } = await apiClient.post(\\"/api/credential-offer\\", {\\n        credential: \\"Staff ID\\",\\n        issuer: \\"bbc\\"\\n    });\\n    qr = data.uri;\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal withoutPadding=\\"{true}\\" bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-header\\">\\n\\t\\t\\t<img src=\\"/imgs/bbc.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"logo-text\\">\\n\\t\\t\\t\\t<Typography color=\\"--white-300\\" variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t>{$_(\\"components.big_business_corp\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.accepted_following_cred\\")\\n\\t\\t\\t\\t\\t: $_(\\"creds.bbc_staff_id\\")}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"creds.bbc_staff_id\\")\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.scan_qr_accept_cred_from_bbc\\")}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/job-secured')}\\"\\n\\t\\t\\t\\t\\t>{$_(\\"components.continue\\")}</button>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\" size=\\"{200}\\"></open-id-qr>\\n\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/key}\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.click_to_proceed\\")\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.awaiting_confirmation\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.got_job_bbc_issued_staff_id\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.dominique.get_staff_id_btn_desc\\")}</Typography>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\">\\n\\t\\t<Confetti\\n\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\tduration=\\"{2000}\\"\\n\\t\\t\\tamount=\\"{500}\\"\\n\\t\\t\\tfallDistance=\\"100vh\\" />\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"{$_('journeys.dominique.congrats_you_got_the_job')}\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<img src=\\"{dominqueCourses[$dominiqueSelectedCourse].img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"onboarding.choose_journey.dominique_veritas\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.dominique.bbc_welcomes_to_team_and_send_cred\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"creds.bbc_staff_id\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t}}\\">{$_(\\"journeys.dominique.get_staff_id\\")}</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $$unsubscribe_eventUri;
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => value);
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-c4u7v8">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-header svelte-c4u7v8"><img src="/imgs/bbc.png" alt="" class="logo svelte-c4u7v8"> <div class="logo-text svelte-c4u7v8">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              color: "--white-300",
              variant: "card-header"
            },
            {},
            {
              default: () => {
                return `${escape($_("components.big_business_corp"))}`;
              }
            }
          )}</div></div> <div class="modal-content svelte-c4u7v8">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape($_("creds.bbc_staff_id"))}`;
              }
            }
          )} <div class="p svelte-c4u7v8">${escape($_("journeys.dominique.scan_qr_accept_cred_from_bbc"))}</div> ${`${``}`} <div class="subtext svelte-c4u7v8">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.awaiting_confirmation"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-c4u7v8">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.got_job_bbc_issued_staff_id"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-c4u7v8">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.get_staff_id_btn_desc"))}`;
      }
    })}</div> <div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-c4u7v8">${validate_component(Confetti, "Confetti").$$render(
      $$result,
      {
        x: [-5, 5],
        y: [0, 0.1],
        delay: [500, 5e3],
        duration: 2e3,
        amount: 500,
        fallDistance: "100vh"
      },
      {},
      {}
    )}</div> <div class="dash svelte-c4u7v8">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render(
      $$result,
      {
        heading: $_("journeys.dominique.congrats_you_got_the_job")
      },
      {},
      {
        default: () => {
          return `<div class="card svelte-c4u7v8"><div class="left svelte-c4u7v8"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="" class="svelte-c4u7v8"> <div class="details"><div class="heading svelte-c4u7v8">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape($_("onboarding.choose_journey.dominique_veritas"))}`;
              }
            }
          )}</div> <div class="bars svelte-c4u7v8" data-svelte-h="svelte-nrfuj7"><div class="bar svelte-c4u7v8"></div> <div class="bar svelte-c4u7v8"></div> <div class="bar svelte-c4u7v8"></div></div></div></div> <div class="right svelte-c4u7v8"><div class="heading svelte-c4u7v8">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="sub-text svelte-c4u7v8">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.bbc_welcomes_to_team_and_send_cred"))}`;
            }
          })}</div> <div class="list svelte-c4u7v8">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("creds.bbc_staff_id"))}`;
            }
          })}</div> <div class="button-container svelte-c4u7v8"><button class="button svelte-c4u7v8">${escape($_("journeys.dominique.get_staff_id"))}</button></div></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DMOcBXtZ.js.map
