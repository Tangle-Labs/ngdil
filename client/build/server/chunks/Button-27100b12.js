import { c as create_ssr_component, e as escape, b as null_to_empty, v as validate_component } from './ssr-b8a31716.js';
import { T as Typography } from './Typography-5ee1c822.js';

/* empty css                                 */
const css = {
  code: ".button.svelte-104uyc6{padding:8px 32px;border:0;transition:all 0.5s;border-radius:5px;outline:none;text-transform:capitalize;box-shadow:var(--box-shadow);border:solid 1px var(--black-900)}.button.svelte-104uyc6:hover{cursor:pointer}.button.future-tech.svelte-104uyc6{box-shadow:unset;border:unset;background:var(--future-tech-green-300);border-radius:0}.button.future-tech.svelte-104uyc6:hover{background:--future-tech-green-300}.button.future-tech-disabled.svelte-104uyc6{background:var(--white-900);box-shadow:unset;border:unset;border-radius:0}.button.future-tech-disabled.svelte-104uyc6:hover{cursor:unset}.button.primary.svelte-104uyc6{background:var(--primary-900)}.button.primary.svelte-104uyc6:hover{background:var(--primary-700)}.button.kw1c.svelte-104uyc6{background:var(--kw1c-red-900);width:calc(100% - 40px);box-sizing:border-box;border-radius:40px;padding:12px;transition:0.5s all;border:none;box-shadow:unset}.button.kw1c.svelte-104uyc6:hover{cursor:pointer;background:var(--red-700)}.button.completed.svelte-104uyc6{background:var(--green-900)}.button.completed.svelte-104uyc6:hover{background:var(--green-700)}.button.disabled.svelte-104uyc6{background:var(--white-300)}.button.disabled.svelte-104uyc6:hover{cursor:unset}.button.secondary.svelte-104uyc6{background:var(--secondary-900)}.button.secondary.svelte-104uyc6:hover{background:var(--secondary-700)}.button.white.svelte-104uyc6{background:var(--white-300)}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<style lang=\\"scss\\">.button {\\n  padding: 8px 32px;\\n  border: 0;\\n  transition: all 0.5s;\\n  border-radius: 5px;\\n  outline: none;\\n  text-transform: capitalize;\\n  box-shadow: var(--box-shadow);\\n  border: solid 1px var(--black-900);\\n}\\n.button:hover {\\n  cursor: pointer;\\n}\\n.button.future-tech {\\n  box-shadow: unset;\\n  border: unset;\\n  background: var(--future-tech-green-300);\\n  border-radius: 0;\\n}\\n.button.future-tech:hover {\\n  background: --future-tech-green-300;\\n}\\n.button.future-tech-disabled {\\n  background: var(--white-900);\\n  box-shadow: unset;\\n  border: unset;\\n  border-radius: 0;\\n}\\n.button.future-tech-disabled:hover {\\n  cursor: unset;\\n}\\n.button.primary {\\n  background: var(--primary-900);\\n}\\n.button.primary:hover {\\n  background: var(--primary-700);\\n}\\n.button.kw1c {\\n  background: var(--kw1c-red-900);\\n  width: calc(100% - 40px);\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  transition: 0.5s all;\\n  border: none;\\n  box-shadow: unset;\\n}\\n.button.kw1c:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}\\n.button.completed {\\n  background: var(--green-900);\\n}\\n.button.completed:hover {\\n  background: var(--green-700);\\n}\\n.button.disabled {\\n  background: var(--white-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n}\\n.button.secondary {\\n  background: var(--secondary-900);\\n}\\n.button.secondary:hover {\\n  background: var(--secondary-700);\\n}\\n.button.white {\\n  background: var(--white-300);\\n}</style>\\n\\n<script lang=\\"ts\\">export let variant = \\"primary\\";\\nimport Typography from \\"../Typography/Typography.svelte\\";\\nexport let label;\\nexport let onClick;\\n<\/script>\\n\\n<button class=\\"{\`button \${variant}\`}\\" on:click=\\"{onClick}\\">\\n\\t<Typography\\n\\t\\tvariant=\\"{['kw1c'].includes(variant) ? 'kw1c-impact' : 'button'}\\"\\n\\t\\tfontVariant=\\"{['future-tech', 'future-tech-disabled'].includes(variant) ? 'kw1c' : 'main'}\\"\\n\\t\\tcolor=\\"{['primary', 'future-tech', 'future-tech-disabled', 'kw1c'].includes(variant)\\n\\t\\t\\t? '--white-300'\\n\\t\\t\\t: ''}\\">{label}</Typography\\n\\t>\\n</button>\\n"],"names":[],"mappings":"AAAmB,sBAAQ,CACzB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,UAAU,CAC1B,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,WAAW,CACnC,CACA,sBAAO,MAAO,CACZ,MAAM,CAAE,OACV,CACA,OAAO,2BAAa,CAClB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,uBAAuB,CAAC,CACxC,aAAa,CAAE,CACjB,CACA,OAAO,2BAAY,MAAO,CACxB,UAAU,CAAE,uBACd,CACA,OAAO,oCAAsB,CAC3B,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,CACjB,CACA,OAAO,oCAAqB,MAAO,CACjC,MAAM,CAAE,KACV,CACA,OAAO,uBAAS,CACd,UAAU,CAAE,IAAI,aAAa,CAC/B,CACA,OAAO,uBAAQ,MAAO,CACpB,UAAU,CAAE,IAAI,aAAa,CAC/B,CACA,OAAO,oBAAM,CACX,UAAU,CAAE,IAAI,cAAc,CAAC,CAC/B,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAAC,GAAG,CACpB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,OAAO,oBAAK,MAAO,CACjB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,SAAS,CAC3B,CACA,OAAO,yBAAW,CAChB,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,OAAO,yBAAU,MAAO,CACtB,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,OAAO,wBAAU,CACf,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,OAAO,wBAAS,MAAO,CACrB,MAAM,CAAE,KACV,CACA,OAAO,yBAAW,CAChB,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,OAAO,yBAAU,MAAO,CACtB,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,OAAO,qBAAO,CACZ,UAAU,CAAE,IAAI,WAAW,CAC7B"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "primary" } = $$props;
  let { label } = $$props;
  let { onClick } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(`button ${variant}`), true) + " svelte-104uyc6"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: ["kw1c"].includes(variant) ? "kw1c-impact" : "button",
      fontVariant: ["future-tech", "future-tech-disabled"].includes(variant) ? "kw1c" : "main",
      color: ["primary", "future-tech", "future-tech-disabled", "kw1c"].includes(variant) ? "--white-300" : ""
    },
    {},
    {
      default: () => {
        return `${escape(label)}`;
      }
    }
  )}</button>`;
});

export { Button as B };
//# sourceMappingURL=Button-27100b12.js.map
