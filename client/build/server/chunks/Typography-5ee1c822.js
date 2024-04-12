import { c as create_ssr_component, e as escape, b as null_to_empty, d as add_attribute } from './ssr-b8a31716.js';

/* empty css                                         */
const css = {
  code: ".main-font.svelte-1yfqemy{font-family:var(--header-font)}.kw1c-font.svelte-1yfqemy{font-family:var(--kw1c-font) !important}.typography.svelte-1yfqemy{color:var(--black-900);line-height:130%}.heading.svelte-1yfqemy{font-size:var(--header-text-size);font-weight:500}.kw1c-impact.svelte-1yfqemy{font-size:20px;font-family:var(--kw1c-font) !important;font-weight:500}.kw1c-header.svelte-1yfqemy{font-size:1.625rem;font-weight:500}.kw1c-sub-text.svelte-1yfqemy{font-size:14px;font-weight:500}.card-header.svelte-1yfqemy{font-size:var(--card-header-size);font-weight:500}.status.svelte-1yfqemy{font-size:var(--status-text-size);color:var(--green-900);font-weight:600}.button.svelte-1yfqemy{font-size:var(--button-text-size);font-weight:600}.list.svelte-1yfqemy{font-size:var(--list-text-size);color:var(--black-700);font-weight:500}.body.svelte-1yfqemy{font-size:var(--body-text-size);color:var(--black-700);font-weight:300}.sub-text.svelte-1yfqemy{font-size:var(--sub-text-size);color:var(--black-500);font-weight:300}",
  map: '{"version":3,"file":"Typography.svelte","sources":["Typography.svelte"],"sourcesContent":["<style lang=\\"scss\\">.main-font {\\n  font-family: var(--header-font);\\n}\\n\\n.kw1c-font {\\n  font-family: var(--kw1c-font) !important;\\n}\\n\\n.typography {\\n  color: var(--black-900);\\n  line-height: 130%;\\n}\\n\\n.heading {\\n  font-size: var(--header-text-size);\\n  font-weight: 500;\\n}\\n\\n.kw1c-impact {\\n  font-size: 20px;\\n  font-family: var(--kw1c-font) !important;\\n  font-weight: 500;\\n}\\n\\n.kw1c-header {\\n  font-size: 1.625rem;\\n  font-weight: 500;\\n}\\n\\n.kw1c-sub-text {\\n  font-size: 14px;\\n  font-weight: 500;\\n}\\n\\n.card-header {\\n  font-size: var(--card-header-size);\\n  font-weight: 500;\\n}\\n\\n.status {\\n  font-size: var(--status-text-size);\\n  color: var(--green-900);\\n  font-weight: 600;\\n}\\n\\n.button {\\n  font-size: var(--button-text-size);\\n  font-weight: 600;\\n}\\n\\n.list {\\n  font-size: var(--list-text-size);\\n  color: var(--black-700);\\n  font-weight: 500;\\n}\\n\\n.body {\\n  font-size: var(--body-text-size);\\n  color: var(--black-700);\\n  font-weight: 300;\\n}\\n\\n.sub-text {\\n  font-size: var(--sub-text-size);\\n  color: var(--black-500);\\n  font-weight: 300;\\n}</style>\\n\\n<script lang=\\"ts\\">export let variant = \\"body\\";\\nexport let fontVariant = \\"main\\";\\nexport let color = \\"\\";\\n<\/script>\\n\\n<span\\n\\tclass=\\"{`typography ${variant} ${fontVariant}-font`}\\"\\n\\tstyle=\\"{color && `color: var(${color});`}\\"><slot /></span\\n>\\n"],"names":[],"mappings":"AAAmB,yBAAW,CAC5B,WAAW,CAAE,IAAI,aAAa,CAChC,CAEA,yBAAW,CACT,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,UAChC,CAEA,0BAAY,CACV,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,IACf,CAEA,uBAAS,CACP,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,WAAW,CAAE,GACf,CAEA,2BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,UAAU,CACxC,WAAW,CAAE,GACf,CAEA,2BAAa,CACX,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GACf,CAEA,6BAAe,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CAEA,2BAAa,CACX,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,WAAW,CAAE,GACf,CAEA,sBAAQ,CACN,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CAEA,sBAAQ,CACN,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,WAAW,CAAE,GACf,CAEA,oBAAM,CACJ,SAAS,CAAE,IAAI,gBAAgB,CAAC,CAChC,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CAEA,oBAAM,CACJ,SAAS,CAAE,IAAI,gBAAgB,CAAC,CAChC,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf,CAEA,wBAAU,CACR,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GACf"}'
};
const Typography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "body" } = $$props;
  let { fontVariant = "main" } = $$props;
  let { color = "" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.fontVariant === void 0 && $$bindings.fontVariant && fontVariant !== void 0)
    $$bindings.fontVariant(fontVariant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css);
  return `<span class="${escape(null_to_empty(`typography ${variant} ${fontVariant}-font`), true) + " svelte-1yfqemy"}"${add_attribute("style", color && `color: var(${color});`, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});

export { Typography as T };
//# sourceMappingURL=Typography-5ee1c822.js.map
