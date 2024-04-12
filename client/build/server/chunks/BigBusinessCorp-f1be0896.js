import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-b8a31716.js';
import { T as Typography } from './Typography-5ee1c822.js';

/* empty css                                 */
const css = {
  code: ".container.svelte-6vs0w.svelte-6vs0w{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-6vs0w .nav.svelte-6vs0w{width:100%;padding:20px 40px;background:var(--bbc-blue);display:flex;box-sizing:border-box;position:relative;justify-content:center;position:relative;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-6vs0w .nav .logo.svelte-6vs0w{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-6vs0w .nav .logo img.svelte-6vs0w{height:25px;padding-right:20px}.container.svelte-6vs0w .nav .logo .text.svelte-6vs0w{width:100%;text-align:center}.container.svelte-6vs0w .nav .tabs.svelte-6vs0w{position:absolute;width:calc(40% - 180px);height:10px;bottom:30px;right:40px;display:flex;justify-content:space-between}.container.svelte-6vs0w .nav .tabs .tab.svelte-6vs0w{width:22%;height:100%;background:var(--black-500);border-radius:10px}.container.svelte-6vs0w .heading.svelte-6vs0w{width:100%;text-align:center;padding-top:30px}.container.svelte-6vs0w .content.svelte-6vs0w{min-height:50vh;background:var(--bbc-background);position:relative}",
  map: '{"version":3,"file":"BigBusinessCorp.svelte","sources":["BigBusinessCorp.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  width: 100%;\\n  border-radius: 20px;\\n  box-sizing: border-box;\\n  overflow: hidden;\\n  border: 1px solid black;\\n}\\n.container .nav {\\n  width: 100%;\\n  padding: 20px 40px;\\n  background: var(--bbc-blue);\\n  display: flex;\\n  box-sizing: border-box;\\n  position: relative;\\n  justify-content: center;\\n  position: relative;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .nav .logo {\\n  align-items: center;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n.container .nav .logo img {\\n  height: 25px;\\n  padding-right: 20px;\\n}\\n.container .nav .logo .text {\\n  width: 100%;\\n  text-align: center;\\n}\\n.container .nav .tabs {\\n  position: absolute;\\n  width: calc(40% - 180px);\\n  height: 10px;\\n  bottom: 30px;\\n  right: 40px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .nav .tabs .tab {\\n  width: 22%;\\n  height: 100%;\\n  background: var(--black-500);\\n  border-radius: 10px;\\n}\\n.container .heading {\\n  width: 100%;\\n  text-align: center;\\n  padding-top: 30px;\\n}\\n.container .content {\\n  min-height: 50vh;\\n  background: var(--bbc-background);\\n  position: relative;\\n}</style>\\n\\n<script lang=\\"ts\\">import { Typography } from \\"$lib/components\\";\\nexport let heading = \\"\\";\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"nav\\">\\n\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t<img src=\\"/imgs/bbc.png\\" alt=\\"\\" />\\n\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t<Typography color=\\"--white-300\\" variant=\\"card-header\\">Big Business Corp</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"tabs\\">\\n\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"content\\">\\n\\t\\t{#if heading}\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" color=\\"--bbc-blue\\">{heading}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,oCAAW,CAC5B,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACpB,CACA,uBAAU,CAAC,iBAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,uBAAU,CAAC,IAAI,CAAC,kBAAM,CACpB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MACnB,CACA,uBAAU,CAAC,IAAI,CAAC,KAAK,CAAC,gBAAI,CACxB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACjB,CACA,uBAAU,CAAC,IAAI,CAAC,KAAK,CAAC,kBAAM,CAC1B,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MACd,CACA,uBAAU,CAAC,IAAI,CAAC,kBAAM,CACpB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACA,uBAAU,CAAC,IAAI,CAAC,KAAK,CAAC,iBAAK,CACzB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IACjB,CACA,uBAAU,CAAC,qBAAS,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IACf,CACA,uBAAU,CAAC,qBAAS,CAClB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,QAAQ,CAAE,QACZ"}'
};
const BigBusinessCorp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="container svelte-6vs0w"><div class="nav svelte-6vs0w"><div class="logo svelte-6vs0w"><img src="/imgs/bbc.png" alt="" class="svelte-6vs0w"> <div class="text svelte-6vs0w">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      color: "--white-300",
      variant: "card-header"
    },
    {},
    {
      default: () => {
        return `Big Business Corp`;
      }
    }
  )}</div></div> <div class="tabs svelte-6vs0w" data-svelte-h="svelte-svflr5"><div class="tab svelte-6vs0w"></div> <div class="tab svelte-6vs0w"></div> <div class="tab svelte-6vs0w"></div> <div class="tab svelte-6vs0w"></div></div></div> <div class="content svelte-6vs0w">${heading ? `<div class="heading svelte-6vs0w">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-header",
      color: "--bbc-blue"
    },
    {},
    {
      default: () => {
        return `${escape(heading)}`;
      }
    }
  )}</div>` : ``} ${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { BigBusinessCorp as B };
//# sourceMappingURL=BigBusinessCorp-f1be0896.js.map
