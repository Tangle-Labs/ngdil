import { c as create_ssr_component, b as subscribe, f as add_attribute, v as validate_component, e as escape } from './ssr-DGHpauN6.js';
import { T as Typography } from './Typography-C5Sz_Wo9.js';
import { $ as $format } from './runtime-Bjsr9Bul.js';

/* empty css                                            */
const css = {
  code: ".phone.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{width:320px;position:relative;height:600px;position:absolute;top:350px;left:50%;transform:translate(-50%, 0);z-index:10000}.phone.svelte-10wvbij>.phone__img.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{width:100%;position:absolute;top:0;left:0;z-index:10}.phone.svelte-10wvbij>.bg.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{height:485px;position:absolute;bottom:25px;left:15px;width:292px;background:#ffffff}.phone.svelte-10wvbij>.popup.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{position:absolute;width:292px;left:15px;bottom:25px;height:400px;background:#fff;box-shadow:0px -2px 4px rgba(0, 0, 0, 0.25);z-index:5;border-radius:10px 10px 0px 0px;display:flex;justify-content:center;align-items:flex-start;align-content:flex-start;padding:10px 20px;box-sizing:border-box;flex-wrap:wrap}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.handle.svelte-10wvbij.svelte-10wvbij{width:40px;background:var(--white-900);height:5px}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij.svelte-10wvbij{width:100%;text-align:center}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij>.content__logo.svelte-10wvbij{height:80px;padding-top:20px}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij>.content__title.svelte-10wvbij{padding:15px 0}",
  map: '{"version":3,"file":"Phone.svelte","sources":["Phone.svelte"],"sourcesContent":["<style lang=\\"scss\\">.phone {\\n  width: 320px;\\n  position: relative;\\n  height: 600px;\\n  position: absolute;\\n  top: 350px;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  z-index: 10000;\\n}\\n.phone > .phone__img {\\n  width: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 10;\\n}\\n.phone > .bg {\\n  height: 485px;\\n  position: absolute;\\n  bottom: 25px;\\n  left: 15px;\\n  width: 292px;\\n  background: #ffffff;\\n}\\n.phone > .popup {\\n  position: absolute;\\n  width: 292px;\\n  left: 15px;\\n  bottom: 25px;\\n  height: 400px;\\n  background: #fff;\\n  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);\\n  z-index: 5;\\n  border-radius: 10px 10px 0px 0px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  padding: 10px 20px;\\n  box-sizing: border-box;\\n  flex-wrap: wrap;\\n}\\n.phone > .popup > .handle {\\n  width: 40px;\\n  background: var(--white-900);\\n  height: 5px;\\n}\\n.phone > .popup > .content {\\n  width: 100%;\\n  text-align: center;\\n}\\n.phone > .popup > .content > .content__logo {\\n  height: 80px;\\n  padding-top: 20px;\\n}\\n.phone > .popup > .content > .content__title {\\n  padding: 15px 0;\\n}</style>\\n\\n<script lang=\\"ts\\">import Typography from \\"../../../components/ui/Typography/Typography.svelte\\";\\nimport { fly } from \\"svelte/transition\\";\\nimport { _ } from \\"svelte-i18n\\";\\nconst variants = {\\n    openJobs: {\\n        title: $_(\\"components.login.open_jobs\\"),\\n        logo: \\"/imgs/openjobs.png\\"\\n    },\\n    kw1cStaff: {\\n        title: $_(\\"components.login.kw1c_staff\\"),\\n        logo: \\"/imgs/kw1c-white.png\\"\\n    },\\n    kw1c: {\\n        title: $_(\\"components.login.kw1c_learner\\"),\\n        logo: \\"/imgs/kw1c-white.png\\"\\n    },\\n    bbc: {\\n        title: $_(\\"components.login.bbc\\"),\\n        logo: \\"/imgs/bbc.png\\"\\n    },\\n    futureTech: {\\n        title: $_(\\"components.login.future_tech\\"),\\n        logo: \\"/imgs/future-tech.png\\"\\n    }\\n};\\nexport let variant;\\nconst provider = variants[variant];\\nlet animateDrawer = false;\\nlet animateFlash = false;\\nexport let animatePhone = false;\\nfunction startAnimating() {\\n    setTimeout(() => {\\n        animateFlash = true;\\n    }, 3000);\\n    setTimeout(() => {\\n        animateFlash = false;\\n    }, 3200);\\n    setTimeout(() => {\\n        animateDrawer = true;\\n    }, 4000);\\n    setTimeout(() => {\\n        animatePhone = false;\\n    }, 10_000);\\n}\\nfunction watchAnimatePhoneTick(a) {\\n    if (!a)\\n        return;\\n    startAnimating();\\n}\\n$: watchAnimatePhoneTick(animatePhone);\\n<\/script>\\n\\n{#if animatePhone}\\n\\t<div\\n\\t\\tclass=\\"phone\\"\\n\\t\\tin:fly=\\"{{ y: 300, duration: 1100, x: 100 }}\\"\\n\\t\\tout:fly=\\"{{ y: 300, duration: 1100, x: 100 }}\\"\\n\\t>\\n\\t\\t<img class=\\"phone__img\\" src=\\"/imgs/phone.png\\" alt=\\"\\" />\\n\\n\\t\\t{#if animateFlash}\\n\\t\\t\\t<div class=\\"bg\\"></div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if animateDrawer}\\n\\t\\t\\t<div class=\\"popup\\" in:fly=\\"{{ duration: 1000, y: 100 }}\\">\\n\\t\\t\\t\\t<div class=\\"handle\\"></div>\\n\\t\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t\\t<img src=\\"{provider.logo}\\" alt=\\"\\" class=\\"content__logo\\" />\\n\\t\\t\\t\\t\\t{#if variant === \\"futureTech\\"}\\n\\t\\t\\t\\t\\t\\t<div class=\\"content__corp\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"kw1c-impact\\" color=\\"--future-tech-green\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{$_(\\"components.future_tech_co\\").toUpperCase()}</Typography\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t<div class=\\"content__title\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"list\\">{provider.title}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"content__p\\">\\n\\t\\t\\t\\t\\t\\t<Typography>{$_(\\"components.continue_in_browser\\")}</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n"],"names":[],"mappings":"AAAmB,kEAAO,CACxB,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,CAAC,CAAC,CAC7B,OAAO,CAAE,KACX,CACA,qBAAM,CAAG,wDAAY,CACnB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,EACX,CACA,qBAAM,CAAG,gDAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,OACd,CACA,qBAAM,CAAG,mDAAO,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,OAAO,CAAE,CAAC,CACV,aAAa,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAChC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,UAAU,CACvB,aAAa,CAAE,UAAU,CACzB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IACb,CACA,qBAAM,CAAG,qBAAM,CAAG,qCAAQ,CACxB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,WAAW,CAAC,CAC5B,MAAM,CAAE,GACV,CACA,qBAAM,CAAG,qBAAM,CAAG,sCAAS,CACzB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MACd,CACA,qBAAM,CAAG,qBAAM,CAAG,uBAAQ,CAAG,6BAAe,CAC1C,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IACf,CACA,qBAAM,CAAG,qBAAM,CAAG,uBAAQ,CAAG,8BAAgB,CAC3C,OAAO,CAAE,IAAI,CAAC,CAChB"}'
};
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  const variants = {
    openJobs: {
      title: $_("components.login.open_jobs"),
      logo: "/imgs/openjobs.png"
    },
    kw1cStaff: {
      title: $_("components.login.kw1c_staff"),
      logo: "/imgs/kw1c-white.png"
    },
    kw1c: {
      title: $_("components.login.kw1c_learner"),
      logo: "/imgs/kw1c-white.png"
    },
    bbc: {
      title: $_("components.login.bbc"),
      logo: "/imgs/bbc.png"
    },
    futureTech: {
      title: $_("components.login.future_tech"),
      logo: "/imgs/future-tech.png"
    }
  };
  let { variant } = $$props;
  const provider = variants[variant];
  let animateDrawer = false;
  let animateFlash = false;
  let { animatePhone = false } = $$props;
  function startAnimating() {
    setTimeout(
      () => {
        animateFlash = true;
      },
      3e3
    );
    setTimeout(
      () => {
        animateFlash = false;
      },
      3200
    );
    setTimeout(
      () => {
        animateDrawer = true;
      },
      4e3
    );
    setTimeout(
      () => {
        animatePhone = false;
      },
      1e4
    );
  }
  function watchAnimatePhoneTick(a) {
    if (!a) return;
    startAnimating();
  }
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.animatePhone === void 0 && $$bindings.animatePhone && animatePhone !== void 0) $$bindings.animatePhone(animatePhone);
  $$result.css.add(css);
  {
    watchAnimatePhoneTick(animatePhone);
  }
  $$unsubscribe__();
  return `${animatePhone ? `<div class="phone svelte-10wvbij"><img class="phone__img svelte-10wvbij" src="/imgs/phone.png" alt=""> ${animateFlash ? `<div class="bg svelte-10wvbij"></div>` : ``} ${animateDrawer ? `<div class="popup svelte-10wvbij"><div class="handle svelte-10wvbij"></div> <div class="content svelte-10wvbij"><img${add_attribute("src", provider.logo, 0)} alt="" class="content__logo svelte-10wvbij"> ${variant === "futureTech" ? `<div class="content__corp">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-impact",
      color: "--future-tech-green"
    },
    {},
    {
      default: () => {
        return `${escape($_("components.future_tech_co").toUpperCase())}`;
      }
    }
  )}</div>` : ``} <div class="content__title svelte-10wvbij">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
    default: () => {
      return `${escape(provider.title)}`;
    }
  })}</div> <div class="content__p">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($_("components.continue_in_browser"))}`;
    }
  })}</div></div></div>` : ``}</div>` : ``}`;
});

export { Phone as P };
//# sourceMappingURL=Phone-DVPz68sN.js.map
