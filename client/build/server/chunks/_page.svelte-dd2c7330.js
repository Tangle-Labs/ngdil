import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape, d as add_attribute, h as each } from './ssr-b8a31716.js';
import { g as goto } from './client-d87046c3.js';
import { B as Button } from './Button-27100b12.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { L as Loading } from './Loading-dcdfe046.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { F as FutureTech } from './FutureTech-ae8bd267.js';
import { M as Modal } from './Modal-de587996.js';
import { c as credentials } from './creds-54a304eb.js';
import { k as imaniChosenApplicant, a as currNode } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css$1 = {
  code: ".show.svelte-uvueln.svelte-uvueln{cursor:pointer}.card-content.svelte-uvueln.svelte-uvueln{max-width:400px;width:90vw;display:flex;justify-content:center;flex-wrap:wrap;padding:30px;box-sizing:border-box}.card-content.svelte-uvueln>.svelte-uvueln{width:100%;box-sizing:border-box}.card-content.svelte-uvueln .logo.svelte-uvueln{display:flex;justify-content:center}.card-content.svelte-uvueln .logo img.svelte-uvueln{height:100px}.card-content.svelte-uvueln .cred-name.svelte-uvueln{width:100%;padding:10px;padding-bottom:0;text-align:center}.card-content.svelte-uvueln .cred-issuer.svelte-uvueln{width:100%;padding:10px;text-align:center;padding-bottom:20px}.card-content.svelte-uvueln .text-block.svelte-uvueln{padding:15px 0;border-top:1px solid var(--black-300)}",
  map: '{"version":3,"file":"CredModal.svelte","sources":["CredModal.svelte"],"sourcesContent":["<style lang=\\"scss\\">.show {\\n  cursor: pointer;\\n}\\n\\n.card-content {\\n  max-width: 400px;\\n  width: 90vw;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n}\\n.card-content > * {\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n.card-content .logo {\\n  display: flex;\\n  justify-content: center;\\n}\\n.card-content .logo img {\\n  height: 100px;\\n}\\n.card-content .cred-name {\\n  width: 100%;\\n  padding: 10px;\\n  padding-bottom: 0;\\n  text-align: center;\\n}\\n.card-content .cred-issuer {\\n  width: 100%;\\n  padding: 10px;\\n  text-align: center;\\n  padding-bottom: 20px;\\n}\\n.card-content .text-block {\\n  padding: 15px 0;\\n  border-top: 1px solid var(--black-300);\\n}</style>\\n\\n<script lang=\\"ts\\">import { Modal, Typography } from \\"$lib/components\\";\\nexport let credential;\\nexport let name;\\nexport let issuer;\\nexport let logo;\\nlet isOpen = false;\\n<\/script>\\n\\n<img\\n\\tsrc=\\"/imgs/show.svg\\"\\n\\tclass=\\"show\\"\\n\\talt=\\"\\"\\n\\ton:click=\\"{() => {\\n\\t\\tisOpen = true;\\n\\t}}\\" />\\n\\n<Modal bind:isOpen=\\"{isOpen}\\">\\n\\t<div class=\\"card-content\\">\\n\\t\\t<div class=\\"logo\\">\\n\\t\\t\\t<img src=\\"{logo}\\" alt=\\"\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"cred-name\\">\\n\\t\\t\\t<Typography variant=\\"card-header\\">{name}</Typography>\\n\\t\\t</div>\\n\\t\\t<div class=\\"cred-issuer\\">\\n\\t\\t\\t<Typography color=\\"--black-500\\">Issued by {issuer}</Typography>\\n\\t\\t</div>\\n\\t\\t{#each Object.keys(credential) as key}\\n\\t\\t\\t<div class=\\"text-block\\">\\n\\t\\t\\t\\t<div class=\\"caption\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">{key}</Typography>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"data\\"><Typography>{credential[key]}</Typography></div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</Modal>\\n"],"names":[],"mappings":"AAAmB,iCAAM,CACvB,MAAM,CAAE,OACV,CAEA,yCAAc,CACZ,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CACA,2BAAa,CAAG,cAAE,CAChB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UACd,CACA,2BAAa,CAAC,mBAAM,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,2BAAa,CAAC,KAAK,CAAC,iBAAI,CACtB,MAAM,CAAE,KACV,CACA,2BAAa,CAAC,wBAAW,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,CAAC,CACjB,UAAU,CAAE,MACd,CACA,2BAAa,CAAC,0BAAa,CACzB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAClB,CACA,2BAAa,CAAC,yBAAY,CACxB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CACvC"}'
};
const CredModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { credential } = $$props;
  let { name } = $$props;
  let { issuer } = $$props;
  let { logo } = $$props;
  let isOpen = false;
  if ($$props.credential === void 0 && $$bindings.credential && credential !== void 0)
    $$bindings.credential(credential);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.issuer === void 0 && $$bindings.issuer && issuer !== void 0)
    $$bindings.issuer(issuer);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<img src="/imgs/show.svg" class="show svelte-uvueln" alt=""> ${validate_component(Modal, "Modal").$$render(
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
              return `Issued by ${escape(issuer)}`;
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
  return $$rendered;
});
const css = {
  code: ".container.svelte-d1txpn>.svelte-d1txpn{padding:15px 0}.container.svelte-d1txpn .header.svelte-d1txpn{width:100%;display:flex;justify-content:space-between}.container.svelte-d1txpn .details .detail.svelte-d1txpn{display:flex;width:100%;border-bottom:1px solid var(--white-500);justify-content:space-between;align-items:center}.container.svelte-d1txpn .details .detail.svelte-d1txpn:last-of-type{border-bottom:none}.container.svelte-d1txpn .details .side.svelte-d1txpn{display:flex;padding:10px 0;align-content:center;align-items:center}.container.svelte-d1txpn .details .side .circle-container.svelte-d1txpn{height:100%;padding-right:20px;display:flex}.container.svelte-d1txpn .details .side .circle-container .circle.svelte-d1txpn{width:30px;height:30px;background:var(--white-500);border-radius:25px;border:1px solid var(--white-900)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.container .details .detail {\\n  display: flex;\\n  width: 100%;\\n  border-bottom: 1px solid var(--white-500);\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.container .details .detail:last-of-type {\\n  border-bottom: none;\\n}\\n.container .details .side {\\n  display: flex;\\n  padding: 10px 0;\\n  align-content: center;\\n  align-items: center;\\n}\\n.container .details .side .circle-container {\\n  height: 100%;\\n  padding-right: 20px;\\n  display: flex;\\n}\\n.container .details .side .circle-container .circle {\\n  width: 30px;\\n  height: 30px;\\n  background: var(--white-500);\\n  border-radius: 25px;\\n  border: 1px solid var(--white-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, FutureTech, Button, Loading, CredModal } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { credentials } from \\"$lib/stores/creds\\";\\nimport { currNode, imaniChosenApplicant } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet currStatus = \\"init\\";\\nfunction handleVerify() {\\n    currStatus = \\"loading\\";\\n    setTimeout(() => {\\n        currNode.set(3);\\n        currStatus = \\"loaded\\";\\n    }, 8000);\\n}\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\">\\n\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\tGreat! All of <Highlight\\n\\t\\t\\t\\t\\t>{$imaniChosenApplicant?.split(\\" \\")[0]}’s credentials are verified.</Highlight> With such a\\n\\t\\t\\t\\tgood CV let’s hire {$imaniChosenApplicant?.split(\\" \\")[0]}.\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t{$imaniChosenApplicant?.split(\\" \\")[0]} has <Highlight\\n\\t\\t\\t\\t\\t>shared their digital CV with you.</Highlight> It’s time to verify their credentials.\\n\\t\\t\\t{/if}\\n\\t\\t</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography\\n\\t\\t\\t>{currStatus === \\"loaded\\"\\n\\t\\t\\t\\t? \\"Click the hire applicant button to hire the candidate. You can view the candidate’s individual credentials by clicking the eye icon in each row.\\"\\n\\t\\t\\t\\t: \`Click the verify CV button to verify \${\\n\\t\\t\\t\\t\\t\\t$imaniChosenApplicant?.split(\\" \\")[0]\\n\\t\\t\\t\\t  }’s credentials.\`}</Typography>\\n\\t</div>\\n\\t<div class=\\"dash\\">\\n\\t\\t<FutureTech header=\\"3D ENGINEER JOB APPLICANT\\">\\n\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t<div class=\\"name\\">\\n\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--future-tech-green\\" fontVariant=\\"kw1c\\"\\n\\t\\t\\t\\t\\t\\t>{$imaniChosenApplicant} Digital CV</Typography>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t<Button label=\\"Verify CV\\" variant=\\"future-tech\\" onClick=\\"{handleVerify}\\" />\\n\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"Verifying\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech-disabled\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tnull;\\n\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tlabel=\\"Hire Applicant\\"\\n\\t\\t\\t\\t\\t\\tvariant=\\"future-tech\\"\\n\\t\\t\\t\\t\\t\\tonClick=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tgoto('/demo/journeys/imani/issue-id');\\n\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">National ID</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by The Government</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"The Government\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"National ID\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{ ...credentials.nationalId, 'Full Name': $imaniChosenApplicant }}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/gov.svg\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Personal Statement</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by {$imaniChosenApplicant}</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"{$imaniChosenApplicant}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/verified.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"Personal Statement\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.personalStatement,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Full Name': $imaniChosenApplicant\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Future Engineer Diploma</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"Koning Willem I College\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"Future Engineer Diploma\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"/imgs/kw1c-white.png\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.courseCred,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Student Name': $imaniChosenApplicant\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Internship Certificate</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by Irish Future Print Co.</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"Irish Future Print Co.\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"Internship Certificate\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{'/imgs/irish.svg'}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.internshipBadge,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Intern Name': $imaniChosenApplicant,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tIssuer: 'Irish Future Print Co.',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tCountry: 'Ireland'\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"detail\\">\\n\\t\\t\\t\\t\\t<div class=\\"side\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"circle-container\\">\\n\\t\\t\\t\\t\\t\\t\\t{#if currStatus === \\"init\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"circle\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t{:else if currStatus === \\"loading\\"}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Loading size=\\"30px\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<img class=\\"circle\\" src=\\"/imgs/checked.png\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"meta\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"cred\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">Volunteering Badge</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"issuer\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by Volunteer Corps</Typography>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{#if currStatus === \\"loaded\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"verify\\">\\n\\t\\t\\t\\t\\t\\t\\t<CredModal\\n\\t\\t\\t\\t\\t\\t\\t\\tissuer=\\"Volunteer Corps\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tname=\\"Volunteering Badge\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tlogo=\\"{'/imgs/volunteer.svg'}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tcredential=\\"{{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...credentials.volunteerBadge,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t'Holder Name': \\"Gilian O'Leary\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\" />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</FutureTech>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"AAAmB,wBAAU,CAAG,cAAE,CAChC,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,wBAAU,CAAC,qBAAQ,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACnB,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAQ,CAC1B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CAAC,CACzC,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MACf,CACA,wBAAU,CAAC,QAAQ,CAAC,qBAAO,aAAc,CACvC,aAAa,CAAE,IACjB,CACA,wBAAU,CAAC,QAAQ,CAAC,mBAAM,CACxB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACf,CACA,wBAAU,CAAC,QAAQ,CAAC,KAAK,CAAC,+BAAkB,CAC1C,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IACX,CACA,wBAAU,CAAC,QAAQ,CAAC,KAAK,CAAC,iBAAiB,CAAC,qBAAQ,CAClD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,WAAW,CACnC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imaniChosenApplicant, $$unsubscribe_imaniChosenApplicant;
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
  $$unsubscribe_imaniChosenApplicant();
  return `<div class="container svelte-d1txpn"><div class="heading svelte-d1txpn">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
    default: () => {
      return `${currStatus === "loaded" ? `Great! All of ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `${escape($imaniChosenApplicant?.split(" ")[0])}’s credentials are verified.`;
        }
      })} With such a
				good CV let’s hire ${escape($imaniChosenApplicant?.split(" ")[0])}.` : `${escape($imaniChosenApplicant?.split(" ")[0])} has ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
        default: () => {
          return `shared their digital CV with you.`;
        }
      })} It’s time to verify their credentials.`}`;
    }
  })}</div> <div class="sub-text svelte-d1txpn">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(currStatus === "loaded" ? "Click the hire applicant button to hire the candidate. You can view the candidate’s individual credentials by clicking the eye icon in each row." : `Click the verify CV button to verify ${$imaniChosenApplicant?.split(" ")[0]}’s credentials.`)}`;
    }
  })}</div> <div class="dash svelte-d1txpn">${validate_component(FutureTech, "FutureTech").$$render($$result, { header: "3D ENGINEER JOB APPLICANT" }, {}, {
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
            return `${escape($imaniChosenApplicant)} Digital CV`;
          }
        }
      )}</div> ${currStatus === "init" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Verify CV",
          variant: "future-tech",
          onClick: handleVerify
        },
        {},
        {}
      )}` : `${currStatus === "loading" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Verifying",
          variant: "future-tech-disabled",
          onClick: () => {
          }
        },
        {},
        {}
      )}` : `${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Hire Applicant",
          variant: "future-tech",
          onClick: () => {
            goto();
          }
        },
        {},
        {}
      )}`}`}</div> <div class="details"><div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `National ID`;
        }
      })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by The Government`;
        }
      })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "The Government",
          name: "National ID",
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
          return `Personal Statement`;
        }
      })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by ${escape($imaniChosenApplicant)}`;
        }
      })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: $imaniChosenApplicant,
          logo: "/imgs/verified.png",
          name: "Personal Statement",
          credential: {
            ...credentials.personalStatement,
            "Full Name": $imaniChosenApplicant
          }
        },
        {},
        {}
      )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Future Engineer Diploma`;
        }
      })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Koning Willem I College`;
        }
      })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Koning Willem I College",
          name: "Future Engineer Diploma",
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
          return `Internship Certificate`;
        }
      })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Irish Future Print Co.`;
        }
      })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Irish Future Print Co.",
          name: "Internship Certificate",
          logo: "/imgs/irish.svg",
          credential: {
            ...credentials.internshipBadge,
            "Intern Name": $imaniChosenApplicant,
            Issuer: "Irish Future Print Co.",
            Country: "Ireland"
          }
        },
        {},
        {}
      )}</div>` : ``}</div> <div class="detail svelte-d1txpn"><div class="side svelte-d1txpn"><div class="circle-container svelte-d1txpn">${currStatus === "init" ? `<div class="circle svelte-d1txpn"></div>` : `${currStatus === "loading" ? `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}` : `<img class="circle svelte-d1txpn" src="/imgs/checked.png" alt="">`}`}</div> <div class="meta"><div class="cred">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
        default: () => {
          return `Volunteering Badge`;
        }
      })}</div> <div class="issuer">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
        default: () => {
          return `Issued by Volunteer Corps`;
        }
      })}</div></div></div> ${currStatus === "loaded" ? `<div class="verify">${validate_component(CredModal, "CredModal").$$render(
        $$result,
        {
          issuer: "Volunteer Corps",
          name: "Volunteering Badge",
          logo: "/imgs/volunteer.svg",
          credential: {
            ...credentials.volunteerBadge,
            "Holder Name": "Gilian O'Leary"
          }
        },
        {},
        {}
      )}</div>` : ``}</div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dd2c7330.js.map
