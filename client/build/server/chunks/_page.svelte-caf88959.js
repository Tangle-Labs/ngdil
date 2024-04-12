import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { M as Modal } from './Modal-de587996.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { R as Radio } from './Radio-6488f3a6.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { r as imaniChosenStaff, m as imaniBadgeName, l as imaniIssuedStaff } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1cr370x>.svelte-1cr370x{padding:15px 0}.container.svelte-1cr370x .table.svelte-1cr370x{width:100%}.container.svelte-1cr370x .table th.svelte-1cr370x{text-align:left}.container.svelte-1cr370x .table td.svelte-1cr370x{height:50px}.container.svelte-1cr370x .button-container.svelte-1cr370x{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1cr370x.svelte-1cr370x{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1cr370x>.svelte-1cr370x{padding:10px 0;width:100%}.modal-content.svelte-1cr370x img.svelte-1cr370x{height:120px;width:unset}.modal-content.svelte-1cr370x .p.svelte-1cr370x{padding:20px 0}.modal-content.svelte-1cr370x .subtext.svelte-1cr370x{width:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal, Radio } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniBadgeName, imaniChosenStaff, imaniIssuedStaff } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet staff = $imaniChosenStaff.map((s) => ({ ...s, selected: false }));\\nlet staffCount = staff.length;\\nlet showModal = false;\\nfunction handleIssueCred() {\\n    imaniIssuedStaff.set(staff.filter((s) => s.selected));\\n    goto(\\"/demo/journeys/imani/badge-holders\\");\\n}\\nonMount(() => {\\n    currNode.set(7);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"16\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/future-tech.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t>FUTURE TECH CO.</Typography\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>You are about to issue {staffCount} badges - {$imaniBadgeName}</Typography\\n\\t\\t\\t>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t<Typography color=\\"--black-500\\">\\n\\t\\t\\t\\t\\tTo continue and issue the badges click the issue badges button.\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Button variant=\\"future-tech\\" label=\\"Issue Badges\\" onClick=\\"{handleIssueCred}\\" />\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Cancel</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Not bad at all, the <Highlight>staff were successful in their training.</Highlight> Let’s issue\\n\\t\\t\\tthem their badges.</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Select the check boxes next to the employees that passed, then click the issue badges button\\n\\t\\t\\tto continue.</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{`${$imaniBadgeName.toUpperCase()} TRAINEES`}\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Employee Name</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Designation</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Course Result</Typography></th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{#each staff as emp (emp.name)}\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{emp.selected}\\" />\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{emp.name}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{emp.role}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Passed</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\tlabel=\\"Issue Badges\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\tstaffCount = staff.filter((e) => e.selected).length;\\n\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CAUA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CAEA,4CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,6BAAc,CAAG,eAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,6BAAc,CAAC,kBAAI,CACjB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACT,CACA,6BAAc,CAAC,iBAAG,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,6BAAc,CAAC,uBAAS,CACtB,KAAK,CAAE,IACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenStaff, $$unsubscribe_imaniChosenStaff;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniChosenStaff = subscribe(imaniChosenStaff, (value) => $imaniChosenStaff = value);
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
      { borderRadius: "16", isOpen: showModal },
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
                return `FUTURE TECH CO.`;
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
                return `You are about to issue ${escape(staffCount)} badges - ${escape($imaniBadgeName)}`;
              }
            }
          )} <div class="p svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `To continue and issue the badges click the issue badges button.`;
            }
          })}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Badges",
              onClick: handleIssueCred
            },
            {},
            {}
          )} <div class="subtext svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `Not bad at all, the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `staff were successful in their training.`;
          }
        })} Let’s issue
			them their badges.`;
      }
    })}</div> <div class="sub-text svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the check boxes next to the employees that passed, then click the issue badges button
			to continue.`;
      }
    })}</div> <div class="dash svelte-1cr370x">${validate_component(FutureTech, "FutureTech").$$render(
      $$result,
      {
        header: `${$imaniBadgeName.toUpperCase()} TRAINEES`
      },
      {},
      {
        default: () => {
          return `<table class="table svelte-1cr370x"><tr><th class="svelte-1cr370x"></th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Employee Name`;
            }
          })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Designation`;
            }
          })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Course Result`;
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
                return `Passed`;
              }
            })}</td> </tr>`;
          })}</table> <div class="button-container svelte-1cr370x">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Badges",
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
  $$unsubscribe_imaniBadgeName();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-caf88959.js.map
