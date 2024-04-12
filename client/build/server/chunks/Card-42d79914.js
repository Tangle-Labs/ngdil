import { c as create_ssr_component, e as escape, b as null_to_empty, j as add_styles } from './index2-d11f8066.js';

/* empty css                                  */const css = {
  code: ".card.svelte-2gw3my.svelte-2gw3my{box-shadow:0px 8px 28px rgba(20, 20, 43, 0.1);background:white;padding:15px;overflow:hidden}.card.svelte-2gw3my>.svelte-2gw3my{border-radius:10px}.with-border.svelte-2gw3my.svelte-2gw3my{border:1px solid var(--black-900)}.without-padding.svelte-2gw3my.svelte-2gw3my{padding:0}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  let { borderRadius = 0 } = $$props;
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0)
    $$bindings.withoutPadding(withoutPadding);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`card ${withBorder && "with-border"} ${withoutPadding && "without-padding"}`), true) + " svelte-2gw3my"}"${add_styles({ "border-radius": `${borderRadius}px` })}>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Card as C };
//# sourceMappingURL=Card-42d79914.js.map
