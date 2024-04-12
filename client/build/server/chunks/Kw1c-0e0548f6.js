import { c as create_ssr_component, v as validate_component, e as escape } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';

const css$1 = {
  code: ".container.svelte-182pjz6.svelte-182pjz6{width:100%;background:var(--kw1c-blue-300);border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-182pjz6 .nav.svelte-182pjz6{width:100%;padding:10px 40px;background:var(--kw1c-blue-900);display:flex;position:relative}.container.svelte-182pjz6 .nav .logo.svelte-182pjz6{height:80px}.container.svelte-182pjz6 .nav .bottom-bar.svelte-182pjz6{width:60%;position:absolute;height:15px;background:var(--kw1c-red-900);bottom:0;left:20%;border-top-right-radius:12.5px;border-top-left-radius:12.5px;padding:10px;display:flex}.container.svelte-182pjz6 .nav .bottom-bar .white-rect.svelte-182pjz6{width:15%;height:100%;background:var(--white-300);border-radius:5px}.container.svelte-182pjz6 .nav .bottom-bar .translucent-rect.svelte-182pjz6{width:70%;background:var(--white-300);height:100%;margin-left:17%;border-radius:20px;opacity:0.2}.container.svelte-182pjz6 .nav .bottom-bar .white-circle.svelte-182pjz6{width:15px;height:15px;border-radius:20px;background:var(--white-300);margin-left:10px}.container.svelte-182pjz6 .nav .links.svelte-182pjz6{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-left:30px;transform:translateY(-20px);width:calc(100% - 200px)}.container.svelte-182pjz6 .nav .links .tabs.svelte-182pjz6{display:flex;width:100%}.container.svelte-182pjz6 .nav .links .tabs .tab.svelte-182pjz6{height:15px;border-radius:4px;background:var(--white-300);margin-right:20px;width:13.5%}.container.svelte-182pjz6 .nav .links .login.svelte-182pjz6{width:20%;height:12px;border-radius:20px;background:var(--white-300);border:10px solid var(--kw1c-red-900)}.container.svelte-182pjz6 .content.svelte-182pjz6{min-height:50vh;position:relative}",
  map: null
};
const Kw1cBlue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-182pjz6"}"><div class="${"nav svelte-182pjz6"}"><img src="${"/imgs/kw1c-blue.png"}" alt="${""}" class="${"logo svelte-182pjz6"}">
		<div class="${"links svelte-182pjz6"}"><div class="${"tabs svelte-182pjz6"}"><div class="${"tab svelte-182pjz6"}"></div>
				<div class="${"tab svelte-182pjz6"}"></div>
				<div class="${"tab svelte-182pjz6"}"></div>
				<div class="${"tab svelte-182pjz6"}"></div>
				<div class="${"tab svelte-182pjz6"}"></div></div>
			<div class="${"login svelte-182pjz6"}"></div></div>
		<div class="${"bottom-bar svelte-182pjz6"}"><div class="${"white-rect svelte-182pjz6"}"></div>
			<div class="${"translucent-rect svelte-182pjz6"}"></div>
			<div class="${"white-circle svelte-182pjz6"}"></div></div></div>
	<div class="${"content svelte-182pjz6"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const css = {
  code: ".container.svelte-ebn1ok.svelte-ebn1ok{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-ebn1ok .nav.svelte-ebn1ok{width:100%;padding:10px 40px;background:var(--white-300);display:flex;position:relative;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-ebn1ok .nav .logo.svelte-ebn1ok{height:80px}.container.svelte-ebn1ok .nav .bottom-bar.svelte-ebn1ok{width:60%;position:absolute;height:15px;bottom:22px;left:175px;border-top-right-radius:12.5px;border-top-left-radius:12.5px;padding:10px;display:flex}.container.svelte-ebn1ok .nav .links.svelte-ebn1ok{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-left:30px;transform:translateY(-20px);width:calc(100% - 200px)}.container.svelte-ebn1ok .nav .links .tabs.svelte-ebn1ok{display:flex;width:100%}.container.svelte-ebn1ok .nav .links .tabs .tab.svelte-ebn1ok{height:15px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:20px;width:13.5%}.container.svelte-ebn1ok .nav .links .login.svelte-ebn1ok{width:20%;height:12px;border-radius:20px;background:var(--white-300);border:10px solid var(--kw1c-red-900)}.container.svelte-ebn1ok .content.svelte-ebn1ok{min-height:50vh;position:relative}.container.svelte-ebn1ok .content .division.svelte-ebn1ok{position:absolute;z-index:-1;height:35%;background:var(--kw1c-blue-300);width:100%}",
  map: null
};
const Kw1cWhite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="${"container svelte-ebn1ok"}"><div class="${"nav svelte-ebn1ok"}"><img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-ebn1ok"}">
		<div class="${"links svelte-ebn1ok"}"><div class="${"tabs svelte-ebn1ok"}"><div class="${"tab svelte-ebn1ok"}"></div>
				<div class="${"tab svelte-ebn1ok"}"></div>
				<div class="${"tab svelte-ebn1ok"}"></div>
				<div class="${"tab svelte-ebn1ok"}"></div>
				<div class="${"tab svelte-ebn1ok"}"></div></div>
			<div class="${"login svelte-ebn1ok"}"></div></div>
		<div class="${"bottom-bar svelte-ebn1ok"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-header",
      fontVariant: "kw1c",
      color: "--kw1c-red-900"
    },
    {},
    {
      default: () => {
        return `${escape(title)}`;
      }
    }
  )}</div></div>
	<div class="${"content svelte-ebn1ok"}"><div class="${"division svelte-ebn1ok"}"></div>
		${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Kw1c = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant } = $$props;
  let { title = "" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${variant === "blue" ? `${validate_component(Kw1cBlue, "Kw1cBlue").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${validate_component(Kw1cWhite, "Kw1cWhite").$$render($$result, { title }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}`;
});

export { Kw1c as K };
//# sourceMappingURL=Kw1c-0e0548f6.js.map
