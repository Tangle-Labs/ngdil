import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';

const css = {
  code: ".desktop-view.svelte-ndeax1.svelte-ndeax1{display:block}@media screen and (max-width: 1000px){.desktop-view.svelte-ndeax1.svelte-ndeax1{display:none}}.mobile-view.svelte-ndeax1.svelte-ndeax1{display:none}@media screen and (max-width: 1000px){.mobile-view.svelte-ndeax1.svelte-ndeax1{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh}.mobile-view.svelte-ndeax1 .body.svelte-ndeax1{padding:30px;padding-top:40px;padding-bottom:40px;text-align:center}}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<style lang=\\"scss\\">.desktop-view {\\n  display: block;\\n}\\n@media screen and (max-width: 1000px) {\\n  .desktop-view {\\n    display: none;\\n  }\\n}\\n\\n.mobile-view {\\n  display: none;\\n}\\n@media screen and (max-width: 1000px) {\\n  .mobile-view {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    min-height: 100vh;\\n  }\\n  .mobile-view .body {\\n    padding: 30px;\\n    padding-top: 40px;\\n    padding-bottom: 40px;\\n    text-align: center;\\n  }\\n}</style>\\n\\n<script>\\n\\timport Typography from \\"$lib/components/ui/Typography/Typography.svelte\\";\\n\\timport { _ } from \\"svelte-i18n\\";\\n<\/script>\\n\\n<div class=\\"desktop-view\\">\\n\\t<slot />\\n</div>\\n\\n<div class=\\"mobile-view\\">\\n\\t<img class=\\"logo\\" src=\\"/imgs/ngdil.svg\\" alt=\\"\\" />\\n\\t<div class=\\"body\\">\\n\\t\\t<Typography>{$_(\\"components.small_screen\\")}</Typography>\\n\\t</div>\\n\\t<a href=\\"https://ngdil.com\\">\\n\\t\\t<Typography variant=\\"button\\">{$_(\\"components.go_back_to_ngdil\\")}</Typography></a\\n\\t>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yCAAc,CAC/B,OAAO,CAAE,KACX,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACpC,yCAAc,CACZ,OAAO,CAAE,IACX,CACF,CAEA,wCAAa,CACX,OAAO,CAAE,IACX,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACpC,wCAAa,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KACd,CACA,0BAAY,CAAC,mBAAM,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,MACd,CACF"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="desktop-view svelte-ndeax1">${slots.default ? slots.default({}) : ``}</div> <div class="mobile-view svelte-ndeax1"><img class="logo" src="/imgs/ngdil.svg" alt=""> <div class="body svelte-ndeax1">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("components.small_screen"))}`;
    }
  })}</div> <a href="https://ngdil.com">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `${escape($_("components.go_back_to_ngdil"))}`;
    }
  })}</a></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DrqCxg75.js.map
