import { c as create_ssr_component } from './ssr-b8a31716.js';

/* empty css                                 */
const css = {
  code: ".qr.svelte-1dafya1{padding:10px 0}",
  map: '{"version":3,"file":"Qr.svelte","sources":["Qr.svelte"],"sourcesContent":["<style>\\n\\t.qr {\\n\\t\\tpadding: 10px 0;\\n\\t}\\n</style>\\n\\n<script lang=\\"ts\\">import { qrcode } from \\"svelte-qrcode-action\\";\\nexport let data;\\nexport let logo = \\"/imgs/tl-logo.png\\";\\nexport let size = 220;\\nexport let bgColor = \\"#ffffff\\";\\nexport let fgColor = \\"#3d3d3d\\";\\nlet options = {\\n    data,\\n    width: size,\\n    height: size,\\n    margin: 0,\\n    type: \\"svg\\",\\n    qrOptions: {\\n        errorCorrectionLevel: \\"M\\"\\n    },\\n    dotsOptions: {\\n        color: fgColor,\\n        type: \\"classy-rounded\\"\\n    },\\n    backgroundOptions: {\\n        color: bgColor\\n    }\\n};\\n<\/script>\\n\\n<div class=\\"qr\\">\\n\\t<div use:qrcode=\\"{options}\\"></div>\\n</div>\\n"],"names":[],"mappings":"AACC,kBAAI,CACH,OAAO,CAAE,IAAI,CAAC,CACf"}'
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
  return `<div class="qr svelte-1dafya1"><div></div></div>`;
});

export { Qr as Q };
//# sourceMappingURL=Qr-fe109a8a.js.map
