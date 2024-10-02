import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { z as peterAssignedBadges, y as peterAssignedStudent } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-cvm9m7>.svelte-cvm9m7{padding:15px 0}.dash.svelte-cvm9m7 .content .sidebar.svelte-cvm9m7{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-cvm9m7 .content .sidebar .menu-item.svelte-cvm9m7{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-cvm9m7 .content .sidebar .menu-item .square.svelte-cvm9m7{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-cvm9m7 .content .sidebar .menu-item .rect.svelte-cvm9m7{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-cvm9m7 .content .card.svelte-cvm9m7{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-cvm9m7 .content .card .table.svelte-cvm9m7{display:flex}.dash.svelte-cvm9m7 .content .card .table .column.svelte-cvm9m7{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-cvm9m7 .content .card .table .column .action.svelte-cvm9m7{text-align:center;width:100%}.dash.svelte-cvm9m7 .content .card .table .column .data.svelte-cvm9m7{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-cvm9m7 .content .card .table .column .header.svelte-cvm9m7{padding-bottom:20px}.dash.svelte-cvm9m7 .content .card .table .column:last-of-type .data.svelte-cvm9m7{justify-content:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 33%;\\n}\\n.dash .content .card .table .column.col-1 {\\n  width: 50px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n.dash .content .card .table .column:last-of-type .data {\\n  justify-content: center;\\n}\\n\\n.button-container {\\n  margin-left: 60%;\\n  width: 40%;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Button } from \\"$lib/components\\";\\nimport { currNode, peterAssignedBadges, peterAssignedStudent } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    currNode.set(3);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.3_students_ready_choose_1_for_internship\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.peter.assign_placement_btn_desc\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"{$_('journeys.peter.internship_applications').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.student_applicant\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each $peterAssignedBadges as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{student.toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internship_category\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterAssignedBadges as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.3d_print_design\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column action\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.action\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterAssignedBadges as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.peter.assign_placement').toUpperCase()}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterAssignedStudent.set(student);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/place-student');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAEA,mBAAK,CAAC,QAAQ,CAAC,sBAAS,CACtB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACvD,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,UACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,wBAAW,CACjC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,IAAI,CAAC,CACf,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,qBAAQ,CACzC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,YAAY,CAAE,IAChB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,mBAAM,CACvC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,mBAAM,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,EAAE,CACT,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,oBAAO,CAC1B,OAAO,CAAE,IACX,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAQ,CAClC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GACT,CAIA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,mBACkB,CACpD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,cAAc,CAAE,IAClB,CAIA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,cAAc,CAAE,IAClB,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,aAAa,CAAC,mBAAM,CACrD,eAAe,CAAE,MACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterAssignedBadges, $$unsubscribe_peterAssignedBadges;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterAssignedBadges = subscribe(peterAssignedBadges, (value) => $peterAssignedBadges = value);
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_peterAssignedBadges();
  return `<div class="container svelte-cvm9m7"><div class="heading svelte-cvm9m7">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.3_students_ready_choose_1_for_internship"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-cvm9m7">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.peter.assign_placement_btn_desc"))}`;
    }
  })}</div> <div class="dash svelte-cvm9m7">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: $_("journeys.peter.internship_applications").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-cvm9m7">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-cvm9m7" data-svelte-h="svelte-11chbf8"><div class="square svelte-cvm9m7"></div> <div class="rect svelte-cvm9m7"></div> </div>`;
        })}</div> <div class="card svelte-cvm9m7"><div class="table svelte-cvm9m7"><div class="column svelte-cvm9m7"><div class="header svelte-cvm9m7">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.student_applicant"))}`;
          }
        })}</div> ${each($peterAssignedBadges, (student) => {
          return `<div class="data svelte-cvm9m7">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-blue-900"
            },
            {},
            {
              default: () => {
                return `${escape(student.toUpperCase())}`;
              }
            }
          )} </div>`;
        })}</div> <div class="column svelte-cvm9m7"><div class="header svelte-cvm9m7">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.internship_category"))}`;
          }
        })}</div> ${each($peterAssignedBadges, (student) => {
          return `<div class="data svelte-cvm9m7">${validate_component(Typography, "Typography").$$render(
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
          )} </div>`;
        })}</div> <div class="column action svelte-cvm9m7"><div class="header action svelte-cvm9m7">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.action"))}`;
          }
        })}</div> ${each($peterAssignedBadges, (student) => {
          return `<div class="data svelte-cvm9m7">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "kw1c",
              label: $_("journeys.peter.assign_placement").toUpperCase(),
              onClick: () => {
                peterAssignedStudent.set(student);
                goto();
              }
            },
            {},
            {}
          )} </div>`;
        })}</div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-evTekPRT.js.map
