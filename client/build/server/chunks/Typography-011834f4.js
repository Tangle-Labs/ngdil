import { c as create_ssr_component, e as escape, b as null_to_empty, d as add_attribute } from './index2-d11f8066.js';

/* empty css                                          */const css = {
  code: ".main-font.svelte-1yfqemy{font-family:var(--header-font)}.kw1c-font.svelte-1yfqemy{font-family:var(--kw1c-font) !important}.typography.svelte-1yfqemy{color:var(--black-900);line-height:130%}.heading.svelte-1yfqemy{font-size:var(--header-text-size);font-weight:500}.kw1c-impact.svelte-1yfqemy{font-size:20px;font-family:var(--kw1c-font) !important;font-weight:500}.kw1c-header.svelte-1yfqemy{font-size:1.625rem;font-weight:500}.kw1c-sub-text.svelte-1yfqemy{font-size:14px;font-weight:500}.card-header.svelte-1yfqemy{font-size:var(--card-header-size);font-weight:500}.status.svelte-1yfqemy{font-size:var(--status-text-size);color:var(--green-900);font-weight:600}.button.svelte-1yfqemy{font-size:var(--button-text-size);font-weight:600}.list.svelte-1yfqemy{font-size:var(--list-text-size);color:var(--black-700);font-weight:500}.body.svelte-1yfqemy{font-size:var(--body-text-size);color:var(--black-700);font-weight:300}.sub-text.svelte-1yfqemy{font-size:var(--sub-text-size);color:var(--black-500);font-weight:300}",
  map: null
};
const Typography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "body" } = $$props;
  let { fontVariant = "main" } = $$props;
  let { color = "" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.fontVariant === void 0 && $$bindings.fontVariant && fontVariant !== void 0)
    $$bindings.fontVariant(fontVariant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<span class="${escape(null_to_empty(`typography ${variant} ${fontVariant}-font`), true) + " svelte-1yfqemy"}"${add_attribute("style", color && `color: var(${color});`, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});

export { Typography as T };
//# sourceMappingURL=Typography-011834f4.js.map
