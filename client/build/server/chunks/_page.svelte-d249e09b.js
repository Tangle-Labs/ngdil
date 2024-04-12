import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, h as each, b as null_to_empty } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { M as Modal } from './Modal-de587996.js';
import { R as Radio } from './Radio-6488f3a6.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { K as Kw1c } from './Kw1c-67f0a859.js';
import { v as peterChosenStudents } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-bwlrzy>.svelte-bwlrzy{padding:15px 0}.dash.svelte-bwlrzy .content .sidebar.svelte-bwlrzy{position:absolute;top:0;left:0;width:18%;background:rgb(255, 255, 255);height:100%;filter:drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));display:flex;flex-wrap:wrap;box-sizing:border-box;padding:20px;align-content:flex-start}.dash.svelte-bwlrzy .content .sidebar .menu-item.svelte-bwlrzy{display:flex;width:100%;align-items:center;align-content:center;margin:12px 0}.dash.svelte-bwlrzy .content .sidebar .menu-item .square.svelte-bwlrzy{height:30px;width:30px;border-radius:4px;background:var(--kw1c-blue-900);margin-right:10px}.dash.svelte-bwlrzy .content .sidebar .menu-item .rect.svelte-bwlrzy{width:calc(100% - 40px);height:10px;background:var(--white-900);border-radius:10px}.dash.svelte-bwlrzy .content .card.svelte-bwlrzy{width:72.5%;height:calc(100% - 50px);background:white;position:absolute;bottom:0;right:5%;border-top-right-radius:20px;border-top-left-radius:20px;padding:20px;box-sizing:border-box}.dash.svelte-bwlrzy .content .card .table.svelte-bwlrzy{display:flex}.dash.svelte-bwlrzy .content .card .table .column.svelte-bwlrzy{display:flex;flex-wrap:wrap;width:33%}.dash.svelte-bwlrzy .content .card .table .column.col-1.svelte-bwlrzy{width:50px}.dash.svelte-bwlrzy .content .card .table .column .data.svelte-bwlrzy,.dash.svelte-bwlrzy .content .card .table .column .button-container.svelte-bwlrzy{width:100%;height:60px !important;display:flex;align-items:center;align-content:center;padding-bottom:10px}.dash.svelte-bwlrzy .content .card .table .column .button-container.svelte-bwlrzy{transform:translateY(-10px)}.dash.svelte-bwlrzy .content .card .table .column .header.svelte-bwlrzy{padding-bottom:20px}.button-container.svelte-bwlrzy.svelte-bwlrzy{margin-left:60%;width:40%}.modal-content.svelte-bwlrzy.svelte-bwlrzy{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-bwlrzy>.svelte-bwlrzy{padding:10px 0}.modal-content.svelte-bwlrzy .p.svelte-bwlrzy{color:var(--black-500);font-weight:300}.modal-content.svelte-bwlrzy img.svelte-bwlrzy{height:120px}.modal-content.svelte-bwlrzy .subtext.svelte-bwlrzy{width:100%}.button.svelte-bwlrzy.svelte-bwlrzy{font-family:var(--kw1c-font);border:none;background:var(--kw1c-red-900);color:var(--white-300);font-size:20px;width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:12px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.disabled.svelte-bwlrzy.svelte-bwlrzy{background:var(--black-300)}.button.disabled.svelte-bwlrzy.svelte-bwlrzy:hover{cursor:unset;background:var(--black-300)}.button.svelte-bwlrzy.svelte-bwlrzy:hover{cursor:pointer;background:var(--red-700)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n\\n.dash .content .sidebar {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 18%;\\n  background: rgb(255, 255, 255);\\n  height: 100%;\\n  filter: drop-shadow(0px 8px 28px rgba(20, 20, 43, 0.1));\\n  display: flex;\\n  flex-wrap: wrap;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  align-content: flex-start;\\n}\\n.dash .content .sidebar .menu-item {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  align-content: center;\\n  margin: 12px 0;\\n}\\n.dash .content .sidebar .menu-item .square {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 4px;\\n  background: var(--kw1c-blue-900);\\n  margin-right: 10px;\\n}\\n.dash .content .sidebar .menu-item .rect {\\n  width: calc(100% - 40px);\\n  height: 10px;\\n  background: var(--white-900);\\n  border-radius: 10px;\\n}\\n.dash .content .card {\\n  width: 72.5%;\\n  height: calc(100% - 50px);\\n  background: white;\\n  position: absolute;\\n  bottom: 0;\\n  right: 5%;\\n  border-top-right-radius: 20px;\\n  border-top-left-radius: 20px;\\n  padding: 20px;\\n  box-sizing: border-box;\\n}\\n.dash .content .card .table {\\n  display: flex;\\n}\\n.dash .content .card .table .column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 33%;\\n}\\n.dash .content .card .table .column.col-1 {\\n  width: 50px;\\n}\\n.dash .content .card .table .column .data,\\n.dash .content .card .table .column .button-container {\\n  width: 100%;\\n  height: 60px !important;\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  padding-bottom: 10px;\\n}\\n.dash .content .card .table .column .button-container {\\n  transform: translateY(-10px);\\n}\\n.dash .content .card .table .column .header {\\n  padding-bottom: 20px;\\n}\\n\\n.button-container {\\n  margin-left: 60%;\\n  width: 40%;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content .p {\\n  color: var(--black-500);\\n  font-weight: 300;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n\\n.button {\\n  font-family: var(--kw1c-font);\\n  border: none;\\n  background: var(--kw1c-red-900);\\n  color: var(--white-300);\\n  font-size: 20px;\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  padding: 12px;\\n  font-weight: 500;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button.disabled {\\n  background: var(--black-300);\\n}\\n.button.disabled:hover {\\n  cursor: unset;\\n  background: var(--black-300);\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--red-700);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, Kw1c, Modal, Loading, Radio } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, peterAssignedBadges, peterChosenStudents } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet students = {\\n    \\"Sarah Jones\\": false,\\n    \\"Ivar Leifsson\\": false,\\n    \\"Lagertha Bonde\\": false\\n};\\nlet showModal = false;\\nlet state = \\"init\\";\\nfunction handleIssueCourseBadges() {\\n    if (selected.length > 0) {\\n        peterAssignedBadges.set(selected);\\n        showModal = true;\\n    }\\n}\\nfunction handleModalClick() {\\n    if (state === \\"loaded\\") {\\n        goto(\\"/demo/journeys/peter/students\\");\\n    }\\n    else {\\n        state = \\"loading\\";\\n        setTimeout(() => {\\n            state = \\"loaded\\";\\n            currNode.set(2);\\n        }, 3_000);\\n    }\\n}\\nonMount(() => {\\n    currNode.set(1);\\n});\\n$: selected = Object.keys(students).filter((s) => students[s]);\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>{#if state === \\"loaded\\"}\\n\\t\\t\\t\\t\\tYOU HAVE SUCCESSFULLY ISSUED {selected.length} STUDENT INTERNATIONALISATION COURSE BADGES\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\tYOU ARE ABOUT TO ISSUE {selected.length} STUDENT INTERNATIONALISATION COURSE BADGES\\n\\t\\t\\t\\t{/if}</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t{#if state === \\"loaded\\"}\\n\\t\\t\\t\\t\\tClick the CONTINUE button to continue and assign student internship placements.\\n\\t\\t\\t\\t{:else}Click ISSUE BADGES button to issue the selected students.{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if state === \\"loading\\"}\\n\\t\\t\\t\\t<Loading img=\\"/imgs/blue-loading.png\\" />\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<button class=\\"button\\" on:click=\\"{handleModalClick}\\"\\n\\t\\t\\t\\t\\t>{state === \\"init\\" ? \\"ISSUE BADGES\\" : \\"CONTINUE\\"}</button>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\" />\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t<Highlight>All the students have passed!</Highlight> That’s great news. Let’s issue their course\\n\\t\\t\\tbadges.\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>\\n\\t\\t\\tSelect the checkboxes next to the students and click the issue course badges button to issue\\n\\t\\t\\ttheir badges.\\n\\t\\t</Typography>\\n\\t</div>\\n\\n\\t<div class=\\"dash\\">\\n\\t\\t<Kw1c variant=\\"white\\" title=\\"INTERNATIONALISATION COURSE STUDENTS\\">\\n\\t\\t\\t<div class=\\"sidebar\\">\\n\\t\\t\\t\\t{#each Array(5) as i}\\n\\t\\t\\t\\t\\t<div class=\\"menu-item\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"square\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"rect\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t<div class=\\"table\\">\\n\\t\\t\\t\\t\\t<div class=\\"column col-1\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\" color=\\"--white-300\\">.</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Radio bind:checked=\\"{students[student]}\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Student Applicant</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-blue-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{student.toUpperCase()}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Internship Category</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>3D Print Design</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"column\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"header action\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\" fontVariant=\\"kw1c\\">Course Result</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t{#each $peterChosenStudents as student (student)}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"data\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-sub-text\\" fontVariant=\\"kw1c\\" color=\\"--green-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>PASS</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"{`button ${selected.length <= 0 && \'disabled\'}`}\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{handleIssueCourseBadges}\\">ISSUE COURSE BADGES</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</Kw1c>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $peterChosenStudents, $$unsubscribe_peterChosenStudents;
  $$unsubscribe_peterChosenStudents = subscribe(peterChosenStudents, (value) => $peterChosenStudents = value);
  let students = {
    "Sarah Jones": false,
    "Ivar Leifsson": false,
    "Lagertha Bonde": false
  };
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected = Object.keys(students).filter((s) => students[s]);
    $$rendered = `<div class="container svelte-bwlrzy">${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: 16, isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="modal-content svelte-bwlrzy"><img src="/imgs/kw1c-white.png" alt="" class="logo svelte-bwlrzy"> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "kw1c-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `${`
					YOU ARE ABOUT TO ISSUE ${escape(selected.length)} STUDENT INTERNATIONALISATION COURSE BADGES
				`}`;
              }
            }
          )} <div class="p svelte-bwlrzy">${`Click ISSUE BADGES button to issue the selected students.`}</div> ${`<button class="button svelte-bwlrzy">${escape("ISSUE BADGES")}</button>`} <div class="subtext svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {})}</div></div>`;
        }
      }
    )} <div class="heading svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `All the students have passed!`;
          }
        })} That’s great news. Let’s issue their course
			badges.`;
      }
    })}</div> <div class="sub-text svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Select the checkboxes next to the students and click the issue course badges button to issue
			their badges.`;
      }
    })}</div> <div class="dash svelte-bwlrzy">${validate_component(Kw1c, "Kw1c").$$render(
      $$result,
      {
        variant: "white",
        title: "INTERNATIONALISATION COURSE STUDENTS"
      },
      {},
      {
        default: () => {
          return `<div class="sidebar svelte-bwlrzy">${each(Array(5), (i) => {
            return `<div class="menu-item svelte-bwlrzy" data-svelte-h="svelte-11chbf8"><div class="square svelte-bwlrzy"></div> <div class="rect svelte-bwlrzy"></div> </div>`;
          })}</div> <div class="card svelte-bwlrzy"><div class="table svelte-bwlrzy"><div class="column col-1 svelte-bwlrzy"><div class="header svelte-bwlrzy">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "sub-text",
              fontVariant: "kw1c",
              color: "--white-300"
            },
            {},
            {
              default: () => {
                return `.`;
              }
            }
          )}</div> ${each($peterChosenStudents, (student) => {
            return `<div class="data svelte-bwlrzy">${validate_component(Radio, "Radio").$$render(
              $$result,
              { checked: students[student] },
              {
                checked: ($$value) => {
                  students[student] = $$value;
                  $$settled = false;
                }
              },
              {}
            )} </div>`;
          })}</div> <div class="column svelte-bwlrzy"><div class="header svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Student Applicant`;
            }
          })}</div> ${each($peterChosenStudents, (student) => {
            return `<div class="data svelte-bwlrzy">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-header",
                fontVariant: "kw1c",
                color: "--kw1c-blue-900"
              },
              {},
              {
                default: () => {
                  return `${escape(student.toUpperCase())}`;
                }
              }
            )} </div>`;
          })}</div> <div class="column svelte-bwlrzy"><div class="header svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Internship Category`;
            }
          })}</div> ${each($peterChosenStudents, (student) => {
            return `<div class="data svelte-bwlrzy">${validate_component(Typography, "Typography").$$render(
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
            )} </div>`;
          })}</div> <div class="column svelte-bwlrzy"><div class="header action svelte-bwlrzy">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text", fontVariant: "kw1c" }, {}, {
            default: () => {
              return `Course Result`;
            }
          })}</div> ${each($peterChosenStudents, (student) => {
            return `<div class="data svelte-bwlrzy">${validate_component(Typography, "Typography").$$render(
              $$result,
              {
                variant: "kw1c-sub-text",
                fontVariant: "kw1c",
                color: "--green-900"
              },
              {},
              {
                default: () => {
                  return `PASS`;
                }
              }
            )} </div>`;
          })}</div></div> <div class="button-container svelte-bwlrzy"><button class="${escape(null_to_empty(`button ${selected.length <= 0 && "disabled"}`), true) + " svelte-bwlrzy"}">ISSUE COURSE BADGES</button></div></div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_peterChosenStudents();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d249e09b.js.map
