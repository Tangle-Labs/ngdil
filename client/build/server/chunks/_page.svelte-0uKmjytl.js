import { c as create_ssr_component, b as subscribe, v as validate_component, i as add_styles, e as escape, h as each, d as null_to_empty } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { M as Modal } from './Modal-DwTTq216.js';
import './creds-CpchBagB.js';
import { y as peterAssignedStudent, x as peterAssignedCompany, A as peterAssignecCompanyCountry, B as peterChosenStudent } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-o3hvbg>.svelte-o3hvbg{padding:15px 0}.dash.svelte-o3hvbg .content .sidebar.svelte-o3hvbg{position:absolute;width:18%;min-height:100%;background:rgb(255, 255, 255);filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-o3hvbg .content .sidebar .menu-item.svelte-o3hvbg{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-o3hvbg .content .sidebar .menu-item .square.svelte-o3hvbg{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-o3hvbg .content .sidebar .menu-item .rect.svelte-o3hvbg{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-o3hvbg .content .card.svelte-o3hvbg{width:72.5%;background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-o3hvbg .content .card .card-header.svelte-o3hvbg{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-bottom:40px}.dash.svelte-o3hvbg .content .card .card-header .button-container.svelte-o3hvbg{width:40%;text-align:center}.dash.svelte-o3hvbg .content .card .table.svelte-o3hvbg{display:flex}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg{display:flex;flex-wrap:wrap;width:20%}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg:nth-of-type(1){max-width:60px}.dash.svelte-o3hvbg .content .card .table .column.type.svelte-o3hvbg{width:max-content;padding-inline-end:20px}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg:nth-of-type(2){width:30%}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg:nth-of-type(3){width:30%}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg:nth-of-type(4){width:30%}.dash.svelte-o3hvbg .content .card .table .column.svelte-o3hvbg:nth-of-type(5){padding:0px 10px;width:10%}.dash.svelte-o3hvbg .content .card .table .column .data.svelte-o3hvbg,.dash.svelte-o3hvbg .content .card .table .column .circle-container.svelte-o3hvbg,.dash.svelte-o3hvbg .content .card .table .column .button-container.svelte-o3hvbg{width:100%;height:50px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-o3hvbg .content .card .table .column .header.svelte-o3hvbg{height:30px}.dash.svelte-o3hvbg .content .card .table .column .action.svelte-o3hvbg{text-align:center;width:100%}.dash.svelte-o3hvbg .content .card .table .column .circle-container.svelte-o3hvbg{flex-basis:100%}.dash.svelte-o3hvbg .content .card .table .column .circle.svelte-o3hvbg{height:25px;width:25px;border-radius:30px;border:1px solid var(--black-300);box-sizing:border-box;background:var(--white-700)}.modal-content.svelte-o3hvbg.svelte-o3hvbg{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-o3hvbg>.svelte-o3hvbg{padding:10px 0}.modal-content.svelte-o3hvbg img.svelte-o3hvbg{height:120px}.modal-content.svelte-o3hvbg .subtext.svelte-o3hvbg{width:100%}.button.svelte-o3hvbg.svelte-o3hvbg{min-width:max-content;font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;font-weight:500;width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;margin-bottom:0;transition:0.5s all}.button.loading.svelte-o3hvbg.svelte-o3hvbg{background:var(--black-300)}.button.loading.svelte-o3hvbg.svelte-o3hvbg:hover{cursor:unset;background:var(--black-300)}.button.svelte-o3hvbg.svelte-o3hvbg:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  width: 18%;\\n  min-height: 100%;\\n  background: rgb(255, 255, 255);\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .card-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 40px;\\n}\\n.dash .content .card .card-header .button-container {\\n  width: 40%;\\n  text-align: center;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 20%;\\n}\\n.dash .content .card .table .column:nth-of-type(1) {\\n  max-width: 60px;\\n}\\n.dash .content .card .table .column.type {\\n  width: max-content;\\n  padding-inline-end: 20px;\\n}\\n.dash .content .card .table .column:nth-of-type(2) {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(3) {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(4) {\\n  width: 30%;\\n}\\n.dash .content .card .table .column:nth-of-type(5) {\\n  padding: 0px 10px;\\n  width: 10%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .circle-container,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 50px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .header {\\n  height: 30px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n.dash .content .card .table .column .circle-container {\\n  flex-basis: 100%;\\n}\\n.dash .content .card .table .column .circle {\\n  height: 25px;\\n  width: 25px;\\n  border-radius: 30px;\\n  border: 1px solid var(--black-300);\\n  box-sizing: border-box;\\n  background: var(--white-700);\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  min-width: max-content;\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  font-weight: 500;\\n  width: calc(100% - 40px);\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.loading {\\n  background: var(--black-300);\\n}\\n.button.loading:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, CredModal } from \\"$lib/components\\";\\nimport { credentials } from \\"$lib/stores/creds\\";\\nimport { currNode, dominqueCourses, peterAssignecCompanyCountry, peterAssignedCompany, peterAssignedStudent, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet receivedCreds = false;\\nlet loading = false;\\nlet showModal = false;\\nfunction handleWait() {\\n    showModal = false;\\n    loading = true;\\n    currNode.set(2);\\n    setTimeout(() => {\\n        receivedCreds = true;\\n        loading = false;\\n        currNode.set(3);\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(1);\\n});\\n<\/script>\\n\\n<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t<div class=\\"modal-content\\">\\n\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t<span style:text-transform=\\"uppercase\\">\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t{$_(\\"journeys.peter.about_to_request_following_creds\\").toUpperCase()}\\n\\t\\t\\t</Typography>\\n\\t\\t</span>\\n\\t\\t<div class=\\"credentials\\">\\n\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\">\\n\\t\\t\\t\\t{$_(\\"creds.kw1c_college_id\\")}<br />\\n\\t\\t\\t\\t{$_(\\"creds.internatinalisation_badge\\")}<br />\\n\\t\\t\\t\\t{$_(\\"creds.internship_completion_badge\\")}<br />\\n\\t\\t\\t\\t{$_(\\"creds.internship_reference\\")}<br />\\n\\t\\t\\t</Typography>\\n\\t\\t</div>\\n\\t\\t<div class=\\"p\\">\\n\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t>{$_(\\"journeys.peter.click_request_creds_btn_to_confirm\\")}</Typography\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t\\t<button class=\\"button\\" on:click=\\"{handleWait}\\"\\n\\t\\t\\t>{$_(\\"journeys.peter.request_credentials\\").toUpperCase()}</button\\n\\t\\t>\\n\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t<Typography variant=\\"sub-text\\" />\\n\\t\\t</div>\\n\\t</div>\\n</Modal>\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if !receivedCreds}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.peter.to_confirm_request_cred_for_verification\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { PeterAssignedStudent: $peterAssignedStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.peter.verified_student_creds_take_a_look\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { PeterAssignedStudent: $peterAssignedStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{!receivedCreds\\n\\t\\t\\t\\t? $_(\\"journeys.peter.request_creds_btn_desc\\")\\n\\t\\t\\t\\t: $_(\\"journeys.peter.eye_icon_btn_desc\\")}</Typography\\n\\t\\t>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{$_('journeys.peter.student_internship_progress').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"card-header\\">\\n\\t\\t\\t\\t\\t<div class=\\"student\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedStudent?.toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography fontVariant=\\"kw1c\\" variant=\\"kw1c-sub-text\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$peterAssignedCompany}, {$peterAssignecCompanyCountry}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${loading && 'loading'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => goto('/demo/journeys/peter/verified-internship')}\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.continue\\").toUpperCase()}\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${loading && 'loading'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{loading\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t? $_(\\"journeys.peter.verifying\\").toUpperCase()\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t: $_(\\"journeys.peter.request_credentials\\").toUpperCase()}\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each Array(4) as _, i}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else if !receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/verified.png\\" alt=\\"\\" class=\\"circle\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"column type\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.cred_type\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.kw1c_college_id\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.internatinalisation_badge\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.internship_badge\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"creds.internship_reference\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--black-500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.issuer\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--black-500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.koning_willem_i_college\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--black-500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"issuer.koning_willem_i_college\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--black-500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--black-500\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.status\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.verified\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.verified\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.verified\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.verified\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.pending\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.pending\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.pending\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.pending\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t{#if receivedCreds}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">_</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.college_id')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.koning_willem_i_college')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.collegeId,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $peterChosenStudent\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.internatinalisation_badge')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.koning_willem_i_college')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{ ...credentials.internationalisation }}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.internship_badge')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$peterAssignedCompany}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{dominqueCourses[2].internships.find(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(i) => i.name === $peterAssignedCompany\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t).img}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.internshipBadge,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t'Intern Name': $peterChosenStudent,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tIssuer: $peterAssignedCompany,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tCountry: $peterAssignecCompanyCountry\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.internship_reference')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$peterAssignedCompany}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{dominqueCourses[2].internships.find(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(i) => i.name === $peterAssignedCompany\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t).img}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.internshipReference,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tCountry: $peterAssignecCompanyCountry\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  let $peterAssignecCompanyCountry, $$unsubscribe_peterAssignecCompanyCountry;
  let $$unsubscribe_peterChosenStudent;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  $$unsubscribe_peterAssignecCompanyCountry = subscribe(peterAssignecCompanyCountry, (value) => $peterAssignecCompanyCountry = value);
  $$unsubscribe_peterChosenStudent = subscribe(peterChosenStudent, (value) => value);
  let loading = false;
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-o3hvbg"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-o3hvbg"> <span class="svelte-o3hvbg"${add_styles({ "text-transform": `uppercase` })}>${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.about_to_request_following_creds").toUpperCase())}`;
              }
            }
          )}</span> <div class="credentials svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "kw1c-sub-text" }, {}, {
            default: () => {
              return `${escape($_("creds.kw1c_college_id"))}<br> ${escape($_("creds.internatinalisation_badge"))}<br> ${escape($_("creds.internship_completion_badge"))}<br> ${escape($_("creds.internship_reference"))}<br>`;
            }
          })}</div> <div class="p svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.click_request_creds_btn_to_confirm"))}`;
            }
          })}</div> <button class="button svelte-o3hvbg">${escape($_("journeys.peter.request_credentials").toUpperCase())}</button> <div class="subtext svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )} <div class="container svelte-o3hvbg"><div class="heading svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${`<!-- HTML_TAG_START -->${highlight($_("journeys.peter.to_confirm_request_cred_for_verification", {
          values: {
            PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0]
          }
        }))}<!-- HTML_TAG_END -->`}`;
      }
    })}</div> <div class="sub-text svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(
          $_("journeys.peter.request_creds_btn_desc")
        )}`;
      }
    })}</div> <div class="dash svelte-o3hvbg">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: $_("journeys.peter.student_internship_progress").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<div class="sidebar svelte-o3hvbg">${each(Array(5), (i) => {
            return `<div class="menu-item svelte-o3hvbg" data-svelte-h="svelte-11chbf8"><div class="square svelte-o3hvbg"></div> <div class="rect svelte-o3hvbg"></div> </div>`;
          })}</div> <div class="card svelte-o3hvbg"><div class="card-header svelte-o3hvbg"><div class="student"><div class="name">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedStudent?.toUpperCase())}`;
              }
            }
          )}</div> <div class="course">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-sub-text",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}, ${escape($peterAssignecCompanyCountry)}`;
              }
            }
          )}</div></div> <div class="button-container svelte-o3hvbg">${`<button class="${escape(null_to_empty(`button ${loading}`), true) + " svelte-o3hvbg"}">${escape($_("journeys.peter.request_credentials").toUpperCase())}</button>`}</div></div> <div class="table svelte-o3hvbg"><div class="column svelte-o3hvbg"><div class="header svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
            return `<div class="circle-container svelte-o3hvbg">${`${`<div class="circle svelte-o3hvbg"></div>`}`} </div>`;
          })}</div> <div class="column type svelte-o3hvbg"><div class="header svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.cred_type"))}`;
            }
          })}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `${escape($_("creds.kw1c_college_id").toUpperCase())}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `${escape($_("creds.internship_badge").toUpperCase())}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c"
            },
            {},
            {
              default: () => {
                return `${escape($_("creds.internship_reference").toUpperCase())}`;
              }
            }
          )}</div></div> <div class="column svelte-o3hvbg"><div class="header svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($_("issuer.issuer"))}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($_("issuer.koning_willem_i_college"))}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($_("issuer.koning_willem_i_college"))}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--black-500"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}</div></div> <div class="column svelte-o3hvbg"><div class="header svelte-o3hvbg">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `${escape($_("components.status"))}`;
            }
          })}</div> ${`<div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-o3hvbg">${validate_component(Typography, "Typography").$$render(
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
          )}</div>`}</div> <div class="column svelte-o3hvbg">${``}</div></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_peterAssignedStudent();
  $$unsubscribe_peterAssignedCompany();
  $$unsubscribe_peterAssignecCompanyCountry();
  $$unsubscribe_peterChosenStudent();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0uKmjytl.js.map
