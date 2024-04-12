import { c as create_ssr_component, v as validate_component } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { c as currStep } from './onboarding.store-7316f7a3.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-gwmgmw.svelte-gwmgmw{display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-gwmgmw>.svelte-gwmgmw{padding:20px 0;text-align:center}.container.svelte-gwmgmw>.button.svelte-gwmgmw{padding-top:60px;width:100%}.container.svelte-gwmgmw>.heading.svelte-gwmgmw,.container.svelte-gwmgmw>.desc.svelte-gwmgmw{width:40vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleContinue() {
    currStep.set(1);
    goto("/demo/download-wallet");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-gwmgmw"}"><div class="${"heading svelte-gwmgmw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Welcome to the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `NGDIL interactive demo`;
        }
      })} for self-sovereign identity in learning.`;
    }
  })}</div>
	<div class="${"desc svelte-gwmgmw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Here we will explore the value SSI can bring to the individual participants within the
			education and learning space, from learners, to educators, and employers.
		`;
    }
  })}</div>

	<div class="${"button svelte-gwmgmw"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-d3c1c909.js.map
