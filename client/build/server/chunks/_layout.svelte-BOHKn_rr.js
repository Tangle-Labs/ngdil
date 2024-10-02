import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { A as Avatar } from './Avatar-CYgDjTlo.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { P as ProgressBar } from './ProgressBar-DAxyK0TM.js';
import { c as currentJourney, n as nodeCount, a as currNode, J as JourneyInfo } from './flows.store-Ch_DhNys.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".nav.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{background:linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);box-sizing:border-box;padding:20px 40px;display:flex;justify-content:space-between}.nav.svelte-1wpv7xj>.login.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{display:flex;align-items:center;align-content:center}.nav.svelte-1wpv7xj>.login.svelte-1wpv7xj>.avatar.svelte-1wpv7xj.svelte-1wpv7xj{padding:0 20px;position:relative}.nav.svelte-1wpv7xj>.login>.avatar .desc.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{padding:5px 0}.nav.svelte-1wpv7xj>.login>.avatar .desc.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{padding-bottom:15px}.nav.svelte-1wpv7xj>.login.svelte-1wpv7xj>.avatar.svelte-1wpv7xj>.dropdown.svelte-1wpv7xj{position:absolute;top:72px;padding:30px;background:rgba(207, 227, 238, 0.25);border-bottom-left-radius:8px;border-bottom-right-radius:8px;z-index:20}.slot.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{padding:20px 17vw}.overlay.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{position:absolute;opacity:0;top:0;left:0;height:100vh;width:100vw;z-index:10}.bottom.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{padding:0 17vw 10vh;display:flex;justify-content:center;align-items:center;position:relative}.bottom.svelte-1wpv7xj>.progress.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{width:40%}.bottom.svelte-1wpv7xj>.back.svelte-1wpv7xj.svelte-1wpv7xj.svelte-1wpv7xj{cursor:pointer;position:absolute;left:17.5vw}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<style lang=\\"scss\\">.nav {\\n  background: linear-gradient(180deg, rgba(235, 240, 242, 0) 0%, rgba(235, 240, 242, 0.57) 100%);\\n  box-sizing: border-box;\\n  padding: 20px 40px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.nav > .login {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n}\\n.nav > .login > .avatar {\\n  padding: 0 20px;\\n  position: relative;\\n}\\n.nav > .login > .avatar .name,\\n.nav > .login > .avatar .desc {\\n  padding: 5px 0;\\n}\\n.nav > .login > .avatar .desc {\\n  padding-bottom: 15px;\\n}\\n.nav > .login > .avatar > .dropdown {\\n  position: absolute;\\n  top: 72px;\\n  padding: 30px;\\n  background: rgba(207, 227, 238, 0.25);\\n  border-bottom-left-radius: 8px;\\n  border-bottom-right-radius: 8px;\\n  z-index: 20;\\n}\\n\\n.slot {\\n  padding: 20px 17vw;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  opacity: 0;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  z-index: 10;\\n}\\n\\n.bottom {\\n  padding: 0 17vw 10vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n}\\n.bottom > .progress {\\n  width: 40%;\\n}\\n.bottom > .back {\\n  cursor: pointer;\\n  position: absolute;\\n  left: 17.5vw;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Avatar, Button, ProgressBar, Typography } from \\"$lib/components\\";\\nimport { JourneyInfo, currNode, currentJourney, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet expanded = false;\\n<\/script>\\n\\n<div class=\\"nav\\">\\n\\t<img src=\\"/imgs/ngdil.svg\\" class=\\"logo\\" alt=\\"\\" />\\n\\t{#if expanded}\\n\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t<div class=\\"overlay\\" on:click=\\"{() => (expanded = false)}\\"></div>\\n\\t{/if}\\n\\n\\t<div class=\\"login\\">\\n\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t<Avatar\\n\\t\\t\\t\\tvariant=\\"small\\"\\n\\t\\t\\t\\tonClick=\\"{() => (expanded = true)}\\"\\n\\t\\t\\t\\timage=\\"{\`/imgs/\${$currentJourney}.png\`}\\"\\n\\t\\t\\t/>\\n\\t\\t\\t{#if expanded}\\n\\t\\t\\t\\t<div class=\\"dropdown\\">\\n\\t\\t\\t\\t\\t<div class=\\"Name\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"body\\" color=\\"--black-700\\">\\n\\t\\t\\t\\t\\t\\t\\t{JourneyInfo[$currentJourney].name}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" color=\\"--black-700\\">\\n\\t\\t\\t\\t\\t\\t\\t{JourneyInfo[$currentJourney].desc}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.change')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t\\t<Button\\n\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\twindow.open('https://ngdil.com/contact', '_blank');\\n\\t\\t\\t}}\\"\\n\\t\\t\\tlabel=\\"{$_('components.contact_us')}\\"\\n\\t\\t\\tvariant=\\"white\\"\\n\\t\\t/>\\n\\t</div>\\n</div>\\n\\n<div class=\\"slot\\">\\n\\t<slot />\\n</div>\\n\\n{#if $nodeCount > 0}\\n\\t<div class=\\"bottom\\">\\n\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t<div\\n\\t\\t\\tclass=\\"back\\"\\n\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\thistory.back();\\n\\t\\t\\t}}\\"\\n\\t\\t>\\n\\t\\t\\t<img src=\\"/imgs/back.svg\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t<Typography variant=\\"button\\" color=\\"--black-300\\">{$_(\\"components.back\\")}</Typography>\\n\\t\\t</div>\\n\\t\\t<div class=\\"progress\\">\\n\\t\\t\\t<ProgressBar nodes=\\"{$nodeCount}\\" current=\\"{$currNode}\\" />\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n"],"names":[],"mappings":"AAAmB,gEAAK,CACtB,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAC9F,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACA,mBAAI,CAAG,mDAAO,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MACjB,CACA,mBAAI,CAAG,qBAAM,CAAG,qCAAQ,CACtB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,QAAQ,CAAE,QACZ,CAEA,mBAAI,CAAG,MAAM,CAAG,OAAO,CAAC,kDAAM,CAC5B,OAAO,CAAE,GAAG,CAAC,CACf,CACA,mBAAI,CAAG,MAAM,CAAG,OAAO,CAAC,kDAAM,CAC5B,cAAc,CAAE,IAClB,CACA,mBAAI,CAAG,qBAAM,CAAG,sBAAO,CAAG,wBAAU,CAClC,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACrC,yBAAyB,CAAE,GAAG,CAC9B,0BAA0B,CAAE,GAAG,CAC/B,OAAO,CAAE,EACX,CAEA,iEAAM,CACJ,OAAO,CAAE,IAAI,CAAC,IAChB,CAEA,oEAAS,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,EACX,CAEA,mEAAQ,CACN,OAAO,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QACZ,CACA,sBAAO,CAAG,sDAAU,CAClB,KAAK,CAAE,GACT,CACA,sBAAO,CAAG,kDAAM,CACd,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,MACR"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentJourney, $$unsubscribe_currentJourney;
  let $_, $$unsubscribe__;
  let $nodeCount, $$unsubscribe_nodeCount;
  let $currNode, $$unsubscribe_currNode;
  $$unsubscribe_currentJourney = subscribe(currentJourney, (value) => $currentJourney = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_nodeCount = subscribe(nodeCount, (value) => $nodeCount = value);
  $$unsubscribe_currNode = subscribe(currNode, (value) => $currNode = value);
  let expanded = false;
  $$result.css.add(css);
  $$unsubscribe_currentJourney();
  $$unsubscribe__();
  $$unsubscribe_nodeCount();
  $$unsubscribe_currNode();
  return `<div class="nav svelte-1wpv7xj"><img src="/imgs/ngdil.svg" class="logo" alt=""> ${expanded ? `  <div class="overlay svelte-1wpv7xj"></div>` : ``} <div class="login svelte-1wpv7xj"><div class="avatar svelte-1wpv7xj">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      variant: "small",
      onClick: () => expanded = true,
      image: `/imgs/${$currentJourney}.png`
    },
    {},
    {}
  )} ${expanded ? `<div class="dropdown svelte-1wpv7xj"><div class="Name">${validate_component(Typography, "Typography").$$render($$result, { variant: "body", color: "--black-700" }, {}, {
    default: () => {
      return `${escape(JourneyInfo[$currentJourney].name)}`;
    }
  })}</div> <div class="desc svelte-1wpv7xj">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "sub-text",
      color: "--black-700"
    },
    {},
    {
      default: () => {
        return `${escape(JourneyInfo[$currentJourney].desc)}`;
      }
    }
  )}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "white",
      onClick: () => goto(),
      label: $_("components.change")
    },
    {},
    {}
  )}</div>` : ``}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
        window.open("https://ngdil.com/contact", "_blank");
      },
      label: $_("components.contact_us"),
      variant: "white"
    },
    {},
    {}
  )}</div></div> <div class="slot svelte-1wpv7xj">${slots.default ? slots.default({}) : ``}</div> ${$nodeCount > 0 ? `<div class="bottom svelte-1wpv7xj">  <div class="back svelte-1wpv7xj"><img src="/imgs/back.svg" alt="" class="icon"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--black-300" }, {}, {
    default: () => {
      return `${escape($_("components.back"))}`;
    }
  })}</div> <div class="progress svelte-1wpv7xj">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { nodes: $nodeCount, current: $currNode }, {}, {})}</div></div>` : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BOHKn_rr.js.map
