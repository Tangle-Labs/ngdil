import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-wu4iii>.svelte-wu4iii{padding:15px 0}.container.svelte-wu4iii .card.svelte-wu4iii{width:100%}.container.svelte-wu4iii .card .card-content.svelte-wu4iii{padding:20px;display:flex}.container.svelte-wu4iii .card .card-content .content.svelte-wu4iii{width:50%}.container.svelte-wu4iii .card .card-content .content .list.svelte-wu4iii{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-wu4iii .card .card-content .content .list img.svelte-wu4iii{height:25px;padding-right:5px}.container.svelte-wu4iii .card .card-content .content .p.svelte-wu4iii{padding:30px 0}.container.svelte-wu4iii .card .card-content .img.svelte-wu4iii{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-wu4iii .card .card-content .img img.svelte-wu4iii{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 100%;\\n}\\n.container .card .card-content {\\n  padding: 20px;\\n  display: flex;\\n}\\n.container .card .card-content .content {\\n  width: 50%;\\n}\\n.container .card .card-content .content .list {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  align-content: center;\\n  padding: 15px 0;\\n}\\n.container .card .card-content .content .list img {\\n  height: 25px;\\n  padding-right: 5px;\\n}\\n.container .card .card-content .content .p {\\n  padding: 30px 0;\\n}\\n.container .card .card-content .img {\\n  width: 50%;\\n  position: relative;\\n  box-sizing: border-box;\\n  margin-left: 30px;\\n  background: var(--white-500);\\n  border: 1px solid black;\\n  border-radius: 10px;\\n}\\n.container .card .card-content .img img {\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  height: 275px;\\n  transform: translate(-50%, -50%);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Button } from \\"$lib/components\\";\\nimport { completedJourneys, imaniIssuedBadge } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nfunction handleFinishCourse() {\\n    goto(\\"/demo/choose-journey\\");\\n}\\nonMount(() => {\\n    imaniIssuedBadge.set(true);\\n    completedJourneys.update((u) => {\\n        const _unique = u.filter((_u) => _u !== \\"imani\\");\\n        _unique.push(\\"imani\\");\\n        return _unique;\\n    });\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.imani.successfully_created_new_badge_and_issued_to_team\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\t{$_(\\"journeys.imani.heres_what_you_achieved\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"card\\">\\n\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.created_open_badge_template\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.trained_eligible_staff\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.issued_open_badge_to_emp\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.imani.completed_imani_journey\\")}\\n\\t\\t\\t\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.imani.explore_other_journeys\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{handleFinishCourse}\\"\\n\\t\\t\\t\\t\\t/>&nbsp;\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.contact_ngdil')}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => window.open('https://ngdil.com/contact', '_blank')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"img\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/imani-2.svg\\" alt=\\"\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Card>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,IACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,sBAAS,CACtC,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,mBAAM,CAC5C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAI,CAChD,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,gBAAG,CACzC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAK,CAClC,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,IAAI,CAAC,iBAAI,CACtC,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  function handleFinishCourse() {
    goto();
  }
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-wu4iii"><div class="heading svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.successfully_created_new_badge_and_issued_to_team"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.imani.heres_what_you_achieved"))}`;
    }
  })}</div> <div class="card svelte-wu4iii">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-wu4iii"><div class="content svelte-wu4iii"><div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.imani.created_open_badge_template"))}`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.imani.trained_eligible_staff"))}`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.imani.issued_open_badge_to_emp"))}`;
        }
      })}</div> <div class="p svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.imani.completed_imani_journey"))} <br><br> ${escape($_("journeys.imani.explore_other_journeys"))}`;
        }
      })}</div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: $_("components.continue"),
          onClick: handleFinishCourse
        },
        {},
        {}
      )} 
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "white",
          label: $_("journeys.imani.contact_ngdil"),
          onClick: () => window.open("https://ngdil.com/contact", "_blank")
        },
        {},
        {}
      )}</div> <div class="img svelte-wu4iii" data-svelte-h="svelte-14t899v"><img src="/imgs/imani-2.svg" alt="" class="svelte-wu4iii"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CIBxTBqp.js.map
