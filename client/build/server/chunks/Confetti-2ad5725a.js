import { c as create_ssr_component, h as each, e as escape } from './ssr-b8a31716.js';

/* empty css                                       */
const css = {
  code: ".confetti-holder.svelte-15ksp55.svelte-15ksp55{position:relative}@keyframes svelte-15ksp55-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}100%{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg))}}@keyframes svelte-15ksp55-translate{0%{opacity:1}8%{transform:translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));opacity:1}12%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));opacity:1}16%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));opacity:1}100%{transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));opacity:0}}@keyframes svelte-15ksp55-no-gravity-translate{0%{opacity:1}100%{transform:translateY(var(--translate-y)) translateX(var(--translate-x));opacity:0}}.confetti.svelte-15ksp55.svelte-15ksp55{--translate-y:calc(-200px * var(--translate-y-multiplier));--translate-x:calc(200px * var(--translate-x-multiplier));position:absolute;height:calc(var(--size) * var(--scale));width:calc(var(--size) * var(--scale));animation:svelte-15ksp55-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;opacity:0;pointer-events:none}.confetti.svelte-15ksp55.svelte-15ksp55::before{--full-rotation:var(--rotation-xyz), var(--rotation-deg);content:'';display:block;width:100%;height:100%;background:var(--color);background-size:contain;transform:skew(var(--skew)) rotate3d(var(--full-rotation));animation:svelte-15ksp55-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear}.rounded.svelte-15ksp55 .confetti.svelte-15ksp55::before{border-radius:50%}.cone.svelte-15ksp55 .confetti.svelte-15ksp55{--translate-x:calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier))}.no-gravity.svelte-15ksp55 .confetti.svelte-15ksp55{animation-name:svelte-15ksp55-no-gravity-translate;animation-timing-function:ease-out}@media(prefers-reduced-motion){.reduced-motion.svelte-15ksp55 .confetti.svelte-15ksp55,.reduced-motion.svelte-15ksp55 .confetti.svelte-15ksp55::before{animation:none}}",
  map: '{"version":3,"file":"Confetti.svelte","sources":["Confetti.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from \\"svelte\\"\\r\\n\\r\\n  export let size = 10\\r\\n  export let x = [-0.5, 0.5]\\r\\n  export let y = [0.25, 1]\\r\\n  export let duration = 2000\\r\\n  export let infinite = false\\r\\n  export let delay = [0, 50]\\r\\n  export let colorRange = [0, 360]\\r\\n  export let colorArray = []\\r\\n  export let amount = 50\\r\\n  export let iterationCount = 1\\r\\n  export let fallDistance = \\"100px\\"\\r\\n  export let rounded = false\\r\\n  export let cone = false\\r\\n  export let noGravity = false\\r\\n  export let xSpread = 0.15\\r\\n  export let destroyOnComplete = true\\r\\n  export let disableForReducedMotion = false\\r\\n\\r\\n  let complete = false\\r\\n\\r\\n  onMount(() => {\\r\\n    if (!destroyOnComplete || infinite || iterationCount == \\"infinite\\") return\\r\\n\\r\\n    setTimeout(() => complete = true, (duration + delay[1]) * iterationCount)\\r\\n  })\\r\\n\\r\\n  function randomBetween(min, max) {\\r\\n    return Math.random() * (max - min) + min\\r\\n  }\\r\\n\\r\\n  function getColor() {\\r\\n    if (colorArray.length) return colorArray[Math.round(Math.random() * (colorArray.length - 1))]\\r\\n    else return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%)`\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n{#if !complete}\\r\\n  <div class=\\"confetti-holder\\" class:rounded class:cone class:no-gravity={noGravity} class:reduced-motion={disableForReducedMotion}>\\r\\n    {#each { length: amount } as _}\\r\\n      <div\\r\\n        class=\\"confetti\\"\\r\\n        style=\\"\\r\\n        --fall-distance: {fallDistance};\\r\\n        --size: {size}px;\\r\\n        --color: {getColor()};\\r\\n        --skew: {randomBetween(-45, 45)}deg,{randomBetween(-45, 45)}deg;\\r\\n        --rotation-xyz: {randomBetween(-10, 10)}, {randomBetween(-10, 10)}, {randomBetween(-10, 10)};\\r\\n        --rotation-deg: {randomBetween(0, 360)}deg;\\r\\n        --translate-y-multiplier: {randomBetween(y[0], y[1])};\\r\\n        --translate-x-multiplier: {randomBetween(x[0], x[1])};\\r\\n        --scale: {0.1 * randomBetween(2, 10)};\\r\\n        --transition-duration: {infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`};\\r\\n        --transition-delay: {randomBetween(delay[0], delay[1])}ms;\\r\\n        --transition-iteration-count: {infinite ? \'infinite\' : iterationCount};\\r\\n        --x-spread: {(1 - xSpread)}\\" />\\r\\n    {/each}\\r\\n  </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .confetti-holder {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      transform: skew(var(--skew)) rotate3d(var(--full-rotation));\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg));\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes translate {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    8% {\\r\\n      transform: translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    12% {\\r\\n      transform: translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    16% {\\r\\n      transform: translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes no-gravity-translate {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      transform: translateY(var(--translate-y)) translateX(var(--translate-x));\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .confetti {\\r\\n    --translate-y: calc(-200px * var(--translate-y-multiplier));\\r\\n    --translate-x: calc(200px * var(--translate-x-multiplier));\\r\\n    position: absolute;\\r\\n    height: calc(var(--size) * var(--scale));\\r\\n    width: calc(var(--size) * var(--scale));\\r\\n    animation: translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;\\r\\n    opacity: 0;\\r\\n    pointer-events: none;\\r\\n  }\\r\\n\\r\\n  .confetti::before {\\r\\n    --full-rotation: var(--rotation-xyz), var(--rotation-deg);\\r\\n    content: \'\';\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background: var(--color);\\r\\n    background-size: contain;\\r\\n    transform: skew(var(--skew)) rotate3d(var(--full-rotation));\\r\\n    animation: rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;\\r\\n  }\\r\\n\\r\\n  .rounded .confetti::before {\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n\\r\\n  .cone .confetti {\\r\\n    --translate-x: calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier));\\r\\n  }\\r\\n\\r\\n  .no-gravity .confetti {\\r\\n    animation-name: no-gravity-translate;\\r\\n    animation-timing-function: ease-out;\\r\\n  }\\r\\n\\r\\n  @media (prefers-reduced-motion) {\\r\\n    .reduced-motion .confetti,\\r\\n    .reduced-motion .confetti::before {\\r\\n      animation: none;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}'
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
    return `<div class="confetti svelte-15ksp55" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});

export { Confetti as C };
//# sourceMappingURL=Confetti-2ad5725a.js.map