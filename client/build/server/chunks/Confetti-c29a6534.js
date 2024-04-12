import { c as create_ssr_component, h as each, e as escape } from './index2-d11f8066.js';

/* empty css                                        */const css = {
  code: ".confetti-holder.svelte-15ksp55.svelte-15ksp55{position:relative}@keyframes svelte-15ksp55-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}100%{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg))}}@keyframes svelte-15ksp55-translate{0%{opacity:1}8%{transform:translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));opacity:1}12%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));opacity:1}16%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));opacity:1}100%{transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));opacity:0}}@keyframes svelte-15ksp55-no-gravity-translate{0%{opacity:1}100%{transform:translateY(var(--translate-y)) translateX(var(--translate-x));opacity:0}}.confetti.svelte-15ksp55.svelte-15ksp55{--translate-y:calc(-200px * var(--translate-y-multiplier));--translate-x:calc(200px * var(--translate-x-multiplier));position:absolute;height:calc(var(--size) * var(--scale));width:calc(var(--size) * var(--scale));animation:svelte-15ksp55-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;opacity:0;pointer-events:none}.confetti.svelte-15ksp55.svelte-15ksp55::before{--full-rotation:var(--rotation-xyz), var(--rotation-deg);content:'';display:block;width:100%;height:100%;background:var(--color);background-size:contain;transform:skew(var(--skew)) rotate3d(var(--full-rotation));animation:svelte-15ksp55-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear}.rounded.svelte-15ksp55 .confetti.svelte-15ksp55::before{border-radius:50%}.cone.svelte-15ksp55 .confetti.svelte-15ksp55{--translate-x:calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier))}.no-gravity.svelte-15ksp55 .confetti.svelte-15ksp55{animation-name:svelte-15ksp55-no-gravity-translate;animation-timing-function:ease-out}@media(prefers-reduced-motion){.reduced-motion.svelte-15ksp55 .confetti.svelte-15ksp55,.reduced-motion.svelte-15ksp55 .confetti.svelte-15ksp55::before{animation:none}}",
  map: null
};
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2e3 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  let { disableForReducedMotion = false } = $$props;
  function getColor() {
    if (colorArray.length)
      return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else
      return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%)`;
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0)
    $$bindings.infinite(infinite);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.colorRange === void 0 && $$bindings.colorRange && colorRange !== void 0)
    $$bindings.colorRange(colorRange);
  if ($$props.colorArray === void 0 && $$bindings.colorArray && colorArray !== void 0)
    $$bindings.colorArray(colorArray);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.iterationCount === void 0 && $$bindings.iterationCount && iterationCount !== void 0)
    $$bindings.iterationCount(iterationCount);
  if ($$props.fallDistance === void 0 && $$bindings.fallDistance && fallDistance !== void 0)
    $$bindings.fallDistance(fallDistance);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.cone === void 0 && $$bindings.cone && cone !== void 0)
    $$bindings.cone(cone);
  if ($$props.noGravity === void 0 && $$bindings.noGravity && noGravity !== void 0)
    $$bindings.noGravity(noGravity);
  if ($$props.xSpread === void 0 && $$bindings.xSpread && xSpread !== void 0)
    $$bindings.xSpread(xSpread);
  if ($$props.destroyOnComplete === void 0 && $$bindings.destroyOnComplete && destroyOnComplete !== void 0)
    $$bindings.destroyOnComplete(destroyOnComplete);
  if ($$props.disableForReducedMotion === void 0 && $$bindings.disableForReducedMotion && disableForReducedMotion !== void 0)
    $$bindings.disableForReducedMotion(disableForReducedMotion);
  $$result.css.add(css);
  return `${`<div class="${[
    "confetti-holder svelte-15ksp55",
    (rounded ? "rounded" : "") + " " + (cone ? "cone" : "") + " " + (noGravity ? "no-gravity" : "") + " " + (disableForReducedMotion ? "reduced-motion" : "")
  ].join(" ").trim()}">${each({ length: amount }, (_) => {
    return `<div class="${"confetti svelte-15ksp55"}" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});

export { Confetti as C };
//# sourceMappingURL=Confetti-c29a6534.js.map
