import { c as create_ssr_component, f as subscribe, v as validate_component, h as each, d as add_attribute, e as escape, b as null_to_empty } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { B as BigBusinessCorp } from './BigBusinessCorp-f1be0896.js';
import { g as dominiqueSelectedCourse, h as dominqueCourses } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-joamgx>.svelte-joamgx{padding:15px 0}.container.svelte-joamgx .courses.svelte-joamgx{width:90%;display:flex;transform:translate(6%, 10%);justify-content:space-between}.container.svelte-joamgx .courses .course.svelte-joamgx{width:32%;box-sizing:border-box;background:white;box-sizing:border-box;border-radius:20px;padding-bottom:20px;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1))}.container.svelte-joamgx .courses .course .subtext.svelte-joamgx{padding:20px;padding-bottom:5px}.container.svelte-joamgx .courses .course .title.svelte-joamgx{padding:10px 20px;text-align:center;padding-bottom:0px}.container.svelte-joamgx .courses .course .bars.svelte-joamgx{width:100%;margin-top:30px}.container.svelte-joamgx .courses .course .bars .bar.svelte-joamgx{height:10px;margin:10px 20%;box-sizing:border-box;border-radius:10px;background-color:var(--white-900)}.container.svelte-joamgx .courses .course .bars .bar.svelte-joamgx:last-of-type{margin:10px 25%}.container.svelte-joamgx .courses .course img.svelte-joamgx{padding:0;width:100%;border-top-right-radius:20px;border-top-left-radius:20px;height:175px;object-fit:cover}.modal-content.svelte-joamgx.svelte-joamgx{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.button.svelte-joamgx.svelte-joamgx{border:none;background:var(--bbc-blue);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-joamgx.svelte-joamgx{background:var(--black-300)}.button.disabled.svelte-joamgx.svelte-joamgx:hover{cursor:unset;background:var(--black-300)}.button.svelte-joamgx.svelte-joamgx:hover{cursor:pointer;background:var(--blue-900)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .courses {\\n  width: 90%;\\n  display: flex;\\n  transform: translate(6%, 10%);\\n  justify-content: space-between;\\n}\\n.container .courses .course {\\n  width: 32%;\\n  box-sizing: border-box;\\n  background: white;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  padding-bottom: 20px;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n}\\n.container .courses .course .subtext {\\n  padding: 20px;\\n  padding-bottom: 5px;\\n}\\n.container .courses .course .title {\\n  padding: 10px 20px;\\n  text-align: center;\\n  padding-bottom: 0px;\\n}\\n.container .courses .course .bars {\\n  width: 100%;\\n  margin-top: 30px;\\n}\\n.container .courses .course .bars .bar {\\n  height: 10px;\\n  margin: 10px 20%;\\n  box-sizing: border-box;\\n  border-radius: 10px;\\n  background-color: var(--white-900);\\n}\\n.container .courses .course .bars .bar:last-of-type {\\n  margin: 10px 25%;\\n}\\n.container .courses .course img {\\n  padding: 0;\\n  width: 100%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  height: 175px;\\n  object-fit: cover;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--bbc-blue);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--blue-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, BigBusinessCorp, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nfunction handleClick(i) {\\n    if ($dominiqueSelectedCourse !== i)\\n        return;\\n    goto(\\"/demo/journeys/dominique/finalize-application\\");\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>There are a few jobs available. <Highlight>Let’s select the job to apply</Highlight> for that\\n\\t\\t\\tis relevant to our new credential.</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>Select the job you can now apply for with your new credential</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<BigBusinessCorp heading=\\"Big Business Corp Jobs Board\\">\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"courses\\">\\n\\t\\t\\t\\t\\t{#each dominqueCourses as course, i (course.name)}\\n\\t\\t\\t\\t\\t\\t<div class=\\"course\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"{course.img}\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">{course.jobName}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{`button ${$dominiqueSelectedCourse !== i && \'disabled\'}`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\thandleClick(i);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\">Apply Now</button\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</BigBusinessCorp>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,sBAAS,CAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,GAAG,CAAC,CAC7B,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAAI,CACpB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACxD,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,sBAAS,CACnC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,oBAAO,CACjC,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAClB,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,mBAAM,CAChC,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,KAAK,CAAC,kBAAK,CACrC,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,WAAW,CACnC,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,KAAK,CAAC,kBAAI,aAAc,CAClD,MAAM,CAAE,IAAI,CAAC,GACf,CACA,wBAAU,CAAC,QAAQ,CAAC,OAAO,CAAC,iBAAI,CAC9B,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAAI,CAC5B,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KACd,CAEA,0CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CAcA,mCAAQ,CACN,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,IAAI,CAAC,GACnB,CACA,OAAO,qCAAU,CACf,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,OAAO,qCAAS,MAAO,CACrB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,WAAW,CAC7B,CACA,mCAAO,MAAO,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,UAAU,CAC5B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  $$result.css.add(css);
  $$unsubscribe_dominiqueSelectedCourse();
  return `<div class="container svelte-joamgx"><div class="heading svelte-joamgx">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `There are a few jobs available. ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `Let’s select the job to apply`;
        }
      })} for that
			is relevant to our new credential.`;
    }
  })}</div> <div class="sub-text svelte-joamgx">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Select the job you can now apply for with your new credential`;
    }
  })}</div> <div class="dash svelte-joamgx">${validate_component(BigBusinessCorp, "BigBusinessCorp").$$render($$result, { heading: "Big Business Corp Jobs Board" }, {}, {
    default: () => {
      return `<div class="content"><div class="courses svelte-joamgx">${each(dominqueCourses, (course, i) => {
        return `<div class="course svelte-joamgx"><img${add_attribute("src", course.img, 0)} alt="" class="svelte-joamgx"> <div class="title svelte-joamgx">${validate_component(Typography, "Typography").$$render(
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
        )}</div> <div class="bars svelte-joamgx" data-svelte-h="svelte-9drk6q"><div class="bar svelte-joamgx"></div> <div class="bar svelte-joamgx"></div></div> <button class="${escape(null_to_empty(`button ${$dominiqueSelectedCourse !== i && "disabled"}`), true) + " svelte-joamgx"}">Apply Now</button> </div>`;
      })}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-464a8093.js.map
