import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { k as imaniChosenApplicant } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-n6o7nw>.svelte-n6o7nw{padding:15px 0}.container.svelte-n6o7nw .application.svelte-n6o7nw{display:flex;width:100%;justify-content:space-between;padding:20px;box-sizing:border-box}.container.svelte-n6o7nw .application .info.svelte-n6o7nw{width:50%}.container.svelte-n6o7nw .application .info .bar.svelte-n6o7nw{height:10px;width:100%;background:var(--white-700);margin-top:10px;border-radius:10px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .application {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.container .application .info {\\n  width: 50%;\\n}\\n.container .application .info .bar {\\n  height: 10px;\\n  width: 100%;\\n  background: var(--white-700);\\n  margin-top: 10px;\\n  border-radius: 10px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n    currNode.set(1);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You’re in, and it appears you have <Highlight>three new applications</Highlight>. View\\n\\t\\t\\tapplicants to choose who to hire.</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>Click the view applicant button next to the applicant you want to hire.</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"3D ENGINEER JOB APPLICATIONS\\">\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t\\t>Gilian O'Leary</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"View Applicant\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set(\\"Gilian O'Leary\\");\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t\\t>Marcus Erikson</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"View Applicant\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set('Marcus Erikson');\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"application\\">\\n\\t\\t\\t\\t<div class=\\"info\\">\\n\\t\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t\\t>Cassandra Blanc</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"action\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"View Applicant\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\timaniChosenApplicant.set('Cassandra Blanc');\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,0BAAa,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,wBAAU,CAAC,YAAY,CAAC,mBAAM,CAC5B,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,YAAY,CAAC,KAAK,CAAC,kBAAK,CACjC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-n6o7nw"><div class="heading svelte-n6o7nw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `You’re in, and it appears you have ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `three new applications`;
        }
      })}. View
			applicants to choose who to hire.`;
    }
  })}</div> <div class="sub-text svelte-n6o7nw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view applicant button next to the applicant you want to hire.`;
    }
  })}</div> <div class="dash svelte-n6o7nw">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "3D ENGINEER JOB APPLICATIONS" }, {}, {
    default: () => {
      return `<div class="application svelte-n6o7nw"><div class="info svelte-n6o7nw"><div class="name">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Gilian O&#39;Leary`;
          }
        }
      )}</div> <div class="bar svelte-n6o7nw"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
          variant: "future-tech",
          onClick: () => {
            imaniChosenApplicant.set("Gilian O'Leary");
            goto();
          }
        },
        {},
        {}
      )}</div></div> <div class="application svelte-n6o7nw"><div class="info svelte-n6o7nw"><div class="name">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Marcus Erikson`;
          }
        }
      )}</div> <div class="bar svelte-n6o7nw"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
          variant: "future-tech",
          onClick: () => {
            imaniChosenApplicant.set("Marcus Erikson");
            goto();
          }
        },
        {},
        {}
      )}</div></div> <div class="application svelte-n6o7nw"><div class="info svelte-n6o7nw"><div class="name">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "list",
          fontVariant: "kw1c",
          color: "--future-tech-green"
        },
        {},
        {
          default: () => {
            return `Cassandra Blanc`;
          }
        }
      )}</div> <div class="bar svelte-n6o7nw"></div></div> <div class="action">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "View Applicant",
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
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6dd0bf4e.js.map
