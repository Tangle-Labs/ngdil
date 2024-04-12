import { c as create_ssr_component, f as subscribe } from './index2-d11f8066.js';
import { p as page } from './stores-f2067f1d.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b74e54e0.js.map
