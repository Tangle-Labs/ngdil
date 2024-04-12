import { c as create_ssr_component, f as subscribe, e as escape } from './ssr-b8a31716.js';
import { p as page } from './stores-ae8882d8.js';
import './client-d87046c3.js';
import './exports-4ef2d035.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-a056e750.js.map
