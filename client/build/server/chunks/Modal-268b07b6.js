import { c as create_ssr_component, j as add_styles, v as validate_component } from './index2-d11f8066.js';
import { C as Card } from './Card-42d79914.js';

const css = {
  code: ".backdrop.svelte-14quojq{position:fixed;top:0;left:0;display:flex;width:100vw;height:100vh;z-index:5;background:rgba(93, 102, 107, 0.3);backdrop-filter:blur(5px)}.modal.svelte-14quojq{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:10;background:var(--white-300);width:max-content;max-width:90vw}@media only screen and (max-width: 700px){.modal.svelte-14quojq{min-width:80vw}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  let { borderRadius = 0 } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0)
    $$bindings.withoutPadding(withoutPadding);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css);
  return `${isOpen ? `
	<div class="${"backdrop svelte-14quojq"}"></div>
	<div class="${"modal svelte-14quojq"}"${add_styles({ "border-radius": `${borderRadius}px` })}>${validate_component(Card, "Card").$$render($$result, { withBorder, withoutPadding, borderRadius }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : ``}`;
});

export { Modal as M };
//# sourceMappingURL=Modal-268b07b6.js.map
