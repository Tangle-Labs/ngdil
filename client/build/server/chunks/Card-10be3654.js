import { c as create_ssr_component, e as escape, b as null_to_empty } from './index-78a5ef04.js';

/* empty css                                     */const css = {
  code: ".card.svelte-1d77chw.svelte-1d77chw{box-shadow:0px 8px 28px rgba(20, 20, 43, 0.1);background:white;padding:15px;border-radius:10px}.card.svelte-1d77chw>.svelte-1d77chw{border-radius:10px}.with-border.svelte-1d77chw.svelte-1d77chw{border:1px solid var(--black-900)}.without-padding.svelte-1d77chw.svelte-1d77chw{padding:0}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0)
    $$bindings.withoutPadding(withoutPadding);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`card ${withBorder && "with-border"} ${withoutPadding && "without-padding"}`), true) + " svelte-1d77chw"}">${slots.default ? slots.default({}) : ``}</div>`;
});

export { Card as C };
//# sourceMappingURL=Card-10be3654.js.map
