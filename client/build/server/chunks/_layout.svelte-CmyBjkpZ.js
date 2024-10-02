import { c as create_ssr_component, v as validate_component, b as subscribe, h as each, f as add_attribute, e as escape } from './ssr-DGHpauN6.js';
import { a as $locale, b as $locales } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import './flows.store-Ch_DhNys.js';
import './axios.utils-CIq7LE2y.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';
import 'axios';

const css$1 = {
  code: ".lang-switch.svelte-7u42rb.svelte-7u42rb{margin:0 50px 50px 0;display:flex;justify-content:end}.lang-switch.svelte-7u42rb>.lang-select.svelte-7u42rb{display:flex;align-items:center}.lang-switch.svelte-7u42rb>.lang-select img.svelte-7u42rb{background:var(--white-500);padding:5px;border-top-left-radius:7px;border-bottom-left-radius:7px}.lang-switch.svelte-7u42rb>.lang-select select.svelte-7u42rb{background:var(--white-300);border:none;padding:5px;min-width:max-content;user-select:none;outline:none;width:90px}",
  map: '{"version":3,"file":"LangSwitchBtn.svelte","sources":["LangSwitchBtn.svelte"],"sourcesContent":["<style lang=\\"scss\\">.lang-switch {\\n  margin: 0 50px 50px 0;\\n  display: flex;\\n  justify-content: end;\\n}\\n.lang-switch > .lang-select {\\n  display: flex;\\n  align-items: center;\\n}\\n.lang-switch > .lang-select img {\\n  background: var(--white-500);\\n  padding: 5px;\\n  border-top-left-radius: 7px;\\n  border-bottom-left-radius: 7px;\\n}\\n.lang-switch > .lang-select select {\\n  background: var(--white-300);\\n  border: none;\\n  padding: 5px;\\n  min-width: max-content;\\n  user-select: none;\\n  outline: none;\\n  width: 90px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { Typography } from \\"..\\";\\nimport { _ } from \\"svelte-i18n\\";\\nimport { locale, locales } from \\"svelte-i18n\\";\\nconst langsMap = {\\n    en: \\"English\\",\\n    nl: \\"Nederlands\\"\\n};\\nonMount(() => {\\n    if ($locale?.includes(\\"-\\")) {\\n        locale.update((l) => l.split(\\"-\\")[0]);\\n    }\\n});\\n<\/script>\\n\\n<div class=\\"lang-switch\\">\\n\\t<div class=\\"lang-select\\">\\n\\t\\t<img src=\\"/imgs/lang.svg\\" alt=\\"\\" />\\n\\t\\t<select bind:value=\\"{$locale}\\">\\n\\t\\t\\t<option value=\\"\\" disabled>\\n\\t\\t\\t\\t<Typography variant=\\"button\\">Select Language</Typography>\\n\\t\\t\\t</option>\\n\\t\\t\\t{#each $locales as locale}\\n\\t\\t\\t\\t<option value=\\"{locale}\\">{langsMap[locale]}</option>\\n\\t\\t\\t{/each}\\n\\t\\t</select>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wCAAa,CAC9B,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,CACrB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,GACnB,CACA,0BAAY,CAAG,0BAAa,CAC1B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,0BAAY,CAAG,YAAY,CAAC,iBAAI,CAC9B,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,OAAO,CAAE,GAAG,CACZ,sBAAsB,CAAE,GAAG,CAC3B,yBAAyB,CAAE,GAC7B,CACA,0BAAY,CAAG,YAAY,CAAC,oBAAO,CACjC,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,WAAW,CACtB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IACT"}'
};
const LangSwitchBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_locale;
  let $locales$1, $$unsubscribe_locales;
  $$unsubscribe_locale = subscribe($locale, (value) => value);
  $$unsubscribe_locales = subscribe($locales, (value) => $locales$1 = value);
  const langsMap = { en: "English", nl: "Nederlands" };
  $$result.css.add(css$1);
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<div class="lang-switch svelte-7u42rb"><div class="lang-select svelte-7u42rb"><img src="/imgs/lang.svg" alt="" class="svelte-7u42rb"> <select class="svelte-7u42rb"><option value="" disabled>${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select Language`;
    }
  })} </option>${each($locales$1, (locale2) => {
    return `<option${add_attribute("value", locale2, 0)}>${escape(langsMap[locale2])}</option>`;
  })}</select></div></div>`;
});
const css = {
  code: ".lang-btn.svelte-19gof0m{position:fixed;bottom:10px;right:10px;z-index:10}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<style lang=\\"scss\\">.lang-btn {\\n  position: fixed;\\n  bottom: 10px;\\n  right: 10px;\\n  z-index: 10;\\n}</style>\\n\\n<script lang=\\"ts\\">import { LangSwitchBtn } from \\"$lib/components\\";\\nimport { sessionId } from \\"$lib/stores/flows.store\\";\\nimport { apiClient } from \\"$lib/utils/axios.utils\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(async () => {\\n    const { data } = await apiClient.get(\\"/api/session\\");\\n    sessionId.set(data.id);\\n});\\n<\/script>\\n\\n<div class=\\"lang-btn\\">\\n\\t<LangSwitchBtn />\\n</div>\\n<slot />\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAC3B,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,EACX"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="lang-btn svelte-19gof0m">${validate_component(LangSwitchBtn, "LangSwitchBtn").$$render($$result, {}, {}, {})}</div> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CmyBjkpZ.js.map
