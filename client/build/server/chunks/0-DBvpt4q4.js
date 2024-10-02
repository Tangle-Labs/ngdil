import { r as registerLocaleLoader, i as init, w as waitLocale } from './runtime-Bjsr9Bul.js';

const defaultLocale = "en";
registerLocaleLoader("en", () => import('./en-0fEVQzAt.js'));
registerLocaleLoader("nl", () => import('./nl-Bx4CfJDc.js'));
init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const ssr = false;
const load = async () => {
  await waitLocale();
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DrqCxg75.js')).default;
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/nodes/0.DvCnLCkx.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/runtime.T3TU12bC.js","_app/immutable/chunks/index.ucjh5kku.js","_app/immutable/chunks/scheduler.BSbnpsnJ.js","_app/immutable/chunks/index.CHa0mS77.js","_app/immutable/chunks/Typography.hOQtM-ml.js"];
const stylesheets = ["_app/immutable/assets/0.DRD6daix.css","_app/immutable/assets/Typography.CXcW0sSb.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-DBvpt4q4.js.map
