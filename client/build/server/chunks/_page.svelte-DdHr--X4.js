import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { A as Avatar } from './Avatar-CYgDjTlo.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { L as Loading } from './Loading-Dqtoqnil.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { g as eventUri, b as completedJourneys, c as currentJourney } from './flows.store-Ch_DhNys.js';
import { c as currStep } from './onboarding.store-gJCzGVTB.js';
import { a as apiClient } from './axios.utils-CIq7LE2y.js';
import '@tanglelabs/open-id-qr';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".container.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1rt6gg5>.svelte-1rt6gg5.svelte-1rt6gg5{padding:20px 0}.container.svelte-1rt6gg5 .desc.svelte-1rt6gg5.svelte-1rt6gg5{padding-bottom:5px;width:100%}.container.svelte-1rt6gg5 .sub-title.svelte-1rt6gg5.svelte-1rt6gg5{padding-top:0;width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5.svelte-1rt6gg5{width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5>.card.svelte-1rt6gg5{width:100%;padding:10px 0}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1rt6gg5 .cards>.card .card-content .text.svelte-1rt6gg5.svelte-1rt6gg5{width:calc(100% - 300px)}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5{margin-right:20px}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5:last-of-type{margin-right:0}.container.svelte-1rt6gg5>.heading.svelte-1rt6gg5.svelte-1rt6gg5,.container.svelte-1rt6gg5>.desc.svelte-1rt6gg5.svelte-1rt6gg5{width:40vw}.modal-content.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;transition:all 0.5s;padding-bottom:30px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.svelte-1rt6gg5{padding:20px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.p.svelte-1rt6gg5{padding:10px 20px}.modal-content.svelte-1rt6gg5 .left.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;flex-wrap:wrap;justify-content:center;max-width:400px}.modal-content.svelte-1rt6gg5 .right.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;width:400px;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;text-align:center;padding:10px 20px}.modal-content.svelte-1rt6gg5 .right .sub-text.svelte-1rt6gg5.svelte-1rt6gg5{padding:0px 20px;width:100%;padding-bottom:30px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  width: 100%;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n  width: 100%;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 10px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 300px);\\n}\\n.container .cards > .card .card-content > * {\\n  margin-right: 20px;\\n}\\n.container .cards > .card .card-content > *:last-of-type {\\n  margin-right: 0;\\n}\\n.container > .heading, .container > .desc {\\n  width: 40vw;\\n}\\n\\n.modal-content {\\n  display: flex;\\n  transition: all 0.5s;\\n  padding-bottom: 30px;\\n}\\n.modal-content > * > * {\\n  padding: 20px;\\n}\\n.modal-content > * > .p {\\n  padding: 10px 20px;\\n}\\n.modal-content .left {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  max-width: 400px;\\n}\\n.modal-content .right {\\n  display: flex;\\n  justify-content: center;\\n  width: 400px;\\n  flex-wrap: wrap;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  text-align: center;\\n  padding: 10px 20px;\\n}\\n.modal-content .right .qr {\\n  height: 145px;\\n  width: 145px;\\n}\\n.modal-content .right .sub-text {\\n  padding: 0px 20px;\\n  width: 100%;\\n  padding-bottom: 30px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Loading, Card, Avatar, Button, Modal } from \\"$lib/components\\";\\nimport { completedJourneys, currentJourney, eventUri } from \\"$lib/stores/flows.store\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nimport \\"@tanglelabs/open-id-qr\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nlet qr;\\nconst journeys = {\\n    dominique: {\\n        heading: $_(\\"onboarding.choose_journey.dominique.heading\\"),\\n        p1: $_(\\"onboarding.choose_journey.dominique.p1\\"),\\n        p2: $_(\\"onboarding.choose_journey.dominique.p2\\"),\\n        img: \\"/imgs/dominique.png\\"\\n    },\\n    peter: {\\n        heading: $_(\\"onboarding.choose_journey.peter.heading\\"),\\n        p1: $_(\\"onboarding.choose_journey.peter.p1\\"),\\n        p2: $_(\\"onboarding.choose_journey.peter.p2\\"),\\n        img: \\"/imgs/peter.png\\"\\n    },\\n    imani: {\\n        heading: $_(\\"onboarding.choose_journey.imani.heading\\"),\\n        p1: $_(\\"onboarding.choose_journey.imani.p1\\"),\\n        p2: $_(\\"onboarding.choose_journey.imani.p2\\"),\\n        img: \\"/imgs/imani.png\\"\\n    }\\n};\\nlet isOpen = false;\\nlet selectedJourney = null;\\nlet qrVisible = false;\\nlet buttonVisible = false;\\nlet renderQr = false;\\nonMount(() => {\\n    currStep.set(2);\\n});\\nfunction watchQr(qr) {\\n    console.log(qr);\\n    if (!qr)\\n        return;\\n    renderQr = true;\\n    document.addEventListener(\\"open-id-qr-success\\", (e) => {\\n        if (e.detail.type === \\"vc\\")\\n            buttonVisible = true;\\n    });\\n}\\napiClient.get(\\"/\\");\\nonMount(() => {\\n    currStep.set(2);\\n});\\n$: watchQr(qr);\\n$: journey = selectedJourney && journeys[selectedJourney];\\n<\/script>\\n\\n<div class=\\"modal\\">\\n\\t<Modal withBorder=\\"{true}\\" bind:isOpen=\\"{isOpen}\\" borderRadius=\\"{8}\\">\\n\\t\\t{#if journey}\\n\\t\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t\\t\\t<Avatar variant=\\"large\\" image=\\"{journey.img}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">{journey.heading}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>{journey.p1}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\"><Typography>{journey.p2}</Typography></div>\\n\\t\\t\\t\\t\\t{#if !qrVisible}\\n\\t\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcurrStep.set(4);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (selectedJourney) currentJourney.set(selectedJourney);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tqrVisible = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if qrVisible}\\n\\t\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t{#key qr}\\n\\t\\t\\t\\t\\t\\t\\t\\t<open-id-qr size=\\"200\\" request-uri=\\"{qr}\\" event-stream-uri=\\"{$eventUri}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t></open-id-qr>\\n\\t\\t\\t\\t\\t\\t\\t{/key}\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"scan-header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{buttonVisible\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t? $_(\\"onboarding.choose_journey.cred_confirmed\\")\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t: $_(\\"onboarding.choose_journey.scan_qr_to_receive_cred\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{buttonVisible\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t? $_(\\"onboarding.choose_journey.click_to_begin_journey\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalues: { selected: selectedJourney }\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t  })\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t: $_(\\"onboarding.choose_journey.scan_qr_receive_vc\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalues: { selected: selectedJourney }\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t  })}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if buttonVisible}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('onboarding.start_journey', { values: { selected: selectedJourney } })}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto(\`/demo/journeys/\${selectedJourney}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\" />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</Modal>\\n</div>\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if $completedJourneys.length === 0}\\n\\t\\t\\t\\t{@html highlight($_(\\"onboarding.choose_journey.all_set_choose_journey\\"))}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight($_(\\"onboarding.choose_journey.welcome_back_choose_journey\\"))}\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\t{$_(\\"onboarding.choose_journey.click_to_get_started\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-title\\">\\n\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t({$_(\\"onboarding.choose_journey.exp_stud_journey_first\\")})\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"{8}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/dominique.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"onboarding.choose_journey.dominique_veritas\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"onboarding.choose_journey.dominique_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('dominique') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'dominique';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: [\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'National ID',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'School Course Certificate',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Volunteer Badge',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Higher Education Information Literacy Level 1',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Business Innovation & Interdisciplinair Samenwerken'\\n\\t\\t\\t\\t\\t\\t\\t\\t]\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('dominique')\\n\\t\\t\\t\\t\\t\\t\\t? $_('components.complete')\\n\\t\\t\\t\\t\\t\\t\\t: $_('components.get_started')}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"{8}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"onboarding.choose_journey.peter_van_de_meijdan\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"onboarding.choose_journey.peter_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('peter') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'peter';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: ['National ID', 'Staff ID']\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('peter')\\n\\t\\t\\t\\t\\t\\t\\t? $_('components.complete')\\n\\t\\t\\t\\t\\t\\t\\t: $_('components.get_started')}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"{8}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/imani.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"onboarding.choose_journey.imani_jameson\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"onboarding.choose_journey.imani_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('imani') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'imani';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: ['National ID', 'Employee ID']\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('imani')\\n\\t\\t\\t\\t\\t\\t\\t? $_('components.complete')\\n\\t\\t\\t\\t\\t\\t\\t: $_('components.get_started')}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,wCAAW,CACpB,WAAW,CAAE,CAAC,CACd,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,4BAAa,CAAG,eAAE,CAC1C,YAAY,CAAE,IAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,4BAAa,CAAG,eAAC,aAAc,CACvD,YAAY,CAAE,CAChB,CACA,yBAAU,CAAG,sCAAQ,CAAE,yBAAU,CAAG,mCAAM,CACxC,KAAK,CAAE,IACT,CAEA,2DAAe,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,cAAc,CAAE,IAClB,CACA,6BAAc,CAAG,eAAC,CAAG,eAAE,CACrB,OAAO,CAAE,IACX,CACA,6BAAc,CAAG,eAAC,CAAG,iBAAG,CACtB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,6BAAc,CAAC,mCAAM,CACnB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KACb,CACA,6BAAc,CAAC,oCAAO,CACpB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,UAAU,CACvB,aAAa,CAAE,UAAU,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,IAChB,CAKA,6BAAc,CAAC,MAAM,CAAC,uCAAU,CAC9B,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let journey;
  let $_, $$unsubscribe__;
  let $eventUri, $$unsubscribe_eventUri;
  let $completedJourneys, $$unsubscribe_completedJourneys;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_eventUri = subscribe(eventUri, (value) => $eventUri = value);
  $$unsubscribe_completedJourneys = subscribe(completedJourneys, (value) => $completedJourneys = value);
  let qr;
  const journeys = {
    dominique: {
      heading: $_("onboarding.choose_journey.dominique.heading"),
      p1: $_("onboarding.choose_journey.dominique.p1"),
      p2: $_("onboarding.choose_journey.dominique.p2"),
      img: "/imgs/dominique.png"
    },
    peter: {
      heading: $_("onboarding.choose_journey.peter.heading"),
      p1: $_("onboarding.choose_journey.peter.p1"),
      p2: $_("onboarding.choose_journey.peter.p2"),
      img: "/imgs/peter.png"
    },
    imani: {
      heading: $_("onboarding.choose_journey.imani.heading"),
      p1: $_("onboarding.choose_journey.imani.p1"),
      p2: $_("onboarding.choose_journey.imani.p2"),
      img: "/imgs/imani.png"
    }
  };
  let isOpen = false;
  let selectedJourney = null;
  let qrVisible = false;
  let buttonVisible = false;
  function watchQr(qr2) {
    console.log(qr2);
    if (!qr2) return;
    document.addEventListener("open-id-qr-success", (e) => {
      if (e.detail.type === "vc") buttonVisible = true;
    });
  }
  apiClient.get("/");
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      watchQr(qr);
    }
    journey = selectedJourney && journeys[selectedJourney];
    $$rendered = `<div class="modal">${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        withBorder: true,
        borderRadius: 8,
        isOpen
      },
      {
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${journey ? `<div class="modal-content svelte-1rt6gg5"><div class="left svelte-1rt6gg5"><div class="avatar svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { variant: "large", image: journey.img }, {}, {})}</div> <div class="heading svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(journey.heading)}`;
            }
          })}</div> <div class="p svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p1)}`;
            }
          })}</div> <div class="p svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p2)}`;
            }
          })}</div> ${!qrVisible ? `<div class="button svelte-1rt6gg5">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "white",
              label: $_("components.continue"),
              onClick: () => {
                currStep.set(4);
                if (selectedJourney) currentJourney.set(selectedJourney);
                qrVisible = true;
              }
            },
            {},
            {}
          )}</div>` : ``}</div> ${qrVisible ? `<div class="right svelte-1rt6gg5">${qr ? `<open-id-qr size="200"${add_attribute("request-uri", qr, 0)}${add_attribute("event-stream-uri", $eventUri, 0)} class="svelte-1rt6gg5"></open-id-qr>` : ``} <div class="scan-header svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? $_("onboarding.choose_journey.cred_confirmed") : $_("onboarding.choose_journey.scan_qr_to_receive_cred"))}`;
            }
          })}</div> <div class="sub-text svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? $_("onboarding.choose_journey.click_to_begin_journey", { values: { selected: selectedJourney } }) : $_("onboarding.choose_journey.scan_qr_receive_vc", { values: { selected: selectedJourney } }))}`;
            }
          })}</div> ${buttonVisible ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: $_("onboarding.start_journey", { values: { selected: selectedJourney } }),
              onClick: () => {
                goto();
              },
              variant: "secondary"
            },
            {},
            {}
          )}` : `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}`}</div>` : ``}</div>` : ``}`;
        }
      }
    )}</div> <div class="container svelte-1rt6gg5"><div class="heading svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${$completedJourneys.length === 0 ? `<!-- HTML_TAG_START -->${highlight($_("onboarding.choose_journey.all_set_choose_journey"))}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${highlight($_("onboarding.choose_journey.welcome_back_choose_journey"))}<!-- HTML_TAG_END -->`}`;
      }
    })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
      default: () => {
        return `${escape($_("onboarding.choose_journey.click_to_get_started"))}`;
      }
    })}</div> <div class="sub-title svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
      default: () => {
        return `(${escape($_("onboarding.choose_journey.exp_stud_journey_first"))})`;
      }
    })}</div> <div class="cards svelte-1rt6gg5"><div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: 8 }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.dominique_veritas"))}`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.dominique_desc"))}`;
          }
        })}</div></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("dominique") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "dominique";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", {
                credentials: [
                  "National ID",
                  "School Course Certificate",
                  "Volunteer Badge",
                  "Higher Education Information Literacy Level 1",
                  "Business Innovation & Interdisciplinair Samenwerken"
                ]
              });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("dominique") ? $_("components.complete") : $_("components.get_started")
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> <div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: 8 }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.peter_van_de_meijdan"))}`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.peter_desc"))}`;
          }
        })}</div></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("peter") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "peter";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", { credentials: ["National ID", "Staff ID"] });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("peter") ? $_("components.complete") : $_("components.get_started")
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> <div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: 8 }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.imani_jameson"))}`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($_("onboarding.choose_journey.imani_desc"))}`;
          }
        })}</div></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("imani") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "imani";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", {
                credentials: ["National ID", "Employee ID"]
              });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("imani") ? $_("components.complete") : $_("components.get_started")
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_eventUri();
  $$unsubscribe_completedJourneys();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DdHr--X4.js.map
