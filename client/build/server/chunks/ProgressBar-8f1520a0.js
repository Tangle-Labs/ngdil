import { c as create_ssr_component, d as add_attribute, h as each, e as escape, b as null_to_empty } from './ssr-b8a31716.js';

/* empty css                                 */
const css = {
  code: ".bar.svelte-1opg2hh.svelte-1opg2hh.svelte-1opg2hh{width:100%;height:5px;background:var(--white-700);border-radius:15px;margin:15px 0;position:relative}.bar.svelte-1opg2hh>.progress.svelte-1opg2hh.svelte-1opg2hh{display:flex;width:100%}.bar.svelte-1opg2hh>.progress .curr.svelte-1opg2hh.svelte-1opg2hh{height:5px;background:var(--green-900);border-radius:15px;transition:ease-in-out 0.5s}.bar.svelte-1opg2hh>.progress .active.svelte-1opg2hh.svelte-1opg2hh{height:5px;background:var(--secondary-900)}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh.svelte-1opg2hh{position:absolute;top:-12.5px;left:0;width:100%;display:flex;justify-content:space-between}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.svelte-1opg2hh{height:30px;width:30px;border-radius:20px;background:var(--white-700);transition:ease-in-out 0.5s}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.active.svelte-1opg2hh{background:var(--secondary-900)}.bar.svelte-1opg2hh>.nodes.svelte-1opg2hh>.node.completed.svelte-1opg2hh{background:var(--green-900)}",
  map: '{"version":3,"file":"ProgressBar.svelte","sources":["ProgressBar.svelte"],"sourcesContent":["<style lang=\\"scss\\">.bar {\\n  width: 100%;\\n  height: 5px;\\n  background: var(--white-700);\\n  border-radius: 15px;\\n  margin: 15px 0;\\n  position: relative;\\n}\\n.bar > .progress {\\n  display: flex;\\n  width: 100%;\\n}\\n.bar > .progress .curr {\\n  height: 5px;\\n  background: var(--green-900);\\n  border-radius: 15px;\\n  transition: ease-in-out 0.5s;\\n}\\n.bar > .progress .active {\\n  height: 5px;\\n  background: var(--secondary-900);\\n}\\n.bar > .nodes {\\n  position: absolute;\\n  top: -12.5px;\\n  left: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.bar > .nodes > .node {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 20px;\\n  background: var(--white-700);\\n  transition: ease-in-out 0.5s;\\n}\\n.bar > .nodes > .node.active {\\n  background: var(--secondary-900);\\n}\\n.bar > .nodes > .node.completed {\\n  background: var(--green-900);\\n}</style>\\n\\n<script lang=\\"ts\\">export let nodes = 2;\\nexport let current = 1;\\n$: progress =\\n    ((current - 1) / (nodes - 1)) * 100 < 100 ? ((current - 1) / (nodes - 1)) * 100 : 100;\\n<\/script>\\n\\n<div class=\\"bar\\">\\n\\t<div class=\\"progress\\">\\n\\t\\t<div class=\\"curr\\" style=\\"{`width: ${progress}%;`}\\"></div>\\n\\t\\t<div class=\\"active\\" style=\\"{`width: ${current !== nodes && (1 / (nodes - 1)) * 100}%;`}\\"></div>\\n\\t</div>\\n\\t<div class=\\"nodes\\">\\n\\t\\t{#each [...Array(nodes).keys()] as node, i}\\n\\t\\t\\t<div class=\\"{`node ${current > i ? \'completed\' : current === i ? \'active\' : \'\'}`}\\"></div>\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,iDAAK,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,QAAQ,CAAE,QACZ,CACA,mBAAI,CAAG,uCAAU,CACf,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IACT,CACA,mBAAI,CAAG,SAAS,CAAC,mCAAM,CACrB,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,WAAW,CAAC,IAC1B,CACA,mBAAI,CAAG,SAAS,CAAC,qCAAQ,CACvB,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,mBAAI,CAAG,oCAAO,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,OAAO,CACZ,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACA,mBAAI,CAAG,qBAAM,CAAG,oBAAM,CACpB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,UAAU,CAAE,WAAW,CAAC,IAC1B,CACA,mBAAI,CAAG,qBAAM,CAAG,KAAK,sBAAQ,CAC3B,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,mBAAI,CAAG,qBAAM,CAAG,KAAK,yBAAW,CAC9B,UAAU,CAAE,IAAI,WAAW,CAC7B"}'
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
  return `<div class="bar svelte-1opg2hh"><div class="progress svelte-1opg2hh"><div class="curr svelte-1opg2hh"${add_attribute("style", `width: ${progress}%;`, 0)}></div> <div class="active svelte-1opg2hh"${add_attribute("style", `width: ${current !== nodes && 1 / (nodes - 1) * 100}%;`, 0)}></div></div> <div class="nodes svelte-1opg2hh">${each([...Array(nodes).keys()], (node, i) => {
    return `<div class="${escape(
      null_to_empty(`node ${current > i ? "completed" : current === i ? "active" : ""}`),
      true
    ) + " svelte-1opg2hh"}"></div>`;
  })}</div></div>`;
});

export { ProgressBar as P };
//# sourceMappingURL=ProgressBar-8f1520a0.js.map
