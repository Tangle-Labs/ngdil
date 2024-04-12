import { c as create_ssr_component, d as add_attribute } from './ssr-b8a31716.js';

/* empty css                                 */
const css = {
  code: "@keyframes svelte-v96tiz-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loading.svelte-v96tiz{aspect-ratio:1/1;animation:3s infinite svelte-v96tiz-loading}",
  map: '{"version":3,"file":"Loading.svelte","sources":["Loading.svelte"],"sourcesContent":["<style lang=\\"scss\\">@keyframes loading {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.loading {\\n  aspect-ratio: 1/1;\\n  animation: 3s infinite loading;\\n}</style>\\n\\n<script lang=\\"ts\\">export let img = \\"/imgs/loading.png\\";\\nexport let size = \\"50px\\";\\n<\/script>\\n\\n<img src=\\"{img}\\" alt=\\"\\" style=\\"{`height: ${size};`}\\" class=\\"loading\\" />\\n"],"names":[],"mappings":"AAAmB,WAAW,qBAAQ,CACpC,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF,CACA,sBAAS,CACP,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,SAAS,CAAE,EAAE,CAAC,QAAQ,CAAC,qBACzB"}'
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img = "/imgs/loading.png" } = $$props;
  let { size = "50px" } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<img${add_attribute("src", img, 0)} alt=""${add_attribute("style", `height: ${size};`, 0)} class="loading svelte-v96tiz">`;
});

export { Loading as L };
//# sourceMappingURL=Loading-dcdfe046.js.map
