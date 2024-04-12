import { c as create_ssr_component, e as escape, b as null_to_empty, v as validate_component } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';

/* empty css                                  */const css = {
  code: ".button.svelte-104uyc6{padding:8px 32px;border:0;transition:all 0.5s;border-radius:5px;outline:none;text-transform:capitalize;box-shadow:var(--box-shadow);border:solid 1px var(--black-900)}.button.svelte-104uyc6:hover{cursor:pointer}.button.future-tech.svelte-104uyc6{box-shadow:unset;border:unset;background:var(--future-tech-green-300);border-radius:0}.button.future-tech.svelte-104uyc6:hover{background:--future-tech-green-300}.button.future-tech-disabled.svelte-104uyc6{background:var(--white-900);box-shadow:unset;border:unset;border-radius:0}.button.future-tech-disabled.svelte-104uyc6:hover{cursor:unset}.button.primary.svelte-104uyc6{background:var(--primary-900)}.button.primary.svelte-104uyc6:hover{background:var(--primary-700)}.button.kw1c.svelte-104uyc6{background:var(--kw1c-red-900);width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;transition:0.5s all;border:none;box-shadow:unset}.button.kw1c.svelte-104uyc6:hover{cursor:pointer;background:var(--red-700)}.button.completed.svelte-104uyc6{background:var(--green-900)}.button.completed.svelte-104uyc6:hover{background:var(--green-700)}.button.disabled.svelte-104uyc6{background:var(--white-300)}.button.disabled.svelte-104uyc6:hover{cursor:unset}.button.secondary.svelte-104uyc6{background:var(--secondary-900)}.button.secondary.svelte-104uyc6:hover{background:var(--secondary-700)}.button.white.svelte-104uyc6{background:var(--white-300)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "primary" } = $$props;
  let { label } = $$props;
  let { onClick } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(`button ${variant}`), true) + " svelte-104uyc6"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: ["kw1c"].includes(variant) ? "kw1c-impact" : "button",
      fontVariant: ["future-tech", "future-tech-disabled"].includes(variant) ? "kw1c" : "main",
      color: ["primary", "future-tech", "future-tech-disabled", "kw1c"].includes(variant) ? "--white-300" : ""
    },
    {},
    {
      default: () => {
        return `${escape(label)}`;
      }
    }
  )}</button>`;
});

export { Button as B };
//# sourceMappingURL=Button-925970aa.js.map
