import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { R as Radio } from './Radio-6488f3a6.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { B as Badge } from './Badge-a96c14d0.js';
import { p as imaniBadgeVariant, o as imaniBadgeColor, a as currNode, m as imaniBadgeName, q as imaniBadgeDesc } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-uhtnrw>.svelte-uhtnrw.svelte-uhtnrw{padding:15px 0}.container.svelte-uhtnrw .badges.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw.svelte-uhtnrw{text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-content:center;align-items:flex-end}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw>.svelte-uhtnrw{flex-basis:100%;padding-bottom:5px;padding-top:20px}.container.svelte-uhtnrw .colors.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between;box-sizing:border-box;padding:20px 12px}.container.svelte-uhtnrw .colors .color.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:80px;justify-content:center;flex-wrap:wrap}.container.svelte-uhtnrw .colors .color .palette.svelte-uhtnrw.svelte-uhtnrw{width:80px;height:50px;width:100%;margin:10px 0}.container.svelte-uhtnrw .colors .color .palette.red.svelte-uhtnrw.svelte-uhtnrw{background:var(--red-900)}.container.svelte-uhtnrw .colors .color .palette.blue.svelte-uhtnrw.svelte-uhtnrw{background:var(--blue-900)}.container.svelte-uhtnrw .colors .color .palette.green.svelte-uhtnrw.svelte-uhtnrw{background:var(--green-900)}.container.svelte-uhtnrw .colors .color .palette.yellow.svelte-uhtnrw.svelte-uhtnrw{background:var(--secondary-900)}.container.svelte-uhtnrw .input.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0}.container.svelte-uhtnrw .input input.svelte-uhtnrw.svelte-uhtnrw,.container.svelte-uhtnrw .input textarea.svelte-uhtnrw.svelte-uhtnrw{padding:10px;font-family:var(--body-font);font-size:1rem;width:70%;margin:5px 0;resize:none;border:1px solid var(--black-500);user-select:none;border-radius:5px;box-sizing:border-box;outline:none}.container.svelte-uhtnrw .button-container.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .badges {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.container .badges .badge {\\n  text-align: center;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: flex-end;\\n}\\n.container .badges .badge > * {\\n  flex-basis: 100%;\\n  padding-bottom: 5px;\\n  padding-top: 20px;\\n}\\n.container .colors {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  box-sizing: border-box;\\n  padding: 20px 12px;\\n}\\n.container .colors .color {\\n  display: flex;\\n  width: 80px;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container .colors .color .palette {\\n  width: 80px;\\n  height: 50px;\\n  width: 100%;\\n  margin: 10px 0;\\n}\\n.container .colors .color .palette.red {\\n  background: var(--red-900);\\n}\\n.container .colors .color .palette.blue {\\n  background: var(--blue-900);\\n}\\n.container .colors .color .palette.green {\\n  background: var(--green-900);\\n}\\n.container .colors .color .palette.yellow {\\n  background: var(--secondary-900);\\n}\\n.container .input {\\n  padding: 10px 0;\\n}\\n.container .input input,\\n.container .input textarea {\\n  padding: 10px;\\n  font-family: var(--body-font);\\n  font-size: 1rem;\\n  width: 70%;\\n  margin: 5px 0;\\n  resize: none;\\n  border: 1px solid var(--black-500);\\n  user-select: none;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  outline: none;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal, Badge, Radio } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniBadgeColor, imaniBadgeDesc, imaniBadgeName, imaniBadgeVariant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet color = null;\\nlet variant = null;\\nlet creatingBadgeImage = true;\\nlet badgeNameValue;\\nlet badgeDescValue;\\nlet badgeName = \\"3d Print Team Management\\";\\nlet badgeDesc = \\"This badge is to certify the holder demonstrates the ability to operate as a team manager within an advanced technology 3d print environment.\\";\\nconst colors = {\\n    red: \\"var(--red-900)\\",\\n    green: \\"var(--green-900)\\",\\n    yellow: \\"var(--secondary-900)\\",\\n    blue: \\"var(--blue-900)\\"\\n};\\nfunction handleCreateBadge() {\\n    if (creatingBadgeImage) {\\n        if (color && variant) {\\n            imaniBadgeVariant.set(variant);\\n            imaniBadgeColor.set(colors[color]);\\n            creatingBadgeImage = false;\\n            currNode.set(2);\\n        }\\n    }\\n    else {\\n        imaniBadgeName.set(badgeName);\\n        imaniBadgeDesc.set(badgeDesc);\\n        goto(\\"/demo/journeys/imani/confirm-badge\\");\\n    }\\n}\\nonMount(() => {\\n    currNode.set(1);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if creatingBadgeImage}\\n\\t\\t\\t\\tA badge needs to look the part. <Highlight>Let’s create an image template</Highlight>for the\\n\\t\\t\\t\\tbadge in the creator.\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\tNow we <Highlight>have our badge image ready,</Highlight> let’s give the badge some information\\n\\t\\t\\t\\tto show what it is for.\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{creatingBadgeImage\\n\\t\\t\\t\\t? \\"Select the shape and color for your badge and click continue to proceed.\\"\\n\\t\\t\\t\\t: \\"Click the fields to add a badge name and description, then click continue to proceed.\\"}</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"NEW BADGE\\">\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t>{creatingBadgeImage\\n\\t\\t\\t\\t\\t\\t? \\"Select your badge shape & color\\"\\n\\t\\t\\t\\t\\t\\t: \\"Add Badge Information\\"}</Typography>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if creatingBadgeImage}\\n\\t\\t\\t\\t<div class=\\"badges\\">\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"hexagon\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'hexagon'}\\" onClick=\\"{() => (variant = 'hexagon')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"crest\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'crest'}\\" onClick=\\"{() => (variant = 'crest')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"rounded-hexagon\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio\\n\\t\\t\\t\\t\\t\\t\\tchecked=\\"{variant === 'rounded-hexagon'}\\"\\n\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => (variant = 'rounded-hexagon')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"badge\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"badge-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Badge variant=\\"circle\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{variant === 'circle'}\\" onClick=\\"{() => (variant = 'circle')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"colors\\">\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"red palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'red'}\\" onClick=\\"{() => (color = 'red')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"blue palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'blue'}\\" onClick=\\"{() => (color = 'blue')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"green palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'green'}\\" onClick=\\"{() => (color = 'green')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"color\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"yellow palette\\"></div>\\n\\t\\t\\t\\t\\t\\t<Radio checked=\\"{color === 'yellow'}\\" onClick=\\"{() => (color = 'yellow')}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<div class=\\"input\\">\\n\\t\\t\\t\\t\\t<div class=\\"label\\"><Typography variant=\\"list\\">Badge Name</Typography></div>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\tplaceholder=\\"3d Print Engineer\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => (badgeNameValue = badgeName)}\\"\\n\\t\\t\\t\\t\\t\\tbind:value=\\"{badgeNameValue}\\" />\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Enter Badge name here</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"input\\">\\n\\t\\t\\t\\t\\t<div class=\\"label\\"><Typography variant=\\"list\\">Badge Description</Typography></div>\\n\\t\\t\\t\\t\\t<textarea\\n\\t\\t\\t\\t\\t\\trows=\\"{5}\\"\\n\\t\\t\\t\\t\\t\\tbind:value=\\"{badgeDescValue}\\"\\n\\t\\t\\t\\t\\t\\tplaceholder=\\"3d Print Engineer Badge Description\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => (badgeDescValue = badgeDesc)}\\"></textarea>\\n\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Enter Badge description here</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tonClick=\\"{handleCreateBadge}\\"\\n\\t\\t\\t\\t\\tlabel=\\"Continue\\"\\n\\t\\t\\t\\t\\tvariant=\\"{(creatingBadgeImage && !(variant && color)) ||\\n\\t\\t\\t\\t\\t(!creatingBadgeImage && !(badgeDescValue && badgeNameValue))\\n\\t\\t\\t\\t\\t\\t? 'future-tech-disabled'\\n\\t\\t\\t\\t\\t\\t: 'future-tech'}\\" />\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,4BAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,wBAAU,CAAC,mCAAQ,CACjB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,OAAO,CAAC,kCAAO,CACxB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,QACf,CACA,wBAAU,CAAC,OAAO,CAAC,oBAAM,CAAG,cAAE,CAC5B,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,IACf,CACA,wBAAU,CAAC,mCAAQ,CACjB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,aAAa,CAC9B,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,wBAAU,CAAC,OAAO,CAAC,kCAAO,CACxB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,oCAAS,CACjC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAAC,CACf,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,gCAAK,CACrC,UAAU,CAAE,IAAI,SAAS,CAC3B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,iCAAM,CACtC,UAAU,CAAE,IAAI,UAAU,CAC5B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,kCAAO,CACvC,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,wBAAU,CAAC,OAAO,CAAC,MAAM,CAAC,QAAQ,mCAAQ,CACxC,UAAU,CAAE,IAAI,eAAe,CACjC,CACA,wBAAU,CAAC,kCAAO,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,MAAM,CAAC,iCAAK,CACvB,wBAAU,CAAC,MAAM,CAAC,oCAAS,CACzB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CAClC,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,6CAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB"}`
};
let badgeName = "3d Print Team Management";
let badgeDesc = "This badge is to certify the holder demonstrates the ability to operate as a team manager within an advanced technology 3d print environment.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color = null;
  let variant = null;
  let creatingBadgeImage = true;
  let badgeNameValue;
  let badgeDescValue;
  const colors = {
    red: "var(--red-900)",
    green: "var(--green-900)",
    yellow: "var(--secondary-900)",
    blue: "var(--blue-900)"
  };
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
  return `<div class="container svelte-uhtnrw"><div class="heading svelte-uhtnrw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${creatingBadgeImage ? `A badge needs to look the part. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let’s create an image template`;
        }
      })}for the
				badge in the creator.` : `Now we ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `have our badge image ready,`;
        }
      })} let’s give the badge some information
				to show what it is for.`}`;
    }
  })}</div> <div class="sub-text svelte-uhtnrw">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(creatingBadgeImage ? "Select the shape and color for your badge and click continue to proceed." : "Click the fields to add a badge name and description, then click continue to proceed.")}`;
    }
  })}</div> <div class="dash svelte-uhtnrw">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "NEW BADGE" }, {}, {
    default: () => {
      return `<div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape(creatingBadgeImage ? "Select your badge shape & color" : "Add Badge Information")}`;
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
          return `Badge Name`;
        }
      })}</div> <input type="text" placeholder="3d Print Engineer" class="svelte-uhtnrw"${add_attribute("value", badgeNameValue, 0)}> <div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Enter Badge name here`;
        }
      })}</div></div> <div class="input svelte-uhtnrw"><div class="label">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Description`;
        }
      })}</div> <textarea${add_attribute("rows", 5, 0)} placeholder="3d Print Engineer Badge Description" class="svelte-uhtnrw">${escape("")}</textarea> <div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Enter Badge description here`;
        }
      })}</div></div>`} <div class="button-container svelte-uhtnrw">${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: handleCreateBadge,
          label: "Continue",
          variant: creatingBadgeImage && !(variant && color) || !creatingBadgeImage && !badgeDescValue ? "future-tech-disabled" : "future-tech"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3ad2f390.js.map
