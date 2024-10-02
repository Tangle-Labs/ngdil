import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { h as highlight } from './highlight-CswzCIho.js';
import { l as imaniChosenApplicant } from './flows.store-Ch_DhNys.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1je35m>.svelte-1je35m{padding:15px 0}.container.svelte-1je35m .application.svelte-1je35m{display:flex;width:100%;justify-content:space-between;padding:20px;box-sizing:border-box}.container.svelte-1je35m .application .info.svelte-1je35m{width:50%}.container.svelte-1je35m .application .info .bar.svelte-1je35m{height:10px;width:90%;background:var(--white-700);margin-top:10px;border-radius:10px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .application {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.container .application .info {\\n  width: 50%;\\n}\\n.container .application .info .bar {\\n  height: 10px;\\n  width: 90%;\\n  background: var(--white-700);\\n  margin-top: 10px;\\n  border-radius: 10px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button } from \\"$lib/components\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    currNode.set(1);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.view_3_new_applications_to_hire\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.view_applicant_btn_desc\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.3d_engineer_job_applications').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\">\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"applicants.Gilian_OLeary\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.view_applicant')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set(\\"Gilian O'Leary\\");\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\">\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"applicants.Marcus_Erikson\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.view_applicant')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set('Marcus Erikson');\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\">\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"applicants.Cassandra_Blanc\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.view_applicant')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set('Cassandra Blanc');\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,0BAAa,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,wBAAU,CAAC,YAAY,CAAC,mBAAM,CAC5B,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,YAAY,CAAC,KAAK,CAAC,kBAAK,CACjC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-1je35m"><div class="heading svelte-1je35m">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.view_3_new_applications_to_hire"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-1je35m">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.imani.view_applicant_btn_desc"))}`;
    }
  })}</div> <div class="dash svelte-1je35m">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: $_("journeys.imani.3d_engineer_job_applications").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="application svelte-1je35m"><div class="info svelte-1je35m"><div class="name">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "list",
            fontVariant: "kw1c",
            color: "--future-tech-green"
          },
          {},
          {
            default: () => {
              return `${escape($_("applicants.Gilian_OLeary"))}`;
            }
          }
        )}</div> <div class="bar svelte-1je35m"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.view_applicant"),
            variant: "future-tech",
            onClick: () => {
              imaniChosenApplicant.set("Gilian O'Leary");
              goto();
            }
          },
          {},
          {}
        )}</div></div> <div class="application svelte-1je35m"><div class="info svelte-1je35m"><div class="name">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "list",
            fontVariant: "kw1c",
            color: "--future-tech-green"
          },
          {},
          {
            default: () => {
              return `${escape($_("applicants.Marcus_Erikson"))}`;
            }
          }
        )}</div> <div class="bar svelte-1je35m"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.view_applicant"),
            variant: "future-tech",
            onClick: () => {
              imaniChosenApplicant.set("Marcus Erikson");
              goto();
            }
          },
          {},
          {}
        )}</div></div> <div class="application svelte-1je35m"><div class="info svelte-1je35m"><div class="name">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "list",
            fontVariant: "kw1c",
            color: "--future-tech-green"
          },
          {},
          {
            default: () => {
              return `${escape($_("applicants.Cassandra_Blanc"))}`;
            }
          }
        )}</div> <div class="bar svelte-1je35m"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.view_applicant"),
            variant: "future-tech",
            onClick: () => {
              imaniChosenApplicant.set("Cassandra Blanc");
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
//# sourceMappingURL=_page.svelte-DR4HL0u8.js.map
