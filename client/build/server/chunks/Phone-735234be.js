import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';

/* empty css                                     */const css = {
  code: ".phone.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{width:320px;position:relative;height:600px;position:absolute;top:350px;left:50%;transform:translate(-50%, 0);z-index:10000}.phone.svelte-10wvbij>.phone__img.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{width:100%;position:absolute;top:0;left:0;z-index:10}.phone.svelte-10wvbij>.bg.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{height:485px;position:absolute;bottom:25px;left:15px;width:292px;background:#ffffff}.phone.svelte-10wvbij>.popup.svelte-10wvbij.svelte-10wvbij.svelte-10wvbij{position:absolute;width:292px;left:15px;bottom:25px;height:400px;background:#fff;box-shadow:0px -2px 4px rgba(0, 0, 0, 0.25);z-index:5;border-radius:10px 10px 0px 0px;display:flex;justify-content:center;align-items:flex-start;align-content:flex-start;padding:10px 20px;box-sizing:border-box;flex-wrap:wrap}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.handle.svelte-10wvbij.svelte-10wvbij{width:40px;background:var(--white-900);height:5px}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij.svelte-10wvbij{width:100%;text-align:center}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij>.content__logo.svelte-10wvbij{height:80px;padding-top:20px}.phone.svelte-10wvbij>.popup.svelte-10wvbij>.content.svelte-10wvbij>.content__title.svelte-10wvbij{padding:15px 0}",
  map: null
};
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const variants = {
    openJobs: {
      title: "You have successfully logged in to the Open Jobs Network.",
      logo: "/imgs/openjobs.png"
    },
    kw1c: {
      title: "You have successfully logged in to the KW1C Learner Portal.",
      logo: "/imgs/kw1c-white.png"
    },
    bbc: {
      title: "You have successfully logged in to the Big Business Corp website.",
      logo: "/imgs/bbc.png"
    },
    futureTech: {
      title: "You have successfully logged in to the Future Tech Co. website.",
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
    if (!a)
      return;
    startAnimating();
  }
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.animatePhone === void 0 && $$bindings.animatePhone && animatePhone !== void 0)
    $$bindings.animatePhone(animatePhone);
  $$result.css.add(css);
  {
    watchAnimatePhoneTick(animatePhone);
  }
  return `${animatePhone ? `<div class="${"phone svelte-10wvbij"}"><img class="${"phone__img svelte-10wvbij"}" src="${"/imgs/phone.png"}">
		${animateFlash ? `<div class="${"bg svelte-10wvbij"}"></div>` : ``}

		${animateDrawer ? `<div class="${"popup svelte-10wvbij"}"><div class="${"handle svelte-10wvbij"}"></div>
				<div class="${"content svelte-10wvbij"}"><img${add_attribute("src", provider.logo, 0)} alt="${""}" class="${"content__logo svelte-10wvbij"}">
					${variant === "futureTech" ? `<div class="${"content__corp"}">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      variant: "kw1c-impact",
      color: "--future-tech-green"
    },
    {},
    {
      default: () => {
        return `FUTURE TECH CO.`;
      }
    }
  )}</div>` : ``}
					<div class="${"content__title svelte-10wvbij"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
    default: () => {
      return `${escape(provider.title)}`;
    }
  })}</div>

					<div class="${"content__p"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
    default: () => {
      return `You may continue in your browser app.`;
    }
  })}</div></div></div>` : ``}</div>` : ``}`;
});

export { Phone as P };
//# sourceMappingURL=Phone-735234be.js.map
