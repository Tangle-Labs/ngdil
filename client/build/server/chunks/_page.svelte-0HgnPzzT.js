import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table th:last-of-type {\\n  text-align: center;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td:last-of-type {\\n  text-align: center;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button } from \\"$lib/components\\";\\nimport { currNode, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    currNode.set(1);\\n    nodeCount.set(8);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.future_tech_to_create_new_badge\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.create_new_badge_btn_desc\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.company_badges').toUpperCase()}\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.badge_name\\")}</Typography></th>\\n\\t\\t\\t\\t\\t<th></th>\\n\\t\\t\\t\\t\\t<th><Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.badge_status\\")}</Typography></th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.health_safety\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.communication\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.problem_solving\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.print_automation\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td> </td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.create_new_badge')}\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/new-badge');\\n\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CAUA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-1d37gdf"><div class="heading svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.future_tech_to_create_new_badge"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.imani.create_new_badge_btn_desc"))}`;
    }
  })}</div> <div class="dash svelte-1d37gdf">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: $_("journeys.imani.company_badges").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<table class="table svelte-1d37gdf"><tr><th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_name"))}`;
          }
        })}</th> <th class="svelte-1d37gdf"></th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_status"))}`;
          }
        })}</th></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.health_safety"))}`;
          }
        })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `${escape($_("components.active"))}`;
          }
        })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.communication"))}`;
          }
        })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `${escape($_("components.active"))}`;
          }
        })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.problem_solving"))}`;
          }
        })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `${escape($_("components.active"))}`;
          }
        })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.print_automation"))}`;
          }
        })}</td> <td class="svelte-1d37gdf" data-svelte-h="svelte-171oj0u"></td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `${escape($_("components.active"))}`;
          }
        })}</td></tr></table> <div class="button-container svelte-1d37gdf">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: $_("journeys.imani.create_new_badge"),
            onClick: () => {
              goto();
            }
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0HgnPzzT.js.map
