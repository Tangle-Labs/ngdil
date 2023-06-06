import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { F as FutureTech } from './FutureTech-c6047ff7.js';
import { B as Badge } from './Badge-6150fe8c.js';
import { m as imaniBadgeColor, o as imaniBadgeVariant, l as imaniBadgeName, p as imaniBadgeDesc } from './flows.store-b2e554df.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-uygusj>.svelte-uygusj.svelte-uygusj{padding:15px 0}.container.svelte-uygusj .card-header.svelte-uygusj.svelte-uygusj{width:100%;display:flex;justify-content:space-between;padding:20px 0}.container.svelte-uygusj .badge.svelte-uygusj.svelte-uygusj{display:flex;padding:20px}.container.svelte-uygusj .badge.svelte-uygusj>.badge.svelte-uygusj{padding:0}.container.svelte-uygusj .badge .data.svelte-uygusj.svelte-uygusj{padding:0 30px}.container.svelte-uygusj .badge .data .text-block.svelte-uygusj.svelte-uygusj{padding-bottom:10px}.container.svelte-uygusj .button-container.svelte-uygusj.svelte-uygusj{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniBadgeColor, $$unsubscribe_imaniBadgeColor;
  let $imaniBadgeVariant, $$unsubscribe_imaniBadgeVariant;
  let $imaniBadgeName, $$unsubscribe_imaniBadgeName;
  let $imaniBadgeDesc, $$unsubscribe_imaniBadgeDesc;
  $$unsubscribe_imaniBadgeColor = subscribe(imaniBadgeColor, (value) => $imaniBadgeColor = value);
  $$unsubscribe_imaniBadgeVariant = subscribe(imaniBadgeVariant, (value) => $imaniBadgeVariant = value);
  $$unsubscribe_imaniBadgeName = subscribe(imaniBadgeName, (value) => $imaniBadgeName = value);
  $$unsubscribe_imaniBadgeDesc = subscribe(imaniBadgeDesc, (value) => $imaniBadgeDesc = value);
  $$result.css.add(css);
  $$unsubscribe_imaniBadgeColor();
  $$unsubscribe_imaniBadgeVariant();
  $$unsubscribe_imaniBadgeName();
  $$unsubscribe_imaniBadgeDesc();
  return `<div class="${"container svelte-uygusj"}"><div class="${"heading svelte-uygusj"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your badge template is looking great. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let\u2019s create the badge`;
        }
      })} template so
			it is available for trainees.`;
    }
  })}</div>
	<div class="${"sub-text svelte-uygusj"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the create badge button to confirm the badge template.`;
    }
  })}</div>
	<div class="${"dash svelte-uygusj"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY BADGES" }, {}, {
    default: () => {
      return `<div class="${"card-header svelte-uygusj"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Confirm Badge`;
        }
      })}</div>

			<div class="${"badge svelte-uygusj"}"><div class="${"badge svelte-uygusj"}">${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          fill: $imaniBadgeColor,
          variant: $imaniBadgeVariant
        },
        {},
        {}
      )}</div>

				<div class="${"data svelte-uygusj"}"><div class="${"text-block svelte-uygusj"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Name`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniBadgeName)}`;
        }
      })}</div></div>

					<div class="${"text-block svelte-uygusj"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Issuer`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Future Tech Co.`;
        }
      })}</div></div>

					<div class="${"text-block svelte-uygusj"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Description`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniBadgeDesc)}`;
        }
      })}</div></div></div></div>

			<div class="${"button-container svelte-uygusj"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "future-tech",
          label: "Create Badge",
          onClick: () => {
            goto("/demo/journeys/imani/badges");
          }
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6cd5ef31.js.map
