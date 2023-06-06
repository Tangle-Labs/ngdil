import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';

/* empty css                                     */const css = {
  code: ".container.svelte-1o24kvb.svelte-1o24kvb{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-1o24kvb .nav.svelte-1o24kvb{width:100%;padding:20px 40px;background:var(--white-300);display:flex;box-sizing:border-box;position:relative;justify-content:space-between;position:relative;align-items:center;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-1o24kvb .nav .logo.svelte-1o24kvb{display:flex;justify-content:center;align-items:center;align-content:center}.container.svelte-1o24kvb .nav .logo img.svelte-1o24kvb{height:50px;padding-right:5px}.container.svelte-1o24kvb .nav .tabs.svelte-1o24kvb{height:100%;width:50%;display:flex;justify-content:space-between;align-items:center;align-content:center}.container.svelte-1o24kvb .nav .tabs .tab.svelte-1o24kvb{height:15px;width:22%;background:var(--black-300);border-radius:30px}.container.svelte-1o24kvb .slot.svelte-1o24kvb{display:flex;justify-content:space-between;width:100%;height:100%;min-height:50vh;background:var(--future-tech-background)}.container.svelte-1o24kvb .slot .sidenav.svelte-1o24kvb{background:var(--future-tech-green);height:100%;width:20%;min-height:52vh;padding:20px 35px;box-sizing:border-box}.container.svelte-1o24kvb .slot .sidenav .menu-item.svelte-1o24kvb{width:100%;display:flex;align-items:center;align-content:center}.container.svelte-1o24kvb .slot .sidenav .menu-item .circle.svelte-1o24kvb{height:15px;aspect-ratio:1/1;background:var(--white-300);margin:15px 0;border-radius:10px}.container.svelte-1o24kvb .slot .sidenav .menu-item .rect.svelte-1o24kvb{margin:12px;height:15px;border-radius:10px;width:100%;background:var(--white-300)}.container.svelte-1o24kvb .slot .content.svelte-1o24kvb{min-height:50vh;position:relative;display:flex;padding:10px 0}.container.svelte-1o24kvb .slot .content .heading.svelte-1o24kvb{padding:10px 0}.container.svelte-1o24kvb .slot .content .cards.svelte-1o24kvb{display:flex;padding:10px 0;justify-content:space-between}.container.svelte-1o24kvb .slot .content .cards .future-tech-card.svelte-1o24kvb{width:73%}.container.svelte-1o24kvb .slot .content .cards .side-content.svelte-1o24kvb{width:25%;padding:20px 30px}.container.svelte-1o24kvb .slot .content .cards .side-content .rect.svelte-1o24kvb{width:100%;height:15px;background:var(--white-700);margin:30px 0;border-radius:20px}.container.svelte-1o24kvb .slot .content .card-area.svelte-1o24kvb{width:calc(100% - 40px)}.future-tech-card.svelte-1o24kvb.svelte-1o24kvb{background:#ffffff;padding:20px;height:100%;width:100%;box-sizing:border-box;box-shadow:0px 2px 6px rgba(41, 41, 47, 0.06)}",
  map: null
};
const FutureTech = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withSidebar = true } = $$props;
  let { header = "" } = $$props;
  if ($$props.withSidebar === void 0 && $$bindings.withSidebar && withSidebar !== void 0)
    $$bindings.withSidebar(withSidebar);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  $$result.css.add(css);
  return `<div class="${"container svelte-1o24kvb"}"><div class="${"nav svelte-1o24kvb"}"><div class="${"logo svelte-1o24kvb"}"><img src="${"/imgs/future-tech.png"}" alt="${""}" class="${"svelte-1o24kvb"}">
			<div class="${"text"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "heading",
      fontVariant: "kw1c",
      color: "--future-tech-green"
    },
    {},
    {
      default: () => {
        return `FUTURE TECH CO.
				`;
      }
    }
  )}</div></div>
		<div class="${"tabs svelte-1o24kvb"}"><div class="${"tab svelte-1o24kvb"}"></div>
			<div class="${"tab svelte-1o24kvb"}"></div>
			<div class="${"tab svelte-1o24kvb"}"></div>
			<div class="${"tab svelte-1o24kvb"}"></div></div></div>
	<div class="${"slot svelte-1o24kvb"}">${withSidebar ? `<div class="${"sidenav svelte-1o24kvb"}">${each(Array(5), (_) => {
    return `<div class="${"menu-item svelte-1o24kvb"}"><div class="${"circle svelte-1o24kvb"}"></div>
						<div class="${"rect svelte-1o24kvb"}"></div>
					</div>`;
  })}</div>` : ``}
		<div class="${"content svelte-1o24kvb"}"${add_attribute("style", `width: ${withSidebar ? 75 : 100}%;`, 0)}>${withSidebar ? `<div class="${"card-area svelte-1o24kvb"}"><div class="${"heading svelte-1o24kvb"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "card-header",
      color: "--future-tech-green",
      fontVariant: "kw1c"
    },
    {},
    {
      default: () => {
        return `${escape(header)}`;
      }
    }
  )}</div>
					<div class="${"cards svelte-1o24kvb"}"><div class="${"future-tech-card svelte-1o24kvb"}">${slots.default ? slots.default({}) : ``}</div>
						<div class="${"side-content future-tech-card svelte-1o24kvb"}">${each(Array(6), (_) => {
    return `<div class="${"rect svelte-1o24kvb"}"></div>`;
  })}</div></div></div>` : `${slots.default ? slots.default({}) : ``}`}</div></div></div>`;
});

export { FutureTech as F };
//# sourceMappingURL=FutureTech-c6047ff7.js.map
