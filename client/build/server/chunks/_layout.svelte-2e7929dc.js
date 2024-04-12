import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { A as Avatar } from './Avatar-db3679f9.js';
import { T as Typography } from './Typography-011834f4.js';
import { P as ProgressBar } from './ProgressBar-bfb21576.js';
import { J as JourneyInfo, c as currentJourney, n as nodeCount, a as currNode } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".nav.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{background:linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);box-sizing:border-box;padding:20px 40px;display:flex;justify-content:space-between}.nav.svelte-1sxbzu6>.login.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{display:flex;align-items:center;align-content:center}.nav.svelte-1sxbzu6>.login.svelte-1sxbzu6>.avatar.svelte-1sxbzu6.svelte-1sxbzu6{padding:0 20px;position:relative}.nav.svelte-1sxbzu6>.login>.avatar .desc.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{padding:5px 0}.nav.svelte-1sxbzu6>.login>.avatar .desc.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{padding-bottom:15px}.nav.svelte-1sxbzu6>.login.svelte-1sxbzu6>.avatar.svelte-1sxbzu6>.dropdown.svelte-1sxbzu6{position:absolute;top:72px;padding:30px;background:rgba(207, 227, 238, 0.25);border-bottom-left-radius:8px;border-bottom-right-radius:8px;z-index:20}.slot.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{padding:20px 17vw}.overlay.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{position:absolute;opacity:0;top:0;left:0;height:100vh;width:100vw;z-index:10}.bottom.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{padding:0 17vw;display:flex;justify-content:center;align-items:center;position:relative}.bottom.svelte-1sxbzu6>.progress.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{width:40%}.bottom.svelte-1sxbzu6>.back.svelte-1sxbzu6.svelte-1sxbzu6.svelte-1sxbzu6{cursor:pointer;position:absolute;left:17.5vw}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentJourney, $$unsubscribe_currentJourney;
  let $nodeCount, $$unsubscribe_nodeCount;
  let $currNode, $$unsubscribe_currNode;
  $$unsubscribe_currentJourney = subscribe(currentJourney, (value) => $currentJourney = value);
  $$unsubscribe_nodeCount = subscribe(nodeCount, (value) => $nodeCount = value);
  $$unsubscribe_currNode = subscribe(currNode, (value) => $currNode = value);
  let expanded = false;
  $$result.css.add(css);
  $$unsubscribe_currentJourney();
  $$unsubscribe_nodeCount();
  $$unsubscribe_currNode();
  return `<div class="${"nav svelte-1sxbzu6"}"><img src="${"/imgs/ngdil.svg"}" class="${"logo"}">
	${expanded ? `<div class="${"overlay svelte-1sxbzu6"}"></div>` : ``}

	<div class="${"login svelte-1sxbzu6"}"><div class="${"avatar svelte-1sxbzu6"}">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      variant: "small",
      onClick: () => expanded = true,
      image: `/imgs/${$currentJourney}.png`
    },
    {},
    {}
  )}
			${expanded ? `<div class="${"dropdown svelte-1sxbzu6"}"><div class="${"Name"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "body", color: "--black-700" }, {}, {
    default: () => {
      return `${escape(JourneyInfo[$currentJourney].name)}`;
    }
  })}</div>
					<div class="${"desc svelte-1sxbzu6"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "sub-text",
      color: "--black-700"
    },
    {},
    {
      default: () => {
        return `${escape(JourneyInfo[$currentJourney].desc)}`;
      }
    }
  )}</div>
					${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "white",
      onClick: () => goto("/demo/choose-journey"),
      label: "Change"
    },
    {},
    {}
  )}</div>` : ``}</div>
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
        window.open("https://ngdil.com/contact", "_blank");
      },
      label: "Contact Us",
      variant: "white"
    },
    {},
    {}
  )}</div></div>

<div class="${"slot svelte-1sxbzu6"}">${slots.default ? slots.default({}) : ``}</div>

${$nodeCount > 0 ? `<div class="${"bottom svelte-1sxbzu6"}"><div class="${"back svelte-1sxbzu6"}"><img src="${"/imgs/back.svg"}" alt="${""}" class="${"icon"}">
			${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--black-300" }, {}, {
    default: () => {
      return `Back`;
    }
  })}</div>
		<div class="${"progress svelte-1sxbzu6"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { nodes: $nodeCount, current: $currNode }, {}, {})}</div></div>` : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-2e7929dc.js.map
