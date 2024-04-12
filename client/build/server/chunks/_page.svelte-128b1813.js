import { c as create_ssr_component, v as validate_component, h as each } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-icpowt>.svelte-icpowt{padding:15px 0}.dash.svelte-icpowt .content .sidebar.svelte-icpowt{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-icpowt .content .sidebar .menu-item.svelte-icpowt{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-icpowt .content .sidebar .menu-item .square.svelte-icpowt{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-icpowt .content .sidebar .menu-item .rect.svelte-icpowt{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-icpowt .content .card.svelte-icpowt{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-icpowt .content .card .table.svelte-icpowt{display:flex}.dash.svelte-icpowt .content .card .table .column.svelte-icpowt{display:flex;flex-wrap:wrap;width:32%}.dash.svelte-icpowt .content .card .table .column .data.svelte-icpowt,.dash.svelte-icpowt .content .card .table .column .button-container.svelte-icpowt{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px;text-align:left}.dash.svelte-icpowt .content .card .table .column .blue-bar.svelte-icpowt{height:20px;border-radius:5px;width:70%;background:var(--kw1c-blue-900);opacity:0.5}.dash.svelte-icpowt .content .card .table .column .red-bar.svelte-icpowt{height:14px;width:40%;background:var(--kw1c-red-900);opacity:0.5;border-radius:10px}.dash.svelte-icpowt .content .card .table .column .mock-button.svelte-icpowt{height:30px;width:70%;background:var(--white-300);box-sizing:border-box;transform:translateY(10px);border:10px solid var(--kw1c-red-900);border-radius:30px;opacity:0.5}.dash.svelte-icpowt .content .card .table .column .button-container.svelte-icpowt{transform:translateY(-10px)}.dash.svelte-icpowt .content .card .table .column .header.svelte-icpowt{padding-bottom:20px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 32%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n  text-align: left;\\n}\\n.dash .content .card .table .column .blue-bar {\\n  height: 20px;\\n  border-radius: 5px;\\n  width: 70%;\\n  background: var(--kw1c-blue-900);\\n  opacity: 0.5;\\n}\\n.dash .content .card .table .column .red-bar {\\n  height: 14px;\\n  width: 40%;\\n  background: var(--kw1c-red-900);\\n  opacity: 0.5;\\n  border-radius: 10px;\\n}\\n.dash .content .card .table .column .mock-button {\\n  height: 30px;\\n  width: 70%;\\n  background: var(--white-300);\\n  box-sizing: border-box;\\n  transform: translateY(10px);\\n  border: 10px solid var(--kw1c-red-900);\\n  border-radius: 30px;\\n  opacity: 0.5;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  width: calc(100% - 40px);\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 10px;\\n  font-weight: 500;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Button } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, nodeCount, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet receivedCreds = false;\\nfunction handleWait() {\\n    setTimeout(() => {\\n        receivedCreds = true;\\n    }, 8000);\\n}\\nlet showModal = false;\\nonMount(() => {\\n    nodeCount.set(5);\\n    currNode.set(0);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\tYour <Highlight>students have completed their course.</Highlight> Let’s check their results and\\n\\t\\t\\tissue their badges.\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the view results button to see the outcome for the internationalisation course\\n\\t\\t\\tstudents.</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"ACTIVE COURSES\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Course Name</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Internationalisation</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"blue-bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"blue-bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Course Status</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" fontVariant=\\"kw1c\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Complete</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"red-bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"red-bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Action</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"VIEW RESULTS\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/course-results');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"mock-button\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"mock-button\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-icpowt"><div class="heading svelte-icpowt">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `students have completed their course.`;
        }
      })} Let’s check their results and
			issue their badges.`;
    }
  })}</div> <div class="sub-text svelte-icpowt">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the view results button to see the outcome for the internationalisation course
			students.`;
    }
  })}</div> <div class="dash svelte-icpowt">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "ACTIVE COURSES"
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-icpowt">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-icpowt" data-svelte-h="svelte-11chbf8"><div class="square svelte-icpowt"></div> <div class="rect svelte-icpowt"></div> </div>`;
        })}</div> <div class="card svelte-icpowt"><div class="table svelte-icpowt"><div class="column svelte-icpowt"><div class="header svelte-icpowt">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Name`;
          }
        })}</div> <div class="data svelte-icpowt">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-header",
            fontVariant: "kw1c",
            color: "--kw1c-blue-900"
          },
          {},
          {
            default: () => {
              return `Internationalisation`;
            }
          }
        )}</div> <div class="data svelte-icpowt" data-svelte-h="svelte-sa29gc"><div class="blue-bar svelte-icpowt"></div></div> <div class="data svelte-icpowt" data-svelte-h="svelte-sa29gc"><div class="blue-bar svelte-icpowt"></div></div></div> <div class="column svelte-icpowt"><div class="header svelte-icpowt">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Course Status`;
          }
        })}</div> <div class="data svelte-icpowt">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            fontVariant: "kw1c",
            color: "--green-900"
          },
          {},
          {
            default: () => {
              return `Complete`;
            }
          }
        )}</div> <div class="data svelte-icpowt" data-svelte-h="svelte-1dytw4n"><div class="red-bar svelte-icpowt"></div></div> <div class="data svelte-icpowt" data-svelte-h="svelte-1dytw4n"><div class="red-bar svelte-icpowt"></div></div></div> <div class="column svelte-icpowt"><div class="header svelte-icpowt">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "sub-text",
            fontVariant: "kw1c",
            color: "--white-300"
          },
          {},
          {
            default: () => {
              return `Action`;
            }
          }
        )}</div> <div class="button-container svelte-icpowt">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: "VIEW RESULTS",
            variant: "kw1c",
            onClick: () => {
              goto();
            }
          },
          {},
          {}
        )}</div> <div class="button-container svelte-icpowt" data-svelte-h="svelte-1yvrlbv"><div class="mock-button svelte-icpowt"></div></div> <div class="button-container svelte-icpowt" data-svelte-h="svelte-1yvrlbv"><div class="mock-button svelte-icpowt"></div></div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-128b1813.js.map
