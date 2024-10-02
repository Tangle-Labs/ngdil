import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { h as dominiqueSelectedCourse, g as eventUri, i as dominqueCourses, a as currNode } from './flows.store-Ch_DhNys.js';
import { C as Confetti } from './Confetti-CC7EIop2.js';
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
  code: ".container.svelte-pu9wmb>.svelte-pu9wmb{padding:15px 0}.container.svelte-pu9wmb .dashboard.svelte-pu9wmb{padding:50px 15%}.container.svelte-pu9wmb .dashboard .details.svelte-pu9wmb{padding-top:20px;display:flex;align-items:center;align-content:center;width:100%;justify-content:space-between}.container.svelte-pu9wmb .dashboard .cards.svelte-pu9wmb{width:100%;display:flex;justify-content:space-between;padding-top:30px}.container.svelte-pu9wmb .dashboard .cards .card.svelte-pu9wmb{padding:20px;box-sizing:border-box;width:23%;border-radius:15px;background:white;height:fit-content;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-pu9wmb .dashboard .cards .card .dash.svelte-pu9wmb{height:20px;background:var(--white-900);border-radius:5px;margin-bottom:10px}.container.svelte-pu9wmb .dashboard .cards .card .red-dash.svelte-pu9wmb{height:15px;background:var(--red-700);width:60%}.container.svelte-pu9wmb .dashboard .cards .card .blue-dash.svelte-pu9wmb{background:var(--blue-700)}.container.svelte-pu9wmb .dashboard .cards .card .gray-dash.svelte-pu9wmb{height:14px;width:85%}.container.svelte-pu9wmb .dashboard .cards .card .gray-dash.svelte-pu9wmb:nth-last-of-type(2){width:70%}.button.svelte-pu9wmb.svelte-pu9wmb{width:250px;display:flex;justify-content:flex-end}.modal-content.svelte-pu9wmb.svelte-pu9wmb{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-pu9wmb>.svelte-pu9wmb{padding:10px 0}.modal-content.svelte-pu9wmb .p.svelte-pu9wmb{color:var(--black-500);font-weight:300}.modal-content.svelte-pu9wmb img.svelte-pu9wmb{height:120px}.modal-content.svelte-pu9wmb .button.svelte-pu9wmb{width:100%;margin-top:20px}.modal-content.svelte-pu9wmb .loading.svelte-pu9wmb{width:100%}.modal-content.svelte-pu9wmb .subtext.svelte-pu9wmb{width:100%}.modal-content.svelte-pu9wmb .checked.svelte-pu9wmb{height:60px}.modal-content.svelte-pu9wmb .button.svelte-pu9wmb{justify-content:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dashboard {\\n  padding: 50px 15%;\\n}\\n.container .dashboard .details {\\n  padding-top: 20px;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.container .dashboard .cards {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  padding-top: 30px;\\n}\\n.container .dashboard .cards .card {\\n  padding: 20px;\\n  box-sizing: border-box;\\n  width: 23%;\\n  border-radius: 15px;\\n  background: white;\\n  height: fit-content;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .dashboard .cards .card .dash {\\n  height: 20px;\\n  background: var(--white-900);\\n  border-radius: 5px;\\n  margin-bottom: 10px;\\n}\\n.container .dashboard .cards .card .red-dash {\\n  height: 15px;\\n  background: var(--red-700);\\n  width: 60%;\\n}\\n.container .dashboard .cards .card .blue-dash {\\n  background: var(--blue-700);\\n}\\n.container .dashboard .cards .card .gray-dash {\\n  height: 14px;\\n  width: 85%;\\n}\\n.container .dashboard .cards .card .gray-dash:nth-last-of-type(2) {\\n  width: 70%;\\n}\\n\\n.button {\\n  width: 250px;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .button {\\n  width: 100%;\\n  margin-top: 20px;\\n}\\n.modal-content .loading {\\n  width: 100%;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n.modal-content .button {\\n  justify-content: center;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, Button } from \\"$lib/components\\";\\nimport { dominqueCourses, dominiqueSelectedCourse, currNode, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { Confetti } from \\"svelte-confetti\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nlet studied = false;\\nlet progress = 0;\\nlet qr;\\nlet showModal = false;\\nlet receivedCreds = false;\\nconst handleStudy = () => {\\n    currNode.set(3);\\n    studied = true;\\n    const counting = setInterval(() => {\\n        if (progress > 100)\\n            clearInterval(counting);\\n        progress = progress < 100 ? progress + 1 : progress;\\n    }, 1);\\n};\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vc\\")\\n            receivedCreds = true;\\n    });\\n}\\n$: watchQr(qr);\\nonMount(async () => {\\n    const { data } = await apiClient.post(\\"/api/credential-offer\\", {\\n        credential: dominqueCourses[$dominiqueSelectedCourse].name,\\n        issuer: \\"kw1c\\"\\n    });\\n    qr = data.uri;\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.received_and_accepted_new_course_cred\\").toUpperCase()\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.kw1c_sent_new_course_cred\\").toUpperCase()}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{receivedCreds\\n\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.visible_in_wallet_and_free_for_you_to_share\\")\\n\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.scan_qr_and_accept_cred_from_kw1c\\")}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t<img class=\\"checked\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue').toUpperCase()}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/journeys/dominique/finished-course')}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else if qr}\\n\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t<open-id-qr request-uri=\\"{qr}\\" size=\\"{200}\\" event-stream-uri=\\"{$eventUri}\\"></open-id-qr>\\n\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" size=\\"30px\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/key}\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.click_to_proceed\\")\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.dominique.awaiting_cred_acceptance\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t{#if studied}\\n\\t\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.dominique.completed_course_with_top_mark_now_get_cred\\"))}\\n\\t\\t\\t</Typography>\\n\\t\\t{:else}\\n\\t\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.dominique.accepted_on_course_now_study\\"))}\\n\\t\\t\\t</Typography>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{#if studied}\\n\\t\\t\\t\\t{$_(\\"journeys.dominique.get_cred_btn_desc\\")}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{$_(\\"journeys.dominique.start_studying_btn_desc\\")}\\n\\t\\t\\t{/if}</Typography>\\n\\t</div>\\n\\t{#if studied}\\n\\t\\t<div\\n\\t\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\">\\n\\t\\t\\t<Confetti\\n\\t\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\t\\tduration=\\"{2000}\\"\\n\\t\\t\\t\\tamount=\\"{500}\\"\\n\\t\\t\\t\\tfallDistance=\\"100vh\\" />\\n\\t\\t</div>\\n\\t{/if}\\n\\t<div class=\\"dash-outer\\">\\n\\t\\t<Kw1c variant=\\"blue\\">\\n\\t\\t\\t<div class=\\"dashboard\\">\\n\\t\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t>{studied\\n\\t\\t\\t\\t\\t\\t\\t? $_(\\"journeys.dominique.congrats_dominique_you_completed_course\\").toUpperCase()\\n\\t\\t\\t\\t\\t\\t\\t: $_(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\"journeys.dominique.hello_dominique_welcome_to_new_course\\"\\n\\t\\t\\t\\t\\t\\t\\t  ).toUpperCase()}</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"category\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].category.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t{#if studied}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.dominique.get_cred').toUpperCase()}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.dominique.start_studying').toUpperCase()}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{handleStudy}\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"cards\\">\\n\\t\\t\\t\\t\\t{#each Array(4) as i}\\n\\t\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"dash red-dash\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"dash blue-dash\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"dash gray-dash\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"dash gray-dash\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"progress\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{progress}%</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,wBAAW,CACpB,OAAO,CAAE,IAAI,CAAC,GAChB,CACA,wBAAU,CAAC,UAAU,CAAC,sBAAS,CAC7B,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,UAAU,CAAC,oBAAO,CAC3B,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,IACf,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,mBAAM,CACjC,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,WAAW,CACnB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,mBAAM,CACvC,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,uBAAU,CAC3C,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,wBAAW,CAC5C,UAAU,CAAE,IAAI,UAAU,CAC5B,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,wBAAW,CAC5C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,wBAAU,kBAAkB,CAAC,CAAE,CAChE,KAAK,CAAE,GACT,CAEA,mCAAQ,CACN,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CAEA,0CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,4BAAc,CAAG,cAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,4BAAc,CAAC,gBAAG,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CACA,4BAAc,CAAC,iBAAI,CACjB,MAAM,CAAE,KACV,CACA,4BAAc,CAAC,qBAAQ,CACrB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,4BAAc,CAAC,sBAAS,CACtB,KAAK,CAAE,IACT,CACA,4BAAc,CAAC,sBAAS,CACtB,KAAK,CAAE,IACT,CACA,4BAAc,CAAC,sBAAS,CACtB,MAAM,CAAE,IACV,CACA,4BAAc,CAAC,qBAAQ,CACrB,eAAe,CAAE,MACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  let $_, $$unsubscribe__;
  let $$unsubscribe_eventUri;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => value);
  let studied = false;
  let progress = 0;
  let showModal = false;
  const handleStudy = () => {
    currNode.set(3);
    studied = true;
    const counting = setInterval(
      () => {
        if (progress > 100) clearInterval(counting);
        progress = progress < 100 ? progress + 1 : progress;
      },
      1
    );
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-pu9wmb">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-pu9wmb"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-pu9wmb"> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.dominique.kw1c_sent_new_course_cred").toUpperCase())}`;
              }
            }
          )} <div class="p svelte-pu9wmb">${escape($_("journeys.dominique.scan_qr_and_accept_cred_from_kw1c"))}</div> ${`${``}`} <div class="subtext svelte-pu9wmb">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.dominique.awaiting_cred_acceptance"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-pu9wmb">${studied ? `${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.completed_course_with_top_mark_now_get_cred"))}<!-- HTML_TAG_END -->`;
      }
    })}` : `${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.accepted_on_course_now_study"))}<!-- HTML_TAG_END -->`;
      }
    })}`}</div> <div class="sub-text svelte-pu9wmb">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${studied ? `${escape($_("journeys.dominique.get_cred_btn_desc"))} ` : `${escape($_("journeys.dominique.start_studying_btn_desc"))} `}`;
      }
    })}</div> ${studied ? `<div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-pu9wmb">${validate_component(Confetti, "Confetti").$$render(
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
    )}</div>` : ``} <div class="dash-outer svelte-pu9wmb">${validate_component(Kw1c, "Kw1c").$$render($$result, { variant: "blue" }, {}, {
      default: () => {
        return `<div class="dashboard svelte-pu9wmb"><div class="title">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape(studied ? $_("journeys.dominique.congrats_dominique_you_completed_course").toUpperCase() : $_("journeys.dominique.hello_dominique_welcome_to_new_course").toUpperCase())}`;
            }
          }
        )}</div> <div class="details svelte-pu9wmb"><div class="text"><div class="category">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].category.toUpperCase())}`;
            }
          }
        )}</div> <div class="course">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `${escape(dominqueCourses[$dominiqueSelectedCourse].name.toUpperCase())}`;
            }
          }
        )}</div></div> <div class="button svelte-pu9wmb">${studied ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: $_("journeys.dominique.get_cred").toUpperCase(),
            onClick: () => {
              showModal = true;
            }
          },
          {},
          {}
        )}` : `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "kw1c",
            label: $_("journeys.dominique.start_studying").toUpperCase(),
            onClick: handleStudy
          },
          {},
          {}
        )}`}</div></div> <div class="cards svelte-pu9wmb">${each(Array(4), (i) => {
          return `<div class="card svelte-pu9wmb"><div class="dash red-dash svelte-pu9wmb"></div> <div class="dash blue-dash svelte-pu9wmb"></div> <div class="dash gray-dash svelte-pu9wmb"></div> <div class="dash gray-dash svelte-pu9wmb"></div> <div class="progress">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "status",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape(progress)}%`;
              }
            }
          )}</div> </div>`;
        })}</div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Du7ofqz7.js.map
