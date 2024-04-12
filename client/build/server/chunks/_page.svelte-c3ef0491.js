import { c as create_ssr_component, f as subscribe } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { p as page } from './stores-ae8882d8.js';
import './exports-4ef2d035.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c3ef0491.js.map
