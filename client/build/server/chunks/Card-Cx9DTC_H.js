import { c as create_ssr_component, e as escape, d as null_to_empty, i as add_styles } from './ssr-DGHpauN6.js';

/* empty css                                            */
const css = {
  code: ".card.svelte-2gw3my.svelte-2gw3my{box-shadow:0px 8px 28px rgba(20, 20, 43, 0.1);background:white;padding:15px;overflow:hidden}.card.svelte-2gw3my>.svelte-2gw3my{border-radius:10px}.with-border.svelte-2gw3my.svelte-2gw3my{border:1px solid var(--black-900)}.without-padding.svelte-2gw3my.svelte-2gw3my{padding:0}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<style lang=\\"scss\\">.card {\\n  box-shadow: 0px 8px 28px rgba(20, 20, 43, 0.1);\\n  background: white;\\n  padding: 15px;\\n  overflow: hidden;\\n}\\n.card > * {\\n  border-radius: 10px;\\n}\\n\\n.with-border {\\n  border: 1px solid var(--black-900);\\n}\\n\\n.without-padding {\\n  padding: 0;\\n}</style>\\n\\n<script lang=\\"ts\\">export let withBorder = false;\\nexport let withoutPadding = false;\\nexport let borderRadius = 0;\\n<\/script>\\n\\n<div\\n\\tstyle:border-radius=\\"{`${borderRadius}px`}\\"\\n\\tclass=\\"{`card ${withBorder && \'with-border\'} ${withoutPadding && \'without-padding\'}`}\\"\\n>\\n\\t<slot />\\n</div>\\n"],"names":[],"mappings":"AAAmB,iCAAM,CACvB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAC9C,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MACZ,CACA,mBAAK,CAAG,cAAE,CACR,aAAa,CAAE,IACjB,CAEA,wCAAa,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CACnC,CAEA,4CAAiB,CACf,OAAO,CAAE,CACX"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  let { borderRadius = 0 } = $$props;
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0) $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0) $$bindings.withoutPadding(withoutPadding);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0) $$bindings.borderRadius(borderRadius);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`card ${withBorder && "with-border"} ${withoutPadding && "without-padding"}`), true) + " svelte-2gw3my"}"${add_styles({ "border-radius": `${borderRadius}px` })}>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Card as C };
//# sourceMappingURL=Card-Cx9DTC_H.js.map
