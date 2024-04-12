import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { T as Typography } from './Typography-5ee1c822.js';

const css = {
  code: ".desktop-view.svelte-ndeax1.svelte-ndeax1{display:block}@media screen and (max-width: 1000px){.desktop-view.svelte-ndeax1.svelte-ndeax1{display:none}}.mobile-view.svelte-ndeax1.svelte-ndeax1{display:none}@media screen and (max-width: 1000px){.mobile-view.svelte-ndeax1.svelte-ndeax1{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh}.mobile-view.svelte-ndeax1 .body.svelte-ndeax1{padding:30px;padding-top:40px;padding-bottom:40px;text-align:center}}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<style lang=\\"scss\\">.desktop-view {\\n  display: block;\\n}\\n@media screen and (max-width: 1000px) {\\n  .desktop-view {\\n    display: none;\\n  }\\n}\\n\\n.mobile-view {\\n  display: none;\\n}\\n@media screen and (max-width: 1000px) {\\n  .mobile-view {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    min-height: 100vh;\\n  }\\n  .mobile-view .body {\\n    padding: 30px;\\n    padding-top: 40px;\\n    padding-bottom: 40px;\\n    text-align: center;\\n  }\\n}</style>\\n\\n<script>\\n\\timport Typography from \\"$lib/components/ui/Typography/Typography.svelte\\";\\n<\/script>\\n\\n<div class=\\"desktop-view\\">\\n\\t<slot />\\n</div>\\n<div class=\\"mobile-view\\">\\n\\t<img class=\\"logo\\" src=\\"/imgs/ngdil.svg\\" alt=\\"\\" />\\n\\t<div class=\\"body\\">\\n\\t\\t<Typography\\n\\t\\t\\t>This demo is best experienced on a bigger screen, please visit on a desktop or a tablet.</Typography>\\n\\t</div>\\n\\n\\t<a href=\\"https://ngdil.com\\"> <Typography variant=\\"button\\">Go Back to NGDIL</Typography></a>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yCAAc,CAC/B,OAAO,CAAE,KACX,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACpC,yCAAc,CACZ,OAAO,CAAE,IACX,CACF,CAEA,wCAAa,CACX,OAAO,CAAE,IACX,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACpC,wCAAa,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KACd,CACA,0BAAY,CAAC,mBAAM,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,MACd,CACF"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="desktop-view svelte-ndeax1">${slots.default ? slots.default({}) : ``}</div> <div class="mobile-view svelte-ndeax1"><img class="logo" src="/imgs/ngdil.svg" alt=""> <div class="body svelte-ndeax1">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `This demo is best experienced on a bigger screen, please visit on a desktop or a tablet.`;
    }
  })}</div> <a href="https://ngdil.com">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Go Back to NGDIL`;
    }
  })}</a></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d8fb41eb.js.map
