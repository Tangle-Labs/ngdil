import { c as create_ssr_component, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-ccob9i>.svelte-ccob9i{padding:15px 0}.container.svelte-ccob9i .card.svelte-ccob9i{width:100%}.container.svelte-ccob9i .card .card-content.svelte-ccob9i{padding:20px;display:flex}.container.svelte-ccob9i .card .card-content .content.svelte-ccob9i{width:50%}.container.svelte-ccob9i .card .card-content .content .list.svelte-ccob9i{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-ccob9i .card .card-content .content .list img.svelte-ccob9i{height:25px;padding-right:5px}.container.svelte-ccob9i .card .card-content .content .p.svelte-ccob9i{padding:30px 0}.container.svelte-ccob9i .card .card-content .img.svelte-ccob9i{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px;min-height:320px}.container.svelte-ccob9i .card .card-content .img img.svelte-ccob9i{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 100%;\\n}\\n.container .card .card-content {\\n  padding: 20px;\\n  display: flex;\\n}\\n.container .card .card-content .content {\\n  width: 50%;\\n}\\n.container .card .card-content .content .list {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  align-content: center;\\n  padding: 15px 0;\\n}\\n.container .card .card-content .content .list img {\\n  height: 25px;\\n  padding-right: 5px;\\n}\\n.container .card .card-content .content .p {\\n  padding: 30px 0;\\n}\\n.container .card .card-content .img {\\n  width: 50%;\\n  position: relative;\\n  box-sizing: border-box;\\n  margin-left: 30px;\\n  background: var(--white-500);\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  min-height: 320px;\\n}\\n.container .card .card-content .img img {\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  height: 275px;\\n  transform: translate(-50%, -50%);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { completedJourneys, dominiqueAppliedForJob, dominiqueEarnedCourseCred } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nfunction handleFinishCourse() {\\n    goto(\\"/demo/choose-journey\\");\\n}\\nonMount(() => {\\n    completedJourneys.update((u) => {\\n        const _unique = u.filter((_u) => _u !== \\"dominique\\");\\n        _unique.push(\\"dominique\\");\\n        return _unique;\\n    });\\n    dominiqueAppliedForJob.set(true);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t><Highlight>You are now an employee of the Big Business Corp.</Highlight> Let’s see what you have\\n\\t\\t\\tachieved.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Here is what you have achieved so far with your self-sovereign identity:</Typography>\\n\\t</div>\\n\\t<div class=\\"card\\">\\n\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Connected privately to Big Business Corp website</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Shared multiple credentials as a digital CV</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Got the job!</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Securely received your new Staff ID credential</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\tYou have successfully completed Dominique’s journey enrolling and obtaining a new\\n\\t\\t\\t\\t\\t\\t\\tcourse credential, sharing your credential to potential employers, and successfully\\n\\t\\t\\t\\t\\t\\t\\tlanding a new job.\\n\\t\\t\\t\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t\\t\\t\\tTo explore other journeys for employers and educators click continue.\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button variant=\\"secondary\\" label=\\"Continue\\" onClick=\\"{handleFinishCourse}\\" />&nbsp;\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"white\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"Contact NGDIL\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => window.open('https://ngdil.com/contact', '_blank')}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"img\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/dominique-3.svg\\" alt=\\"\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Card>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,IACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,sBAAS,CACtC,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,mBAAM,CAC5C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAI,CAChD,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,gBAAG,CACzC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAK,CAClC,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KACd,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,IAAI,CAAC,iBAAI,CACtC,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleFinishCourse() {
    goto();
  }
  $$result.css.add(css);
  return `<div class="container svelte-ccob9i"><div class="heading svelte-ccob9i">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `You are now an employee of the Big Business Corp.`;
        }
      })} Let’s see what you have
			achieved.`;
    }
  })}</div> <div class="sub-text svelte-ccob9i">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Here is what you have achieved so far with your self-sovereign identity:`;
    }
  })}</div> <div class="card svelte-ccob9i">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-ccob9i"><div class="content svelte-ccob9i"><div class="list svelte-ccob9i"><img src="/imgs/check-circle.png" alt="" class="svelte-ccob9i"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Connected privately to Big Business Corp website`;
        }
      })}</div> <div class="list svelte-ccob9i"><img src="/imgs/check-circle.png" alt="" class="svelte-ccob9i"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Shared multiple credentials as a digital CV`;
        }
      })}</div> <div class="list svelte-ccob9i"><img src="/imgs/check-circle.png" alt="" class="svelte-ccob9i"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Got the job!`;
        }
      })}</div> <div class="list svelte-ccob9i"><img src="/imgs/check-circle.png" alt="" class="svelte-ccob9i"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Securely received your new Staff ID credential`;
        }
      })}</div> <div class="p svelte-ccob9i">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `You have successfully completed Dominique’s journey enrolling and obtaining a new
							course credential, sharing your credential to potential employers, and successfully
							landing a new job.
							<br><br>
							To explore other journeys for employers and educators click continue.`;
        }
      })}</div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: "Continue",
          onClick: handleFinishCourse
        },
        {},
        {}
      )} 
					${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "white",
          label: "Contact NGDIL",
          onClick: () => window.open("https://ngdil.com/contact", "_blank")
        },
        {},
        {}
      )}</div> <div class="img svelte-ccob9i" data-svelte-h="svelte-1v2o7cz"><img src="/imgs/dominique-3.svg" alt="" class="svelte-ccob9i"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-da19e1a7.js.map
