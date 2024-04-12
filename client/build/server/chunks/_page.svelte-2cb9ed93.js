import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { T as Typography } from './Typography-011834f4.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { F as FutureTech } from './FutureTech-52872485.js';
import { B as Badge } from './Badge-25915a90.js';
import { o as imaniBadgeColor, p as imaniBadgeVariant, m as imaniBadgeName, q as imaniBadgeDesc } from './flows.store-72d7210a.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-mlhifd>.svelte-mlhifd.svelte-mlhifd{padding:15px 0}.container.svelte-mlhifd .card-header.svelte-mlhifd.svelte-mlhifd{width:100%;display:flex;justify-content:space-between;padding:10px 15px}.container.svelte-mlhifd .badge.svelte-mlhifd.svelte-mlhifd{display:flex;padding:10px 20px}.container.svelte-mlhifd .badge.svelte-mlhifd>.badge.svelte-mlhifd{padding:0}.container.svelte-mlhifd .badge .data.svelte-mlhifd.svelte-mlhifd{padding:0 30px}.container.svelte-mlhifd .badge .data .text-block.svelte-mlhifd.svelte-mlhifd{padding-bottom:10px}.container.svelte-mlhifd .button-container.svelte-mlhifd.svelte-mlhifd{padding:10px 0;width:100%;display:flex;justify-content:flex-end}",
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
  return `<div class="${"container svelte-mlhifd"}"><div class="${"heading svelte-mlhifd"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your badge template is looking great. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let’s save the badge`;
        }
      })} template so
			it is available for trainees.`;
    }
  })}</div>
	<div class="${"sub-text svelte-mlhifd"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the save badge button to confirm the badge template.`;
    }
  })}</div>
	<div class="${"dash svelte-mlhifd"}">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY BADGES" }, {}, {
    default: () => {
      return `<div class="${"card-header svelte-mlhifd"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Confirm Badge`;
        }
      })}</div>

			<div class="${"badge svelte-mlhifd"}"><div class="${"badge svelte-mlhifd"}">${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          fill: $imaniBadgeColor,
          variant: $imaniBadgeVariant
        },
        {},
        {}
      )}</div>

				<div class="${"data svelte-mlhifd"}"><div class="${"text-block svelte-mlhifd"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Name`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniBadgeName)}`;
        }
      })}</div></div>

					<div class="${"text-block svelte-mlhifd"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Issuer`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Future Tech Co.`;
        }
      })}</div></div>

					<div class="${"text-block svelte-mlhifd"}"><div class="${"header"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Badge Description`;
        }
      })}</div>
						<div class="${"content"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniBadgeDesc)}`;
        }
      })}</div></div></div></div>

			<div class="${"button-container svelte-mlhifd"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "future-tech",
          label: "Save Badge",
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
//# sourceMappingURL=_page.svelte-2cb9ed93.js.map
