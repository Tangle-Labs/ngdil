import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { P as ProgressBar } from './ProgressBar-DAxyK0TM.js';
import { b as completedJourneys } from './flows.store-Ch_DhNys.js';
import { c as currStep } from './onboarding.store-gJCzGVTB.js';
import { a as apiClient } from './axios.utils-CIq7LE2y.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css = {
  code: ".main.svelte-yx894m.svelte-yx894m.svelte-yx894m.svelte-yx894m.svelte-yx894m{position:fixed;display:flex;flex-direction:column;min-height:100vh}.main.svelte-yx894m .background.svelte-yx894m.svelte-yx894m.svelte-yx894m.svelte-yx894m{padding:10vh 22.5vw;margin:auto;display:flex;height:100%}.main.svelte-yx894m .background.svelte-yx894m>.container.svelte-yx894m.svelte-yx894m.svelte-yx894m{display:flex;height:100%;flex-wrap:wrap;justify-content:center;align-items:center}.main.svelte-yx894m .background.svelte-yx894m>.container.svelte-yx894m>.slot.svelte-yx894m.svelte-yx894m{padding-bottom:20px}.main.svelte-yx894m .background.svelte-yx894m>.container.svelte-yx894m>.bottom.svelte-yx894m.svelte-yx894m{width:50%;display:flex;gap:20px;justify-items:center;justify-content:center}.main.svelte-yx894m .background.svelte-yx894m>.container.svelte-yx894m>.bottom.svelte-yx894m>.back.svelte-yx894m{width:max-content;display:block;align-self:center;justify-self:start}.main.svelte-yx894m .background.svelte-yx894m>.container.svelte-yx894m>.bottom.svelte-yx894m>.progress.svelte-yx894m{width:60%}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<style lang=\\"scss\\">.main {\\n  position: fixed;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n.main .background {\\n  padding: 10vh 22.5vw;\\n  margin: auto;\\n  display: flex;\\n  height: 100%;\\n}\\n.main .background > .container {\\n  display: flex;\\n  height: 100%;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.main .background > .container > .slot {\\n  padding-bottom: 20px;\\n}\\n.main .background > .container > .bottom {\\n  width: 50%;\\n  display: flex;\\n  gap: 20px;\\n  justify-items: center;\\n  justify-content: center;\\n}\\n.main .background > .container > .bottom > .back {\\n  width: max-content;\\n  display: block;\\n  align-self: center;\\n  justify-self: start;\\n}\\n.main .background > .container > .bottom > .progress {\\n  width: 60%;\\n}\\n.main .background .lang-btn {\\n  display: flex;\\n  align-self: end;\\n}</style>\\n\\n<script>\\n\\timport { ProgressBar, Typography } from \\"$lib/components\\";\\n\\timport LangSwitchBtn from \\"$lib/components/ui/LanguageSwitchBtn/LangSwitchBtn.svelte\\";\\n\\timport { completedJourneys } from \\"$lib/stores/flows.store\\";\\n\\timport { currStep } from \\"$lib/stores/onboarding.store\\";\\n\\timport { apiClient } from \\"$lib/utils/axios.utils\\";\\n\\timport { _ } from \\"svelte-i18n\\";\\n\\n\\tapiClient.get(\\"/\\");\\n<\/script>\\n\\n<div class=\\"main\\">\\n\\t<div class=\\"background\\">\\n\\t\\t<div class=\\"container\\">\\n\\t\\t\\t<img src=\\"/imgs/ngdil.svg\\" class=\\"logo\\" alt=\\"\\" />\\n\\t\\t\\t<div class=\\"slot\\">\\n\\t\\t\\t\\t<slot />\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if !(window.location.pathname === \\"/demo/choose-journey\\" && $completedJourneys.length > 0)}\\n\\t\\t\\t\\t<div class=\\"bottom\\">\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass=\\"back\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\thistory.back();\\n\\t\\t\\t\\t\\t\\t}}\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/back.svg\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\" color=\\"--black-300\\">{$_(\\"components.back\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"progress\\">\\n\\t\\t\\t\\t\\t\\t<ProgressBar nodes=\\"{5}\\" current=\\"{$currStep}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,2EAAM,CACvB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACd,CACA,mBAAK,CAAC,mEAAY,CAChB,OAAO,CAAE,IAAI,CAAC,MAAM,CACpB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IACV,CACA,mBAAK,CAAC,yBAAW,CAAG,oDAAW,CAC7B,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACA,mBAAK,CAAC,yBAAW,CAAG,wBAAU,CAAG,iCAAM,CACrC,cAAc,CAAE,IAClB,CACA,mBAAK,CAAC,yBAAW,CAAG,wBAAU,CAAG,mCAAQ,CACvC,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MACnB,CACA,mBAAK,CAAC,yBAAW,CAAG,wBAAU,CAAG,qBAAO,CAAG,mBAAM,CAC/C,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,MAAM,CAClB,YAAY,CAAE,KAChB,CACA,mBAAK,CAAC,yBAAW,CAAG,wBAAU,CAAG,qBAAO,CAAG,uBAAU,CACnD,KAAK,CAAE,GACT"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $completedJourneys, $$unsubscribe_completedJourneys;
  let $_, $$unsubscribe__;
  let $currStep, $$unsubscribe_currStep;
  $$unsubscribe_completedJourneys = subscribe(completedJourneys, (value) => $completedJourneys = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_currStep = subscribe(currStep, (value) => $currStep = value);
  apiClient.get("/");
  $$result.css.add(css);
  $$unsubscribe_completedJourneys();
  $$unsubscribe__();
  $$unsubscribe_currStep();
  return `<div class="main svelte-yx894m"><div class="background svelte-yx894m"><div class="container svelte-yx894m"><img src="/imgs/ngdil.svg" class="logo" alt=""> <div class="slot svelte-yx894m">${slots.default ? slots.default({}) : ``}</div> ${!(window.location.pathname === "/demo/choose-journey" && $completedJourneys.length > 0) ? `<div class="bottom svelte-yx894m">  <div class="back svelte-yx894m"><img src="/imgs/back.svg" alt="" class="icon"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--black-300" }, {}, {
    default: () => {
      return `${escape($_("components.back"))}`;
    }
  })}</div> <div class="progress svelte-yx894m">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { nodes: 5, current: $currStep }, {}, {})}</div></div>` : ``}</div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CZXjOpkF.js.map
