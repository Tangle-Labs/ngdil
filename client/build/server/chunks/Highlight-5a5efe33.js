import { c as create_ssr_component } from './ssr-b8a31716.js';

/* empty css                                 */
const css = {
  code: ".highlight.svelte-hclyi0.svelte-hclyi0{position:relative}.highlight.svelte-hclyi0 .swoosh.svelte-hclyi0{position:absolute;top:0;left:0;width:100%;height:60px;z-index:-1}",
  map: '{"version":3,"file":"Highlight.svelte","sources":["Highlight.svelte"],"sourcesContent":["<style lang=\\"scss\\">.highlight {\\n  position: relative;\\n}\\n.highlight .swoosh {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 60px;\\n  z-index: -1;\\n}</style>\\n\\n<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { draw, fly } from \\"svelte/transition\\";\\nlet animate = false;\\nonMount(() => {\\n    animate = true;\\n});\\n<\/script>\\n\\n<span class=\\"highlight\\">\\n\\t<slot />\\n\\t{#if animate}\\n\\t\\t<img in:fly=\\"{{ duration: 1000, x: 10 }}\\" src=\\"/imgs/swoosh.svg\\" class=\\"swoosh\\" alt=\\"\\" />\\n\\t{/if}\\n</span>\\n"],"names":[],"mappings":"AAAmB,sCAAW,CAC5B,QAAQ,CAAE,QACZ,CACA,wBAAU,CAAC,qBAAQ,CACjB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EACX"}'
};
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span class="highlight svelte-hclyi0">${slots.default ? slots.default({}) : ``} ${``}</span>`;
});

export { Highlight as H };
//# sourceMappingURL=Highlight-5a5efe33.js.map
