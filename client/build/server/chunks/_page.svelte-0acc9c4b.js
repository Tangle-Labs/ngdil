import { c as create_ssr_component, v as validate_component } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { c as currStep } from './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-t13qy7.svelte-t13qy7.svelte-t13qy7{display:flex;flex-wrap:wrap;text-align:center;justify-content:center}.container.svelte-t13qy7>.svelte-t13qy7.svelte-t13qy7{padding:20px 0;width:100%}.container.svelte-t13qy7>.cards.svelte-t13qy7.svelte-t13qy7{display:flex;justify-content:space-between}.container.svelte-t13qy7>.cards.svelte-t13qy7>.card.svelte-t13qy7{width:48%}.container.svelte-t13qy7>.cards>.card .card-content.svelte-t13qy7.svelte-t13qy7{padding-bottom:15px}.container.svelte-t13qy7>.cards>.card .card-content .info.svelte-t13qy7.svelte-t13qy7{padding:10px}.container.svelte-t13qy7 .subtitle.svelte-t13qy7.svelte-t13qy7{padding-bottom:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleContinue() {
    currStep.set(2);
    goto("/demo/choose-journey");
  }
  $$result.css.add(css);
  return `<div class="${"container svelte-t13qy7"}"><div class="${"heading svelte-t13qy7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `To begin with self-sovereign identity you must first have an identity wallet app.`;
    }
  })}</div>

	<div class="${"desc svelte-t13qy7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the application you wish to download by clicking the button and follow the onscreen
			installation instructions to get started.
		`;
    }
  })}</div>

	<div class="${"cards svelte-t13qy7"}"><div class="${"card tl-wallet svelte-t13qy7"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-t13qy7"}"><img src="${"/imgs/vira.png"}">
					<div class="${"wallet-name"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
        default: () => {
          return `Vira Identity Wallet`;
        }
      })}</div>
					<div class="${"info svelte-t13qy7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `From Tangle Labs`;
        }
      })}</div>
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          onClick: () => {
          },
          label: "Download"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>
		<div class="${"card impierce-wallet svelte-t13qy7"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="${"card-content svelte-t13qy7"}"><img src="${"/imgs/impierce.png"}">
					<div class="${"wallet-name"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
        default: () => {
          return `Impierce Wallet`;
        }
      })}</div>
					<div class="${"info svelte-t13qy7"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `From Impierce`;
        }
      })}</div>

					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          onClick: () => {
          },
          label: "Download"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div></div>

	<div class="${"continue svelte-t13qy7"}"><div class="${"subtitle svelte-t13qy7"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Already downloaded the wallet?`;
    }
  })}</div>
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "white",
      label: "continue",
      onClick: handleContinue
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0acc9c4b.js.map
