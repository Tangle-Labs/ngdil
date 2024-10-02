import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { A as Avatar } from './Avatar-CYgDjTlo.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { h as highlight } from './highlight-CswzCIho.js';
import { j as imaniHiredEmployee, k as imaniIssuedBadge } from './flows.store-Ch_DhNys.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  padding-top: 5px;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 15px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 320px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Avatar, Button } from \\"$lib/components\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { currNode, imaniHiredEmployee, imaniIssuedBadge, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    nodeCount.set(0);\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>{#if $imaniHiredEmployee}\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.imani.imani_hired_emp_intro\\"))}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.imani.imani_yet_to_hire_emp_intro\\"))}\\n\\t\\t\\t{/if}</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\t{$imaniHiredEmployee\\n\\t\\t\\t\\t? $_(\\"journeys.imani.select_next_experience\\")\\n\\t\\t\\t\\t: $_(\\"journeys.imani.select_first_journey\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/imani-1.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.hiring_emp_with_digital_cv\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.imani.business_portal_dashboard_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$imaniHiredEmployee ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/login');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$imaniHiredEmployee ? $_('components.retry') : $_('components.get_started')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/imani-2.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.create_and_issue_company_skill_badge\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.imani.company_skill_badge_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$imaniIssuedBadge\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $imaniHiredEmployee\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/company-badges');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$imaniIssuedBadge ? $_('components.retry') : $_('components.get_started')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t{#if $imaniHiredEmployee && $imaniIssuedBadge}\\n\\t\\t\\t<div class=\\"other\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('components.try_another_journey')}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,GACf,CAIA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniHiredEmployee, $$unsubscribe_imaniHiredEmployee;
  let $_, $$unsubscribe__;
  let $imaniIssuedBadge, $$unsubscribe_imaniIssuedBadge;
  $$unsubscribe_imaniHiredEmployee = subscribe(imaniHiredEmployee, (value) => $imaniHiredEmployee = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_imaniIssuedBadge = subscribe(imaniIssuedBadge, (value) => $imaniIssuedBadge = value);
  $$result.css.add(css);
  $$unsubscribe_imaniHiredEmployee();
  $$unsubscribe__();
  $$unsubscribe_imaniIssuedBadge();
  return `<div class="container svelte-1vk882u"><div class="heading svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${$imaniHiredEmployee ? ` <!-- HTML_TAG_START -->${highlight($_("journeys.imani.imani_hired_emp_intro"))}<!-- HTML_TAG_END --> ` : ` <!-- HTML_TAG_START -->${highlight($_("journeys.imani.imani_yet_to_hire_emp_intro"))}<!-- HTML_TAG_END --> `}`;
    }
  })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `${escape($imaniHiredEmployee ? $_("journeys.imani.select_next_experience") : $_("journeys.imani.select_first_journey"))}`;
    }
  })}</div> <div class="cards svelte-1vk882u"><div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani-1.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape($_("journeys.imani.hiring_emp_with_digital_cv"))}`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.imani.business_portal_dashboard_desc"))}`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $imaniHiredEmployee ? "completed" : "secondary",
          onClick: () => {
            goto();
          },
          label: $imaniHiredEmployee ? $_("components.retry") : $_("components.get_started")
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani-2.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape($_("journeys.imani.create_and_issue_company_skill_badge"))}`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.imani.company_skill_badge_desc"))}`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $imaniIssuedBadge ? "completed" : $imaniHiredEmployee ? "secondary" : "disabled",
          onClick: () => {
            goto();
          },
          label: $imaniIssuedBadge ? $_("components.retry") : $_("components.get_started")
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> ${$imaniHiredEmployee && $imaniIssuedBadge ? `<div class="other">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      onClick: () => goto(),
      label: $_("components.try_another_journey")
    },
    {},
    {}
  )}</div>` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B6f8bDDo.js.map
