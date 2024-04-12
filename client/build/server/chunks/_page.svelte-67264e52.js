import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { c as currStep } from './onboarding.store-97913595.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-gwmgmw.svelte-gwmgmw{display:flex;flex-wrap:wrap;justify-content:center}.container.svelte-gwmgmw>.svelte-gwmgmw{padding:20px 0;text-align:center}.container.svelte-gwmgmw>.button.svelte-gwmgmw{padding-top:60px;width:100%}.container.svelte-gwmgmw>.heading.svelte-gwmgmw,.container.svelte-gwmgmw>.desc.svelte-gwmgmw{width:40vw}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  text-align: center;\\n}\\n.container > .button {\\n  padding-top: 60px;\\n  width: 100%;\\n}\\n.container > .heading, .container > .desc {\\n  width: 40vw;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Button, Hightlight } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currStep } from \\"$lib/stores/onboarding.store\\";\\nimport { onMount } from \\"svelte\\";\\nfunction handleContinue() {\\n    currStep.set(1);\\n    goto(\\"/demo/download-wallet\\");\\n}\\nonMount(() => {\\n    currStep.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Welcome to the <Highlight>NGDIL interactive demo</Highlight> for self-sovereign identity in learning.</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\tHere we will explore the value SSI can bring to the individual participants within the\\n\\t\\t\\teducation and learning space, from learners, to educators, and employers.\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"button\\">\\n\\t\\t<Button variant=\\"secondary\\" label=\\"start your journey\\" onClick=\\"{handleContinue}\\" />\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,sCAAW,CAC5B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MACnB,CACA,wBAAU,CAAG,cAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,MACd,CACA,wBAAU,CAAG,qBAAQ,CACnB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACT,CACA,wBAAU,CAAG,sBAAQ,CAAE,wBAAU,CAAG,mBAAM,CACxC,KAAK,CAAE,IACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleContinue() {
    currStep.set(1);
    goto();
  }
  $$result.css.add(css);
  return `<div class="container svelte-gwmgmw"><div class="heading svelte-gwmgmw">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Welcome to the ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `NGDIL interactive demo`;
        }
      })} for self-sovereign identity in learning.`;
    }
  })}</div> <div class="desc svelte-gwmgmw">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Here we will explore the value SSI can bring to the individual participants within the
			education and learning space, from learners, to educators, and employers.`;
    }
  })}</div> <div class="button svelte-gwmgmw">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      label: "start your journey",
      onClick: handleContinue
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-67264e52.js.map
