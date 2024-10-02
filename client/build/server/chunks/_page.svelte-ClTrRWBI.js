import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { B as Badge } from './Badge-CJxtfPX9.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { R as Radio } from './Radio-CJ3S8jgz.js';
import { q as imaniBadgeVariant, p as imaniBadgeColor, a as currNode, o as imaniBadgeName, r as imaniBadgeDesc } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-uhtnrw>.svelte-uhtnrw.svelte-uhtnrw{padding:15px 0}.container.svelte-uhtnrw .badges.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw.svelte-uhtnrw{text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-content:center;align-items:flex-end}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw>.svelte-uhtnrw{flex-basis:100%;padding-bottom:5px;padding-top:20px}.container.svelte-uhtnrw .colors.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between;box-sizing:border-box;padding:20px 12px}.container.svelte-uhtnrw .colors .color.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:80px;justify-content:center;flex-wrap:wrap}.container.svelte-uhtnrw .colors .color .palette.svelte-uhtnrw.svelte-uhtnrw{width:80px;height:50px;width:100%;margin:10px 0}.container.svelte-uhtnrw .colors .color .palette.red.svelte-uhtnrw.svelte-uhtnrw{background:var(--red-900)}.container.svelte-uhtnrw .colors .color .palette.blue.svelte-uhtnrw.svelte-uhtnrw{background:var(--blue-900)}.container.svelte-uhtnrw .colors .color .palette.green.svelte-uhtnrw.svelte-uhtnrw{background:var(--green-900)}.container.svelte-uhtnrw .colors .color .palette.yellow.svelte-uhtnrw.svelte-uhtnrw{background:var(--secondary-900)}.container.svelte-uhtnrw .input.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0}.container.svelte-uhtnrw .input input.svelte-uhtnrw.svelte-uhtnrw,.container.svelte-uhtnrw .input textarea.svelte-uhtnrw.svelte-uhtnrw{padding:10px;font-family:var(--body-font);font-size:1rem;width:70%;margin:5px 0;resize:none;border:1px solid var(--black-500);user-select:none;border-radius:5px;box-sizing:border-box;outline:none}.container.svelte-uhtnrw .button-container.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .badges {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.container .badges .badge {\\n  text-align: center;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: flex-end;\\n}\\n.container .badges .badge > * {\\n  flex-basis: 100%;\\n  padding-bottom: 5px;\\n  padding-top: 20px;\\n}\\n.container .colors {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  box-sizing: border-box;\\n  padding: 20px 12px;\\n}\\n.container .colors .color {\\n  display: flex;\\n  width: 80px;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container .colors .color .palette {\\n  width: 80px;\\n  height: 50px;\\n  width: 100%;\\n  margin: 10px 0;\\n}\\n.container .colors .color .palette.red {\\n  background: var(--red-900);\\n}\\n.container .colors .color .palette.blue {\\n  background: var(--blue-900);\\n}\\n.container .colors .color .palette.green {\\n  background: var(--green-900);\\n}\\n.container .colors .color .palette.yellow {\\n  background: var(--secondary-900);\\n}\\n.container .input {\\n  padding: 10px 0;\\n}\\n.container .input input,\\n.container .input textarea {\\n  padding: 10px;\\n  font-family: var(--body-font);\\n  font-size: 1rem;\\n  width: 70%;\\n  margin: 5px 0;\\n  resize: none;\\n  border: 1px solid var(--black-500);\\n  user-select: none;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  outline: none;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Badge, Radio } from \\"$lib/components\\";\\nimport { currNode, imaniBadgeColor, imaniBadgeDesc, imaniBadgeName, imaniBadgeVariant } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nconst colors = {\\n    red: \\"var(--red-900)\\",\\n    green: \\"var(--green-900)\\",\\n    yellow: \\"var(--secondary-900)\\",\\n    blue: \\"var(--blue-900)\\"\\n};\\nlet color = null;\\nlet variant = null;\\nlet creatingBadgeImage = true;\\nlet badgeNameValue;\\nlet badgeDescValue;\\nlet badgeName = $_(\\"journeys.imani.3d_print_team_management\\");\\nlet badgeDesc = $_(\\"journeys.imani.team_manager_badge_desc\\");\\nfunction handleCreateBadge() {\\n    if (creatingBadgeImage) {\\n        if (color && variant) {\\n            imaniBadgeVariant.set(variant);\\n            imaniBadgeColor.set(colors[color]);\\n            creatingBadgeImage = false;\\n            currNode.set(2);\\n        }\\n    }\\n    else {\\n        imaniBadgeName.set(badgeName);\\n        imaniBadgeDesc.set(badgeDesc);\\n        goto(\\"/demo/journeys/imani/confirm-badge\\");\\n    }\\n}\\nonMount(() => {\\n    currNode.set(1);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if creatingBadgeImage}\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.imani.lets_create_img_template for_badge\\"))}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight($_(\\"journeys.imani.badge_img_ready_now_add_info\\"))}\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{creatingBadgeImage\\n\\t\\t\\t\\t? $_(\\"journeys.imani.select_shape_color_then_click_continue\\")\\n\\t\\t\\t\\t: $_(\\"journeys.imani.click_fields_to_add_badge_name_and_desc\\")}</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.new_badge').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t>{creatingBadgeImage\\n\\t\\t\\t\\t\\t\\t? $_(\\"journeys.imani.select_badge_shape_color\\")\\n\\t\\t\\t\\t\\t\\t: $_(\\"journeys.imani.add_badge_info\\")}</Typography\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if creatingBadgeImage}\\n\\t\\t\\t\\t<div class=\\"badges\\">\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"hexagon\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'hexagon'}\\" onClick=\\"{() => (variant = 'hexagon')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"crest\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'crest'}\\" onClick=\\"{() => (variant = 'crest')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"rounded-hexagon\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio\\n\\t\\t\\t\\t\\t\\t\\tchecked=\\"{variant === 'rounded-hexagon'}\\"\\n\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => (variant = 'rounded-hexagon')}\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"circle\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'circle'}\\" onClick=\\"{() => (variant = 'circle')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"colors\\">\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"red palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'red'}\\" onClick=\\"{() => (color = 'red')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"blue palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'blue'}\\" onClick=\\"{() => (color = 'blue')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"green palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'green'}\\" onClick=\\"{() => (color = 'green')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"yellow palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'yellow'}\\" onClick=\\"{() => (color = 'yellow')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<div class=\\"input\\">\\n\\t\\t\\t\\t\\t<div class=\\"label\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.badge_name\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\tplaceholder=\\"{$_('journeys.imani.3d_print_engineer')}\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => (badgeNameValue = badgeName)}\\"\\n\\t\\t\\t\\t\\t\\tbind:value=\\"{badgeNameValue}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.enter_badge_name_here\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"input\\">\\n\\t\\t\\t\\t\\t<div class=\\"label\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.badge_description\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<textarea\\n\\t\\t\\t\\t\\t\\trows=\\"{5}\\"\\n\\t\\t\\t\\t\\t\\tbind:value=\\"{badgeDescValue}\\"\\n\\t\\t\\t\\t\\t\\tplaceholder=\\"{$_('journeys.imani.3d_print_engineer_badge_desc')}\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => (badgeDescValue = badgeDesc)}\\"></textarea>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.enter_badge_desc_here\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tonClick=\\"{handleCreateBadge}\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t\\t\\tvariant=\\"{(creatingBadgeImage && !(variant && color)) ||\\n\\t\\t\\t\\t\\t(!creatingBadgeImage && !(badgeDescValue && badgeNameValue))\\n\\t\\t\\t\\t\\t\\t? 'future-tech-disabled'\\n\\t\\t\\t\\t\\t\\t: 'future-tech'}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,4BAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,wBAAU,CAAC,mCAAQ,CACjB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,OAAO,CAAC,kCAAO,CACxB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,QACf,CACA,wBAAU,CAAC,OAAO,CAAC,oBAAM,CAAG,cAAE,CAC5B,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,IACf,CACA,wBAAU,CAAC,mCAAQ,CACjB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aAAa,CAC9B,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,wBAAU,CAAC,OAAO,CAAC,kCAAO,CACxB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,oCAAS,CACjC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAAC,CACf,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,gCAAK,CACrC,UAAU,CAAE,IAAI,SAAS,CAC3B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,iCAAM,CACtC,UAAU,CAAE,IAAI,UAAU,CAC5B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,kCAAO,CACvC,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,mCAAQ,CACxC,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,wBAAU,CAAC,kCAAO,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,MAAM,CAAC,iCAAK,CACvB,wBAAU,CAAC,MAAM,CAAC,oCAAS,CACzB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CAClC,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,6CAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const colors = {
    red: "var(--red-900)",
    green: "var(--green-900)",
    yellow: "var(--secondary-900)",
    blue: "var(--blue-900)"
  };
  let color = null;
  let variant = null;
  let creatingBadgeImage = true;
  let badgeNameValue;
  let badgeDescValue;
  let badgeName = $_("journeys.imani.3d_print_team_management");
  let badgeDesc = $_("journeys.imani.team_manager_badge_desc");
  function handleCreateBadge() {
    if (creatingBadgeImage) {
      if (color && variant) {
        imaniBadgeVariant.set(variant);
        imaniBadgeColor.set(colors[color]);
        creatingBadgeImage = false;
        currNode.set(2);
      }
    } else {
      imaniBadgeName.set(badgeName);
      imaniBadgeDesc.set(badgeDesc);
      goto();
    }
  }
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-uhtnrw"><div class="heading svelte-uhtnrw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${creatingBadgeImage ? `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.lets_create_img_template for_badge"))}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.badge_img_ready_now_add_info"))}<!-- HTML_TAG_END -->`}`;
    }
  })}</div> <div class="sub-text svelte-uhtnrw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(creatingBadgeImage ? $_("journeys.imani.select_shape_color_then_click_continue") : $_("journeys.imani.click_fields_to_add_badge_name_and_desc"))}`;
    }
  })}</div> <div class="dash svelte-uhtnrw">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: $_("journeys.imani.new_badge").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape(creatingBadgeImage ? $_("journeys.imani.select_badge_shape_color") : $_("journeys.imani.add_badge_info"))}`;
          }
        })}</div> ${creatingBadgeImage ? `<div class="badges svelte-uhtnrw"><div class="badge svelte-uhtnrw"><div class="badge-container svelte-uhtnrw">${validate_component(Badge, "Badge").$$render($$result, { variant: "hexagon" }, {}, {})}</div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: variant === "hexagon",
            onClick: () => variant = "hexagon"
          },
          {},
          {}
        )}</div> <div class="badge svelte-uhtnrw"><div class="badge-container svelte-uhtnrw">${validate_component(Badge, "Badge").$$render($$result, { variant: "crest" }, {}, {})}</div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: variant === "crest",
            onClick: () => variant = "crest"
          },
          {},
          {}
        )}</div> <div class="badge svelte-uhtnrw"><div class="badge-container svelte-uhtnrw">${validate_component(Badge, "Badge").$$render($$result, { variant: "rounded-hexagon" }, {}, {})}</div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: variant === "rounded-hexagon",
            onClick: () => variant = "rounded-hexagon"
          },
          {},
          {}
        )}</div> <div class="badge svelte-uhtnrw"><div class="badge-container svelte-uhtnrw">${validate_component(Badge, "Badge").$$render($$result, { variant: "circle" }, {}, {})}</div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: variant === "circle",
            onClick: () => variant = "circle"
          },
          {},
          {}
        )}</div></div> <div class="colors svelte-uhtnrw"><div class="color svelte-uhtnrw"><div class="red palette svelte-uhtnrw"></div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: color === "red",
            onClick: () => color = "red"
          },
          {},
          {}
        )}</div> <div class="color svelte-uhtnrw"><div class="blue palette svelte-uhtnrw"></div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: color === "blue",
            onClick: () => color = "blue"
          },
          {},
          {}
        )}</div> <div class="color svelte-uhtnrw"><div class="green palette svelte-uhtnrw"></div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: color === "green",
            onClick: () => color = "green"
          },
          {},
          {}
        )}</div> <div class="color svelte-uhtnrw"><div class="yellow palette svelte-uhtnrw"></div> ${validate_component(Radio, "Radio").$$render(
          $$result,
          {
            checked: color === "yellow",
            onClick: () => color = "yellow"
          },
          {},
          {}
        )}</div></div>` : `<div class="input svelte-uhtnrw"><div class="label">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_name"))}`;
          }
        })}</div> <input type="text"${add_attribute("placeholder", $_("journeys.imani.3d_print_engineer"), 0)} class="svelte-uhtnrw"${add_attribute("value", badgeNameValue, 0)}> <div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.enter_badge_name_here"))}`;
          }
        })}</div></div> <div class="input svelte-uhtnrw"><div class="label">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.badge_description"))}`;
          }
        })}</div> <textarea${add_attribute("rows", 5, 0)}${add_attribute("placeholder", $_("journeys.imani.3d_print_engineer_badge_desc"), 0)} class="svelte-uhtnrw">${escape("")}</textarea> <div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.enter_badge_desc_here"))}`;
          }
        })}</div></div>`} <div class="button-container svelte-uhtnrw">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: handleCreateBadge,
            label: $_("components.continue"),
            variant: creatingBadgeImage && !(variant && color) || !creatingBadgeImage && !badgeDescValue ? "future-tech-disabled" : "future-tech"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ClTrRWBI.js.map
