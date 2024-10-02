import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { B as Badge } from './Badge-CJxtfPX9.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { p as imaniBadgeColor, q as imaniBadgeVariant, o as imaniBadgeName, r as imaniBadgeDesc } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-mlhifd>.svelte-mlhifd.svelte-mlhifd{padding:15px 0}.container.svelte-mlhifd .card-header.svelte-mlhifd.svelte-mlhifd{width:100%;display:flex;justify-content:space-between;padding:10px 15px}.container.svelte-mlhifd .badge.svelte-mlhifd.svelte-mlhifd{display:flex;padding:10px 20px}.container.svelte-mlhifd .badge.svelte-mlhifd>.badge.svelte-mlhifd{padding:0}.container.svelte-mlhifd .badge .data.svelte-mlhifd.svelte-mlhifd{padding:0 30px}.container.svelte-mlhifd .badge .data .text-block.svelte-mlhifd.svelte-mlhifd{padding-bottom:10px}.container.svelte-mlhifd .button-container.svelte-mlhifd.svelte-mlhifd{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card-header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px 15px;\\n}\\n.container .badge {\\n  display: flex;\\n  padding: 10px 20px;\\n}\\n.container .badge > .badge {\\n  padding: 0;\\n}\\n.container .badge .data {\\n  padding: 0 30px;\\n}\\n.container .badge .data .text-block {\\n  padding-bottom: 10px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Badge } from \\"$lib/components\\";\\nimport { currNode, imaniBadgeColor, imaniBadgeDesc, imaniBadgeName, imaniBadgeVariant } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    currNode.set(3);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.save_badge_template_for_trainees\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.save_badge_btn_desc\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.company_badges').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"card-header\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\">{$_(\\"journeys.imani.confirm_badge\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t<Badge fill=\\"{$imaniBadgeColor}\\" variant=\\"{$imaniBadgeVariant}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.badge_name\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>{$imaniBadgeName}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.badge_issuer\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>{$_(\\"components.future_tech_co\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.badge_description\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>{$imaniBadgeDesc}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.save_badge')}\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/badges');\\n\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,4BAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,wCAAa,CACtB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,wBAAU,CAAC,kCAAO,CAChB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,wBAAU,CAAC,oBAAM,CAAG,oBAAO,CACzB,OAAO,CAAE,CACX,CACA,wBAAU,CAAC,MAAM,CAAC,iCAAM,CACtB,OAAO,CAAE,CAAC,CAAC,IACb,CACA,wBAAU,CAAC,MAAM,CAAC,KAAK,CAAC,uCAAY,CAClC,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,6CAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $imaniBadgeColor, $$unsubscribe_imaniBadgeColor;
  let $imaniBadgeVariant, $$unsubscribe_imaniBadgeVariant;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  let $imaniBadgeDesc, $$unsubscribe_imaniBadgeDesc;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_imaniBadgeColor = subscribe(imaniBadgeColor, (value) => $imaniBadgeColor = value);
  $$unsubscribe_imaniBadgeVariant = subscribe(imaniBadgeVariant, (value) => $imaniBadgeVariant = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  $$unsubscribe_imaniBadgeDesc = subscribe(imaniBadgeDesc, (value) => $imaniBadgeDesc = value);
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_imaniBadgeColor();
  $$unsubscribe_imaniBadgeVariant();
  $$unsubscribe_imaniBadgeName();
  $$unsubscribe_imaniBadgeDesc();
  return `<div class="container svelte-mlhifd"><div class="heading svelte-mlhifd">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.save_badge_template_for_trainees"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-mlhifd">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.imani.save_badge_btn_desc"))}`;
    }
  })}</div> <div class="dash svelte-mlhifd">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: $_("journeys.imani.company_badges").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="card-header svelte-mlhifd">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.confirm_badge"))}`;
          }
        })}</div> <div class="badge svelte-mlhifd"><div class="badge svelte-mlhifd">${validate_component(Badge, "Badge").$$render(
          $$result,
          {
            fill: $imaniBadgeColor,
            variant: $imaniBadgeVariant
          },
          {},
          {}
        )}</div> <div class="data svelte-mlhifd"><div class="text-block svelte-mlhifd"><div class="header">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_name"))}`;
          }
        })}</div> <div class="content">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($imaniBadgeName)}`;
          }
        })}</div></div> <div class="text-block svelte-mlhifd"><div class="header">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_issuer"))}`;
          }
        })}</div> <div class="content">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($_("components.future_tech_co"))}`;
          }
        })}</div></div> <div class="text-block svelte-mlhifd"><div class="header">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_description"))}`;
          }
        })}</div> <div class="content">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($imaniBadgeDesc)}`;
          }
        })}</div></div></div></div> <div class="button-container svelte-mlhifd">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: $_("journeys.imani.save_badge"),
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
//# sourceMappingURL=_page.svelte-CWbcOnSy.js.map
