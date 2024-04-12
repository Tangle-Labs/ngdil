import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';

const css = {
  code: ".desktop-view.svelte-ndeax1.svelte-ndeax1{display:block}@media screen and (max-width: 1000px){.desktop-view.svelte-ndeax1.svelte-ndeax1{display:none}}.mobile-view.svelte-ndeax1.svelte-ndeax1{display:none}@media screen and (max-width: 1000px){.mobile-view.svelte-ndeax1.svelte-ndeax1{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh}.mobile-view.svelte-ndeax1 .body.svelte-ndeax1{padding:30px;padding-top:40px;padding-bottom:40px;text-align:center}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"desktop-view svelte-ndeax1"}">${slots.default ? slots.default({}) : ``}</div>
<div class="${"mobile-view svelte-ndeax1"}"><img class="${"logo"}" src="${"/imgs/ngdil.svg"}" alt="${""}">
	<div class="${"body svelte-ndeax1"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `This demo is best experienced on a bigger screen, please visit on a desktop or a tablet.`;
    }
  })}</div>

	<a href="${"https://ngdil.com"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Go Back to NGDIL`;
    }
  })}</a></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c97833df.js.map
