import { c as create_ssr_component, f as subscribe, v as validate_component, h as each, e as escape, b as null_to_empty } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { w as peterAssignedCompany, x as peterAssignedStudent } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-15hyn7y>.svelte-15hyn7y{padding:15px 0}.dash.svelte-15hyn7y .content .sidebar.svelte-15hyn7y{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-15hyn7y .content .sidebar .menu-item.svelte-15hyn7y{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-15hyn7y .content .sidebar .menu-item .square.svelte-15hyn7y{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-15hyn7y .content .sidebar .menu-item .rect.svelte-15hyn7y{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-15hyn7y .content .card.svelte-15hyn7y{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-15hyn7y .content .card .table.svelte-15hyn7y{display:flex}.dash.svelte-15hyn7y .content .card .table .column.svelte-15hyn7y{display:flex;flex-wrap:wrap;width:30%}.dash.svelte-15hyn7y .content .card .table .column.svelte-15hyn7y:last-of-type{width:40%}.dash.svelte-15hyn7y .content .card .table .column .data.svelte-15hyn7y,.dash.svelte-15hyn7y .content .card .table .column .button-container.svelte-15hyn7y{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-15hyn7y .content .card .table .column .button-container.svelte-15hyn7y{transform:translateY(-10px);justify-content:center}.dash.svelte-15hyn7y .content .card .table .column .header.svelte-15hyn7y{padding-bottom:20px}.dash.svelte-15hyn7y .content .card .table .column .action.svelte-15hyn7y{text-align:center;width:100%}.button.svelte-15hyn7y.svelte-15hyn7y{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;margin:20px;box-sizing:border-box;font-weight:500;border-radius:40px;padding:12px 30px;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-15hyn7y.svelte-15hyn7y{background:var(--black-300)}.button.disabled.svelte-15hyn7y.svelte-15hyn7y:hover{cursor:unset;background:var(--black-300)}.button.svelte-15hyn7y.svelte-15hyn7y:hover{cursor:pointer;background:var(--red-700)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 30%;\\n}\\n.dash .content .card .table .column:last-of-type {\\n  width: 40%;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n  justify-content: center;\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n.dash .content .card .table .column .action {\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  margin: 20px;\\n  box-sizing: border-box;\\n  font-weight: 500;\\n  border-radius: 40px;\\n  padding: 12px 30px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, nodeCount, peterAssignedCompany, peterAssignedStudent, peterChosenStudent } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet receivedCreds = false;\\nonMount(() => {\\n    currNode.set(0);\\n    nodeCount.set(3);\\n});\\nlet showModal = false;\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\tYour students have <Highlight>returned from their internships abroad.</Highlight> Let’s verify\\n\\t\\t\\ttheir internship completion.\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>Click the verify completion button to proceed to verify the credentials for your internship\\n\\t\\t\\tstudents.</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"INTERNSHIP STUDENTS\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Student Applicant</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>SARAH JONES</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>IVAR LEIFSSON</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>LAGERTHA BONDE</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Internship Placement</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$peterAssignedCompany}</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Action</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${$peterAssignedStudent !== 'Sarah Jones' && 'disabled'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/verify-internship');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\">VERIFY COMPLETION</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${$peterAssignedStudent !== 'Ivar Leifsson' && 'disabled'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/verify-internship');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\">VERIFY COMPLETION</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"{\`button \${$peterAssignedStudent !== 'Lagertha Bonde' && 'disabled'}\`}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/peter/verify-internship');\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\">VERIFY COMPLETION</button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $peterAssignedCompany, $$unsubscribe_peterAssignedCompany;
  let $peterAssignedStudent, $$unsubscribe_peterAssignedStudent;
  $$unsubscribe_peterAssignedCompany = subscribe(peterAssignedCompany, (value) => $peterAssignedCompany = value);
  $$unsubscribe_peterAssignedStudent = subscribe(peterAssignedStudent, (value) => $peterAssignedStudent = value);
  $$result.css.add(css);
  $$unsubscribe_peterAssignedCompany();
  $$unsubscribe_peterAssignedStudent();
  return `<div class="container svelte-15hyn7y"><div class="heading svelte-15hyn7y">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `Your students have ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `returned from their internships abroad.`;
        }
      })} Let’s verify
			their internship completion.`;
    }
  })}</div> <div class="sub-text svelte-15hyn7y">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `Click the verify completion button to proceed to verify the credentials for your internship
			students.`;
    }
  })}</div> <div class="dash svelte-15hyn7y">${validate_component(Kw1c, "Kw1c").$$render(
    $$result,
    {
      variant: "white",
      title: "INTERNSHIP STUDENTS"
    },
    {},
    {
      default: () => {
        return `<div class="sidebar svelte-15hyn7y">${each(Array(5), (i) => {
          return `<div class="menu-item svelte-15hyn7y" data-svelte-h="svelte-11chbf8"><div class="square svelte-15hyn7y"></div> <div class="rect svelte-15hyn7y"></div> </div>`;
        })}</div> <div class="card svelte-15hyn7y"><div class="table svelte-15hyn7y"><div class="column svelte-15hyn7y"><div class="header svelte-15hyn7y">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Student Applicant`;
          }
        })}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
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
        )}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
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
        )}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
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
        )}</div></div> <div class="column svelte-15hyn7y"><div class="header svelte-15hyn7y">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Internship Placement`;
          }
        })}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div> <div class="data svelte-15hyn7y">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "kw1c-sub-text",
            fontVariant: "kw1c",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `${escape($peterAssignedCompany)}`;
            }
          }
        )}</div></div> <div class="column svelte-15hyn7y"><div class="header action svelte-15hyn7y">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</div> <div class="button-container svelte-15hyn7y"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Sarah Jones" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div> <div class="button-container svelte-15hyn7y"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Ivar Leifsson" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div> <div class="button-container svelte-15hyn7y"><button class="${escape(null_to_empty(`button ${$peterAssignedStudent !== "Lagertha Bonde" && "disabled"}`), true) + " svelte-15hyn7y"}">VERIFY COMPLETION</button></div></div></div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-242ef90f.js.map
