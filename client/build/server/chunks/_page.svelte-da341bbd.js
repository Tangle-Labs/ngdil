import { c as create_ssr_component, f as subscribe, v as validate_component, h as each, e as escape } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { l as imaniIssuedStaff, m as imaniBadgeName } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

/* empty css                                                                 */
const css = {
  code: ".container.svelte-1cr370x>.svelte-1cr370x{padding:15px 0}.container.svelte-1cr370x .table.svelte-1cr370x{width:100%}.container.svelte-1cr370x .table th.svelte-1cr370x{text-align:left}.container.svelte-1cr370x .table td.svelte-1cr370x{height:50px}.container.svelte-1cr370x .table td .loading.svelte-1cr370x{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1cr370x .table td .loading .text.svelte-1cr370x{padding-left:5px}.container.svelte-1cr370x .button-container.svelte-1cr370x{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal, Radio } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniBadgeName, imaniIssuedStaff } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { Confetti } from \\"svelte-confetti\\";\\nlet staff = $imaniIssuedStaff.map((s) => ({ ...s, selected: false }));\\nlet pending = true;\\nonMount(() => {\\n    setTimeout(() => {\\n        pending = false;\\n        currNode.set(8);\\n    }, 9000);\\n});\\n<\/script>\\n\\n{#if !pending}\\n\\t<div\\n\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\">\\n\\t\\t<Confetti\\n\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\tduration=\\"2000\\"\\n\\t\\t\\tamount=\\"500\\"\\n\\t\\t\\tfallDistance=\\"100vh\\" />\\n\\t</div>\\n{/if}\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>And they’re away. <Highlight>You have successfully trained and issued</Highlight> open badges\\n\\t\\t\\tto your employees.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the continue button to proceed and see what you have achieved with self-sovereign\\n\\t\\t\\tidentity.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{\`\${$imaniBadgeName.toUpperCase()} BADGE HOLDERS\`}\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Employee Name</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Designation</Typography></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Badge Status</Typography></th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{#each staff as emp (emp.name)}\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{emp.name}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{emp.role}</Typography>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t{#if pending}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"1rem\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">Pending</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Accepted</Typography>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"{pending ? 'future-tech-disabled' : 'future-tech'}\\"\\n\\t\\t\\t\\t\\tlabel=\\"Continue\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/journeys/imani/issued-badge')}\\" />\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,uBAAS,CAC5B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MACnB,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,oBAAM,CAClC,YAAY,CAAE,GAChB,CACA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniIssuedStaff, $$unsubscribe_imaniIssuedStaff;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniIssuedStaff = subscribe(imaniIssuedStaff, (value) => $imaniIssuedStaff = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let staff = $imaniIssuedStaff.map((s) => ({ ...s, selected: false }));
  $$result.css.add(css);
  $$unsubscribe_imaniIssuedStaff();
  $$unsubscribe_imaniBadgeName();
  return `${``} <div class="container svelte-1cr370x"><div class="heading svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `And they’re away. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully trained and issued`;
        }
      })} open badges
			to your employees.`;
    }
  })}</div> <div class="sub-text svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the continue button to proceed and see what you have achieved with self-sovereign
			identity.`;
    }
  })}</div> <div class="dash svelte-1cr370x">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: `${$imaniBadgeName.toUpperCase()} BADGE HOLDERS`
    },
    {},
    {
      default: () => {
        return `<table class="table svelte-1cr370x"><tr><th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Employee Name`;
          }
        })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Designation`;
          }
        })}</th> <th class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Badge Status`;
          }
        })}</th></tr> ${each(staff, (emp) => {
          return `<tr><td class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape(emp.name)}`;
            }
          })}</td> <td class="svelte-1cr370x">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(emp.role)}`;
            }
          })}</td> <td class="svelte-1cr370x">${`<div class="loading svelte-1cr370x">${validate_component(Loading, "Loading").$$render($$result, { size: "1rem" }, {}, {})} <div class="text svelte-1cr370x">${validate_component(Typography, "Typography").$$render(
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
          )}</div> </div>`}</td> </tr>`;
        })}</table> <div class="button-container svelte-1cr370x">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech-disabled",
            label: "Continue",
            onClick: () => goto()
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-da341bbd.js.map
