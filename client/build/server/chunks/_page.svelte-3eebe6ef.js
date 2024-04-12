import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { M as Modal } from './Modal-de587996.js';
import { A as Avatar } from './Avatar-85141636.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { Q as Qr } from './Qr-fe109a8a.js';
import { b as completedJourneys, c as currentJourney } from './flows.store-656655d6.js';
import { c as currStep } from './onboarding.store-97913595.js';
import { a as apiClient } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';
import 'axios';

const css = {
  code: ".container.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1rt6gg5>.svelte-1rt6gg5.svelte-1rt6gg5{padding:20px 0}.container.svelte-1rt6gg5 .desc.svelte-1rt6gg5.svelte-1rt6gg5{padding-bottom:5px;width:100%}.container.svelte-1rt6gg5 .sub-title.svelte-1rt6gg5.svelte-1rt6gg5{padding-top:0;width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5.svelte-1rt6gg5{width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5>.card.svelte-1rt6gg5{width:100%;padding:10px 0}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1rt6gg5 .cards>.card .card-content .text.svelte-1rt6gg5.svelte-1rt6gg5{width:calc(100% - 300px)}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5{margin-right:20px}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5:last-of-type{margin-right:0}.container.svelte-1rt6gg5>.heading.svelte-1rt6gg5.svelte-1rt6gg5,.container.svelte-1rt6gg5>.desc.svelte-1rt6gg5.svelte-1rt6gg5{width:40vw}.modal-content.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;transition:all 0.5s;padding-bottom:30px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.svelte-1rt6gg5{padding:20px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.p.svelte-1rt6gg5{padding:10px 20px}.modal-content.svelte-1rt6gg5 .left.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;flex-wrap:wrap;justify-content:center;max-width:400px}.modal-content.svelte-1rt6gg5 .right.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;width:400px;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;text-align:center;padding:10px 20px}.modal-content.svelte-1rt6gg5 .right .sub-text.svelte-1rt6gg5.svelte-1rt6gg5{padding:0px 20px;width:100%;padding-bottom:30px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  width: 100%;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n  width: 100%;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 10px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 300px);\\n}\\n.container .cards > .card .card-content > * {\\n  margin-right: 20px;\\n}\\n.container .cards > .card .card-content > *:last-of-type {\\n  margin-right: 0;\\n}\\n.container > .heading, .container > .desc {\\n  width: 40vw;\\n}\\n\\n.modal-content {\\n  display: flex;\\n  transition: all 0.5s;\\n  padding-bottom: 30px;\\n}\\n.modal-content > * > * {\\n  padding: 20px;\\n}\\n.modal-content > * > .p {\\n  padding: 10px 20px;\\n}\\n.modal-content .left {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  max-width: 400px;\\n}\\n.modal-content .right {\\n  display: flex;\\n  justify-content: center;\\n  width: 400px;\\n  flex-wrap: wrap;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  text-align: center;\\n  padding: 10px 20px;\\n}\\n.modal-content .right .qr {\\n  height: 145px;\\n  width: 145px;\\n}\\n.modal-content .right .sub-text {\\n  padding: 0px 20px;\\n  width: 100%;\\n  padding-bottom: 30px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Loading, Card, Avatar, Button, Modal } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { completedJourneys, currentJourney } from \\"$lib/stores/flows.store\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport Qr from \\"$lib/components/project/Qr/Qr.svelte\\";\\nimport { createWebsocket } from \\"$lib/utils/ws.util\\";\\nimport { onMount } from \\"svelte\\";\\nlet qr;\\nconst journeys = {\\n    dominique: {\\n        heading: \\"Meet Dominique! A student enrolling at KW1 College, NL.\\",\\n        p1: \\"Dominique has just left school and is looking to enrol at Koning Willem I College to study and obtain a Diploma.\\",\\n        p2: \\"Using their self-sovereign identity, help Dominique enrol at college, earn a course credential, share that credential with potential employers, and apply for a new job.\\",\\n        img: \\"/imgs/dominique.png\\"\\n    },\\n    peter: {\\n        heading: \\"Meet Peter! A college enrolment officer at KW1 College, NL.\\",\\n        p1: \\"Peter is an enrolment officer at Koning Willem I College looking to support students with their training and enrolment on international internship experiences.\\",\\n        p2: \\"Using self-sovereign identity, help Peter evaluate student internship eligibility, enrol students on internationalisation course, issue course badges, assign internship placements, and verify student completion of internships on their return from their international placements.\\",\\n        img: \\"/imgs/peter.png\\"\\n    },\\n    imani: {\\n        heading: \\"Meet Imani! A corporate HR manager at Future Tech Co.\\",\\n        p1: \\"Imani is in charge of the hiring and training of staff at the Future Tech Co. where she employs and developers the company workforce.\\",\\n        p2: \\"Using self-sovereign identity, help Imani in the hiring of new employees, issuing of company ID, creation of internal open badges, and the training and issuing of open badges to employees who successfully completed the company course training.\\",\\n        img: \\"/imgs/imani.png\\"\\n    }\\n};\\nlet isOpen = false;\\nlet selectedJourney = null;\\nlet qrVisible = false;\\nlet buttonVisible = false;\\napiClient.get(\\"/\\");\\nonMount(() => {\\n    currStep.set(2);\\n});\\nfunction watchQr(qr) {\\n    if (!qr)\\n        return;\\n    const ws = createWebsocket();\\n    ws.onmessage = (event) => {\\n        const data = JSON.parse(event.data);\\n        if (data.creds) {\\n            buttonVisible = true;\\n        }\\n    };\\n}\\n$: watchQr(qr);\\n$: journey = selectedJourney && journeys[selectedJourney];\\n<\/script>\\n\\n<div class=\\"modal\\">\\n\\t<Modal withBorder=\\"{true}\\" bind:isOpen=\\"{isOpen}\\" borderRadius=\\"8\\">\\n\\t\\t{#if journey}\\n\\t\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t\\t<div class=\\"left\\">\\n\\t\\t\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t\\t\\t<Avatar variant=\\"large\\" image=\\"{journey.img}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">{journey.heading}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>{journey.p1}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\"><Typography>{journey.p2}</Typography></div>\\n\\t\\t\\t\\t\\t{#if !qrVisible}\\n\\t\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"Continue\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcurrStep.set(4);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (selectedJourney) currentJourney.set(selectedJourney);\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tqrVisible = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if qrVisible}\\n\\t\\t\\t\\t\\t<div class=\\"right\\">\\n\\t\\t\\t\\t\\t\\t{#if qr}\\n\\t\\t\\t\\t\\t\\t\\t<Qr size=\\"{200}\\" data=\\"{qr}\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<div class=\\"scan-header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{buttonVisible\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t? \\"Your credentials are confirmed!\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t: \\"Scan QR code to connect to NGDIL & receive your credentials.\\"}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{buttonVisible\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t? \`Click to begin \${selectedJourney}'s journey.\`\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t: \`In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of \${selectedJourney}’s verifiable credentials.\`}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#if buttonVisible}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{\`Start \${selectedJourney}'s Journey\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto(\`/demo/journeys/\${selectedJourney}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\" />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</Modal>\\n</div>\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>{#if $completedJourneys.length === 0}\\n\\t\\t\\t\\tYou’re all set! <Highlight>Let’s choose the user journey</Highlight> you would like to explore\\n\\t\\t\\t\\tfirst\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\tWelcome back! <Highlight>Choose the user journey</Highlight> you would like to explore next.\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\"\\n\\t\\t\\t>Click the get started button to select the journey you would like to experience.\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-title\\">\\n\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t(It is recommended to experience the student journey first.)\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"8\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/dominique.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Dominique Veritas</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>Dominique is a school graduate, excited to enrol as a student at Koning Willem I\\n\\t\\t\\t\\t\\t\\t\\t\\tCollege.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('dominique') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'dominique';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: [\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'National ID',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'School Course Certificate',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Volunteer Badge',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Higher Education Information Literacy Level 1',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Business Innovation & Interdisciplinair Samenwerken'\\n\\t\\t\\t\\t\\t\\t\\t\\t]\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('dominique') ? 'Complete' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"8\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Peter van de Meijden</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tPeter is a college enrolment officer who supports students with international\\n\\t\\t\\t\\t\\t\\t\\t\\tinternships.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('peter') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'peter';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: ['National ID', 'Staff ID']\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('peter') ? 'Complete' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\" borderRadius=\\"8\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/imani.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Imani Jameson</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tImani is a corporate HR manager responsible for the hiring and onboarding of new\\n\\t\\t\\t\\t\\t\\t\\t\\tstaff.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$completedJourneys.includes('imani') ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{async () => {\\n\\t\\t\\t\\t\\t\\t\\tselectedJourney = 'imani';\\n\\t\\t\\t\\t\\t\\t\\tcurrStep.set(3);\\n\\t\\t\\t\\t\\t\\t\\tconst { data } = await apiClient.post('/api/starting-offer', {\\n\\t\\t\\t\\t\\t\\t\\t\\tcredentials: ['National ID', 'Employee ID']\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t\\t\\tqr = data.uri;\\n\\t\\t\\t\\t\\t\\t\\tisOpen = true;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$completedJourneys.includes('imani') ? 'Complete' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,wCAAW,CACpB,WAAW,CAAE,CAAC,CACd,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,4BAAa,CAAG,eAAE,CAC1C,YAAY,CAAE,IAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,4BAAa,CAAG,eAAC,aAAc,CACvD,YAAY,CAAE,CAChB,CACA,yBAAU,CAAG,sCAAQ,CAAE,yBAAU,CAAG,mCAAM,CACxC,KAAK,CAAE,IACT,CAEA,2DAAe,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,cAAc,CAAE,IAClB,CACA,6BAAc,CAAG,eAAC,CAAG,eAAE,CACrB,OAAO,CAAE,IACX,CACA,6BAAc,CAAG,eAAC,CAAG,iBAAG,CACtB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,6BAAc,CAAC,mCAAM,CACnB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,KACb,CACA,6BAAc,CAAC,oCAAO,CACpB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,UAAU,CACvB,aAAa,CAAE,UAAU,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,IAChB,CAKA,6BAAc,CAAC,MAAM,CAAC,uCAAU,CAC9B,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let journey;
  let $completedJourneys, $$unsubscribe_completedJourneys;
  $$unsubscribe_completedJourneys = subscribe(completedJourneys, (value) => $completedJourneys = value);
  let qr;
  const journeys = {
    dominique: {
      heading: "Meet Dominique! A student enrolling at KW1 College, NL.",
      p1: "Dominique has just left school and is looking to enrol at Koning Willem I College to study and obtain a Diploma.",
      p2: "Using their self-sovereign identity, help Dominique enrol at college, earn a course credential, share that credential with potential employers, and apply for a new job.",
      img: "/imgs/dominique.png"
    },
    peter: {
      heading: "Meet Peter! A college enrolment officer at KW1 College, NL.",
      p1: "Peter is an enrolment officer at Koning Willem I College looking to support students with their training and enrolment on international internship experiences.",
      p2: "Using self-sovereign identity, help Peter evaluate student internship eligibility, enrol students on internationalisation course, issue course badges, assign internship placements, and verify student completion of internships on their return from their international placements.",
      img: "/imgs/peter.png"
    },
    imani: {
      heading: "Meet Imani! A corporate HR manager at Future Tech Co.",
      p1: "Imani is in charge of the hiring and training of staff at the Future Tech Co. where she employs and developers the company workforce.",
      p2: "Using self-sovereign identity, help Imani in the hiring of new employees, issuing of company ID, creation of internal open badges, and the training and issuing of open badges to employees who successfully completed the company course training.",
      img: "/imgs/imani.png"
    }
  };
  let isOpen = false;
  let selectedJourney = null;
  let qrVisible = false;
  let buttonVisible = false;
  apiClient.get("/");
  function watchQr(qr2) {
    if (!qr2)
      return;
    const ws = createWebsocket();
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.creds) {
        buttonVisible = true;
      }
    };
  }
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
        borderRadius: "8",
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
              label: "Continue",
              onClick: () => {
                currStep.set(4);
                if (selectedJourney)
                  currentJourney.set(selectedJourney);
                qrVisible = true;
              }
            },
            {},
            {}
          )}</div>` : ``}</div> ${qrVisible ? `<div class="right svelte-1rt6gg5">${qr ? `${validate_component(Qr, "Qr").$$render($$result, { size: 200, data: qr }, {}, {})}` : ``} <div class="scan-header svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? "Your credentials are confirmed!" : "Scan QR code to connect to NGDIL & receive your credentials.")}`;
            }
          })}</div> <div class="sub-text svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? `Click to begin ${selectedJourney}'s journey.` : `In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of ${selectedJourney}’s verifiable credentials.`)}`;
            }
          })}</div> ${buttonVisible ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: `Start ${selectedJourney}'s Journey`,
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
        return `${$completedJourneys.length === 0 ? `
				You’re all set! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let’s choose the user journey`;
          }
        })} you would like to explore
				first` : `
				Welcome back! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Choose the user journey`;
          }
        })} you would like to explore next.`}`;
      }
    })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
      default: () => {
        return `Click the get started button to select the journey you would like to experience.`;
      }
    })}</div> <div class="sub-title svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
      default: () => {
        return `(It is recommended to experience the student journey first.)`;
      }
    })}</div> <div class="cards svelte-1rt6gg5"><div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Dominique Veritas`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.`;
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
            label: $completedJourneys.includes("dominique") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> <div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Peter van de Meijden`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Peter is a college enrolment officer who supports students with international
								internships.`;
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
            label: $completedJourneys.includes("peter") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div> <div class="card svelte-1rt6gg5">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="card-content svelte-1rt6gg5">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani.png" }, {}, {})} <div class="text svelte-1rt6gg5"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Imani Jameson`;
          }
        })}</div> <div class="desc svelte-1rt6gg5">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Imani is a corporate HR manager responsible for the hiring and onboarding of new
								staff.`;
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
            label: $completedJourneys.includes("imani") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_completedJourneys();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3eebe6ef.js.map
