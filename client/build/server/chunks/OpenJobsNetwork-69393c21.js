import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';

/* empty css                                     */const css = {
  code: ".container.svelte-11vx7vl.svelte-11vx7vl{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-11vx7vl .nav.svelte-11vx7vl{width:100%;padding:20px 40px;background:var(--white-300);display:flex;box-sizing:border-box;position:relative;justify-content:space-between;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-11vx7vl .nav .logo.svelte-11vx7vl{height:60px;display:flex;align-items:center}.container.svelte-11vx7vl .nav .logo img.svelte-11vx7vl{height:60px;padding-right:20px}.container.svelte-11vx7vl .nav .tabs.svelte-11vx7vl{display:flex}.container.svelte-11vx7vl .nav .tabs .tab.svelte-11vx7vl{display:flex;flex-wrap:wrap;width:90px;justify-content:center;align-items:center;align-content:center}.container.svelte-11vx7vl .nav .tabs .tab .square.svelte-11vx7vl{height:30px;width:30px;border-radius:5px;background:var(--black-500)}.container.svelte-11vx7vl .nav .tabs .tab .bar.svelte-11vx7vl{height:12px;width:70px;background:var(--black-300);border-radius:10px;margin-top:5px}.container.svelte-11vx7vl .content.svelte-11vx7vl{min-height:50vh;position:relative}",
  map: null
};
const OpenJobsNetwork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-11vx7vl"}"><div class="${"nav svelte-11vx7vl"}"><div class="${"logo svelte-11vx7vl"}"><img src="${"/imgs/openjobs.png"}" alt="${""}" class="${"svelte-11vx7vl"}">
			${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "card-header",
      color: "--bbc-blue"
    },
    {},
    {
      default: () => {
        return `The Open Jobs Network`;
      }
    }
  )}</div>
		<div class="${"tabs svelte-11vx7vl"}"><div class="${"tab svelte-11vx7vl"}"><div class="${"square svelte-11vx7vl"}"></div>
				<div class="${"bar svelte-11vx7vl"}"></div></div>
			<div class="${"tab svelte-11vx7vl"}"><div class="${"square svelte-11vx7vl"}"></div>
				<div class="${"bar svelte-11vx7vl"}"></div></div>
			<div class="${"tab svelte-11vx7vl"}"><div class="${"square svelte-11vx7vl"}"></div>
				<div class="${"bar svelte-11vx7vl"}"></div></div>
			<div class="${"tab svelte-11vx7vl"}"><div class="${"square svelte-11vx7vl"}"></div>
				<div class="${"bar svelte-11vx7vl"}"></div></div>
			<div class="${"tab svelte-11vx7vl"}"><div class="${"square svelte-11vx7vl"}"></div>
				<div class="${"bar svelte-11vx7vl"}"></div></div></div></div>
	<div class="${"content svelte-11vx7vl"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { OpenJobsNetwork as O };
//# sourceMappingURL=OpenJobsNetwork-69393c21.js.map
