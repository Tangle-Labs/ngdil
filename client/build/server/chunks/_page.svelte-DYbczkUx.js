import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, d as null_to_empty } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import './creds-CpchBagB.js';
import { B as peterChosenStudent } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1dmov1c>.svelte-1dmov1c{padding:15px 0}.dash.svelte-1dmov1c .content.svelte-1dmov1c{display:flex;justify-items:center;justify-content:space-between;padding-right:15px}.dash.svelte-1dmov1c .content .sidebar.svelte-1dmov1c{width:18%;background:rgb(255, 255, 255);min-height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-1dmov1c .content .sidebar .menu-item.svelte-1dmov1c{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-1dmov1c .content .sidebar .menu-item .square.svelte-1dmov1c{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-1dmov1c .content .sidebar .menu-item .rect.svelte-1dmov1c{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-1dmov1c .content .card.svelte-1dmov1c{width:80%;background:white;border-top-right-radius:20px;border-top-left-radius:20px;margin-top:15px;padding:20px;box-sizing:border-box}.dash.svelte-1dmov1c .content .card .card-header.svelte-1dmov1c{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-1dmov1c .content .card .card-header .button-container.svelte-1dmov1c{width:40%;text-align:center}.dash.svelte-1dmov1c .content .card .table.svelte-1dmov1c{display:flex;gap:15px}.dash.svelte-1dmov1c .content .card .table .column.svelte-1dmov1c{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-1dmov1c .content .card .table .column.badge.svelte-1dmov1c{display:flex;align-self:flex-end}.dash.svelte-1dmov1c .content .card .table .column.svelte-1dmov1c:last-of-type{padding-left:10px}.dash.svelte-1dmov1c .content .card .table .column.svelte-1dmov1c:nth-of-type(1){max-width:60px}.dash.svelte-1dmov1c .content .card .table .column.type.svelte-1dmov1c{width:30%}.dash.svelte-1dmov1c .content .card .table .column.svelte-1dmov1c:nth-of-type(3){width:30%}.dash.svelte-1dmov1c .content .card .table .column.svelte-1dmov1c:nth-of-type(4){width:15%;align-content:end}.dash.svelte-1dmov1c .content .card .table .column .data.svelte-1dmov1c,.dash.svelte-1dmov1c .content .card .table .column .circle-container.svelte-1dmov1c,.dash.svelte-1dmov1c .content .card .table .column .button-container.svelte-1dmov1c{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-1dmov1c .content .card .table .column .header.svelte-1dmov1c{height:30px}.dash.svelte-1dmov1c .content .card .table .column .action.svelte-1dmov1c{text-align:center;width:100%}.dash.svelte-1dmov1c .content .card .table .column .circle-container.svelte-1dmov1c{flex-basis:100%}.dash.svelte-1dmov1c .content .card .table .column .circle.svelte-1dmov1c{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.button.svelte-1dmov1c.svelte-1dmov1c{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;font-weight:500;margin-bottom:0;transition:0.5s all;min-width:max-content}.button.loading.svelte-1dmov1c.svelte-1dmov1c{background:var(--black-300)}.button.loading.svelte-1dmov1c.svelte-1dmov1c:hover{cursor:unset;background:var(--black-300)}.button.svelte-1dmov1c.svelte-1dmov1c:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content {\\n  display: flex;\\n  justify-items: center;\\n  justify-content: space-between;\\n  padding-right: 15px;\\n}\\n.dash .content .sidebar {\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  min-height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 80%;\\n  background: white;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  margin-top: 15px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .card-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 40px;\\n}\\n.dash .content .card .card-header .button-container {\\n  width: 40%;\\n  text-align: center;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n  gap: 15px;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 20%;\\n}\\n.dash .content .card .table .column.badge {\\n  display: flex;\\n  align-self: flex-end;\\n}\\n.dash .content .card .table .column:last-of-type {\\n  padding-left: 10px;\\n}\\n.dash .content .card .table .column:nth-of-type(1) {\\n  max-width: 60px;\\n}\\n.dash .content .card .table .column.type {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(3) {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(4) {\\n  width: 15%;\\n  align-content: end;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .circle-container,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .header {\\n  height: 30px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n.dash .content .card .table .column .circle-container {\\n  flex-basis: 100%;\\n}\\n.dash .content .card .table .column .circle {\\n  height: 25px;\\n  width: 25px;\\n  border-radius: 30px;\\n  border: 1px solid var(--black-300);\\n  box-sizing: border-box;\\n  background: var(--white-700);\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  width: calc(100% - 40px);\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  font-weight: 500;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n  min-width: max-content;\\n}\\n.button.loading {\\n  background: var(--black-300);\\n}\\n.button.loading:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, CredModal } from \\"$lib/components\\";\\nimport { credentials } from \\"$lib/stores/creds\\";\\nimport { currNode, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet receivedCreds = false;\\nlet loading = false;\\nfunction handleWait() {\\n    loading = true;\\n    setTimeout(() => {\\n        receivedCreds = true;\\n        loading = false;\\n        currNode.set(3);\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if !receivedCreds}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.peter.view_application_enrolled_intro\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { PeterChosenStudent: $peterChosenStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.peter.view_application_not_enrolled_intro\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { PeterChosenStudent: $peterChosenStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{receivedCreds\\n\\t\\t\\t\\t? $_(\\"journeys.peter.view_application_not_enrolled_sub_text\\")\\n\\t\\t\\t\\t: $_(\\"journeys.peter.view_applications_enrolled_sub_text\\")}</Typography\\n\\t\\t>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{$_('journeys.peter.student_applicant').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t<div class=\\"card-header\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"student\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$peterChosenStudent?.toLocaleUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${loading && 'loading'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => goto('/demo/journeys/peter/enrol-students')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.enrol_student\\").toUpperCase()}\\n\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<button class=\\"{\`button \${loading && 'loading'}\`}\\" on:click=\\"{handleWait}\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{loading\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? $_(\\"journeys.peter.verifying\\")\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: $_(\\"journeys.peter.request_credentials\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">.</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{#each Array(4) as _, i}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if !receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"{\`/imgs/\${i !== 3 ? 'verified' : 'missing'}.png\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\talt=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"circle\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"column type\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.cred_type\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.national_id\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.college_id\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.college_badge\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.internatinalisation_badge\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">{$_(\\"issuer.issuer\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\">{$_(\\"issuer.the_govt\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.koning_willem_i_college\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.koning_willem_i_college\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.koning_willem_i_college\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"column status\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.status\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.verified\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.verified\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.verified\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--red-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.missing\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.pending\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.pending\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.pending\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.pending\\")}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"column badge\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>_</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.national_id')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.the_govt')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{ ...credentials.nationalId, 'Full Name': $peterChosenStudent }}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/gov.svg\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.college_id')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.koning_willem_i_college')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.collegeId,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $peterChosenStudent\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.college_badge')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.koning_willem_i_college')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.courseCred,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $peterChosenStudent\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterChosenStudent, $$unsubscribe_peterChosenStudent;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => $peterChosenStudent = value);
  let loading = false;
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_peterChosenStudent();
  return `<div class="container svelte-1dmov1c"><div class="heading svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${`<!-- HTML_TAG_START -->${highlight($_("journeys.peter.view_application_enrolled_intro", {
        values: {
          PeterChosenStudent: $peterChosenStudent?.split(" ")[0]
        }
      }))}<!-- HTML_TAG_END -->`}`;
    }
  })}</div> <div class="sub-text svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.peter.view_applications_enrolled_sub_text"))}`;
    }
  })}</div> <div class="dash svelte-1dmov1c">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: $_("journeys.peter.student_applicant").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="content svelte-1dmov1c"><div class="sidebar svelte-1dmov1c">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-1dmov1c" data-svelte-h="svelte-1i5ct5j"><div class="square svelte-1dmov1c"></div> <div class="rect svelte-1dmov1c"></div> </div>`;
        })}</div> <div class="card svelte-1dmov1c"><div class="card-header svelte-1dmov1c"><div class="student"><div class="name">${validate_component(Typography, "Typography").$$render(
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
              return `${escape($_("journeys.peter.3d_print_design"))}`;
            }
          }
        )}</div></div> <div class="button-container svelte-1dmov1c">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-1dmov1c"}">${escape($_("journeys.peter.request_credentials"))}</button>`}</div></div> <div class="table svelte-1dmov1c"><div class="column svelte-1dmov1c"><div class="header svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
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
        )}</div> ${each(Array(4), (_2, i) => {
          return `<div class="circle-container svelte-1dmov1c">${`${`<div class="circle svelte-1dmov1c"></div>`}`} </div>`;
        })}</div> <div class="column type svelte-1dmov1c"><div class="header svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.cred_type"))}`;
          }
        })}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape($_("creds.national_id").toUpperCase())}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape($_("creds.college_id").toUpperCase())}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape($_("creds.college_badge").toUpperCase())}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape($_("creds.internatinalisation_badge").toUpperCase())}`;
            }
          }
        )}</div></div> <div class="column svelte-1dmov1c"><div class="header svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("issuer.issuer"))}`;
          }
        })}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("issuer.the_govt"))}`;
          }
        })}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("issuer.koning_willem_i_college"))}`;
          }
        })}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("issuer.koning_willem_i_college"))}`;
          }
        })}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "list", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("issuer.koning_willem_i_college"))}`;
          }
        })}</div></div> <div class="column status svelte-1dmov1c"><div class="header svelte-1dmov1c">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("components.status"))}`;
          }
        })}</div> ${`<div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--secondary-900"
          },
          {},
          {
            default: () => {
              return `${escape($_("components.pending"))}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--secondary-900"
          },
          {},
          {
            default: () => {
              return `${escape($_("components.pending"))}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--secondary-900"
          },
          {},
          {
            default: () => {
              return `${escape($_("components.pending"))}`;
            }
          }
        )}</div> <div class="data svelte-1dmov1c">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--secondary-900"
          },
          {},
          {
            default: () => {
              return `${escape($_("components.pending"))}`;
            }
          }
        )}</div>`}</div> <div class="column badge svelte-1dmov1c">${``}</div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DYbczkUx.js.map
