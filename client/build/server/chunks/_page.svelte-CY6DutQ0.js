import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-DBm3hKoN.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
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
  code: ".container.svelte-12upbpa>.svelte-12upbpa.svelte-12upbpa{padding:15px 0}.container.svelte-12upbpa .dash .card.svelte-12upbpa.svelte-12upbpa{margin:0px 10% 10%;background:white;border-radius:20px;display:flex;transform:translateY(30px);filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-12upbpa .dash .card .left.svelte-12upbpa.svelte-12upbpa{padding-right:10px;width:60%}.container.svelte-12upbpa .dash .card .left img.svelte-12upbpa.svelte-12upbpa{border-top-left-radius:20px;border-bottom-right-radius:20px;width:100%}.container.svelte-12upbpa .dash .card .left .heading.svelte-12upbpa.svelte-12upbpa{padding:20px}.container.svelte-12upbpa .dash .card .left .bars.svelte-12upbpa.svelte-12upbpa{width:100%;margin:0px 15px;padding-bottom:30px}.container.svelte-12upbpa .dash .card .left .bars .bar.svelte-12upbpa.svelte-12upbpa{width:80%;height:10px;margin:10px;background:var(--black-300);border-radius:10px}.container.svelte-12upbpa .dash .card .right.svelte-12upbpa.svelte-12upbpa{padding:20px}.container.svelte-12upbpa .dash .card .right.svelte-12upbpa>.svelte-12upbpa{padding:10px 0}.modal-header.svelte-12upbpa.svelte-12upbpa.svelte-12upbpa{background:var(--bbc-blue);width:100%;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;box-sizing:border-box}.modal-header.svelte-12upbpa img.svelte-12upbpa.svelte-12upbpa{height:30px;padding-bottom:5px}.modal-header.svelte-12upbpa>.logo-text.svelte-12upbpa.svelte-12upbpa{width:100%;text-align:center}.modal-content.svelte-12upbpa.svelte-12upbpa.svelte-12upbpa{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center;flex-direction:column;align-items:center}.modal-content.svelte-12upbpa>.svelte-12upbpa.svelte-12upbpa{padding:10px 0}.modal-content.svelte-12upbpa .p.svelte-12upbpa.svelte-12upbpa{color:var(--black-500);font-weight:300}.modal-content.svelte-12upbpa img.svelte-12upbpa.svelte-12upbpa{height:60px}.modal-content.svelte-12upbpa .subtext.svelte-12upbpa.svelte-12upbpa{width:100%}.modal-content.svelte-12upbpa .checked.svelte-12upbpa.svelte-12upbpa{height:60px}.modal-content.svelte-12upbpa .loading.svelte-12upbpa.svelte-12upbpa{width:100%}.button-container.svelte-12upbpa.svelte-12upbpa.svelte-12upbpa{width:50%}.button-container.svelte-12upbpa .button.svelte-12upbpa.svelte-12upbpa{margin:20px 0}.button.svelte-12upbpa.svelte-12upbpa.svelte-12upbpa{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);font-weight:500;margin:20px;box-sizing:border-box;border-radius:40px;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-12upbpa.svelte-12upbpa.svelte-12upbpa:hover{cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .card {\\n  margin: 0px 10% 10%;\\n  background: white;\\n  border-radius: 20px;\\n  display: flex;\\n  transform: translateY(30px);\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .dash .card .left {\\n  padding-right: 10px;\\n  width: 60%;\\n}\\n.container .dash .card .left img {\\n  border-top-left-radius: 20px;\\n  border-bottom-right-radius: 20px;\\n  width: 100%;\\n}\\n.container .dash .card .left .heading {\\n  padding: 20px;\\n}\\n.container .dash .card .left .bars {\\n  width: 100%;\\n  margin: 0px 15px;\\n  padding-bottom: 30px;\\n}\\n.container .dash .card .left .bars .bar {\\n  width: 80%;\\n  height: 10px;\\n  margin: 10px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n}\\n.container .dash .card .right {\\n  padding: 20px;\\n}\\n.container .dash .card .right > * {\\n  padding: 10px 0;\\n}\\n\\n.modal-header {\\n  background: var(--bbc-blue);\\n  width: 100%;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n}\\n.modal-header img {\\n  height: 30px;\\n  padding-bottom: 5px;\\n}\\n.modal-header > .logo-text {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 60px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n.modal-content .loading {\\n  width: 100%;\\n}\\n\\n.button-container {\\n  width: 50%;\\n}\\n.button-container .button {\\n  margin: 20px 0;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  font-weight: 500;\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 15px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp, Modal, Loading } from \\"$lib/components\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nimport { PUBLIC_CLIENT_URI } from \\"$env/static/public\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nlet showModal = false;\\nlet receivedCreds = false;\\nlet qr;\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vp\\")\\n            receivedCreds = true;\\n    });\\n}\\n$: watchQr(qr);\\nonMount(async () => {\\n    currNode.set(3);\\n    const { data: { uri } } = await apiClient.post(\\"/api/oid4vp\\", {\\n        presentationStage: \\"dominiqueApplyForJob\\",\\n        clientMetadata: {\\n            logoUri: new URL(\\"/imgs/bbc.png\\", PUBLIC_CLIENT_URI).toString(),\\n            clientName: \\"Big Business Corp\\"\\n        }\\n    });\\n    qr = uri;\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal withoutPadding=\\"{true}\\" bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-header\\">\\n\\t\\t\\t<img src=\\"/imgs/bbc.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"logo-text\\">\\n\\t\\t\\t\\t<Typography color=\\"--white-300\\" variant=\\"card-header\\">\\n\\t\\t\\t\\t\\t{$_(\\"components.big_business_corp\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.application_received_via_digital_cv\\")\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.requesting_digtal_cv\\")}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.continue_further_in_browser\\")\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.scan_qr_accept_request_from_bbc\\")}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/get-staff-id')}\\"\\n\\t\\t\\t\\t\\t>Continue</button>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" size=\\"{200}\\" event-stream-uri=\\"{$eventUri}\\"></open-id-qr>\\n\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/key}\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.click_to_proceed\\")\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.waiting_for_creds\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.have_all_creds_apply_position\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>{$_(\\"journeys.dominique.click_apply_now_to_share_creds\\")}</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"{$_('journeys.dominique.bbc_job_board')}\\">\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<img src=\\"{dominqueCourses[$dominiqueSelectedCourse].img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.dominique.application_requirements\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography>{$_(\\"journeys.dominique.applicants_req_following_creds\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"creds.national_id\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"creds.kw1c_diploma\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name +\\n\\t\\t\\t\\t\\t\\t\\t\\t\\" \\" +\\n\\t\\t\\t\\t\\t\\t\\t\\t$_(\\"creds.certificate\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t}}\\">{$_(\\"components.apply_now\\")}</button>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
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
    $$rendered = `<div class="container svelte-12upbpa">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-header svelte-12upbpa"><img src="/imgs/bbc.png" alt="" class="logo svelte-12upbpa"> <div class="logo-text svelte-12upbpa">${validate_component(Typography, "Typography").$$render(
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
          )}</div></div> <div class="modal-content svelte-12upbpa">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.dominique.requesting_digtal_cv"))}`;
              }
            }
          )} <div class="p svelte-12upbpa">${escape($_("journeys.dominique.scan_qr_accept_request_from_bbc"))}</div> ${`${``}`} <div class="subtext svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.waiting_for_creds"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.have_all_creds_apply_position"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.dominique.click_apply_now_to_share_creds"))}`;
      }
    })}</div> <div class="dash svelte-12upbpa">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render(
      $$result,
      {
        heading: $_("journeys.dominique.bbc_job_board")
      },
      {},
      {
        default: () => {
          return `<div class="card svelte-12upbpa"><div class="left svelte-12upbpa"><img${add_attribute("src", dominqueCourses[$dominiqueSelectedCourse].img, 0)} alt="" class="svelte-12upbpa"> <div class="details"><div class="heading svelte-12upbpa">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="bars svelte-12upbpa" data-svelte-h="svelte-nrfuj7"><div class="bar svelte-12upbpa"></div> <div class="bar svelte-12upbpa"></div> <div class="bar svelte-12upbpa"></div></div></div></div> <div class="right svelte-12upbpa"><div class="heading svelte-12upbpa">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.dominique.application_requirements"))}`;
              }
            }
          )}</div> <div class="sub-text svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.applicants_req_following_creds"))}`;
            }
          })}</div> <div class="list svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("creds.national_id"))}`;
            }
          })}</div> <div class="list svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("creds.kw1c_diploma"))}`;
            }
          })}</div> <div class="list svelte-12upbpa">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].name + " " + $_("creds.certificate"))}`;
            }
          })}</div> <div class="button-container svelte-12upbpa"><button class="button svelte-12upbpa">${escape($_("components.apply_now"))}</button></div></div></div>`;
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
//# sourceMappingURL=_page.svelte-CY6DutQ0.js.map
