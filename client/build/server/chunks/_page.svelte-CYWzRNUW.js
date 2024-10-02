import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, d as null_to_empty } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { R as Radio } from './Radio-CJ3S8jgz.js';
import './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1p80vxp>.svelte-1p80vxp{padding:15px 0}.dash.svelte-1p80vxp .content .sidebar.svelte-1p80vxp{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-1p80vxp .content .sidebar .menu-item.svelte-1p80vxp{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-1p80vxp .content .sidebar .menu-item .square.svelte-1p80vxp{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-1p80vxp .content .sidebar .menu-item .rect.svelte-1p80vxp{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-1p80vxp .content .card.svelte-1p80vxp{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-1p80vxp .content .card .table.svelte-1p80vxp{display:flex}.dash.svelte-1p80vxp .content .card .table .column.svelte-1p80vxp{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-1p80vxp .content .card .table .column.col-1.svelte-1p80vxp{width:50px}.dash.svelte-1p80vxp .content .card .table .column .data.svelte-1p80vxp,.dash.svelte-1p80vxp .content .card .table .column .button-container.svelte-1p80vxp{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-1p80vxp .content .card .table .column .button-container.svelte-1p80vxp{transform:translateY(-10px)}.dash.svelte-1p80vxp .content .card .table .column .header.svelte-1p80vxp{padding-bottom:20px}.button-container.svelte-1p80vxp.svelte-1p80vxp{margin-left:50%}.modal-content.svelte-1p80vxp.svelte-1p80vxp{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1p80vxp>.svelte-1p80vxp{padding:10px 0}.modal-content.svelte-1p80vxp .p.svelte-1p80vxp{color:var(--black-500);font-weight:300}.modal-content.svelte-1p80vxp img.svelte-1p80vxp{height:120px}.modal-content.svelte-1p80vxp .subtext.svelte-1p80vxp{width:100%}.button.svelte-1p80vxp.svelte-1p80vxp{min-width:max-content;font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);margin:20px;font-weight:500;box-sizing:border-box;border-radius:40px;padding:12px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-1p80vxp.svelte-1p80vxp{background:var(--black-300)}.button.disabled.svelte-1p80vxp.svelte-1p80vxp:hover{cursor:unset;background:var(--black-300)}.button.svelte-1p80vxp.svelte-1p80vxp:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 33%;\\n}\\n.dash .content .card .table .column.col-1 {\\n  width: 50px;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n\\n.button-container {\\n  margin-left: 50%;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  min-width: max-content;\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  font-weight: 500;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, Radio } from \\"$lib/components\\";\\nimport { currNode, peterChosenStudents } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet students = {\\n    \\"Sarah Jones\\": false,\\n    \\"Ivar Leifsson\\": false,\\n    \\"Lagertha Bonde\\": false\\n};\\nlet showModal = false;\\nfunction handleIssueCourseInvites() {\\n    if (selected.length > 0) {\\n        peterChosenStudents.set(selected);\\n        showModal = true;\\n    }\\n}\\nonMount(() => {\\n    currNode.set(4);\\n});\\n$: selected = Object.keys(students).filter((s) => students[s]);\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal borderRadius=\\"{16}\\" bind:isOpen=\\"{showModal}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t{$_(\\"journeys.peter.about_to_invite_students_on_course\\", {\\n\\t\\t\\t\\t\\tvalues: { StudentCount: selected.length }\\n\\t\\t\\t\\t}).toUpperCase()}\\n\\t\\t\\t</Typography>\\n\\t\\t\\t<div class=\\"p\\">{$_(\\"journeys.peter.click_send_invites_to_confirm\\")}</div>\\n\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/peter/course-students')}\\"\\n\\t\\t\\t\\t>{$_(\\"journeys.peter.send_invites\\").toUpperCase()}</button\\n\\t\\t\\t>\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\" />\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.select_students_and_issue_course_invites\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.peter.select_students_and_click_issue_course_invite\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c\\n\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\ttitle=\\"{$_('journeys.peter.internationalisation_course_applicants').toUpperCase()}\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column col-1\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{students['Sarah Jones']}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{students['Ivar Leifsson']}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{students['Lagertha Bonde']}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.student_applicant\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"applicants.Sarah_Jones\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"applicants.Ivar_Leifsson\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"applicants.Lagertha_Bonde\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internship_category\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.course_application\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internatinalisation_course\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internatinalisation_course\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internatinalisation_course\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${selected.length <= 0 && 'disabled'}\`}\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{handleIssueCourseInvites}\\"\\n\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.send_invitations\\").toUpperCase()}</button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let students = {
    "Sarah Jones": false,
    "Ivar Leifsson": false,
    "Lagertha Bonde": false
  };
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected = Object.keys(students).filter((s) => students[s]);
    $$rendered = `<div class="container svelte-1p80vxp">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-1p80vxp"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-1p80vxp"> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.about_to_invite_students_on_course", {
                  values: { StudentCount: selected.length }
                }).toUpperCase())}`;
              }
            }
          )} <div class="p svelte-1p80vxp">${escape($_("journeys.peter.click_send_invites_to_confirm"))}</div> <button class="button svelte-1p80vxp">${escape($_("journeys.peter.send_invites").toUpperCase())}</button> <div class="subtext svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )} <div class="heading svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.select_students_and_issue_course_invites"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.peter.select_students_and_click_issue_course_invite"))}`;
      }
    })}</div> <div class="dash svelte-1p80vxp">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: $_("journeys.peter.internationalisation_course_applicants").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<div class="sidebar svelte-1p80vxp">${each(Array(5), (i) => {
            return `<div class="menu-item svelte-1p80vxp" data-svelte-h="svelte-11chbf8"><div class="square svelte-1p80vxp"></div> <div class="rect svelte-1p80vxp"></div> </div>`;
          })}</div> <div class="card svelte-1p80vxp"><div class="table svelte-1p80vxp"><div class="column col-1 svelte-1p80vxp"><div class="header svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Sarah Jones"] },
            {
              checked: ($$value) => {
                students["Sarah Jones"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Ivar Leifsson"] },
            {
              checked: ($$value) => {
                students["Ivar Leifsson"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Radio, "Radio").$$render(
            $$result,
            { checked: students["Lagertha Bonde"] },
            {
              checked: ($$value) => {
                students["Lagertha Bonde"] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div> <div class="column svelte-1p80vxp"><div class="header svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.student_applicant"))}`;
            }
          })}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("applicants.Sarah_Jones"))}`;
              }
            }
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("applicants.Ivar_Leifsson"))}`;
              }
            }
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("applicants.Lagertha_Bonde"))}`;
              }
            }
          )}</div></div> <div class="column svelte-1p80vxp"><div class="header svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.internship_category"))}`;
            }
          })}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
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
          )}</div></div> <div class="column svelte-1p80vxp"><div class="header action svelte-1p80vxp">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `${escape($_("journeys.peter.course_application"))}`;
            }
          })}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.internatinalisation_course"))}`;
              }
            }
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.internatinalisation_course"))}`;
              }
            }
          )}</div> <div class="data svelte-1p80vxp">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-sub-text",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.peter.internatinalisation_course"))}`;
              }
            }
          )}</div></div></div> <div class="button-container svelte-1p80vxp"><button class="${escape(null_to_empty(`button ${selected.length <= 0 && "disabled"}`), true) + " svelte-1p80vxp"}">${escape($_("journeys.peter.send_invitations").toUpperCase())}</button></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CYWzRNUW.js.map
