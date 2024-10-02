import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, i as add_styles } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { K as Kw1c } from './Kw1c-cSAEOEN9.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { L as Loading } from './Loading-Dqtoqnil.js';
import { w as peterChosenStudents, a as currNode } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import { C as Confetti } from './Confetti-CC7EIop2.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-9l4igi>.svelte-9l4igi{padding:15px 0}.dash.svelte-9l4igi .content .sidebar.svelte-9l4igi{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-9l4igi .content .sidebar .menu-item.svelte-9l4igi{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-9l4igi .content .sidebar .menu-item .square.svelte-9l4igi{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-9l4igi .content .sidebar .menu-item .rect.svelte-9l4igi{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-9l4igi .content .card.svelte-9l4igi{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-9l4igi .content .card .table.svelte-9l4igi{display:flex}.dash.svelte-9l4igi .content .card .table .column.svelte-9l4igi{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-9l4igi .content .card .table .column .action.svelte-9l4igi{text-align:center;width:100%;display:flex;justify-content:center}.dash.svelte-9l4igi .content .card .table .column .data.svelte-9l4igi{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-9l4igi .content .card .table .column .header.svelte-9l4igi{padding-bottom:20px}.button-continue.svelte-9l4igi.svelte-9l4igi{margin-left:60%;width:40% !important}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 33%;\\n}\\n.dash .content .card .table .column.col-1 {\\n  width: 50px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n\\n.button-continue {\\n  margin-left: 60%;\\n  width: 40% !important;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Button, Loading } from \\"$lib/components\\";\\nimport { currNode, peterChosenStudents } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { Confetti } from \\"svelte-confetti\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet students = {\\n    \\"Sarah Jones\\": false,\\n    \\"Ivar Leifsson\\": false,\\n    \\"Lagertha Bonde\\": false\\n};\\nlet loading = true;\\nlet showModal = false;\\nsetTimeout(() => {\\n    currNode.set(5);\\n    loading = false;\\n}, 2_000);\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.successfully_enrolled_students_onto_course\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.peter.click_continue_to_see_what_you_achieved\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t{#if !loading}\\n\\t\\t<div\\n\\t\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\"\\n\\t\\t>\\n\\t\\t\\t<Confetti\\n\\t\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\t\\tduration=\\"{2000}\\"\\n\\t\\t\\t\\tamount=\\"{500}\\"\\n\\t\\t\\t\\tfallDistance=\\"100vh\\"\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c\\n\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\ttitle=\\"{$_('journeys.peter.internationalisation_course_students').toUpperCase()}\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.student_applicant\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{student.toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.course_to_study\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.internatinalisation_course\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column action\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.course_status\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data action\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span style:padding-right=\\"10px\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"{loading ? '--secondary-900' : '--green-900'}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{loading ? $_(\\"components.pending\\") : $_(\\"components.accepted\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"20px\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/verified.png\\" alt=\\"\\" style:height=\\"20px\\" class=\\"accepted\\" />{/if}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"button-continue\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue').toUpperCase()}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/enrolled-students');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAEA,mBAAK,CAAC,QAAQ,CAAC,sBAAS,CACtB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACvD,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,UACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,wBAAW,CACjC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,IAAI,CAAC,CACf,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,qBAAQ,CACzC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,YAAY,CAAE,IAChB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,mBAAM,CACvC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,mBAAM,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,EAAE,CACT,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,oBAAO,CAC1B,OAAO,CAAE,IACX,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAQ,CAClC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GACT,CAIA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,mBACkB,CACpD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,cAAc,CAAE,IAClB,CAIA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,cAAc,CAAE,IAClB,CAEA,4CAAiB,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,GAAG,CAAC,UACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterChosenStudents, $$unsubscribe_peterChosenStudents;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterChosenStudents = subscribe(peterChosenStudents, (value) => $peterChosenStudents = value);
  let loading = true;
  setTimeout(
    () => {
      currNode.set(5);
      loading = false;
    },
    2e3
  );
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_peterChosenStudents();
  return `<div class="container svelte-9l4igi"><div class="heading svelte-9l4igi">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.successfully_enrolled_students_onto_course"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-9l4igi">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.peter.click_continue_to_see_what_you_achieved"))}`;
    }
  })}</div> ${!loading ? `<div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-9l4igi">${validate_component(Confetti, "Confetti").$$render(
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
  )}</div>` : ``} <div class="dash svelte-9l4igi">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: $_("journeys.peter.internationalisation_course_students").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-9l4igi">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-9l4igi" data-svelte-h="svelte-11chbf8"><div class="square svelte-9l4igi"></div> <div class="rect svelte-9l4igi"></div> </div>`;
        })}</div> <div class="card svelte-9l4igi"><div class="table svelte-9l4igi"><div class="column svelte-9l4igi"><div class="header svelte-9l4igi">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.student_applicant"))}`;
          }
        })}</div> ${each($peterChosenStudents, (student) => {
          return `<div class="data svelte-9l4igi">${validate_component(Typography, "Typography").$$render(
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
        })}</div> <div class="column svelte-9l4igi"><div class="header svelte-9l4igi">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.course_to_study"))}`;
          }
        })}</div> ${each($peterChosenStudents, (student) => {
          return `<div class="data svelte-9l4igi">${validate_component(Typography, "Typography").$$render(
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
          )} </div>`;
        })}</div> <div class="column action svelte-9l4igi"><div class="header action svelte-9l4igi">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `${escape($_("journeys.peter.course_status"))}`;
          }
        })}</div> ${each($peterChosenStudents, (student) => {
          return `<div class="data action svelte-9l4igi"><span${add_styles({ "padding-right": `10px` })}>${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "status",
              color: loading ? "--secondary-900" : "--green-900"
            },
            {},
            {
              default: () => {
                return `${escape(loading ? $_("components.pending") : $_("components.accepted"))}`;
              }
            }
          )}</span> ${loading ? `${validate_component(Loading, "Loading").$$render($$result, { size: "20px" }, {}, {})}` : `<img src="/imgs/verified.png" alt="" class="accepted"${add_styles({ "height": `20px` })}>`} </div>`;
        })}</div></div> <div class="button-continue svelte-9l4igi">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("components.continue").toUpperCase(),
            variant: "kw1c",
            onClick: () => {
              goto();
            }
          },
          {},
          {}
        )}</div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BT-3qdtO.js.map
