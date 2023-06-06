import { c as create_ssr_component, d as add_attribute } from './index-78a5ef04.js';

/* empty css                                     */const css = {
  code: "@keyframes svelte-v96tiz-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loading.svelte-v96tiz{aspect-ratio:1/1;animation:3s infinite svelte-v96tiz-loading}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "/imgs/loading.png" } = $$props;
  let { size = "50px" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<img${add_attribute("src", img, 0)} alt="${""}"${add_attribute("style", `height: ${size};`, 0)} class="${"loading svelte-v96tiz"}">`;
});

export { Loading as L };
//# sourceMappingURL=Loading-d6042c7f.js.map
