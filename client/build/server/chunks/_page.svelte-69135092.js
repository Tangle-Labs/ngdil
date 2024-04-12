import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each, b as null_to_empty } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import './creds-54a304eb.js';
import { A as peterChosenStudent } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-4kg7bv>.svelte-4kg7bv{padding:15px 0}.dash.svelte-4kg7bv .content .sidebar.svelte-4kg7bv{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-4kg7bv .content .sidebar .menu-item.svelte-4kg7bv{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-4kg7bv .content .sidebar .menu-item .square.svelte-4kg7bv{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-4kg7bv .content .sidebar .menu-item .rect.svelte-4kg7bv{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-4kg7bv .content .card.svelte-4kg7bv{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-4kg7bv .content .card .card-header.svelte-4kg7bv{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-4kg7bv .content .card .card-header .button-container.svelte-4kg7bv{width:40%;text-align:center}.dash.svelte-4kg7bv .content .card .table.svelte-4kg7bv{display:flex}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-4kg7bv .content .card .table .column.badge.svelte-4kg7bv{width:30px}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:last-of-type{padding-left:10px}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(1){max-width:60px}.dash.svelte-4kg7bv .content .card .table .column.type.svelte-4kg7bv{width:50%}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(3){width:30%}.dash.svelte-4kg7bv .content .card .table .column.svelte-4kg7bv:nth-of-type(4){width:10%}.dash.svelte-4kg7bv .content .card .table .column .data.svelte-4kg7bv,.dash.svelte-4kg7bv .content .card .table .column .circle-container.svelte-4kg7bv,.dash.svelte-4kg7bv .content .card .table .column .button-container.svelte-4kg7bv{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-4kg7bv .content .card .table .column .header.svelte-4kg7bv{height:30px}.dash.svelte-4kg7bv .content .card .table .column .action.svelte-4kg7bv{text-align:center;width:100%}.dash.svelte-4kg7bv .content .card .table .column .circle-container.svelte-4kg7bv{flex-basis:100%}.dash.svelte-4kg7bv .content .card .table .column .circle.svelte-4kg7bv{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.button.svelte-4kg7bv.svelte-4kg7bv{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.loading.svelte-4kg7bv.svelte-4kg7bv{background:var(--black-300)}.button.loading.svelte-4kg7bv.svelte-4kg7bv:hover{cursor:unset;background:var(--black-300)}.button.svelte-4kg7bv.svelte-4kg7bv:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .card-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 40px;\\n}\\n.dash .content .card .card-header .button-container {\\n  width: 40%;\\n  text-align: center;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 20%;\\n}\\n.dash .content .card .table .column.badge {\\n  width: 30px;\\n}\\n.dash .content .card .table .column:last-of-type {\\n  padding-left: 10px;\\n}\\n.dash .content .card .table .column:nth-of-type(1) {\\n  max-width: 60px;\\n}\\n.dash .content .card .table .column.type {\\n  width: 50%;\\n}\\n.dash .content .card .table .column:nth-of-type(3) {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(4) {\\n  width: 10%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .circle-container,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .header {\\n  height: 30px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n.dash .content .card .table .column .circle-container {\\n  flex-basis: 100%;\\n}\\n.dash .content .card .table .column .circle {\\n  height: 25px;\\n  width: 25px;\\n  border-radius: 30px;\\n  border: 1px solid var(--black-300);\\n  box-sizing: border-box;\\n  background: var(--white-700);\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  width: calc(100% - 40px);\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  font-weight: 500;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.loading {\\n  background: var(--black-300);\\n}\\n.button.loading:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, CredModal } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { credentials } from \\"$lib/stores/creds\\";\\nimport { currNode, dominiqueSelectedCourse, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet receivedCreds = false;\\nlet loading = false;\\nfunction handleWait() {\\n    loading = true;\\n    setTimeout(() => {\\n        receivedCreds = true;\\n        loading = false;\\n        currNode.set(3);\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if !receivedCreds}\\n\\t\\t\\t\\tTo evaluate {$peterChosenStudent?.split(\\" \\")[0]}’s eligibility <Highlight>\\n\\t\\t\\t\\t\\tlet’s request the credentials</Highlight>\\n\\t\\t\\t\\trequired to participate in the internship.\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\tIt appears {$peterChosenStudent?.split(\\" \\")[0]} is missing an internationalisation badge. Let’s\\n\\t\\t\\t\\tenrol them onto the course.\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t? \\"Click the enrol student button to enrol them onto the internationalisation course.\\"\\n\\t\\t\\t\\t: \\"Click the request credentials button to get the students credentials\\"}</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"STUDENT APPLICANT\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"card-header\\">\\n\\t\\t\\t\\t\\t<div class=\\"student\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterChosenStudent?.toLocaleUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>3D PRINT DESIGN</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${loading && 'loading'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => goto('/demo/journeys/peter/enrol-students')}\\">\\n\\t\\t\\t\\t\\t\\t\\t\\tENROL STUDENT\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<button class=\\"{\`button \${loading && 'loading'}\`}\\" on:click=\\"{handleWait}\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{loading ? \\"VERIFYING\\" : \\"REQUEST CREDENTIALS\\"}\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each Array(4) as _, i}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else if !receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"{\`/imgs/\${i !== 3 ? 'verified' : 'missing'}.png\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"circle\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"column type\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Credential Type</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\">NATIONAL ID</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\">COLLEGE ID</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\">COURSE BADGE</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>INTERNATIONALISATION BADGE</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Issuer</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\">The Government</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\">Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\">Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\">Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Status</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each Array(4) as _, i}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if i !== 3}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\">Verified</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--red-900\\">Missing</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">Pending</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"column badge\\">\\n\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">_</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"National ID\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"The Government\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{ ...credentials.nationalId, 'Full Name': $peterChosenStudent }}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/gov.svg\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"College ID\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"Koning Willem I College\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.collegeId,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $peterChosenStudent\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"Course Badge\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"Koning Willem I College\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.courseCred,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $peterChosenStudent\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\"></div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterChosenStudent, $$unsubscribe_peterChosenStudent;
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => $peterChosenStudent = value);
  let loading = false;
  $$result.css.add(css);
  $$unsubscribe_peterChosenStudent();
  return `<div class="container svelte-4kg7bv"><div class="heading svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${`To evaluate ${escape($peterChosenStudent?.split(" ")[0])}’s eligibility ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `let’s request the credentials`;
        }
      })}
				required to participate in the internship.`}`;
    }
  })}</div> <div class="sub-text svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape("Click the request credentials button to get the students credentials")}`;
    }
  })}</div> <div class="dash svelte-4kg7bv">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "STUDENT APPLICANT"
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-4kg7bv">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-4kg7bv" data-svelte-h="svelte-11chbf8"><div class="square svelte-4kg7bv"></div> <div class="rect svelte-4kg7bv"></div> </div>`;
        })}</div> <div class="card svelte-4kg7bv"><div class="card-header svelte-4kg7bv"><div class="student"><div class="name">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterChosenStudent?.toLocaleUpperCase())}`;
            }
          }
        )}</div> <div class="course">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `3D PRINT DESIGN`;
            }
          }
        )}</div></div> <div class="button-container svelte-4kg7bv">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-4kg7bv"}">${escape("REQUEST CREDENTIALS")}</button>`}</div></div> <div class="table svelte-4kg7bv"><div class="column svelte-4kg7bv"><div class="header svelte-4kg7bv">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "sub-text",
            fontVariant: "kw1c",
            color: "--white-300"
          },
          {},
          {
            default: () => {
              return `.`;
            }
          }
        )}</div> ${each(Array(4), (_, i) => {
          return `<div class="circle-container svelte-4kg7bv">${`${`<div class="circle svelte-4kg7bv"></div>`}`} </div>`;
        })}</div> <div class="column type svelte-4kg7bv"><div class="header svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Credential Type`;
          }
        })}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `NATIONAL ID`;
            }
          }
        )}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `COLLEGE ID`;
            }
          }
        )}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `COURSE BADGE`;
            }
          }
        )}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `INTERNATIONALISATION BADGE`;
            }
          }
        )}</div></div> <div class="column svelte-4kg7bv"><div class="header svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Issuer`;
          }
        })}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `The Government`;
          }
        })}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div> <div class="data svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Koning Willem I College`;
          }
        })}</div></div> <div class="column svelte-4kg7bv"><div class="header svelte-4kg7bv">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Status`;
          }
        })}</div> ${each(Array(4), (_, i) => {
          return `<div class="data svelte-4kg7bv">${`${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "status",
              color: "--secondary-900"
            },
            {},
            {
              default: () => {
                return `Pending`;
              }
            }
          )}`} </div>`;
        })}</div> <div class="column badge svelte-4kg7bv">${``}</div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-69135092.js.map
