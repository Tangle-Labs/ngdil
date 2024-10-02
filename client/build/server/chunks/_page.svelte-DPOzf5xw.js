import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { c as currStep } from './onboarding.store-gJCzGVTB.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-gwmgmw.svelte-gwmgmw{display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-gwmgmw>.svelte-gwmgmw{padding:20px 0;text-align:center}.container.svelte-gwmgmw>.button.svelte-gwmgmw{padding-top:60px;width:100%}.container.svelte-gwmgmw>.heading.svelte-gwmgmw,.container.svelte-gwmgmw>.desc.svelte-gwmgmw{width:40vw}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  text-align: center;\\n}\\n.container > .button {\\n  padding-top: 60px;\\n  width: 100%;\\n}\\n.container > .heading, .container > .desc {\\n  width: 40vw;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Button } from \\"$lib/components\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nfunction handleContinue() {\\n    currStep.set(1);\\n    goto(\\"/demo/download-wallet\\");\\n}\\nonMount(() => {\\n    currStep.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"onboarding.welcome_to_ngdil\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\t{$_(\\"onboarding.intro\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"button\\">\\n\\t\\t<Button\\n\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\tlabel=\\"{$_('onboarding.start_journey')}\\"\\n\\t\\t\\tonClick=\\"{handleContinue}\\"\\n\\t\\t/>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,sCAAW,CAC5B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MACnB,CACA,wBAAU,CAAG,cAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,MACd,CACA,wBAAU,CAAG,qBAAQ,CACnB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACT,CACA,wBAAU,CAAG,sBAAQ,CAAE,wBAAU,CAAG,mBAAM,CACxC,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  function handleContinue() {
    currStep.set(1);
    goto();
  }
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-gwmgmw"><div class="heading svelte-gwmgmw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("onboarding.welcome_to_ngdil"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="desc svelte-gwmgmw">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `${escape($_("onboarding.intro"))}`;
    }
  })}</div> <div class="button svelte-gwmgmw">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      label: $_("onboarding.start_journey"),
      onClick: handleContinue
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DPOzf5xw.js.map
