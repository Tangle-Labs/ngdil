import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { R as Radio } from './Radio-d9d9faff.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { B as Badge } from './Badge-25915a90.js';
import { p as imaniBadgeVariant, o as imaniBadgeColor, a as currNode, m as imaniBadgeName, q as imaniBadgeDesc } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-uhtnrw>.svelte-uhtnrw.svelte-uhtnrw{padding:15px 0}.container.svelte-uhtnrw .badges.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw.svelte-uhtnrw{text-align:center;display:flex;flex-wrap:wrap;justify-content:center;align-content:center;align-items:flex-end}.container.svelte-uhtnrw .badges .badge.svelte-uhtnrw>.svelte-uhtnrw{flex-basis:100%;padding-bottom:5px;padding-top:20px}.container.svelte-uhtnrw .colors.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:100%;justify-content:space-between;box-sizing:border-box;padding:20px 12px}.container.svelte-uhtnrw .colors .color.svelte-uhtnrw.svelte-uhtnrw{display:flex;width:80px;justify-content:center;flex-wrap:wrap}.container.svelte-uhtnrw .colors .color .palette.svelte-uhtnrw.svelte-uhtnrw{width:80px;height:50px;width:100%;margin:10px 0}.container.svelte-uhtnrw .colors .color .palette.red.svelte-uhtnrw.svelte-uhtnrw{background:var(--red-900)}.container.svelte-uhtnrw .colors .color .palette.blue.svelte-uhtnrw.svelte-uhtnrw{background:var(--blue-900)}.container.svelte-uhtnrw .colors .color .palette.green.svelte-uhtnrw.svelte-uhtnrw{background:var(--green-900)}.container.svelte-uhtnrw .colors .color .palette.yellow.svelte-uhtnrw.svelte-uhtnrw{background:var(--secondary-900)}.container.svelte-uhtnrw .input.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0}.container.svelte-uhtnrw .input input.svelte-uhtnrw.svelte-uhtnrw,.container.svelte-uhtnrw .input textarea.svelte-uhtnrw.svelte-uhtnrw{padding:10px;font-family:var(--body-font);font-size:1rem;width:70%;margin:5px 0;resize:none;border:1px solid var(--black-500);user-select:none;border-radius:5px;box-sizing:border-box;outline:none}.container.svelte-uhtnrw .button-container.svelte-uhtnrw.svelte-uhtnrw{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
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
      goto("/demo/journeys/imani/confirm-badge");
    }
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-uhtnrw"}"><div class="${"heading svelte-uhtnrw"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
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
  })}</div>
	<div class="${"sub-text svelte-uhtnrw"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(creatingBadgeImage ? "Select the shape and color for your badge and click continue to proceed." : "Click the fields to add a badge name and description, then click continue to proceed.")}`;
    }
  })}</div>
	<div class="${"dash svelte-uhtnrw"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "NEW BADGE" }, {}, {
    default: () => {
      return `<div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape(creatingBadgeImage ? "Select your badge shape & color" : "Add Badge Information")}`;
        }
      })}</div>

			${creatingBadgeImage ? `<div class="${"badges svelte-uhtnrw"}"><div class="${"badge svelte-uhtnrw"}"><div class="${"badge-container svelte-uhtnrw"}">${validate_component(Badge, "Badge").$$render($$result, { variant: "hexagon" }, {}, {})}</div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: variant === "hexagon",
          onClick: () => variant = "hexagon"
        },
        {},
        {}
      )}</div>

					<div class="${"badge svelte-uhtnrw"}"><div class="${"badge-container svelte-uhtnrw"}">${validate_component(Badge, "Badge").$$render($$result, { variant: "crest" }, {}, {})}</div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: variant === "crest",
          onClick: () => variant = "crest"
        },
        {},
        {}
      )}</div>

					<div class="${"badge svelte-uhtnrw"}"><div class="${"badge-container svelte-uhtnrw"}">${validate_component(Badge, "Badge").$$render($$result, { variant: "rounded-hexagon" }, {}, {})}</div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: variant === "rounded-hexagon",
          onClick: () => variant = "rounded-hexagon"
        },
        {},
        {}
      )}</div>

					<div class="${"badge svelte-uhtnrw"}"><div class="${"badge-container svelte-uhtnrw"}">${validate_component(Badge, "Badge").$$render($$result, { variant: "circle" }, {}, {})}</div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: variant === "circle",
          onClick: () => variant = "circle"
        },
        {},
        {}
      )}</div></div>

				<div class="${"colors svelte-uhtnrw"}"><div class="${"color svelte-uhtnrw"}"><div class="${"red palette svelte-uhtnrw"}"></div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: color === "red",
          onClick: () => color = "red"
        },
        {},
        {}
      )}</div>

					<div class="${"color svelte-uhtnrw"}"><div class="${"blue palette svelte-uhtnrw"}"></div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: color === "blue",
          onClick: () => color = "blue"
        },
        {},
        {}
      )}</div>

					<div class="${"color svelte-uhtnrw"}"><div class="${"green palette svelte-uhtnrw"}"></div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: color === "green",
          onClick: () => color = "green"
        },
        {},
        {}
      )}</div>

					<div class="${"color svelte-uhtnrw"}"><div class="${"yellow palette svelte-uhtnrw"}"></div>
						${validate_component(Radio, "Radio").$$render(
        $$result,
        {
          checked: color === "yellow",
          onClick: () => color = "yellow"
        },
        {},
        {}
      )}</div></div>` : `<div class="${"input svelte-uhtnrw"}"><div class="${"label"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Name`;
        }
      })}</div>
					<input type="${"text"}" placeholder="${"3d Print Engineer"}" class="${"svelte-uhtnrw"}"${add_attribute("value", badgeNameValue, 0)}>
					<div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Enter Badge name here`;
        }
      })}</div></div>

				<div class="${"input svelte-uhtnrw"}"><div class="${"label"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Description`;
        }
      })}</div>
					<textarea${add_attribute("rows", 5, 0)} placeholder="${"3d Print Engineer Badge Description"}" class="${"svelte-uhtnrw"}">${""}</textarea>
					<div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Enter Badge description here`;
        }
      })}</div></div>`}
			<div class="${"button-container svelte-uhtnrw"}">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-a2e181a7.js.map
