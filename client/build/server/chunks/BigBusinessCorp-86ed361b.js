import { c as create_ssr_component, v as validate_component, e as escape } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';

/* empty css                                  */const css = {
  code: ".container.svelte-6vs0w.svelte-6vs0w{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-6vs0w .nav.svelte-6vs0w{width:100%;padding:20px 40px;background:var(--bbc-blue);display:flex;box-sizing:border-box;position:relative;justify-content:center;position:relative;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-6vs0w .nav .logo.svelte-6vs0w{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-6vs0w .nav .logo img.svelte-6vs0w{height:25px;padding-right:20px}.container.svelte-6vs0w .nav .logo .text.svelte-6vs0w{width:100%;text-align:center}.container.svelte-6vs0w .nav .tabs.svelte-6vs0w{position:absolute;width:calc(40% - 180px);height:10px;bottom:30px;right:40px;display:flex;justify-content:space-between}.container.svelte-6vs0w .nav .tabs .tab.svelte-6vs0w{width:22%;height:100%;background:var(--black-500);border-radius:10px}.container.svelte-6vs0w .heading.svelte-6vs0w{width:100%;text-align:center;padding-top:30px}.container.svelte-6vs0w .content.svelte-6vs0w{min-height:50vh;background:var(--bbc-background);position:relative}",
  map: null
};
const BigBusinessCorp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="${"container svelte-6vs0w"}"><div class="${"nav svelte-6vs0w"}"><div class="${"logo svelte-6vs0w"}"><img src="${"/imgs/bbc.png"}" alt="${""}" class="${"svelte-6vs0w"}">
			<div class="${"text svelte-6vs0w"}">${validate_component(Typography, "Typography").$$render(
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
		<div class="${"tabs svelte-6vs0w"}"><div class="${"tab svelte-6vs0w"}"></div>
			<div class="${"tab svelte-6vs0w"}"></div>
			<div class="${"tab svelte-6vs0w"}"></div>
			<div class="${"tab svelte-6vs0w"}"></div></div></div>
	<div class="${"content svelte-6vs0w"}">${heading ? `<div class="${"heading svelte-6vs0w"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-header",
      color: "--bbc-blue"
    },
    {},
    {
      default: () => {
        return `${escape(heading)}`;
      }
    }
  )}</div>` : ``}
		${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { BigBusinessCorp as B };
//# sourceMappingURL=BigBusinessCorp-86ed361b.js.map
