import { c as create_ssr_component, b as subscribe } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { p as page } from './stores-DdEjvIe8.js';
import './config-DTlk9cBk.js';
import './exports-BGi7-Rnc.js';
import './runtime-Bjsr9Bul.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C0mVuChA.js.map
