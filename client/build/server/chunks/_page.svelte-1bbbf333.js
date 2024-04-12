import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { M as Modal } from './Modal-de587996.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { k as imaniChosenApplicant, a as currNode } from './flows.store-656655d6.js';
import { C as Confetti } from './Confetti-2ad5725a.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td .loading.svelte-1d37gdf{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1d37gdf .table td .loading .text.svelte-1d37gdf{padding-left:5px}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1d37gdf.svelte-1d37gdf{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1d37gdf>.svelte-1d37gdf{padding:10px 0;width:100%}.modal-content.svelte-1d37gdf img.svelte-1d37gdf{height:120px;width:unset}.modal-content.svelte-1d37gdf .p.svelte-1d37gdf{padding:20px 0}.modal-content.svelte-1d37gdf .subtext.svelte-1d37gdf{width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table th:last-of-type {\\n  text-align: center;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td:last-of-type {\\n  text-align: center;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { Confetti } from \\"svelte-confetti\\";\\nlet currStage = \\"init\\";\\nlet showModal = false;\\nfunction handleIssueCred() {\\n    showModal = false;\\n    currStage = \\"loading\\";\\n    setTimeout(() => {\\n        currNode.set(5);\\n        currStage = \\"issued\\";\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(4);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"16\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/future-tech.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t>FUTURE TECH CO.</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t>You are about to issue {$imaniChosenApplicant} with an Employee ID Credential</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t<Typography color=\\"--black-500\\">\\n\\t\\t\\t\\t\\tTo continue and issue the credential please click the issue credential button.\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Button variant=\\"future-tech\\" label=\\"Issue Credential\\" onClick=\\"{handleIssueCred}\\" />\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Cancel</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\tGreat work. {$imaniChosenApplicant?.split(\\" \\")[0]} has <Highlight\\n\\t\\t\\t\\t\\t>received their employee ID card.</Highlight> Let’s continue to see what’s next.\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<Highlight>{$imaniChosenApplicant?.split(\\" \\")[0]} has accepted your job offer</Highlight> and\\n\\t\\t\\t\\tjoined the system. Let’s issue their employee ID credential.\\n\\t\\t\\t{/if}</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\tClick the continue button to proceed and see what you have achieved so far.\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\tClick the issue ID button to issue {$imaniChosenApplicant?.split(\\" \\")[0]} with an employee ID\\n\\t\\t\\t\\tcredential from the company.\\n\\t\\t\\t{/if}</Typography>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\">\\n\\t\\t<Confetti\\n\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\tduration=\\"2000\\"\\n\\t\\t\\tamount=\\"500\\"\\n\\t\\t\\tfallDistance=\\"100vh\\" />\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"COMPANY EMPLOYEES\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Employee Name</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Designation</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Action</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$imaniChosenApplicant}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">3d Print Designer</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t{#if currStage === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"Issue ID\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t{:else if currStage === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"1.125rem\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\">Pending</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>{/if}\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Marcus Lithero</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">3d Print Designer</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Ada Liefsson</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">3d Print Designer</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Carter Jorvig</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">3d Print Designer</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--kw1c-red-900\\">Expired</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Malik Chaudry</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">3d Print Designer</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">Active</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"Continue\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/hired-applicant');\\n\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,uBAAS,CAC5B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MACnB,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,oBAAM,CAClC,YAAY,CAAE,GAChB,CACA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CAEA,4CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,6BAAc,CAAG,eAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,6BAAc,CAAC,kBAAI,CACjB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACT,CACA,6BAAc,CAAC,iBAAG,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,6BAAc,CAAC,uBAAS,CACtB,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
  $$unsubscribe_imaniChosenApplicant = subscribe(imaniChosenApplicant, (value) => $imaniChosenApplicant = value);
  let currStage = "init";
  let showModal = false;
  function handleIssueCred() {
    showModal = false;
    currStage = "loading";
    setTimeout(
      () => {
        currNode.set(5);
        currStage = "issued";
      },
      8e3
    );
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-1d37gdf">${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: "16", isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="modal-content svelte-1d37gdf"><img src="/imgs/future-tech.png" alt="" class="logo svelte-1d37gdf"> <div class="heading svelte-1d37gdf">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--future-tech-green"
            },
            {},
            {
              default: () => {
                return `FUTURE TECH CO.`;
              }
            }
          )}</div> ${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              fontVariant: "kw1c",
              color: "--kw1c-red-900"
            },
            {},
            {
              default: () => {
                return `You are about to issue ${escape($imaniChosenApplicant)} with an Employee ID Credential`;
              }
            }
          )} <div class="p svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `To continue and issue the credential please click the issue credential button.`;
            }
          })}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: "Issue Credential",
              onClick: handleIssueCred
            },
            {},
            {}
          )} <div class="subtext svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${currStage === "issued" ? `
				Great work. ${escape($imaniChosenApplicant?.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `received their employee ID card.`;
          }
        })} Let’s continue to see what’s next.
			` : ` ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant?.split(" ")[0])} has accepted your job offer`;
          }
        })} and
				joined the system. Let’s issue their employee ID credential.
			`}`;
      }
    })}</div> <div class="sub-text svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${currStage === "issued" ? `
				Click the continue button to proceed and see what you have achieved so far.
			` : `
				Click the issue ID button to issue ${escape($imaniChosenApplicant?.split(" ")[0])} with an employee ID
				credential from the company.
			`}`;
      }
    })}</div> <div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-1d37gdf">${validate_component(Confetti, "Confetti").$$render(
      $$result,
      {
        x: [-5, 5],
        y: [0, 0.1],
        delay: [500, 5e3],
        duration: "2000",
        amount: "500",
        fallDistance: "100vh"
      },
      {},
      {}
    )}</div> <div class="dash svelte-1d37gdf">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "COMPANY EMPLOYEES" }, {}, {
      default: () => {
        return `<table class="table svelte-1d37gdf"><tr><th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Employee Name`;
          }
        })}</th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Designation`;
          }
        })}</th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Action`;
          }
        })}</th></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($imaniChosenApplicant)}`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td> <td class="svelte-1d37gdf">${currStage === "init" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: "Issue ID",
            onClick: () => {
              showModal = true;
            }
          },
          {},
          {}
        )}` : `${currStage === "loading" ? `<div class="loading svelte-1d37gdf">${validate_component(Loading, "Loading").$$render($$result, { size: "1.125rem" }, {}, {})} <div class="text svelte-1d37gdf">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--secondary-900"
          },
          {},
          {
            default: () => {
              return `Pending`;
            }
          }
        )}</div></div>` : `${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}`}`}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Marcus Lithero`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Ada Liefsson`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Carter Jorvig`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "status",
            color: "--kw1c-red-900"
          },
          {},
          {
            default: () => {
              return `Expired`;
            }
          }
        )}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Malik Chaudry`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `3d Print Designer`;
          }
        })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
          default: () => {
            return `Active`;
          }
        })}</td></tr></table> ${currStage === "issued" ? `<div class="button-container svelte-1d37gdf">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "future-tech",
            label: "Continue",
            onClick: () => {
              goto();
            }
          },
          {},
          {}
        )}</div>` : ``}`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_imaniChosenApplicant();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1bbbf333.js.map
