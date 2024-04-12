import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-b8a31716.js';
import { T as Typography } from './Typography-5ee1c822.js';

const css$1 = {
  code: ".container.svelte-182pjz6.svelte-182pjz6{width:100%;background:var(--kw1c-blue-300);border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-182pjz6 .nav.svelte-182pjz6{width:100%;padding:10px 40px;background:var(--kw1c-blue-900);display:flex;position:relative}.container.svelte-182pjz6 .nav .logo.svelte-182pjz6{height:80px}.container.svelte-182pjz6 .nav .bottom-bar.svelte-182pjz6{width:60%;position:absolute;height:15px;background:var(--kw1c-red-900);bottom:0;left:20%;border-top-right-radius:12.5px;border-top-left-radius:12.5px;padding:10px;display:flex}.container.svelte-182pjz6 .nav .bottom-bar .white-rect.svelte-182pjz6{width:15%;height:100%;background:var(--white-300);border-radius:5px}.container.svelte-182pjz6 .nav .bottom-bar .translucent-rect.svelte-182pjz6{width:70%;background:var(--white-300);height:100%;margin-left:17%;border-radius:20px;opacity:0.2}.container.svelte-182pjz6 .nav .bottom-bar .white-circle.svelte-182pjz6{width:15px;height:15px;border-radius:20px;background:var(--white-300);margin-left:10px}.container.svelte-182pjz6 .nav .links.svelte-182pjz6{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-left:30px;transform:translateY(-20px);width:calc(100% - 200px)}.container.svelte-182pjz6 .nav .links .tabs.svelte-182pjz6{display:flex;width:100%}.container.svelte-182pjz6 .nav .links .tabs .tab.svelte-182pjz6{height:15px;border-radius:4px;background:var(--white-300);margin-right:20px;width:13.5%}.container.svelte-182pjz6 .nav .links .login.svelte-182pjz6{width:20%;height:12px;border-radius:20px;background:var(--white-300);border:10px solid var(--kw1c-red-900)}.container.svelte-182pjz6 .content.svelte-182pjz6{min-height:50vh;position:relative}",
  map: '{"version":3,"file":"Kw1cBlue.svelte","sources":["Kw1cBlue.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  width: 100%;\\n  background: var(--kw1c-blue-300);\\n  border-radius: 20px;\\n  box-sizing: border-box;\\n  overflow: hidden;\\n  border: 1px solid black;\\n}\\n.container .nav {\\n  width: 100%;\\n  padding: 10px 40px;\\n  background: var(--kw1c-blue-900);\\n  display: flex;\\n  position: relative;\\n}\\n.container .nav .logo {\\n  height: 80px;\\n}\\n.container .nav .bottom-bar {\\n  width: 60%;\\n  position: absolute;\\n  height: 15px;\\n  background: var(--kw1c-red-900);\\n  bottom: 0;\\n  left: 20%;\\n  border-top-right-radius: 12.5px;\\n  border-top-left-radius: 12.5px;\\n  padding: 10px;\\n  display: flex;\\n}\\n.container .nav .bottom-bar .white-rect {\\n  width: 15%;\\n  height: 100%;\\n  background: var(--white-300);\\n  border-radius: 5px;\\n}\\n.container .nav .bottom-bar .translucent-rect {\\n  width: 70%;\\n  background: var(--white-300);\\n  height: 100%;\\n  margin-left: 17%;\\n  border-radius: 20px;\\n  opacity: 0.2;\\n}\\n.container .nav .bottom-bar .white-circle {\\n  width: 15px;\\n  height: 15px;\\n  border-radius: 20px;\\n  background: var(--white-300);\\n  margin-left: 10px;\\n}\\n.container .nav .links {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n  padding-left: 30px;\\n  transform: translateY(-20px);\\n  width: calc(100% - 200px);\\n}\\n.container .nav .links .tabs {\\n  display: flex;\\n  width: 100%;\\n}\\n.container .nav .links .tabs .tab {\\n  height: 15px;\\n  border-radius: 4px;\\n  background: var(--white-300);\\n  margin-right: 20px;\\n  width: 13.5%;\\n}\\n.container .nav .links .login {\\n  width: 20%;\\n  height: 12px;\\n  border-radius: 20px;\\n  background: var(--white-300);\\n  border: 10px solid var(--kw1c-red-900);\\n}\\n.container .content {\\n  min-height: 50vh;\\n  position: relative;\\n}</style>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"nav\\">\\n\\t\\t<img src=\\"/imgs/kw1c-blue.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t<div class=\\"links\\">\\n\\t\\t\\t<div class=\\"tabs\\">\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"login\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"bottom-bar\\">\\n\\t\\t\\t<div class=\\"white-rect\\"></div>\\n\\t\\t\\t<div class=\\"translucent-rect\\"></div>\\n\\t\\t\\t<div class=\\"white-circle\\"></div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"content\\">\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wCAAW,CAC5B,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACpB,CACA,yBAAU,CAAC,mBAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QACZ,CACA,yBAAU,CAAC,IAAI,CAAC,oBAAM,CACpB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,IAAI,CAAC,0BAAY,CAC1B,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,cAAc,CAAC,CAC/B,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,GAAG,CACT,uBAAuB,CAAE,MAAM,CAC/B,sBAAsB,CAAE,MAAM,CAC9B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,yBAAU,CAAC,IAAI,CAAC,WAAW,CAAC,0BAAY,CACtC,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,GACjB,CACA,yBAAU,CAAC,IAAI,CAAC,WAAW,CAAC,gCAAkB,CAC5C,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GACX,CACA,yBAAU,CAAC,IAAI,CAAC,WAAW,CAAC,4BAAc,CACxC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,WAAW,CAAE,IACf,CACA,yBAAU,CAAC,IAAI,CAAC,qBAAO,CACrB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B,CACA,yBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,oBAAM,CAC3B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,KAAK,CAAC,mBAAK,CAChC,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KACT,CACA,yBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,qBAAO,CAC5B,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,IAAI,cAAc,CACvC,CACA,yBAAU,CAAC,uBAAS,CAClB,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,QACZ"}'
};
const Kw1cBlue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-182pjz6"><div class="nav svelte-182pjz6" data-svelte-h="svelte-cgdu6e"><img src="/imgs/kw1c-blue.png" alt="" class="logo svelte-182pjz6"> <div class="links svelte-182pjz6"><div class="tabs svelte-182pjz6"><div class="tab svelte-182pjz6"></div> <div class="tab svelte-182pjz6"></div> <div class="tab svelte-182pjz6"></div> <div class="tab svelte-182pjz6"></div> <div class="tab svelte-182pjz6"></div></div> <div class="login svelte-182pjz6"></div></div> <div class="bottom-bar svelte-182pjz6"><div class="white-rect svelte-182pjz6"></div> <div class="translucent-rect svelte-182pjz6"></div> <div class="white-circle svelte-182pjz6"></div></div></div> <div class="content svelte-182pjz6">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const css = {
  code: ".container.svelte-ebn1ok.svelte-ebn1ok{width:100%;border-radius:20px;box-sizing:border-box;overflow:hidden;border:1px solid black}.container.svelte-ebn1ok .nav.svelte-ebn1ok{width:100%;padding:10px 40px;background:var(--white-300);display:flex;position:relative;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-ebn1ok .nav .logo.svelte-ebn1ok{height:80px}.container.svelte-ebn1ok .nav .bottom-bar.svelte-ebn1ok{width:60%;position:absolute;height:15px;bottom:22px;left:175px;border-top-right-radius:12.5px;border-top-left-radius:12.5px;padding:10px;display:flex}.container.svelte-ebn1ok .nav .links.svelte-ebn1ok{display:flex;justify-content:space-between;align-items:center;align-content:center;padding-left:30px;transform:translateY(-20px);width:calc(100% - 200px)}.container.svelte-ebn1ok .nav .links .tabs.svelte-ebn1ok{display:flex;width:100%}.container.svelte-ebn1ok .nav .links .tabs .tab.svelte-ebn1ok{height:15px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:20px;width:13.5%}.container.svelte-ebn1ok .nav .links .login.svelte-ebn1ok{width:20%;height:12px;border-radius:20px;background:var(--white-300);border:10px solid var(--kw1c-red-900)}.container.svelte-ebn1ok .content.svelte-ebn1ok{min-height:50vh;position:relative}.container.svelte-ebn1ok .content .division.svelte-ebn1ok{position:absolute;z-index:-1;height:35%;background:var(--kw1c-blue-300);width:100%}",
  map: '{"version":3,"file":"Kw1cWhite.svelte","sources":["Kw1cWhite.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  width: 100%;\\n  border-radius: 20px;\\n  box-sizing: border-box;\\n  overflow: hidden;\\n  border: 1px solid black;\\n}\\n.container .nav {\\n  width: 100%;\\n  padding: 10px 40px;\\n  background: var(--white-300);\\n  display: flex;\\n  position: relative;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .nav .logo {\\n  height: 80px;\\n}\\n.container .nav .bottom-bar {\\n  width: 60%;\\n  position: absolute;\\n  height: 15px;\\n  bottom: 22px;\\n  left: 175px;\\n  border-top-right-radius: 12.5px;\\n  border-top-left-radius: 12.5px;\\n  padding: 10px;\\n  display: flex;\\n}\\n.container .nav .links {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n  padding-left: 30px;\\n  transform: translateY(-20px);\\n  width: calc(100% - 200px);\\n}\\n.container .nav .links .tabs {\\n  display: flex;\\n  width: 100%;\\n}\\n.container .nav .links .tabs .tab {\\n  height: 15px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 20px;\\n  width: 13.5%;\\n}\\n.container .nav .links .login {\\n  width: 20%;\\n  height: 12px;\\n  border-radius: 20px;\\n  background: var(--white-300);\\n  border: 10px solid var(--kw1c-red-900);\\n}\\n.container .content {\\n  min-height: 50vh;\\n  position: relative;\\n}\\n.container .content .division {\\n  position: absolute;\\n  z-index: -1;\\n  height: 35%;\\n  background: var(--kw1c-blue-300);\\n  width: 100%;\\n}</style>\\n\\n<script lang=\\"ts\\">import { Typography } from \\"$lib/components/\\";\\nexport let title = \\"\\";\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"nav\\">\\n\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t<div class=\\"links\\">\\n\\t\\t\\t<div class=\\"tabs\\">\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t\\t<div class=\\"tab\\"></div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"login\\"></div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"bottom-bar\\">\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>{title}</Typography\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"content\\">\\n\\t\\t<div class=\\"division\\"></div>\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,sCAAW,CAC5B,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACpB,CACA,wBAAU,CAAC,kBAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,IAAI,CAAC,mBAAM,CACpB,MAAM,CAAE,IACV,CACA,wBAAU,CAAC,IAAI,CAAC,yBAAY,CAC1B,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,KAAK,CACX,uBAAuB,CAAE,MAAM,CAC/B,sBAAsB,CAAE,MAAM,CAC9B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,IAAI,CAAC,oBAAO,CACrB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B,CACA,wBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,mBAAM,CAC3B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IACT,CACA,wBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,KAAK,CAAC,kBAAK,CAChC,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KACT,CACA,wBAAU,CAAC,IAAI,CAAC,MAAM,CAAC,oBAAO,CAC5B,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,IAAI,cAAc,CACvC,CACA,wBAAU,CAAC,sBAAS,CAClB,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,QACZ,CACA,wBAAU,CAAC,QAAQ,CAAC,uBAAU,CAC5B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,KAAK,CAAE,IACT"}'
};
const Kw1cWhite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="container svelte-ebn1ok"><div class="nav svelte-ebn1ok"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-ebn1ok"> <div class="links svelte-ebn1ok" data-svelte-h="svelte-urn5an"><div class="tabs svelte-ebn1ok"><div class="tab svelte-ebn1ok"></div> <div class="tab svelte-ebn1ok"></div> <div class="tab svelte-ebn1ok"></div> <div class="tab svelte-ebn1ok"></div> <div class="tab svelte-ebn1ok"></div></div> <div class="login svelte-ebn1ok"></div></div> <div class="bottom-bar svelte-ebn1ok">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-header",
      fontVariant: "kw1c",
      color: "--kw1c-red-900"
    },
    {},
    {
      default: () => {
        return `${escape(title)}`;
      }
    }
  )}</div></div> <div class="content svelte-ebn1ok"><div class="division svelte-ebn1ok"></div> ${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Kw1c = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant } = $$props;
  let { title = "" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${variant === "blue" ? `${validate_component(Kw1cBlue, "Kw1cBlue").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${validate_component(Kw1cWhite, "Kw1cWhite").$$render($$result, { title }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}`;
});

export { Kw1c as K };
//# sourceMappingURL=Kw1c-67f0a859.js.map
