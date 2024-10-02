import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { C as Card } from './Card-Cx9DTC_H.js';
import { t as peterEnrolledStudent } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-wu4iii>.svelte-wu4iii{padding:15px 0}.container.svelte-wu4iii .card.svelte-wu4iii{width:100%}.container.svelte-wu4iii .card .card-content.svelte-wu4iii{padding:20px;display:flex}.container.svelte-wu4iii .card .card-content .content.svelte-wu4iii{width:50%}.container.svelte-wu4iii .card .card-content .content .list.svelte-wu4iii{display:flex;justify-content:flex-start;align-items:center;align-content:center;padding:15px 0}.container.svelte-wu4iii .card .card-content .content .list img.svelte-wu4iii{height:25px;padding-right:5px}.container.svelte-wu4iii .card .card-content .content .p.svelte-wu4iii{padding:30px 0}.container.svelte-wu4iii .card .card-content .img.svelte-wu4iii{width:50%;position:relative;box-sizing:border-box;margin-left:30px;background:var(--white-500);border:1px solid black;border-radius:10px}.container.svelte-wu4iii .card .card-content .img img.svelte-wu4iii{display:block;position:absolute;top:50%;left:50%;height:275px;transform:translate(-50%, -50%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .card {\\n  width: 100%;\\n}\\n.container .card .card-content {\\n  padding: 20px;\\n  display: flex;\\n}\\n.container .card .card-content .content {\\n  width: 50%;\\n}\\n.container .card .card-content .content .list {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  align-content: center;\\n  padding: 15px 0;\\n}\\n.container .card .card-content .content .list img {\\n  height: 25px;\\n  padding-right: 5px;\\n}\\n.container .card .card-content .content .p {\\n  padding: 30px 0;\\n}\\n.container .card .card-content .img {\\n  width: 50%;\\n  position: relative;\\n  box-sizing: border-box;\\n  margin-left: 30px;\\n  background: var(--white-500);\\n  border: 1px solid black;\\n  border-radius: 10px;\\n}\\n.container .card .card-content .img img {\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  height: 275px;\\n  transform: translate(-50%, -50%);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Card, Button } from \\"$lib/components\\";\\nimport { peterEnrolledStudent } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { _ } from \\"svelte-i18n\\";\\nfunction handleFinishCourse() {\\n    peterEnrolledStudent.set(true);\\n    goto(\\"/demo/journeys/peter\\");\\n}\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.peter.successfully_enrolled_students_with_kw1c\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>{$_(\\"journeys.peter.heres_what_you_achieved\\")}</Typography>\\n\\t</div>\\n\\t<div class=\\"card\\">\\n\\t\\t<Card withBorder=\\"{true}\\">\\n\\t\\t\\t<div class=\\"card-content\\">\\n\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.passwordless_login_to_kw1c_staff_portal\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.verified_student_applicants_creds\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.peter.issued_course_invitations\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"list\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/check-circle.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.peter.enrolled_students_onto_course\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\"journeys.peter.verifed_and_enrolled_students_onto_course_for_future_international_internships\\"\\n\\t\\t\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t\\t\\t\\t{$_(\\"journeys.peter.click_continue_to_get_their_course_badge_and_find_internships\\")}\\n\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"secondary\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{handleFinishCourse}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"img\\">\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/peter-1.svg\\" alt=\\"\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Card>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,mBAAM,CACf,KAAK,CAAE,IACT,CACA,wBAAU,CAAC,KAAK,CAAC,2BAAc,CAC7B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,sBAAS,CACtC,KAAK,CAAE,GACT,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,mBAAM,CAC5C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAI,CAChD,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,QAAQ,CAAC,gBAAG,CACzC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,kBAAK,CAClC,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,KAAK,CAAC,aAAa,CAAC,IAAI,CAAC,iBAAI,CACtC,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CACjC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  function handleFinishCourse() {
    peterEnrolledStudent.set(true);
    goto();
  }
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="container svelte-wu4iii"><div class="heading svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.peter.successfully_enrolled_students_with_kw1c"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.peter.heres_what_you_achieved"))}`;
    }
  })}</div> <div class="card svelte-wu4iii">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
    default: () => {
      return `<div class="card-content svelte-wu4iii"><div class="content svelte-wu4iii"><div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.passwordless_login_to_kw1c_staff_portal"))}`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verified_student_applicants_creds"))}`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.issued_course_invitations"))}`;
        }
      })}</div> <div class="list svelte-wu4iii"><img src="/imgs/check-circle.png" alt="" class="svelte-wu4iii"> ${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `${escape($_("journeys.peter.enrolled_students_onto_course"))}`;
        }
      })}</div> <div class="p svelte-wu4iii">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($_("journeys.peter.verifed_and_enrolled_students_onto_course_for_future_international_internships"))} <br><br> ${escape($_("journeys.peter.click_continue_to_get_their_course_badge_and_find_internships"))}`;
        }
      })}</div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          label: $_("components.continue"),
          onClick: handleFinishCourse
        },
        {},
        {}
      )}</div> <div class="img svelte-wu4iii" data-svelte-h="svelte-pki8vw"><img src="/imgs/peter-1.svg" alt="" class="svelte-wu4iii"></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B2wducnw.js.map
