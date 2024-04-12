import { c as create_ssr_component, f as subscribe, v as validate_component } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { C as Card } from './Card-cff9afa0.js';
import { A as Avatar } from './Avatar-85141636.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { s as peterEnrolledStudent, t as peterAssignedInternship, u as peterVerifiedInternship } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  padding-top: 5px;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 15px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 320px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Avatar, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, nodeCount, peterAssignedInternship, peterEnrolledStudent, peterVerifiedInternship } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n    nodeCount.set(0);\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>Hi Peter. Let’s get you <Highlight>started with enrolling your students.</Highlight> Select your\\n\\t\\t\\texperience to get started.</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\tSelect the experience to start Peter’s journey and evaluate and enrol students.\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-1.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Verify Student and enrol on Internationalisation course.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tHere you will use your self-sovereign identity to connect to the KW1C staff\\n\\t\\t\\t\\t\\t\\t\\t\\tdashboard, assess student eligibility for international internships, and enrol\\n\\t\\t\\t\\t\\t\\t\\t\\tstudents onto the internationalisation course.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterEnrolledStudent ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/login-kw1c');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterEnrolledStudent ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-2.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Issue internationalisation course badges and assign student internship placements.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tIn this journey you will issue internationalisation badges to students who were\\n\\t\\t\\t\\t\\t\\t\\t\\tsuccessful in their course studies and assign a student an international internship\\n\\t\\t\\t\\t\\t\\t\\t\\tplacement.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterAssignedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $peterEnrolledStudent\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/view-courses');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterAssignedInternship ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-3.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Verify students internship credentials</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\tAfter the return of students from their international internship you will verify\\n\\t\\t\\t\\t\\t\\t\\t\\ttheir participation and successful completion of their internship by verifying their\\n\\t\\t\\t\\t\\t\\t\\t\\tnew credentials issued by international companies.\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterVerifiedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $peterAssignedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/internship-results');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterVerifiedInternship ? 'Retry' : 'Get Started'}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t{#if $peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent}\\n\\t\\t\\t<div class=\\"other\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\t\\tlabel=\\"Try Another Journey\\" />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,GACf,CAIA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterEnrolledStudent, $$unsubscribe_peterEnrolledStudent;
  let $peterAssignedInternship, $$unsubscribe_peterAssignedInternship;
  let $peterVerifiedInternship, $$unsubscribe_peterVerifiedInternship;
  $$unsubscribe_peterEnrolledStudent = subscribe(peterEnrolledStudent, (value) => $peterEnrolledStudent = value);
  $$unsubscribe_peterAssignedInternship = subscribe(peterAssignedInternship, (value) => $peterAssignedInternship = value);
  $$unsubscribe_peterVerifiedInternship = subscribe(peterVerifiedInternship, (value) => $peterVerifiedInternship = value);
  $$result.css.add(css);
  $$unsubscribe_peterEnrolledStudent();
  $$unsubscribe_peterAssignedInternship();
  $$unsubscribe_peterVerifiedInternship();
  return `<div class="container svelte-1vk882u"><div class="heading svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Hi Peter. Let’s get you ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `started with enrolling your students.`;
        }
      })} Select your
			experience to get started.`;
    }
  })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `Select the experience to start Peter’s journey and evaluate and enrol students.`;
    }
  })}</div> <div class="cards svelte-1vk882u"><div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-1.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Verify Student and enrol on Internationalisation course.`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `Here you will use your self-sovereign identity to connect to the KW1C staff
								dashboard, assess student eligibility for international internships, and enrol
								students onto the internationalisation course.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterEnrolledStudent ? "completed" : "secondary",
          onClick: () => {
            goto();
          },
          label: $peterEnrolledStudent ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-2.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Issue internationalisation course badges and assign student internship placements.`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `In this journey you will issue internationalisation badges to students who were
								successful in their course studies and assign a student an international internship
								placement.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterAssignedInternship ? "completed" : $peterEnrolledStudent ? "secondary" : "disabled",
          onClick: () => {
            goto();
          },
          label: $peterAssignedInternship ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-3.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `Verify students internship credentials`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `After the return of students from their international internship you will verify
								their participation and successful completion of their internship by verifying their
								new credentials issued by international companies.`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterVerifiedInternship ? "completed" : $peterAssignedInternship ? "secondary" : "disabled",
          onClick: () => {
            goto();
          },
          label: $peterVerifiedInternship ? "Retry" : "Get Started"
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> ${$peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent ? `<div class="other">${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-19e9ff76.js.map
