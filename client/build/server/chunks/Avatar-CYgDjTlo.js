import { c as create_ssr_component, f as add_attribute, e as escape } from './ssr-DGHpauN6.js';

/* empty css                                            */
const css = {
  code: ".avatar.svelte-135hnrv{display:flex;width:fit-content;justify-content:center;align-items:center;border:1px solid black;border-radius:100px}.accompanying-text.svelte-135hnrv{font-family:var(--header-font);color:var(--header-text);font-weight:500;padding-left:10px;font-size:1.2rem;font-weight:600}.avatar-img.svelte-135hnrv{height:90px;width:90px;border-radius:45px;object-fit:cover}.large.svelte-135hnrv{height:150px;width:150px;border-radius:80px}.small.svelte-135hnrv{height:50px;width:50px;border-radius:25px}",
  map: `{"version":3,"file":"Avatar.svelte","sources":["Avatar.svelte"],"sourcesContent":["<style lang=\\"scss\\">.avatar {\\n  display: flex;\\n  width: fit-content;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px solid black;\\n  border-radius: 100px;\\n}\\n\\n.accompanying-text {\\n  font-family: var(--header-font);\\n  color: var(--header-text);\\n  font-weight: 500;\\n  padding-left: 10px;\\n  font-size: 1.2rem;\\n  font-weight: 600;\\n}\\n\\n.avatar-img {\\n  height: 90px;\\n  width: 90px;\\n  border-radius: 45px;\\n  object-fit: cover;\\n}\\n\\n.large {\\n  height: 150px;\\n  width: 150px;\\n  border-radius: 80px;\\n}\\n\\n.small {\\n  height: 50px;\\n  width: 50px;\\n  border-radius: 25px;\\n}</style>\\n\\n<script lang=\\"ts\\">export let image;\\nexport let variant = \\"medium\\";\\nexport let text = null;\\nexport let onClick = () => null;\\n<\/script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\n<div class=\\"avatar\\" on:click=\\"{onClick}\\">\\n\\t<img\\n\\t\\tsrc=\\"{image}\\"\\n\\t\\talt=\\"user avatar\\"\\n\\t\\tclass=\\"avatar-img\\"\\n\\t\\tclass:large=\\"{variant === 'large'}\\"\\n\\t\\tclass:small=\\"{variant === 'small'}\\"\\n\\t/>\\n\\t{#if text}\\n\\t\\t<div class=\\"accompanying-text\\">{text}</div>\\n\\t{/if}\\n</div>\\n"],"names":[],"mappings":"AAAmB,sBAAQ,CACzB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,WAAW,CAClB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,KACjB,CAEA,iCAAmB,CACjB,WAAW,CAAE,IAAI,aAAa,CAAC,CAC/B,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GACf,CAEA,0BAAY,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KACd,CAEA,qBAAO,CACL,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IACjB,CAEA,qBAAO,CACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IACjB"}`
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { variant = "medium" } = $$props;
  let { text = null } = $$props;
  let { onClick = () => null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `  <div class="avatar svelte-135hnrv"><img${add_attribute("src", image, 0)} alt="user avatar" class="${[
    "avatar-img svelte-135hnrv",
    (variant === "large" ? "large" : "") + " " + (variant === "small" ? "small" : "")
  ].join(" ").trim()}"> ${text ? `<div class="accompanying-text svelte-135hnrv">${escape(text)}</div>` : ``}</div>`;
});

export { Avatar as A };
//# sourceMappingURL=Avatar-CYgDjTlo.js.map
