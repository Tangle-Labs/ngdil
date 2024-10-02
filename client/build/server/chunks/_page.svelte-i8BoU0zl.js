import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { L as Loading } from './Loading-Dqtoqnil.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { l as imaniChosenApplicant, a as currNode } from './flows.store-Ch_DhNys.js';
import { h as highlight } from './highlight-CswzCIho.js';
import { C as Confetti } from './Confetti-CC7EIop2.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css = {
  code: ".container.svelte-1d37gdf>.svelte-1d37gdf{padding:15px 0}.container.svelte-1d37gdf .table.svelte-1d37gdf{width:100%}.container.svelte-1d37gdf .table th.svelte-1d37gdf{text-align:left}.container.svelte-1d37gdf .table th.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td.svelte-1d37gdf{height:50px}.container.svelte-1d37gdf .table td.svelte-1d37gdf:last-of-type{text-align:center}.container.svelte-1d37gdf .table td .loading.svelte-1d37gdf{display:flex;align-items:center;align-content:center;justify-content:center}.container.svelte-1d37gdf .table td .loading .text.svelte-1d37gdf{padding-left:5px}.container.svelte-1d37gdf .button-container.svelte-1d37gdf{padding:10px 0;width:100%;display:flex;justify-content:flex-end}.modal-content.svelte-1d37gdf.svelte-1d37gdf{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1d37gdf>.svelte-1d37gdf{padding:10px 0;width:100%}.modal-content.svelte-1d37gdf img.svelte-1d37gdf{height:120px;width:unset}.modal-content.svelte-1d37gdf .p.svelte-1d37gdf{padding:20px 0}.modal-content.svelte-1d37gdf .subtext.svelte-1d37gdf{width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .table {\\n  width: 100%;\\n}\\n.container .table th {\\n  text-align: left;\\n}\\n.container .table th:last-of-type {\\n  text-align: center;\\n}\\n.container .table td {\\n  height: 50px;\\n}\\n.container .table td:last-of-type {\\n  text-align: center;\\n}\\n.container .table td .loading {\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n  justify-content: center;\\n}\\n.container .table td .loading .text {\\n  padding-left: 5px;\\n}\\n.container .button-container {\\n  padding: 10px 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.modal-content img {\\n  height: 120px;\\n  width: unset;\\n}\\n.modal-content .p {\\n  padding: 20px 0;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, Modal } from \\"$lib/components\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { onMount } from \\"svelte\\";\\nimport { Confetti } from \\"svelte-confetti\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet currStage = \\"init\\";\\nlet showModal = false;\\nfunction handleIssueCred() {\\n    showModal = false;\\n    currStage = \\"loading\\";\\n    setTimeout(() => {\\n        currNode.set(5);\\n        currStage = \\"issued\\";\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(4);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<img src=\\"/imgs/future-tech.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--future-tech-green\\">\\n\\t\\t\\t\\t\\t{$_(\\"components.future_tech_co\\").toUpperCase()}\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Typography variant=\\"card-header\\" fontVariant=\\"kw1c\\" color=\\"--kw1c-red-900\\">\\n\\t\\t\\t\\t{$_(\\"journeys.imani.about_to_issue_applicant_with_emp_id_cred\\", {\\n\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant }\\n\\t\\t\\t\\t})}\\n\\t\\t\\t</Typography>\\n\\t\\t\\t<div class=\\"p\\">\\n\\t\\t\\t\\t<Typography color=\\"--black-500\\">\\n\\t\\t\\t\\t\\t{$_(\\"journeys.imani.click_issue_cred_to_continue\\")}\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<Button\\n\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.issue_cred')}\\"\\n\\t\\t\\t\\tonClick=\\"{handleIssueCred}\\"\\n\\t\\t\\t/>\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"components.cancel\\")}</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.imani.applicant_received_emp_id_card\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.imani.applicant_accepted_job_and_joined_system\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{/if}</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\t{$_(\\"journeys.imani.click_continue_to_see_what_you_achieved\\")}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{$_(\\"journeys.imani.click_issue_id_to_issue_applicant_emp_id_cred\\", {\\n\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t})}\\n\\t\\t\\t{/if}</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div\\n\\t\\tstyle=\\"position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;\\"\\n\\t>\\n\\t\\t<Confetti\\n\\t\\t\\tx=\\"{[-5, 5]}\\"\\n\\t\\t\\ty=\\"{[0, 0.1]}\\"\\n\\t\\t\\tdelay=\\"{[500, 5000]}\\"\\n\\t\\t\\tduration=\\"{2000}\\"\\n\\t\\t\\tamount=\\"{500}\\"\\n\\t\\t\\tfallDistance=\\"100vh\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.company_employees').toUpperCase()}\\">\\n\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.emp_name\\")}</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.designation\\")}</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t<th>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.action\\")}</Typography>\\n\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$imaniChosenApplicant}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.3d_print_designer\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t{#if currStage === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.issue_id')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t{:else if currStage === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"loading\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"1.125rem\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--secondary-900\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.pending\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>{/if}\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"applicants.Marcus_Lithero\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.3d_print_designer\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"applicants.Ada_Liefsson\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.3d_print_designer\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"applicants.Carter_Jorvig\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.3d_print_designer\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\" color=\\"--kw1c-red-900\\"\\n\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.expired\\")}</Typography\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"applicants.Malik_Chaudry\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{$_(\\"journeys.imani.3d_print_designer\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"status\\">{$_(\\"components.active\\")}</Typography>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</table>\\n\\n\\t\\t\\t{#if currStage === \\"issued\\"}\\n\\t\\t\\t\\t<div class=\\"button-container\\">\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('components.continue')}\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/hired-applicant');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,yBAAU,CAAG,eAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CAMA,yBAAU,CAAC,qBAAO,CAChB,KAAK,CAAE,IACT,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,UAAU,CAAE,IACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAG,CACnB,MAAM,CAAE,IACV,CACA,yBAAU,CAAC,MAAM,CAAC,iBAAE,aAAc,CAChC,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,uBAAS,CAC5B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MACnB,CACA,yBAAU,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,oBAAM,CAClC,YAAY,CAAE,GAChB,CACA,yBAAU,CAAC,gCAAkB,CAC3B,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CAEA,4CAAe,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MACd,CACA,6BAAc,CAAG,eAAE,CACjB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,KAAK,CAAE,IACT,CACA,6BAAc,CAAC,kBAAI,CACjB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KACT,CACA,6BAAc,CAAC,iBAAG,CAChB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,6BAAc,CAAC,uBAAS,CACtB,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
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
      { borderRadius: 16, isOpen: showModal },
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
                return `${escape($_("components.future_tech_co").toUpperCase())}`;
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
                return `${escape($_("journeys.imani.about_to_issue_applicant_with_emp_id_cred", {
                  values: { ChosenApplicant: $imaniChosenApplicant }
                }))}`;
              }
            }
          )} <div class="p svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.click_issue_cred_to_continue"))}`;
            }
          })}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: $_("journeys.imani.issue_cred"),
              onClick: handleIssueCred
            },
            {},
            {}
          )} <div class="subtext svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("components.cancel"))}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="heading svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${currStage === "issued" ? ` <!-- HTML_TAG_START -->${highlight($_("journeys.imani.applicant_received_emp_id_card", {
          values: {
            ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
          }
        }))}<!-- HTML_TAG_END --> ` : ` <!-- HTML_TAG_START -->${highlight($_("journeys.imani.applicant_accepted_job_and_joined_system", {
          values: {
            ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
          }
        }))}<!-- HTML_TAG_END --> `}`;
      }
    })}</div> <div class="sub-text svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `${currStage === "issued" ? ` ${escape($_("journeys.imani.click_continue_to_see_what_you_achieved"))} ` : ` ${escape($_("journeys.imani.click_issue_id_to_issue_applicant_emp_id_cred", {
          values: {
            ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
          }
        }))} `}`;
      }
    })}</div> <div style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;" class="svelte-1d37gdf">${validate_component(Confetti, "Confetti").$$render(
      $$result,
      {
        x: [-5, 5],
        y: [0, 0.1],
        delay: [500, 5e3],
        duration: 2e3,
        amount: 500,
        fallDistance: "100vh"
      },
      {},
      {}
    )}</div> <div class="dash svelte-1d37gdf">${validate_component(FutureTech, "FutureTech").$$render(
      $$result,
      {
        header: $_("journeys.imani.company_employees").toUpperCase()
      },
      {},
      {
        default: () => {
          return `<table class="table svelte-1d37gdf"><tr><th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.emp_name"))}`;
            }
          })}</th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.designation"))}`;
            }
          })}</th> <th class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.action"))}`;
            }
          })}</th></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($imaniChosenApplicant)}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.3d_print_designer"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${currStage === "init" ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: $_("journeys.imani.issue_id"),
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
                return `${escape($_("components.pending"))}`;
              }
            }
          )}</div></div>` : `${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
            default: () => {
              return `${escape($_("components.active"))}`;
            }
          })}`}`}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("applicants.Marcus_Lithero"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.3d_print_designer"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
            default: () => {
              return `${escape($_("components.active"))}`;
            }
          })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("applicants.Ada_Liefsson"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.3d_print_designer"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
            default: () => {
              return `${escape($_("components.active"))}`;
            }
          })}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("applicants.Carter_Jorvig"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.3d_print_designer"))}`;
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
                return `${escape($_("components.expired"))}`;
              }
            }
          )}</td></tr> <tr><td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
            default: () => {
              return `${escape($_("applicants.Malik_Chaudry"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape($_("journeys.imani.3d_print_designer"))}`;
            }
          })}</td> <td class="svelte-1d37gdf">${validate_component(Typography, "Typography").$$render($$result, { variant: "status" }, {}, {
            default: () => {
              return `${escape($_("components.active"))}`;
            }
          })}</td></tr></table> ${currStage === "issued" ? `<div class="button-container svelte-1d37gdf">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "future-tech",
              label: $_("components.continue"),
              onClick: () => {
                goto();
              }
            },
            {},
            {}
          )}</div>` : ``}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe__();
  $$unsubscribe_imaniChosenApplicant();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-i8BoU0zl.js.map
