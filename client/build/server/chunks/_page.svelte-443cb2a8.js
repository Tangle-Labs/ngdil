import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { a as currNode, m as imaniBadgeName } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table th:last-of-type {\\n  text-align: center;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td:last-of-type {\\n  text-align: center;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniBadgeName, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet loading = true;\\nsetTimeout(() => {\\n    loading = false;\\n    currNode.set(5);\\n}, 5_000);\\nonMount(() => {\\n    currNode.set(4);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You’ve successfully <Highlight>created a new badge template.</Highlight> Let’s continue to get\\n\\t\\t\\ttraining the staff.</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>Click continue to proceed to staff training.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"COMPANY BADGES\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Badge Name</Typography></th>\\n\\t\\t\\t\\t\\t<th></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">Badge Status</Typography></th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$imaniBadgeName}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t{#if loading}\\n\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"16px\\" />\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"{loading ? '--secondary-900' : '--green-900'}\\"\\n\\t\\t\\t\\t\\t\\t\\t>{loading ? \\"Pending\\" : \\"Active\\"}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Health & Safety</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Communication</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Problem Solving</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Print Automation</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\tlabel=\\"Continue\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/train-staff');\\n\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CAUA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  let loading = true;
  setTimeout(
    () => {
      loading = false;
      currNode.set(5);
    },
    5e3
  );
  $$result.css.add(css);
  $$unsubscribe_imaniBadgeName();
  return `<div class="container svelte-1d37gdf"><div class="heading svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `You’ve successfully ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `created a new badge template.`;
        }
      })} Let’s continue to get
			training the staff.`;
    }
  })}</div> <div class="sub-text svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click continue to proceed to staff training.`;
    }
  })}</div> <div class="dash svelte-1d37gdf">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY BADGES" }, {}, {
    default: () => {
      return `<table class="table svelte-1d37gdf"><tr><th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Badge Name`;
        }
      })}</th> <th class="svelte-1d37gdf"></th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Badge Status`;
        }
      })}</th></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($imaniBadgeName)}`;
        }
      })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${loading ? `${validate_component(Loading, "Loading").$$render($$result, { size: "16px" }, {}, {})}` : ``} ${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "status",
          color: loading ? "--secondary-900" : "--green-900"
        },
        {},
        {
          default: () => {
            return `${escape(loading ? "Pending" : "Active")}`;
          }
        }
      )}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Health &amp; Safety`;
        }
      })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Communication`;
        }
      })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Problem Solving`;
        }
      })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Print Automation`;
        }
      })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
        default: () => {
          return `Active`;
        }
      })}</td></tr></table> <div class="button-container svelte-1d37gdf">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "future-tech",
          label: "Continue",
          onClick: () => {
            goto();
          }
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-443cb2a8.js.map
