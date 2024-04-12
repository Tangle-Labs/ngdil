import { c as create_ssr_component, f as subscribe, v as validate_component, d as add_attribute } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { A as Avatar } from './Avatar-85141636.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { n as nodeCount, d as dominiqueEarnedCourseCred, e as dominiqueSharedCred, f as dominiqueAppliedForJob } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  padding-top: 5px;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 15px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 320px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Avatar, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueAppliedForJob, dominiqueEarnedCourseCred, dominiqueSharedCred, nodeCount } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n    nodeCount.set(0);\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Hi Dominique. <Highlight>Let’s get you started on your learning journey.</Highlight>Select\\n\\t\\t\\tyour experience to get started.</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\tSelect the first experience to start Dominique’s journey and enrol at KW1C to obtain your\\n\\t\\t\\tcourse credential.\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/dominique-1.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Enrol at KW1C and earn a course credential.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>Here you will use your self-sovereign identity to connect to the KW1C learning\\n\\t\\t\\t\\t\\t\\t\\t\\tportal, apply for an educational course, complete the course and obtain your first\\n\\t\\t\\t\\t\\t\\t\\t\\tverifiable credential.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$dominiqueEarnedCourseCred ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tnodeCount.set(5);\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/dominique/earn-a-cred');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$dominiqueEarnedCourseCred ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/dominique-2.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Share your new credential on social media.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tHere you will connect your identity to a social job network and share your new\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential with prospective employers as you search for a new job.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$dominiqueSharedCred\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $dominiqueEarnedCourseCred\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tnodeCount.set(4);\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/dominique/share-a-cred');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$dominiqueSharedCred ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/dominique-3.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Apply for a job with your digital CV.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tHere you will connect to an interested employer and share a number of credentials as\\n\\t\\t\\t\\t\\t\\t\\t\\ta combined digital CV to land you your new job.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$dominiqueAppliedForJob\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $dominiqueSharedCred\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tnodeCount.set(5);\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/dominique/apply-for-job');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$dominiqueAppliedForJob ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t{#if $dominiqueAppliedForJob && $dominiqueEarnedCourseCred && $dominiqueSharedCred}\\n\\t\\t\\t<div class=\\"other\\" style=\\"{'padding-top: 20px'}\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\t\\tlabel=\\"Try Another Journey\\" />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,GACf,CAIA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueEarnedCourseCred, $$unsubscribe_dominiqueEarnedCourseCred;
  let $dominiqueSharedCred, $$unsubscribe_dominiqueSharedCred;
  let $dominiqueAppliedForJob, $$unsubscribe_dominiqueAppliedForJob;
  $$unsubscribe_dominiqueEarnedCourseCred = subscribe(dominiqueEarnedCourseCred, (value) => $dominiqueEarnedCourseCred = value);
  $$unsubscribe_dominiqueSharedCred = subscribe(dominiqueSharedCred, (value) => $dominiqueSharedCred = value);
  $$unsubscribe_dominiqueAppliedForJob = subscribe(dominiqueAppliedForJob, (value) => $dominiqueAppliedForJob = value);
  $$result.css.add(css);
  $$unsubscribe_dominiqueEarnedCourseCred();
  $$unsubscribe_dominiqueSharedCred();
  $$unsubscribe_dominiqueAppliedForJob();
  return `<div class="container svelte-1vk882u"><div class="heading svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Hi Dominique. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let’s get you started on your learning journey.`;
        }
      })}Select
			your experience to get started.`;
    }
  })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the first experience to start Dominique’s journey and enrol at KW1C to obtain your
			course credential.`;
    }
  })}</div> <div class="cards svelte-1vk882u"><div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique-1.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Enrol at KW1C and earn a course credential.`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will use your self-sovereign identity to connect to the KW1C learning
								portal, apply for an educational course, complete the course and obtain your first
								verifiable credential.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueEarnedCourseCred ? "completed" : "secondary",
          onClick: () => {
            nodeCount.set(5);
            goto();
          },
          label: $dominiqueEarnedCourseCred ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique-2.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Share your new credential on social media.`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will connect your identity to a social job network and share your new
								credential with prospective employers as you search for a new job.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueSharedCred ? "completed" : $dominiqueEarnedCourseCred ? "secondary" : "disabled",
          onClick: () => {
            nodeCount.set(4);
            goto();
          },
          label: $dominiqueSharedCred ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique-3.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Apply for a job with your digital CV.`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will connect to an interested employer and share a number of credentials as
								a combined digital CV to land you your new job.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $dominiqueAppliedForJob ? "completed" : $dominiqueSharedCred ? "secondary" : "disabled",
          onClick: () => {
            nodeCount.set(5);
            goto();
          },
          label: $dominiqueAppliedForJob ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> ${$dominiqueAppliedForJob && $dominiqueEarnedCourseCred && $dominiqueSharedCred ? `<div class="other"${add_attribute("style", "padding-top: 20px", 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      onClick: () => goto(),
      label: "Try Another Journey"
    },
    {},
    {}
  )}</div>` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4e18c46f.js.map
