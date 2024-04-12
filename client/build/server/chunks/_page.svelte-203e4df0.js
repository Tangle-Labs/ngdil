import { c as create_ssr_component, v as validate_component, h as each } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { A as peterChosenStudent } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-bd7nx0>.svelte-bd7nx0{padding:15px 0}.dash.svelte-bd7nx0 .content .sidebar.svelte-bd7nx0{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-bd7nx0 .content .sidebar .menu-item.svelte-bd7nx0{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-bd7nx0 .content .sidebar .menu-item .square.svelte-bd7nx0{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-bd7nx0 .content .sidebar .menu-item .rect.svelte-bd7nx0{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-bd7nx0 .content .card.svelte-bd7nx0{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-bd7nx0 .content .card .table.svelte-bd7nx0{display:flex}.dash.svelte-bd7nx0 .content .card .table .column.svelte-bd7nx0{display:flex;flex-wrap:wrap;width:32%}.dash.svelte-bd7nx0 .content .card .table .column .data.svelte-bd7nx0,.dash.svelte-bd7nx0 .content .card .table .column .button-container.svelte-bd7nx0{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-bd7nx0 .content .card .table .column .button-container.svelte-bd7nx0{display:flex;justify-content:center}.dash.svelte-bd7nx0 .content .card .table .column .header.svelte-bd7nx0{padding-bottom:20px}.dash.svelte-bd7nx0 .content .card .table .column .action.svelte-bd7nx0{text-align:center;width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 32%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading } from \\"$lib/components\\";\\nimport Button from \\"$lib/components/ui/Button/Button.svelte\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet receivedCreds = false;\\nfunction handleWait() {\\n    setTimeout(() => {\\n        receivedCreds = true;\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(1);\\n});\\nlet showModal = false;\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\tThe students are keen to get on their international internships. Let’s see <Highlight>\\n\\t\\t\\t\\tif they meet the requirements.</Highlight>\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>Click the view application button to check a student’s application.</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"INTERNSHIP APPLICATIONS\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Student Applicant</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>SARAH JONES</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>IVAR LEIFSSON</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>LAGERTHA BONDE</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Internship Category</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>3D Print Design</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>3D Print Design</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>3D Print Design</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Action</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterChosenStudent.set('Sarah Jones');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/view-application');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"VIEW APPLICATION\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterChosenStudent.set('Ivar Leifsson');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/view-application');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"VIEW APPLICATION\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tpeterChosenStudent.set('Lagertha Bonde');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/view-application');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"VIEW APPLICATION\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAEA,mBAAK,CAAC,QAAQ,CAAC,sBAAS,CACtB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CACvD,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,UACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,wBAAW,CACjC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,IAAI,CAAC,CACf,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,qBAAQ,CACzC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,YAAY,CAAE,IAChB,CACA,mBAAK,CAAC,QAAQ,CAAC,QAAQ,CAAC,UAAU,CAAC,mBAAM,CACvC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,mBAAM,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,EAAE,CACT,uBAAuB,CAAE,IAAI,CAC7B,sBAAsB,CAAE,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,oBAAO,CAC1B,OAAO,CAAE,IACX,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,qBAAQ,CAClC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GACT,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,mBAAK,CACzC,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,+BAAkB,CACpD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,cAAc,CAAE,IAClB,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,+BAAkB,CACpD,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,cAAc,CAAE,IAClB,CACA,mBAAK,CAAC,QAAQ,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,qBAAQ,CAC1C,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-bd7nx0"><div class="heading svelte-bd7nx0">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `The students are keen to get on their international internships. Let’s see ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `if they meet the requirements.`;
        }
      })}`;
    }
  })}</div> <div class="sub-text svelte-bd7nx0">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view application button to check a student’s application.`;
    }
  })}</div> <div class="dash svelte-bd7nx0">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INTERNSHIP APPLICATIONS"
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-bd7nx0">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-bd7nx0" data-svelte-h="svelte-11chbf8"><div class="square svelte-bd7nx0"></div> <div class="rect svelte-bd7nx0"></div> </div>`;
        })}</div> <div class="card svelte-bd7nx0"><div class="table svelte-bd7nx0"><div class="column svelte-bd7nx0"><div class="header svelte-bd7nx0">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `SARAH JONES`;
            }
          }
        )}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `IVAR LEIFSSON`;
            }
          }
        )}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `LAGERTHA BONDE`;
            }
          }
        )}</div></div> <div class="column svelte-bd7nx0"><div class="header svelte-bd7nx0">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Category`;
          }
        })}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `3D Print Design`;
            }
          }
        )}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `3D Print Design`;
            }
          }
        )}</div> <div class="data svelte-bd7nx0">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `3D Print Design`;
            }
          }
        )}</div></div> <div class="column svelte-bd7nx0"><div class="header action svelte-bd7nx0">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</div> <div class="button-container svelte-bd7nx0">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Sarah Jones");
              goto();
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div> <div class="button-container svelte-bd7nx0">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Ivar Leifsson");
              goto();
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div> <div class="button-container svelte-bd7nx0">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
              peterChosenStudent.set("Lagertha Bonde");
              goto();
            },
            variant: "kw1c",
            label: "VIEW APPLICATION"
          },
          {},
          {}
        )}</div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-203e4df0.js.map
