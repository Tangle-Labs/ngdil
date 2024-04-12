import { c as create_ssr_component, j as add_styles, v as validate_component } from './ssr-b8a31716.js';
import { C as Card } from './Card-cff9afa0.js';

const css = {
  code: ".backdrop.svelte-14quojq{position:fixed;top:0;left:0;display:flex;width:100vw;height:100vh;z-index:5;background:rgba(93, 102, 107, 0.3);backdrop-filter:blur(5px)}.modal.svelte-14quojq{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:10;background:var(--white-300);width:max-content;max-width:90vw}@media only screen and (max-width: 700px){.modal.svelte-14quojq{min-width:80vw}}",
  map: '{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<style lang=\\"scss\\">.backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 5;\\n  background: rgba(93, 102, 107, 0.3);\\n  backdrop-filter: blur(5px);\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 10;\\n  background: var(--white-300);\\n  width: max-content;\\n  max-width: 90vw;\\n}\\n.modal .modal-header {\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid var(--border);\\n}\\n\\n@media only screen and (max-width: 700px) {\\n  .modal {\\n    min-width: 80vw;\\n  }\\n}</style>\\n\\n<script lang=\\"ts\\">import { Card, Button } from \\"../\\";\\nimport { fade, fly } from \\"svelte/transition\\";\\nexport let isOpen = false;\\nexport let withBorder = false;\\nexport let withoutPadding = false;\\nexport let borderRadius = 0;\\n<\/script>\\n\\n{#if isOpen}\\n\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t<div class=\\"backdrop\\" on:click=\\"{() => (isOpen = false)}\\" transition:fade></div>\\n\\t<div\\n\\t\\tclass=\\"modal\\"\\n\\t\\ttransition:fly=\\"{{ y: 50, duration: 400 }}\\"\\n\\t\\tstyle:border-radius=\\"{`${borderRadius}px`}\\"\\n\\t>\\n\\t\\t<Card withBorder=\\"{withBorder}\\" withoutPadding=\\"{withoutPadding}\\" borderRadius=\\"{borderRadius}\\">\\n\\t\\t\\t<slot />\\n\\t\\t</Card>\\n\\t</div>\\n{/if}\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAC3B,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACnC,eAAe,CAAE,KAAK,GAAG,CAC3B,CAEA,qBAAO,CACL,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,IACb,CAMA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACxC,qBAAO,CACL,SAAS,CAAE,IACb,CACF"}'
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { withBorder = false } = $$props;
  let { withoutPadding = false } = $$props;
  let { borderRadius = 0 } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.withoutPadding === void 0 && $$bindings.withoutPadding && withoutPadding !== void 0)
    $$bindings.withoutPadding(withoutPadding);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  $$result.css.add(css);
  return `${isOpen ? ` <div class="backdrop svelte-14quojq"></div> <div class="modal svelte-14quojq"${add_styles({ "border-radius": `${borderRadius}px` })}>${validate_component(Card, "Card").$$render($$result, { withBorder, withoutPadding, borderRadius }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : ``}`;
});

export { Modal as M };
//# sourceMappingURL=Modal-de587996.js.map
