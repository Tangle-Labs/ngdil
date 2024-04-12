import { c as create_ssr_component, f as subscribe, v as validate_component } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { P as ProgressBar } from './ProgressBar-bfb21576.js';
import { b as completedJourneys } from './flows.store-72d7210a.js';
import { c as currStep } from './onboarding.store-7316f7a3.js';
import { a as apiClient } from './axios.utils-acadfc84.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".background.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r{min-height:100vh;width:100%;padding:0;margin:0;box-sizing:border-box;padding:15vh 22.5vw}@media screen and (max-width: 1200px){.background.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r{padding:15vh 15vw}}@media screen and (max-width: 900px){.background.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r{padding:15vh 5vw}}.background.svelte-1q4zs1r>.container.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r{display:flex;height:100%;flex-wrap:wrap;justify-content:center;align-items:stretch;align-content:space-between}.background.svelte-1q4zs1r>.container.svelte-1q4zs1r>.slot.svelte-1q4zs1r.svelte-1q4zs1r{min-height:calc(70vh - 160px);padding-bottom:20px}.background.svelte-1q4zs1r>.container.svelte-1q4zs1r>.bottom.svelte-1q4zs1r.svelte-1q4zs1r{width:50%;display:flex;justify-content:center;position:relative}.background.svelte-1q4zs1r>.container.svelte-1q4zs1r>.bottom.svelte-1q4zs1r>.back.svelte-1q4zs1r{position:absolute;top:50%;transform:translateY(-50%);left:0}.background.svelte-1q4zs1r>.container>.bottom .progress.svelte-1q4zs1r.svelte-1q4zs1r.svelte-1q4zs1r{width:calc(100% - 200px);justify-content:center;display:flex}@media screen and (max-width: 900px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $completedJourneys, $$unsubscribe_completedJourneys;
  let $currStep, $$unsubscribe_currStep;
  $$unsubscribe_completedJourneys = subscribe(completedJourneys, (value) => $completedJourneys = value);
  $$unsubscribe_currStep = subscribe(currStep, (value) => $currStep = value);
  apiClient.get("/");
  $$result.css.add(css);
  $$unsubscribe_completedJourneys();
  $$unsubscribe_currStep();
  return `<div class="${"background svelte-1q4zs1r"}"><div class="${"container svelte-1q4zs1r"}"><img src="${"/imgs/ngdil.svg"}" class="${"logo"}">

		<div class="${"slot svelte-1q4zs1r"}">${slots.default ? slots.default({}) : ``}</div>
		${!(window.location.pathname === "/demo/choose-journey" && $completedJourneys.length > 0) ? `<div class="${"bottom svelte-1q4zs1r"}"><div class="${"back svelte-1q4zs1r"}"><img src="${"/imgs/back.svg"}" alt="${""}" class="${"icon"}">
					${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--black-300" }, {}, {
    default: () => {
      return `Back`;
    }
  })}</div>
				<div class="${"progress svelte-1q4zs1r"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { nodes: 5, current: $currStep }, {}, {})}</div></div>` : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-21776dc6.js.map
