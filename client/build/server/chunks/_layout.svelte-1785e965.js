import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-78a5ef04.js';
import { P as ProgressBar } from './ProgressBar-20be24f4.js';
import { c as currStep } from './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".background.svelte-1ybj0hx.svelte-1ybj0hx.svelte-1ybj0hx.svelte-1ybj0hx{min-height:100vh;width:100%;padding:0;margin:0;box-sizing:border-box;padding:15vh 22.5vw}.background.svelte-1ybj0hx>.container.svelte-1ybj0hx.svelte-1ybj0hx.svelte-1ybj0hx{display:flex;height:100%;flex-wrap:wrap;justify-content:center;align-items:stretch;align-content:space-between}.background.svelte-1ybj0hx>.container.svelte-1ybj0hx>.slot.svelte-1ybj0hx.svelte-1ybj0hx{min-height:calc(70vh - 160px);padding-bottom:20px}.background.svelte-1ybj0hx>.container.svelte-1ybj0hx>.progress.svelte-1ybj0hx.svelte-1ybj0hx{width:100%;justify-content:center;display:flex}.background.svelte-1ybj0hx>.container.svelte-1ybj0hx>.progress.svelte-1ybj0hx>.bar.svelte-1ybj0hx{width:50%}@media screen and (max-width: 900px){.background.svelte-1ybj0hx>.container.svelte-1ybj0hx>.progress.svelte-1ybj0hx>.bar.svelte-1ybj0hx{width:100%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currStep, $$unsubscribe_currStep;
  $$unsubscribe_currStep = subscribe(currStep, (value) => $currStep = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"background svelte-1ybj0hx"}"><div class="${"container svelte-1ybj0hx"}"><img src="${"/imgs/ngdil.svg"}" class="${"logo"}">

		<div class="${"slot svelte-1ybj0hx"}">${slots.default ? slots.default({}) : ``}</div>
		<div class="${"progress svelte-1ybj0hx"}"><div class="${"bar svelte-1ybj0hx"}">${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      { nodes: 5, current: $currStep },
      {
        current: ($$value) => {
          $currStep = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_currStep();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1785e965.js.map
