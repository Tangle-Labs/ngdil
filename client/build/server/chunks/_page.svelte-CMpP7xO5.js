import { c as create_ssr_component, b as subscribe, v as validate_component, i as add_styles, e as escape, h as each } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { y as peterAssignedStudent, x as peterAssignedCompany, i as dominqueCourses } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1sgib11>.svelte-1sgib11{padding:15px 0}.dash.svelte-1sgib11 .content .sidebar.svelte-1sgib11{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-1sgib11 .content .sidebar .menu-item.svelte-1sgib11{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-1sgib11 .content .sidebar .menu-item .square.svelte-1sgib11{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-1sgib11 .content .sidebar .menu-item .rect.svelte-1sgib11{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-1sgib11 .content .text-block.svelte-1sgib11{padding-bottom:20px}.dash.svelte-1sgib11 .content .dash-card.svelte-1sgib11{width:72.5%;position:absolute;top:50px;right:5%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content.svelte-1sgib11{display:flex;width:100%;justify-content:space-between;padding-bottom:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .meta.svelte-1sgib11{width:25%}.dash.svelte-1sgib11 .content .dash-card .dash-content .meta .header.svelte-1sgib11{padding-bottom:7.5px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship.svelte-1sgib11{width:35%;padding:0}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship img.svelte-1sgib11{width:100%;border-top-right-radius:20px;border-top-left-radius:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship .intern-content.svelte-1sgib11{padding:20px}.dash.svelte-1sgib11 .content .dash-card .dash-content .internship .intern-content .button.svelte-1sgib11{width:100%;margin:0;margin-top:20px}.dash.svelte-1sgib11 .content .card.svelte-1sgib11{background:white;border-radius:20px;padding:20px;box-sizing:border-box;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.modal-content.svelte-1sgib11.svelte-1sgib11{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1sgib11>.svelte-1sgib11{padding:10px 0}.modal-content.svelte-1sgib11 img.svelte-1sgib11{height:120px}.modal-content.svelte-1sgib11 .subtext.svelte-1sgib11{width:100%}.modal-content.svelte-1sgib11.svelte-1sgib11{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1sgib11>.svelte-1sgib11{padding:10px 0}.modal-content.svelte-1sgib11 .p.svelte-1sgib11{color:var(--black-500);font-weight:300}.modal-content.svelte-1sgib11 img.svelte-1sgib11{height:120px}.modal-content.svelte-1sgib11 .subtext.svelte-1sgib11{width:100%}.button.svelte-1sgib11.svelte-1sgib11{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.svelte-1sgib11.svelte-1sgib11:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .text-block {\\n  padding-bottom: 20px;\\n}\\n.dash .content .dash-card {\\n  width: 72.5%;\\n  position: absolute;\\n  top: 50px;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n}\\n.dash .content .dash-card .dash-content {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  padding-bottom: 20px;\\n}\\n.dash .content .dash-card .dash-content .meta {\\n  width: 25%;\\n}\\n.dash .content .dash-card .dash-content .meta .header {\\n  padding-bottom: 7.5px;\\n}\\n.dash .content .dash-card .dash-content .internship {\\n  width: 35%;\\n  padding: 0;\\n}\\n.dash .content .dash-card .dash-content .internship img {\\n  width: 100%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n}\\n.dash .content .dash-card .dash-content .internship .intern-content {\\n  padding: 20px;\\n}\\n.dash .content .dash-card .dash-content .internship .intern-content .button {\\n  width: 100%;\\n  margin: 0;\\n  margin-top: 20px;\\n}\\n.dash .content .card {\\n  background: white;\\n  border-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button-container {\\n  margin-left: 60%;\\n  width: 40%;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading } from \\"$lib/components\\";\\nimport { currNode, dominqueCourses, peterAssignecCompanyCountry, peterAssignedCompany, peterAssignedStudent } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet state = \\"init\\";\\nlet showModal = false;\\nfunction handleModalClick() {\\n    if (state === \\"loaded\\") {\\n        goto(\\"/demo/journeys/peter/student-placed\\");\\n    }\\n    else {\\n        state = \\"loading\\";\\n        setTimeout(() => {\\n            currNode.set(5);\\n            state = \\"loaded\\";\\n        }, 5000);\\n    }\\n}\\nonMount(() => {\\n    currNode.set(4);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<span style:text-transform=\\"uppercase\\">\\n\\t\\t\\t\\t{#if state === \\"loaded\\"}\\n\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.assigned_internship\\", {\\n\\t\\t\\t\\t\\t\\t\\tvalues: { PeterAssignedStudent: $peterAssignedStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.about_to_assign_internship\\", {\\n\\t\\t\\t\\t\\t\\t\\tvalues: { PeterAssignedStudent: $peterAssignedStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</span>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{#if state === \\"loaded\\"}\\n\\t\\t\\t\\t\\t{$_(\\"journeys.peter.click_continue_to_proceed\\")}\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t{$_(\\"journeys.peter.assign_internship_btn_desc\\")}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if state === \\"loading\\"}\\n\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.peter.awaiting_confirmation\\")}</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{handleModalClick}\\"\\n\\t\\t\\t\\t\\t>{state === \\"loaded\\"\\n\\t\\t\\t\\t\\t\\t? $_(\\"components.continue\\").toUpperCase()\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.peter.assign_placement\\").toUpperCase()}</button\\n\\t\\t\\t\\t>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\" />\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t$_(\\"journeys.peter.2_relevent_internship\\", {\\n\\t\\t\\t\\t\\tvalues: { PeterAssignedStudent: $peterAssignedStudent?.split(\\" \\")[0] }\\n\\t\\t\\t\\t})\\n\\t\\t\\t)}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.peter.click_assign_internship_btn_to_student\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{$_('journeys.peter.student_internship_placement').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card dash-card\\">\\n\\t\\t\\t\\t<div class=\\"dash-content\\">\\n\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography fontVariant=\\"kw1c\\" variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.student_applicant\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography fontVariant=\\"kw1c\\" variant=\\"kw1c-header\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedStudent?.toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography fontVariant=\\"kw1c\\" variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internship_category\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography fontVariant=\\"kw1c\\" variant=\\"kw1c-sub-text\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t{#each dominqueCourses[2].internships as internship}\\n\\t\\t\\t\\t\\t\\t<div class=\\"card internship\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/engineer.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"intern-content\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"location\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{internship.location}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{internship.name}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterAssignedCompany.set(internship.name);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterAssignecCompanyCountry.set(internship.location.split(',')[1]);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\">{$_(\\"journeys.peter.assign_placement\\").toUpperCase()}</button\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-1sgib11">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-1sgib11"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-1sgib11"> <span class="svelte-1sgib11"${add_styles({ "text-transform": `uppercase` })}>${`${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.about_to_assign_internship", {
                  values: {
                    PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0]
                  }
                }))} <br>`;
              }
            }
          )} ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedCompany)}`;
              }
            }
          )}`}</span> <div class="p svelte-1sgib11">${`${escape($_("journeys.peter.assign_internship_btn_desc"))}`}</div> ${`<button class="button svelte-1sgib11">${escape($_("journeys.peter.assign_placement").toUpperCase())}</button>`} <div class="subtext svelte-1sgib11">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )} <div class="heading svelte-1sgib11">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.2_relevent_internship", {
          values: {
            PeterAssignedStudent: $peterAssignedStudent?.split(" ")[0]
          }
        }))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-1sgib11">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.peter.click_assign_internship_btn_to_student"))}`;
      }
    })}</div> <div class="dash svelte-1sgib11">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: $_("journeys.peter.student_internship_placement").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<div class="sidebar svelte-1sgib11">${each(Array(5), (i) => {
            return `<div class="menu-item svelte-1sgib11" data-svelte-h="svelte-11chbf8"><div class="square svelte-1sgib11"></div> <div class="rect svelte-1sgib11"></div> </div>`;
          })}</div> <div class="card dash-card svelte-1sgib11"><div class="dash-content svelte-1sgib11"><div class="meta svelte-1sgib11"><div class="text-block svelte-1sgib11"><div class="header svelte-1sgib11">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.student_applicant"))}`;
            }
          })}</div> <div class="content">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-header",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($peterAssignedStudent?.toUpperCase())}`;
              }
            }
          )}</div></div> <div class="text-block svelte-1sgib11"><div class="header svelte-1sgib11">${validate_component(Typography, "Typography").$$render($$result, { fontVariant: "kw1c", variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.internship_category"))}`;
            }
          })}</div> <div class="content">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              fontVariant: "kw1c",
              variant: "kw1c-sub-text",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.3d_print_design"))}`;
              }
            }
          )}</div></div></div> ${each(dominqueCourses[2].internships, (internship) => {
            return `<div class="card internship svelte-1sgib11"><img src="/imgs/engineer.png" alt="" class="svelte-1sgib11"> <div class="intern-content svelte-1sgib11"><div><div class="location">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-sub-text",
                fontVariant: "kw1c",
                color: "--kw1c-red-900"
              },
              {},
              {
                default: () => {
                  return `${escape(internship.location)}`;
                }
              }
            )}</div> <div class="org">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape(internship.name)}`;
                }
              }
            )} </div></div> <button class="button svelte-1sgib11">${escape($_("journeys.peter.assign_placement").toUpperCase())}</button></div> </div>`;
          })}</div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_peterAssignedStudent();
  $$unsubscribe_peterAssignedCompany();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CMpP7xO5.js.map
