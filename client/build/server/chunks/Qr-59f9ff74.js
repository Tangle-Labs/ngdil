import { c as create_ssr_component } from './index2-d11f8066.js';

/* empty css                                  */const css = {
  code: ".qr.svelte-1dafya1{padding:10px 0}",
  map: null
};
const Qr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { logo = "/imgs/tl-logo.png" } = $$props;
  let { size = 220 } = $$props;
  let { bgColor = "#ffffff" } = $$props;
  let { fgColor = "#3d3d3d" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.fgColor === void 0 && $$bindings.fgColor && fgColor !== void 0)
    $$bindings.fgColor(fgColor);
  $$result.css.add(css);
  return `<div class="${"qr svelte-1dafya1"}"><div></div></div>`;
});

export { Qr as Q };
//# sourceMappingURL=Qr-59f9ff74.js.map
