import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import './Typography-d68adf7d.js';

/* empty css                                                */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      label: "enter demo",
      onClick: () => {
        goto("/demo");
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-916c2af4.js.map
