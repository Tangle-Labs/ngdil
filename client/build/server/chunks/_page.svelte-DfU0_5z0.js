import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { R as Radio } from './Radio-CJ3S8jgz.js';
import { s as imaniChosenStaff, o as imaniBadgeName, m as imaniIssuedStaff } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1cr370x>.svelte-1cr370x{padding:15px 0}.container.svelte-1cr370x .table.svelte-1cr370x{width:100%}.container.svelte-1cr370x .table th.svelte-1cr370x{text-align:left}.container.svelte-1cr370x .table td.svelte-1cr370x{height:50px}.container.svelte-1cr370x .button-container.svelte-1cr370x{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1cr370x.svelte-1cr370x{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1cr370x>.svelte-1cr370x{padding:10px 0;width:100%}.modal-content.svelte-1cr370x img.svelte-1cr370x{height:120px;width:unset}.modal-content.svelte-1cr370x .p.svelte-1cr370x{padding:20px 0}.modal-content.svelte-1cr370x .subtext.svelte-1cr370x{width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Modal, Radio } from \\"$lib/components\\";\\nimport { currNode, imaniBadgeName, imaniChosenStaff, imaniIssuedStaff } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));\\nlet staffCount = staff.length;\\nlet showModal = false;\\nfunction handleIssueCred() {\\n    imaniIssuedStaff.set(staff.filter((s) => s.selected));\\n    goto(\\"/demo/journeys/imani/badge-holders\\");\\n}\\nonMount(() => {\\n    currNode.set(7);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/future-tech.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t>{$_(\\"components.future_tech_co\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t{$_(\\"journeys.imani.about_to_issue_badges\\", {\\n\\t\\t\\t\\t\\tvalues: { StaffCount: staffCount, BadgeName: $imaniBadgeName }\\n\\t\\t\\t\\t})}\\n\\t\\t\\t</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t<Typography color=\\"--black-500\\">\\n\\t\\t\\t\\t\\t{$_(\\"journeys.imani.click_issue_badge_to_issue_and_continue\\")}\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Button\\n\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.issue_badges')}\\"\\n\\t\\t\\t\\tonClick=\\"{handleIssueCred}\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"components.cancel\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.staff_successfully_trained_now_issue_badges\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.select_emp_that_passed_then_click_issue_badges\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech\\n\\t\\t\\theader=\\"{$imaniBadgeName.toUpperCase() + ' ' + $_('journeys.imani.trainees').toUpperCase()}\\"\\n\\t\\t>\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.emp_name\\")}</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.designation\\")}</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.course_result\\")}</Typography></th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{#each staff as emp (emp.name)}\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{emp.selected}\\" />\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{emp.name}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{emp.role}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.passed\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.issue_badges')}\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\tstaffCount = staff.filter((e) => e.selected).length;\\n\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CAUA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CAEA,4CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,6BAAc,CAAG,eAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,6BAAc,CAAC,kBAAI,CACjB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACT,CACA,6BAAc,CAAC,iBAAG,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,6BAAc,CAAC,uBAAS,CACtB,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenStaff, $$unsubscribe_imaniChosenStaff;
  let $_, $$unsubscribe__;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniChosenStaff = subscribe(imaniChosenStaff, (value) => $imaniChosenStaff = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));
  let staffCount = staff.length;
  let showModal = false;
  function handleIssueCred() {
    imaniIssuedStaff.set(staff.filter((s) => s.selected));
    goto();
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-1cr370x">${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-1cr370x"><img src="/imgs/future-tech.png" alt="" class="logo svelte-1cr370x"> <div class="heading svelte-1cr370x">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--future-tech-green"
            },
            {},
            {
              default: () => {
                return `${escape($_("components.future_tech_co").toUpperCase())}`;
              }
            }
          )}</div> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${escape($_("journeys.imani.about_to_issue_badges", {
                  values: {
                    StaffCount: staffCount,
                    BadgeName: $imaniBadgeName
                  }
                }))}`;
              }
            }
          )} <div class="p svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.click_issue_badge_to_issue_and_continue"))}`;
            }
          })}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: $_("journeys.imani.issue_badges"),
              onClick: handleIssueCred
            },
            {},
            {}
          )} <div class="subtext svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("components.cancel"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.staff_successfully_trained_now_issue_badges"))}<!-- HTML_TAG_END -->`;
      }
    })}</div> <div class="sub-text svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($_("journeys.imani.select_emp_that_passed_then_click_issue_badges"))}`;
      }
    })}</div> <div class="dash svelte-1cr370x">${validate_component(FutureTech, "FutureTech").$$render(
      $$result,
      {
        header: $imaniBadgeName.toUpperCase() + " " + $_("journeys.imani.trainees").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<table class="table svelte-1cr370x"><tr><th class="svelte-1cr370x"></th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.emp_name"))}`;
            }
          })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.designation"))}`;
            }
          })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.course_result"))}`;
            }
          })}</th></tr> ${each(staff, (emp) => {
            return `<tr><td class="svelte-1cr370x">${validate_component(Radio, "Radio").$$render(
              $$result,
              { checked: emp.selected },
              {
                checked: ($$value) => {
                  emp.selected = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</td> <td class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
              default: () => {
                return `${escape(emp.name)}`;
              }
            })}</td> <td class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape(emp.role)}`;
              }
            })}</td> <td class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
              default: () => {
                return `${escape($_("components.passed"))}`;
              }
            })}</td> </tr>`;
          })}</table> <div class="button-container svelte-1cr370x">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: $_("journeys.imani.issue_badges"),
              onClick: () => {
                showModal = true;
                staffCount = staff.filter((e) => e.selected).length;
              }
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_imaniChosenStaff();
  $$unsubscribe__();
  $$unsubscribe_imaniBadgeName();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DfU0_5z0.js.map
