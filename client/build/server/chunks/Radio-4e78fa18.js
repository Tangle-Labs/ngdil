import { c as create_ssr_component, e as escape, b as null_to_empty } from './index-78a5ef04.js';

/* empty css                                     */const css = {
  code: ".radio.svelte-hdkx2l.svelte-hdkx2l{width:20px;aspect-ratio:1/1;background:var(--white-300);border:2px solid var(--black-300);border-radius:30px;box-sizing:border-box}.radio.svelte-hdkx2l.svelte-hdkx2l:hover{cursor:pointer}.radio.svelte-hdkx2l>.checked.svelte-hdkx2l{width:13px;aspect-ratio:1/1;box-sizing:border-box;border-radius:10px;margin:1.5px;transition:all 0.4s}.radio.svelte-hdkx2l>.checked.active.svelte-hdkx2l{background-color:var(--kw1c-blue-900)}",
  map: null
};
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `<div class="${"radio svelte-hdkx2l"}"><div class="${escape(null_to_empty(`checked ${checked && "active"}`), true) + " svelte-hdkx2l"}"></div></div>`;
});

export { Radio as R };
//# sourceMappingURL=Radio-4e78fa18.js.map
