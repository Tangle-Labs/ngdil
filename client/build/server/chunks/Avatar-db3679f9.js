import { c as create_ssr_component, d as add_attribute, e as escape } from './index2-d11f8066.js';

/* empty css                                  */const css = {
  code: ".avatar.svelte-135hnrv{display:flex;width:fit-content;justify-content:center;align-items:center;border:1px solid black;border-radius:100px}.accompanying-text.svelte-135hnrv{font-family:var(--header-font);color:var(--header-text);font-weight:500;padding-left:10px;font-size:1.2rem;font-weight:600}.avatar-img.svelte-135hnrv{height:90px;width:90px;border-radius:45px;object-fit:cover}.large.svelte-135hnrv{height:150px;width:150px;border-radius:80px}.small.svelte-135hnrv{height:50px;width:50px;border-radius:25px}",
  map: null
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { variant = "medium" } = $$props;
  let { text = null } = $$props;
  let { onClick = () => null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `
<div class="${"avatar svelte-135hnrv"}"><img${add_attribute("src", image, 0)} alt="${"user avatar"}" class="${[
    "avatar-img svelte-135hnrv",
    (variant === "large" ? "large" : "") + " " + (variant === "small" ? "small" : "")
  ].join(" ").trim()}">
	${text ? `<div class="${"accompanying-text svelte-135hnrv"}">${escape(text)}</div>` : ``}</div>`;
});

export { Avatar as A };
//# sourceMappingURL=Avatar-db3679f9.js.map
