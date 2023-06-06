import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { C as Card } from './Card-10be3654.js';

const css = {
  code: ".backdrop.svelte-99bbir{position:fixed;top:0;left:0;display:flex;width:100vw;height:100vh;z-index:5;background:rgba(93, 102, 107, 0.3);backdrop-filter:blur(5px)}.modal.svelte-99bbir{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:10;background:var(--white-300);border-radius:5px;width:max-content;max-width:90vw}@media only screen and (max-width: 700px){.modal.svelte-99bbir{min-width:80vw}}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0)
    $$bindings.withoutPadding(withoutPadding);
  $$result.css.add(css);
  return `${isOpen ? `
	<div class="${"backdrop svelte-99bbir"}"></div>
	<div class="${"modal svelte-99bbir"}">${validate_component(Card, "Card").$$render($$result, { withBorder, withoutPadding }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : ``}`;
});

export { Modal as M };
//# sourceMappingURL=Modal-b22cf575.js.map
