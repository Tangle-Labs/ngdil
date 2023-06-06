import { c as create_ssr_component, a as subscribe, v as validate_component } from './index-78a5ef04.js';
import { B as Button } from './Button-30e11d4d.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { P as ProgressBar } from './ProgressBar-20be24f4.js';
import { c as currentJourney, n as nodeCount, a as currNode } from './flows.store-b2e554df.js';
import './Typography-d68adf7d.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".nav.svelte-q32r7a.svelte-q32r7a.svelte-q32r7a{background:linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);box-sizing:border-box;padding:20px 40px;display:flex;justify-content:space-between}.nav.svelte-q32r7a>.login.svelte-q32r7a.svelte-q32r7a{display:flex;align-items:center;align-content:center}.nav.svelte-q32r7a>.login.svelte-q32r7a>.avatar.svelte-q32r7a{padding:0 20px}.slot.svelte-q32r7a.svelte-q32r7a.svelte-q32r7a{padding:20px 17vw}.bottom.svelte-q32r7a.svelte-q32r7a.svelte-q32r7a{padding:0 17vw;display:flex;justify-content:center}.bottom.svelte-q32r7a>.progress.svelte-q32r7a.svelte-q32r7a{width:40%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentJourney, $$unsubscribe_currentJourney;
  let $nodeCount, $$unsubscribe_nodeCount;
  let $currNode, $$unsubscribe_currNode;
  $$unsubscribe_currentJourney = subscribe(currentJourney, (value) => $currentJourney = value);
  $$unsubscribe_nodeCount = subscribe(nodeCount, (value) => $nodeCount = value);
  $$unsubscribe_currNode = subscribe(currNode, (value) => $currNode = value);
  $$result.css.add(css);
  $$unsubscribe_currentJourney();
  $$unsubscribe_nodeCount();
  $$unsubscribe_currNode();
  return `<div class="${"nav svelte-q32r7a"}"><img src="${"/imgs/ngdil.svg"}" class="${"logo"}">

	<div class="${"login svelte-q32r7a"}"><div class="${"avatar svelte-q32r7a"}">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      variant: "small",
      image: `/imgs/${$currentJourney}.png`
    },
    {},
    {}
  )}</div>
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      },
      label: "Contact Us",
      variant: "white"
    },
    {},
    {}
  )}</div></div>

<div class="${"slot svelte-q32r7a"}">${slots.default ? slots.default({}) : ``}</div>

<div class="${"bottom svelte-q32r7a"}"><div class="${"back"}"></div>
	<div class="${"progress svelte-q32r7a"}">${$nodeCount > 0 ? `${validate_component(ProgressBar, "ProgressBar").$$render($$result, { nodes: $nodeCount, current: $currNode }, {}, {})}` : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-5ae4349d.js.map
