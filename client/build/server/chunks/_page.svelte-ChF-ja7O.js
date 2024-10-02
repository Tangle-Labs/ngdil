import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { A as Avatar } from './Avatar-CYgDjTlo.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { t as peterEnrolledStudent, u as peterAssignedInternship, v as peterVerifiedInternship } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1vk882u.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:center;flex-wrap:wrap}.container.svelte-1vk882u>.svelte-1vk882u.svelte-1vk882u{padding:20px 0;width:100%}.container.svelte-1vk882u .desc.svelte-1vk882u.svelte-1vk882u{padding-bottom:5px;padding-top:5px}.container.svelte-1vk882u .cards.svelte-1vk882u.svelte-1vk882u{width:100%}.container.svelte-1vk882u .cards.svelte-1vk882u>.card.svelte-1vk882u{width:100%;padding:15px 0}.container.svelte-1vk882u .cards>.card .card-content.svelte-1vk882u.svelte-1vk882u{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1vk882u .cards>.card .card-content .text.svelte-1vk882u.svelte-1vk882u{width:calc(100% - 320px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.container > * {\\n  padding: 20px 0;\\n  width: 100%;\\n}\\n.container .desc {\\n  padding-bottom: 5px;\\n  padding-top: 5px;\\n}\\n.container .sub-title {\\n  padding-top: 0;\\n}\\n.container .cards {\\n  width: 100%;\\n}\\n.container .cards > .card {\\n  width: 100%;\\n  padding: 15px 0;\\n}\\n.container .cards > .card .card-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: left;\\n}\\n.container .cards > .card .card-content .text {\\n  width: calc(100% - 320px);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Avatar, Button } from \\"$lib/components\\";\\nimport { currNode, nodeCount, peterAssignedInternship, peterEnrolledStudent, peterVerifiedInternship } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nonMount(() => {\\n    nodeCount.set(0);\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.intro\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"desc\\">\\n\\t\\t<Typography variant=\\"button\\">\\n\\t\\t\\t{$_(\\"journeys.peter.select_experience_to_start_journey\\")}\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"cards\\">\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-1.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\"journeys.peter.verify_student_and_enroll_on_internationalisation_course\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t)}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.verify_student_enroll_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterEnrolledStudent ? 'completed' : 'secondary'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/login-kw1c');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterEnrolledStudent ? $_('components.retry') : $_('components.get_started')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-2.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\"journeys.peter.issue_internationalisation_course_badge_and_assign_student_internship\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.issue_course_badge_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterAssignedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $peterEnrolledStudent\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/view-courses');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterAssignedInternship\\n\\t\\t\\t\\t\\t\\t\\t? $_('components.retry')\\n\\t\\t\\t\\t\\t\\t\\t: $_('components.get_started')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t\\t<Avatar image=\\"/imgs/peter-3.svg\\" />\\n\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.verify_students_internship_creds\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"desc\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.verify_students_internship_desc\\")}\\n\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"{$peterVerifiedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'completed'\\n\\t\\t\\t\\t\\t\\t\\t: $peterAssignedInternship\\n\\t\\t\\t\\t\\t\\t\\t? 'secondary'\\n\\t\\t\\t\\t\\t\\t\\t: 'disabled'}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/internship-results');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$peterVerifiedInternship\\n\\t\\t\\t\\t\\t\\t\\t? $_('components.retry')\\n\\t\\t\\t\\t\\t\\t\\t: $_('components.get_started')}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</Card>\\n\\t\\t</div>\\n\\t\\t{#if $peterAssignedInternship && $peterVerifiedInternship && $peterEnrolledStudent}\\n\\t\\t\\t<div class=\\"other\\">\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\tonClick=\\"{() => goto('/demo/choose-journey')}\\"\\n\\t\\t\\t\\t\\tlabel=\\"{$_('components.try_another_journey')}\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,uDAAW,CAC5B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IACb,CACA,yBAAU,CAAG,8BAAE,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,mCAAM,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,GACf,CAIA,yBAAU,CAAC,oCAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,qBAAM,CAAG,oBAAM,CACxB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,2CAAc,CACtC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAG,KAAK,CAAC,aAAa,CAAC,mCAAM,CAC5C,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $peterEnrolledStudent, $$unsubscribe_peterEnrolledStudent;
  let $peterAssignedInternship, $$unsubscribe_peterAssignedInternship;
  let $peterVerifiedInternship, $$unsubscribe_peterVerifiedInternship;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_peterEnrolledStudent = subscribe(peterEnrolledStudent, (value) => $peterEnrolledStudent = value);
  $$unsubscribe_peterAssignedInternship = subscribe(peterAssignedInternship, (value) => $peterAssignedInternship = value);
  $$unsubscribe_peterVerifiedInternship = subscribe(peterVerifiedInternship, (value) => $peterVerifiedInternship = value);
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_peterEnrolledStudent();
  $$unsubscribe_peterAssignedInternship();
  $$unsubscribe_peterVerifiedInternship();
  return `<div class="container svelte-1vk882u"><div class="heading svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.intro"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
    default: () => {
      return `${escape($_("journeys.peter.select_experience_to_start_journey"))}`;
    }
  })}</div> <div class="cards svelte-1vk882u"><div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-1.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verify_student_and_enroll_on_internationalisation_course"))}`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verify_student_enroll_desc"))}`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterEnrolledStudent ? "completed" : "secondary",
          onClick: () => {
            goto();
          },
          label: $peterEnrolledStudent ? $_("components.retry") : $_("components.get_started")
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-2.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.issue_internationalisation_course_badge_and_assign_student_internship"))}`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.peter.issue_course_badge_desc"))}`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterAssignedInternship ? "completed" : $peterEnrolledStudent ? "secondary" : "disabled",
          onClick: () => {
            goto();
          },
          label: $peterAssignedInternship ? $_("components.retry") : $_("components.get_started")
        },
        {},
        {}
      )}</div>`;
    }
  })}</div> <div class="card svelte-1vk882u">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-1vk882u">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter-3.svg" }, {}, {})} <div class="text svelte-1vk882u"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verify_students_internship_creds"))}`;
        }
      })}</div> <div class="desc svelte-1vk882u">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verify_students_internship_desc"))}`;
        }
      })}</div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: $peterVerifiedInternship ? "completed" : $peterAssignedInternship ? "secondary" : "disabled",
          onClick: () => {
            goto();
          },
          label: $peterVerifiedInternship ? $_("components.retry") : $_("components.get_started")
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
      label: $_("components.try_another_journey")
    },
    {},
    {}
  )}</div>` : ``}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ChF-ja7O.js.map
