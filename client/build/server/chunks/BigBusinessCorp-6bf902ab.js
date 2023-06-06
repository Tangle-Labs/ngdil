import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';

/* empty css                                     */const css = {
  code: ".container.svelte-1wybam4.svelte-1wybam4{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-1wybam4 .nav.svelte-1wybam4{width:100%;padding:20px 40px;background:var(--bbc-blue);display:flex;box-sizing:border-box;position:relative;justify-content:center;position:relative;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-1wybam4 .nav .logo.svelte-1wybam4{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-1wybam4 .nav .logo img.svelte-1wybam4{height:25px;padding-right:20px}.container.svelte-1wybam4 .nav .logo .text.svelte-1wybam4{width:100%;text-align:center}.container.svelte-1wybam4 .nav .tabs.svelte-1wybam4{position:absolute;width:calc(40% - 180px);height:10px;bottom:30px;right:40px;display:flex;justify-content:space-between}.container.svelte-1wybam4 .nav .tabs .tab.svelte-1wybam4{width:22%;height:100%;background:var(--black-500);border-radius:10px}.container.svelte-1wybam4 .content.svelte-1wybam4{min-height:50vh;background:var(--bbc-background);position:relative}",
  map: null
};
const BigBusinessCorp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1wybam4"}"><div class="${"nav svelte-1wybam4"}"><div class="${"logo svelte-1wybam4"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"svelte-1wybam4"}">
			<div class="${"text svelte-1wybam4"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      color: "--white-300",
      variant: "card-header"
    },
    {},
    {
      default: () => {
        return `Big Business Corp`;
      }
    }
  )}</div></div>
		<div class="${"tabs svelte-1wybam4"}"><div class="${"tab svelte-1wybam4"}"></div>
			<div class="${"tab svelte-1wybam4"}"></div>
			<div class="${"tab svelte-1wybam4"}"></div>
			<div class="${"tab svelte-1wybam4"}"></div></div></div>
	<div class="${"content svelte-1wybam4"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { BigBusinessCorp as B };
//# sourceMappingURL=BigBusinessCorp-6bf902ab.js.map
