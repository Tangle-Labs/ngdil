import { c as create_ssr_component, d as add_attribute, f as each, e as escape, b as null_to_empty } from './index-78a5ef04.js';

/* empty css                                     */const css = {
  code: ".bar.svelte-1opg2hh.svelte-1opg2hh.svelte-1opg2hh{width:100%;height:5px;background:var(--white-700);border-radius:15px;margin:15px 0;position:relative}.bar.svelte-1opg2hh>.progress.svelte-1opg2hh.svelte-1opg2hh{display:flex;width:100%}.bar.svelte-1opg2hh>.progress .curr.svelte-1opg2hh.svelte-1opg2hh{height:5px;background:var(--green-900);border-radius:15px;transition:ease-in-out 0.5s}.bar.svelte-1opg2hh>.progress .active.svelte-1opg2hh.svelte-1opg2hh{height:5px;background:var(--secondary-900)}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh.svelte-1opg2hh{position:absolute;top:-12.5px;left:0;width:100%;display:flex;justify-content:space-between}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.svelte-1opg2hh{height:30px;width:30px;border-radius:20px;background:var(--white-700);transition:ease-in-out 0.5s}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.active.svelte-1opg2hh{background:var(--secondary-900)}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.completed.svelte-1opg2hh{background:var(--green-900)}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress;
  let { nodes = 2 } = $$props;
  let { current = 1 } = $$props;
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes !== void 0)
    $$bindings.nodes(nodes);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css);
  progress = (current - 1) / (nodes - 1) * 100 < 100 ? (current - 1) / (nodes - 1) * 100 : 100;
  return `<div class="${"bar svelte-1opg2hh"}"><div class="${"progress svelte-1opg2hh"}"><div class="${"curr svelte-1opg2hh"}"${add_attribute("style", `width: ${progress}%;`, 0)}></div>
		<div class="${"active svelte-1opg2hh"}"${add_attribute("style", `width: ${current !== nodes && 1 / (nodes - 1) * 100}%;`, 0)}></div></div>
	<div class="${"nodes svelte-1opg2hh"}">${each([...Array(nodes).keys()], (node, i) => {
    return `<div class="${escape(
      null_to_empty(`node ${current > i ? "completed" : current === i ? "active" : ""}`),
      true
    ) + " svelte-1opg2hh"}"></div>`;
  })}</div></div>`;
});

export { ProgressBar as P };
//# sourceMappingURL=ProgressBar-20be24f4.js.map
