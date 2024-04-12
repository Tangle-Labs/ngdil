import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { a as currNode, n as nodeCount, d as dominiqueEarnedCourseCred } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-wu4iii>.svelte-wu4iii{padding:15px 0}.container.svelte-wu4iii .card.svelte-wu4iii{width:100%}.container.svelte-wu4iii .card .card-content.svelte-wu4iii{padding:20px;display:flex}.container.svelte-wu4iii .card .card-content .content.svelte-wu4iii{width:50%}.container.svelte-wu4iii .card .card-content .content .list.svelte-wu4iii{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-wu4iii .card .card-content .content .list img.svelte-wu4iii{height:25px;padding-right:5px}.container.svelte-wu4iii .card .card-content .content .p.svelte-wu4iii{padding:30px 0}.container.svelte-wu4iii .card .card-content .img.svelte-wu4iii{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-wu4iii .card .card-content .img img.svelte-wu4iii{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 100%;\\n}\\n.container .card .card-content {\\n  padding: 20px;\\n  display: flex;\\n}\\n.container .card .card-content .content {\\n  width: 50%;\\n}\\n.container .card .card-content .content .list {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  align-content: center;\\n  padding: 15px 0;\\n}\\n.container .card .card-content .content .list img {\\n  height: 25px;\\n  padding-right: 5px;\\n}\\n.container .card .card-content .content .p {\\n  padding: 30px 0;\\n}\\n.container .card .card-content .img {\\n  width: 50%;\\n  position: relative;\\n  box-sizing: border-box;\\n  margin-left: 30px;\\n  background: var(--white-500);\\n  border: 1px solid black;\\n  border-radius: 10px;\\n}\\n.container .card .card-content .img img {\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  height: 275px;\\n  transform: translate(-50%, -50%);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueEarnedCourseCred, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nfunction handleFinishCourse() {\\n    currNode.set(0);\\n    nodeCount.set(0);\\n    dominiqueEarnedCourseCred.set(true);\\n    goto(\\"/demo/journeys/dominique\\");\\n}\\nonMount(() => currNode.set(5));\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Amazing, <Highlight>you’ve successfully enrolled with KW1C</Highlight> and earned your course\\n\\t\\t\\tcredential.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Here is what you have achieved so far with your self-sovereign identity:</Typography>\\n\\t</div>\\n\\t<div class=\\"card\\">\\n\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Passwordless login to the KW1C portal</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Privately shared your enrolment credentials</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Completed your course at KW1C</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Privately received a new course credential</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\tNow you have your new credential, let’s get sharing it with potential employers. Click\\n\\t\\t\\t\\t\\t\\t\\tcontinue to move on with your journey.\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button variant=\\"secondary\\" label=\\"continue\\" onClick=\\"{handleFinishCourse}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"img\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/dominique-1.svg\\" alt=\\"\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Card>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,IACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,sBAAS,CACtC,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,mBAAM,CAC5C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAI,CAChD,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,gBAAG,CACzC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAK,CAClC,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,IAAI,CAAC,iBAAI,CACtC,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishCourse() {
    currNode.set(0);
    nodeCount.set(0);
    dominiqueEarnedCourseCred.set(true);
    goto();
  }
  $$result.css.add(css);
  return `<div class="container svelte-wu4iii"><div class="heading svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Amazing, ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `you’ve successfully enrolled with KW1C`;
        }
      })} and earned your course
			credential.`;
    }
  })}</div> <div class="sub-text svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Here is what you have achieved so far with your self-sovereign identity:`;
    }
  })}</div> <div class="card svelte-wu4iii">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-wu4iii"><div class="content svelte-wu4iii"><div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Passwordless login to the KW1C portal`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Privately shared your enrolment credentials`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Completed your course at KW1C`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Privately received a new course credential`;
        }
      })}</div> <div class="p svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Now you have your new credential, let’s get sharing it with potential employers. Click
							continue to move on with your journey.`;
        }
      })}</div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: "continue",
          onClick: handleFinishCourse
        },
        {},
        {}
      )}</div> <div class="img svelte-wu4iii" data-svelte-h="svelte-bvhrdd"><img src="/imgs/dominique-1.svg" alt="" class="svelte-wu4iii"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-de2850af.js.map
