import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { c as currStep } from './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-rizkk8.svelte-rizkk8{display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-rizkk8>.svelte-rizkk8{padding:20px 0;text-align:center}.container.svelte-rizkk8>.button.svelte-rizkk8{padding-top:60px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleContinue() {
    currStep.set(1);
    goto("/demo/download-wallet");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-rizkk8"}"><div class="${"heading svelte-rizkk8"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Welcome to the NGDIL interactive demo for self-sovereign identity in learning.`;
    }
  })}</div>
	<div class="${"desc svelte-rizkk8"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Here we will explore the value SSI can bring to the individual participants within the
			education and learning space, from learners, to educators, and employers.
		`;
    }
  })}</div>

	<div class="${"button svelte-rizkk8"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      label: "start your journey",
      onClick: handleContinue
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e324998a.js.map
