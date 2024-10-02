import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, f as add_attribute, d as null_to_empty } from './ssr-DGHpauN6.js';
import './client-DpIAX_q0.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-DBm3hKoN.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { h as dominiqueSelectedCourse, i as dominqueCourses } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import './exports-BGi7-Rnc.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-kqqfc7>.svelte-kqqfc7{padding:15px 0}.container.svelte-kqqfc7 .courses.svelte-kqqfc7{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between;padding-bottom:20px}.container.svelte-kqqfc7 .courses .course.svelte-kqqfc7{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-kqqfc7 .courses .course .subtext.svelte-kqqfc7{padding:20px;padding-bottom:5px}.container.svelte-kqqfc7 .courses .course .title.svelte-kqqfc7{padding:10px 20px;text-align:center;padding-bottom:0px}.container.svelte-kqqfc7 .courses .course .bars.svelte-kqqfc7{width:100%;margin-top:30px}.container.svelte-kqqfc7 .courses .course .bars .bar.svelte-kqqfc7{height:10px;margin:10px 20%;box-sizing:border-box;border-radius:10px;background-color:var(--white-900)}.container.svelte-kqqfc7 .courses .course .bars .bar.svelte-kqqfc7:last-of-type{margin:10px 25%}.container.svelte-kqqfc7 .courses .course img.svelte-kqqfc7{padding:0;width:100%;border-top-right-radius:20px;border-top-left-radius:20px;height:175px;object-fit:cover}.modal-content.svelte-kqqfc7.svelte-kqqfc7{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.button.svelte-kqqfc7.svelte-kqqfc7{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-kqqfc7.svelte-kqqfc7{background:var(--black-300)}.button.disabled.svelte-kqqfc7.svelte-kqqfc7:hover{cursor:unset;background:var(--black-300)}.button.svelte-kqqfc7.svelte-kqqfc7:hover{cursor:pointer;background:var(--blue-900)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .courses {\\n  width: 90%;\\n  display: flex;\\n  transform: translate(6%, 10%);\\n  justify-content: space-between;\\n  padding-bottom: 20px;\\n}\\n.container .courses .course {\\n  width: 32%;\\n  box-sizing: border-box;\\n  background: white;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  padding-bottom: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .courses .course .subtext {\\n  padding: 20px;\\n  padding-bottom: 5px;\\n}\\n.container .courses .course .title {\\n  padding: 10px 20px;\\n  text-align: center;\\n  padding-bottom: 0px;\\n}\\n.container .courses .course .bars {\\n  width: 100%;\\n  margin-top: 30px;\\n}\\n.container .courses .course .bars .bar {\\n  height: 10px;\\n  margin: 10px 20%;\\n  box-sizing: border-box;\\n  border-radius: 10px;\\n  background-color: var(--white-900);\\n}\\n.container .courses .course .bars .bar:last-of-type {\\n  margin: 10px 25%;\\n}\\n.container .courses .course img {\\n  padding: 0;\\n  width: 100%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  height: 175px;\\n  object-fit: cover;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--blue-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp } from \\"$lib/components\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nfunction handleClick(i) {\\n    if ($dominiqueSelectedCourse !== i)\\n        return;\\n    goto(\\"/demo/journeys/dominique/finalize-application\\");\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{@html highlight($_(\\"journeys.dominique.jobs_available_select_one_job\\"))}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>{$_(\\"journeys.dominique.select_job_with_new_cred\\")}</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"{$_('journeys.dominique.bbc_job_board')}\\">\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"courses\\">\\n\\t\\t\\t\\t\\t{#each dominqueCourses as course, i (course.name)}\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"{course.img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">{course.jobName}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${$dominiqueSelectedCourse !== i && 'disabled'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\thandleClick(i);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\">{$_(\\"components.apply_now\\")}</button\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,sBAAS,CAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,GAAG,CAAC,CAC7B,eAAe,CAAE,aAAa,CAC9B,cAAc,CAAE,IAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAAI,CACpB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,sBAAS,CACnC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,oBAAO,CACjC,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,mBAAM,CAChC,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,KAAK,CAAC,kBAAK,CACrC,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,WAAW,CACnC,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,KAAK,CAAC,kBAAI,aAAc,CAClD,MAAM,CAAE,IAAI,CAAC,GACf,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,iBAAI,CAC9B,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAAI,CAC5B,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KACd,CAEA,0CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CAcA,mCAAQ,CACN,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,IAAI,CAAC,GACnB,CACA,OAAO,qCAAU,CACf,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,OAAO,qCAAS,MAAO,CACrB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,mCAAO,MAAO,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,UAAU,CAC5B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  let $_, $$unsubscribe__;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe_dominiqueSelectedCourse();
  $$unsubscribe__();
  return `<div class="container svelte-kqqfc7"><div class="heading svelte-kqqfc7">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${highlight($_("journeys.dominique.jobs_available_select_one_job"))}<!-- HTML_TAG_END -->`;
    }
  })}</div> <div class="sub-text svelte-kqqfc7">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("journeys.dominique.select_job_with_new_cred"))}`;
    }
  })}</div> <div class="dash svelte-kqqfc7">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render(
    $$result,
    {
      heading: $_("journeys.dominique.bbc_job_board")
    },
    {},
    {
      default: () => {
        return `<div class="content"><div class="courses svelte-kqqfc7">${each(dominqueCourses, (course, i) => {
          return `<div class="course svelte-kqqfc7"><img${add_attribute("src", course.img, 0)} alt="" class="svelte-kqqfc7"> <div class="title svelte-kqqfc7">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape(course.jobName)}`;
              }
            }
          )}</div> <div class="bars svelte-kqqfc7" data-svelte-h="svelte-9drk6q"><div class="bar svelte-kqqfc7"></div> <div class="bar svelte-kqqfc7"></div></div> <button class="${escape(null_to_empty(`button ${$dominiqueSelectedCourse !== i && "disabled"}`), true) + " svelte-kqqfc7"}">${escape($_("components.apply_now"))}</button> </div>`;
        })}</div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-hAlJIUhm.js.map
