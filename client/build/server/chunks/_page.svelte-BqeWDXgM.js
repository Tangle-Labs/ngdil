import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, f as add_attribute, h as each } from './ssr-DGHpauN6.js';
import { g as goto } from './client-DpIAX_q0.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { M as Modal } from './Modal-DwTTq216.js';
import { F as FutureTech } from './FutureTech-NooHb3Tr.js';
import { B as Button } from './Button-CQqTAFf-.js';
import { L as Loading } from './Loading-Dqtoqnil.js';
import { h as highlight } from './highlight-CswzCIho.js';
import { c as credentials } from './creds-CpchBagB.js';
import { l as imaniChosenApplicant, a as currNode } from './flows.store-Ch_DhNys.js';
import './exports-BGi7-Rnc.js';
import './Card-Cx9DTC_H.js';
import './public-4gV5o9PL.js';
import './index2-CJ31w3Iq.js';
import './index-C71yHpU5.js';

const css$1 = {
  code: ".show.svelte-uvueln.svelte-uvueln{cursor:pointer}.card-content.svelte-uvueln.svelte-uvueln{max-width:400px;width:90vw;display:flex;justify-content:center;flex-wrap:wrap;padding:30px;box-sizing:border-box}.card-content.svelte-uvueln>.svelte-uvueln{width:100%;box-sizing:border-box}.card-content.svelte-uvueln .logo.svelte-uvueln{display:flex;justify-content:center}.card-content.svelte-uvueln .logo img.svelte-uvueln{height:100px}.card-content.svelte-uvueln .cred-name.svelte-uvueln{width:100%;padding:10px;padding-bottom:0;text-align:center}.card-content.svelte-uvueln .cred-issuer.svelte-uvueln{width:100%;padding:10px;text-align:center;padding-bottom:20px}.card-content.svelte-uvueln .text-block.svelte-uvueln{padding:15px 0;border-top:1px solid var(--black-300)}",
  map: '{"version":3,"file":"CredModal.svelte","sources":["CredModal.svelte"],"sourcesContent":["<style lang=\\"scss\\">.show {\\n  cursor: pointer;\\n}\\n\\n.card-content {\\n  max-width: 400px;\\n  width: 90vw;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n}\\n.card-content > * {\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n.card-content .logo {\\n  display: flex;\\n  justify-content: center;\\n}\\n.card-content .logo img {\\n  height: 100px;\\n}\\n.card-content .cred-name {\\n  width: 100%;\\n  padding: 10px;\\n  padding-bottom: 0;\\n  text-align: center;\\n}\\n.card-content .cred-issuer {\\n  width: 100%;\\n  padding: 10px;\\n  text-align: center;\\n  padding-bottom: 20px;\\n}\\n.card-content .text-block {\\n  padding: 15px 0;\\n  border-top: 1px solid var(--black-300);\\n}</style>\\n\\n<script lang=\\"ts\\">import { Modal, Typography } from \\"$lib/components\\";\\nimport { _ } from \\"svelte-i18n\\";\\nexport let credential;\\nexport let name;\\nexport let issuer;\\nexport let logo;\\nlet isOpen = false;\\n<\/script>\\n\\n<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<img\\n\\tsrc=\\"/imgs/show.svg\\"\\n\\tclass=\\"show\\"\\n\\talt=\\"\\"\\n\\ton:click=\\"{() => {\\n\\t\\tisOpen = true;\\n\\t}}\\"\\n/>\\n\\n<Modal bind:isOpen=\\"{isOpen}\\">\\n\\t<div class=\\"card-content\\">\\n\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t<img src=\\"{logo}\\" alt=\\"\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"cred-name\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\">{name}</Typography>\\n\\t\\t</div>\\n\\t\\t<div class=\\"cred-issuer\\">\\n\\t\\t\\t<Typography color=\\"--black-500\\">\\n\\t\\t\\t\\t{$_(\\"components.issued_by\\", { values: { IssuerName: issuer } })}\\n\\t\\t\\t</Typography>\\n\\t\\t</div>\\n\\t\\t{#each Object.keys(credential) as key}\\n\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t<div class=\\"caption\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{key}</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"data\\"><Typography>{credential[key]}</Typography></div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</Modal>\\n"],"names":[],"mappings":"AAAmB,iCAAM,CACvB,MAAM,CAAE,OACV,CAEA,yCAAc,CACZ,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,2BAAa,CAAG,cAAE,CAChB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UACd,CACA,2BAAa,CAAC,mBAAM,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,2BAAa,CAAC,KAAK,CAAC,iBAAI,CACtB,MAAM,CAAE,KACV,CACA,2BAAa,CAAC,wBAAW,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,CAAC,CACjB,UAAU,CAAE,MACd,CACA,2BAAa,CAAC,0BAAa,CACzB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAClB,CACA,2BAAa,CAAC,yBAAY,CACxB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CACvC"}'
};
const CredModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { credential } = $$props;
  let { name } = $$props;
  let { issuer } = $$props;
  let { logo } = $$props;
  let isOpen = false;
  if ($$props.credential === void 0 && $$bindings.credential && credential !== void 0) $$bindings.credential(credential);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.issuer === void 0 && $$bindings.issuer && issuer !== void 0) $$bindings.issuer(issuer);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0) $$bindings.logo(logo);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <img src="/imgs/show.svg" class="show svelte-uvueln" alt=""> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { isOpen },
      {
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="card-content svelte-uvueln"><div class="logo svelte-uvueln"><img${add_attribute("src", logo, 0)} alt="" class="svelte-uvueln"></div> <div class="cred-name svelte-uvueln">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(name)}`;
            }
          })}</div> <div class="cred-issuer svelte-uvueln">${validate_component(Typography, "Typography").$$render($$result, { color: "--black-500" }, {}, {
            default: () => {
              return `${escape($_("components.issued_by", { values: { IssuerName: issuer } }))}`;
            }
          })}</div> ${each(Object.keys(credential), (key) => {
            return `<div class="text-block svelte-uvueln"><div class="caption">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
              default: () => {
                return `${escape(key)}`;
              }
            })}</div> <div class="data">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(credential[key])}`;
              }
            })}</div> </div>`;
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});
const css = {
  code: ".container.svelte-d1txpn>.svelte-d1txpn{padding:15px 0}.container.svelte-d1txpn .header.svelte-d1txpn{width:100%;display:flex;justify-content:space-between}.container.svelte-d1txpn .details .detail.svelte-d1txpn{display:flex;width:100%;border-bottom:1px solid var(--white-500);justify-content:space-between;align-items:center}.container.svelte-d1txpn .details .detail.svelte-d1txpn:last-of-type{border-bottom:none}.container.svelte-d1txpn .details .side.svelte-d1txpn{display:flex;padding:10px 0;align-content:center;align-items:center}.container.svelte-d1txpn .details .side .circle-container.svelte-d1txpn{height:100%;padding-right:20px;display:flex}.container.svelte-d1txpn .details .side .circle-container .circle.svelte-d1txpn{width:30px;height:30px;background:var(--white-500);border-radius:25px;border:1px solid var(--white-900)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .details .detail {\\n  display: flex;\\n  width: 100%;\\n  border-bottom: 1px solid var(--white-500);\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.container .details .detail:last-of-type {\\n  border-bottom: none;\\n}\\n.container .details .side {\\n  display: flex;\\n  padding: 10px 0;\\n  align-content: center;\\n  align-items: center;\\n}\\n.container .details .side .circle-container {\\n  height: 100%;\\n  padding-right: 20px;\\n  display: flex;\\n}\\n.container .details .side .circle-container .circle {\\n  width: 30px;\\n  height: 30px;\\n  background: var(--white-500);\\n  border-radius: 25px;\\n  border: 1px solid var(--white-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, CredModal } from \\"$lib/components\\";\\nimport { highlight } from \\"$lib/utils/highlight\\";\\nimport { credentials } from \\"$lib/stores/creds\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nimport { _ } from \\"svelte-i18n\\";\\nlet currStatus = \\"init\\";\\nfunction handleVerify() {\\n    currStatus = \\"loading\\";\\n    setTimeout(() => {\\n        currNode.set(3);\\n        currStatus = \\"loaded\\";\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.imani.creds_verified_with_good_cv\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{@html highlight(\\n\\t\\t\\t\\t\\t$_(\\"journeys.imani.cred_shared_time_to_verify\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t\\t})\\n\\t\\t\\t\\t)}\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{currStatus === \\"loaded\\"\\n\\t\\t\\t\\t? $_(\\"journeys.imani.hire_candidate_btn_desc\\")\\n\\t\\t\\t\\t: $_(\\"journeys.imani.verify_cv_btn_desc\\", {\\n\\t\\t\\t\\t\\t\\tvalues: { ChosenApplicant: $imaniChosenApplicant?.split(\\" \\")[0] }\\n\\t\\t\\t\\t  })}</Typography\\n\\t\\t>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"{$_('journeys.imani.3d_engineer_job_applicant').toUpperCase()}\\">\\n\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--future-tech-green\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t>{$imaniChosenApplicant + \\" \\" + $_(\\"journeys.imani.digital_cv\\")}</Typography\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.verify_cv_btn')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{handleVerify}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.verifying_btn')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech-disabled\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tnull;\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"{$_('journeys.imani.hire_applicant_btn')}\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/issue-id');\\n\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"creds.national_id\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.issued_by\\", { values: { IssuerName: $_(\\"issuer.the_govt\\") } })}\\n\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.the_govt')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('creds.national_id')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{ ...credentials.nationalId, 'Full Name': $imaniChosenApplicant }}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/gov.svg\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.personal_statement\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.issued_by\\", { values: { IssuerName: $imaniChosenApplicant } })}\\n\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$imaniChosenApplicant}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/verified.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('journeys.imani.personal_statement')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.personalStatement,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Full Name': $imaniChosenApplicant\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"journeys.imani.future_engineer_diploma\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.issued_by\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalues: { IssuerName: $_(\\"issuer.koning_willem_i_college\\") }\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.koning_willem_i_college')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('journeys.imani.future_engineer_diploma')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.courseCred,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $imaniChosenApplicant\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.internship_certificate\\")}</Typography\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.issued_by\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalues: { IssuerName: $_(\\"issuer.irish_future_print_co\\") }\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.irish_future_print_co')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('journeys.imani.internship_certificate')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{'/imgs/irish.svg'}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.internshipBadge,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Intern Name': $imaniChosenApplicant,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tIssuer: $_('issuer.irish_future_print_co'),\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tCountry: $_('journeys.imani.ireland')\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{$_(\\"journeys.imani.volunteering_badge\\")}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{$_(\\"components.issued_by\\", {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvalues: { IssuerName: $_(\\"issuer.volunteer_corps\\") }\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t})}\\n\\t\\t\\t\\t\\t\\t\\t\\t</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$_('issuer.volunteer_corps')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"{$_('journeys.imani.volunteering_badge')}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{'/imgs/volunteer.svg'}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.volunteerBadge,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Holder Name': $_('applicants.Gilian_OLeary')\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,qBAAQ,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CACzC,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACf,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAO,aAAc,CACvC,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,QAAQ,CAAC,mBAAM,CACxB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACf,CACA,wBAAU,CAAC,QAAQ,CAAC,KAAK,CAAC,+BAAkB,CAC1C,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAiB,CAAC,qBAAQ,CAClD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CACnC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_imaniChosenApplicant = subscribe(imaniChosenApplicant, (value) => $imaniChosenApplicant = value);
  let currStatus = "init";
  function handleVerify() {
    currStatus = "loading";
    setTimeout(
      () => {
        currNode.set(3);
        currStatus = "loaded";
      },
      8e3
    );
  }
  $$result.css.add(css);
  $$unsubscribe__();
  $$unsubscribe_imaniChosenApplicant();
  return `<div class="container svelte-d1txpn"><div class="heading svelte-d1txpn">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${currStatus === "loaded" ? `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.creds_verified_with_good_cv", {
        values: {
          ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
        }
      }))}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${highlight($_("journeys.imani.cred_shared_time_to_verify", {
        values: {
          ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
        }
      }))}<!-- HTML_TAG_END -->`}`;
    }
  })}</div> <div class="sub-text svelte-d1txpn">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(currStatus === "loaded" ? $_("journeys.imani.hire_candidate_btn_desc") : $_("journeys.imani.verify_cv_btn_desc", {
        values: {
          ChosenApplicant: $imaniChosenApplicant?.split(" ")[0]
        }
      }))}`;
    }
  })}</div> <div class="dash svelte-d1txpn">${validate_component(FutureTech, "FutureTech").$$render(
    $$result,
    {
      header: $_("journeys.imani.3d_engineer_job_applicant").toUpperCase()
    },
    {},
    {
      default: () => {
        return `<div class="header svelte-d1txpn"><div class="name">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--future-tech-green",
            fontVariant: "kw1c"
          },
          {},
          {
            default: () => {
              return `${escape($imaniChosenApplicant + " " + $_("journeys.imani.digital_cv"))}`;
            }
          }
        )}</div> ${currStatus === "init" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.verify_cv_btn"),
            variant: "future-tech",
            onClick: handleVerify
          },
          {},
          {}
        )}` : `${currStatus === "loading" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.verifying_btn"),
            variant: "future-tech-disabled",
            onClick: () => {
            }
          },
          {},
          {}
        )}` : `${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: $_("journeys.imani.hire_applicant_btn"),
            variant: "future-tech",
            onClick: () => {
              goto();
            }
          },
          {},
          {}
        )}`}`}</div> <div class="details"><div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("creds.national_id"))}`;
          }
        })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("components.issued_by", {
              values: { IssuerName: $_("issuer.the_govt") }
            }))}`;
          }
        })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
          $$result,
          {
            issuer: $_("issuer.the_govt"),
            name: $_("creds.national_id"),
            credential: {
              ...credentials.nationalId,
              "Full Name": $imaniChosenApplicant
            },
            logo: "/imgs/gov.svg"
          },
          {},
          {}
        )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.personal_statement"))}`;
          }
        })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("components.issued_by", {
              values: { IssuerName: $imaniChosenApplicant }
            }))}`;
          }
        })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
          $$result,
          {
            issuer: $imaniChosenApplicant,
            logo: "/imgs/verified.png",
            name: $_("journeys.imani.personal_statement"),
            credential: {
              ...credentials.personalStatement,
              "Full Name": $imaniChosenApplicant
            }
          },
          {},
          {}
        )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.future_engineer_diploma"))}`;
          }
        })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("components.issued_by", {
              values: {
                IssuerName: $_("issuer.koning_willem_i_college")
              }
            }))}`;
          }
        })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
          $$result,
          {
            issuer: $_("issuer.koning_willem_i_college"),
            name: $_("journeys.imani.future_engineer_diploma"),
            logo: "/imgs/kw1c-white.png",
            credential: {
              ...credentials.courseCred,
              "Student Name": $imaniChosenApplicant
            }
          },
          {},
          {}
        )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.internship_certificate"))}`;
          }
        })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("components.issued_by", {
              values: {
                IssuerName: $_("issuer.irish_future_print_co")
              }
            }))}`;
          }
        })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
          $$result,
          {
            issuer: $_("issuer.irish_future_print_co"),
            name: $_("journeys.imani.internship_certificate"),
            logo: "/imgs/irish.svg",
            credential: {
              ...credentials.internshipBadge,
              "Intern Name": $imaniChosenApplicant,
              Issuer: $_("issuer.irish_future_print_co"),
              Country: $_("journeys.imani.ireland")
            }
          },
          {},
          {}
        )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `${escape($_("journeys.imani.volunteering_badge"))}`;
          }
        })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `${escape($_("components.issued_by", {
              values: { IssuerName: $_("issuer.volunteer_corps") }
            }))}`;
          }
        })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
          $$result,
          {
            issuer: $_("issuer.volunteer_corps"),
            name: $_("journeys.imani.volunteering_badge"),
            logo: "/imgs/volunteer.svg",
            credential: {
              ...credentials.volunteerBadge,
              "Holder Name": $_("applicants.Gilian_OLeary")
            }
          },
          {},
          {}
        )}</div>` : ``}</div></div>`;
      }
    }
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BqeWDXgM.js.map
