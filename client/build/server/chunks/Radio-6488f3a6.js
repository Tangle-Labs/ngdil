import { c as create_ssr_component, e as escape, b as null_to_empty } from './ssr-b8a31716.js';

/* empty css                                 */
const css = {
  code: ".radio.svelte-hdkx2l.svelte-hdkx2l{width:20px;aspect-ratio:1/1;background:var(--white-300);border:2px solid var(--black-300);border-radius:30px;box-sizing:border-box}.radio.svelte-hdkx2l.svelte-hdkx2l:hover{cursor:pointer}.radio.svelte-hdkx2l>.checked.svelte-hdkx2l{width:13px;aspect-ratio:1/1;box-sizing:border-box;border-radius:10px;margin:1.5px;transition:all 0.4s}.radio.svelte-hdkx2l>.checked.active.svelte-hdkx2l{background-color:var(--kw1c-blue-900)}",
  map: '{"version":3,"file":"Radio.svelte","sources":["Radio.svelte"],"sourcesContent":["<style lang=\\"scss\\">.radio {\\n  width: 20px;\\n  aspect-ratio: 1/1;\\n  background: var(--white-300);\\n  border: 2px solid var(--black-300);\\n  border-radius: 30px;\\n  box-sizing: border-box;\\n}\\n.radio:hover {\\n  cursor: pointer;\\n}\\n.radio > .checked {\\n  width: 13px;\\n  aspect-ratio: 1/1;\\n  box-sizing: border-box;\\n  border-radius: 10px;\\n  margin: 1.5px;\\n  transition: all 0.4s;\\n}\\n.radio > .checked.active {\\n  background-color: var(--kw1c-blue-900);\\n}</style>\\n\\n<script lang=\\"ts\\">export let checked = false;\\nexport let onClick = () => {\\n    null;\\n};\\n<\/script>\\n\\n<div\\n\\tclass=\\"radio\\"\\n\\ton:click=\\"{() => {\\n\\t\\tchecked = !checked;\\n\\t\\tonClick();\\n\\t}}\\"\\n>\\n\\t<div class=\\"{`checked ${checked && \'active\'}`}\\"></div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,kCAAO,CACxB,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CAClC,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,UACd,CACA,kCAAM,MAAO,CACX,MAAM,CAAE,OACV,CACA,oBAAM,CAAG,sBAAS,CAChB,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,GAAG,CAAC,IAClB,CACA,oBAAM,CAAG,QAAQ,qBAAQ,CACvB,gBAAgB,CAAE,IAAI,eAAe,CACvC"}'
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
  return `<div class="radio svelte-hdkx2l"><div class="${escape(null_to_empty(`checked ${checked && "active"}`), true) + " svelte-hdkx2l"}"></div></div>`;
});

export { Radio as R };
//# sourceMappingURL=Radio-6488f3a6.js.map
