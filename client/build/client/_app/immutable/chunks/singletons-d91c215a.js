import{w as u}from"./index-d7ecdb1d.js";let f="",b="";function _(t){f=t.base,b=t.assets||f}let p="";function v(t){p=t}function w(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function k(){return{x:pageXOffset,y:pageYOffset}}function A(t){let e,n=null,r=null,s=null;for(const a of t.composedPath())a instanceof Element&&(!e&&a.nodeName.toUpperCase()==="A"&&(e=a),n===null&&(n=i(a,"data-sveltekit-noscroll")),r===null&&(r=i(a,"data-sveltekit-prefetch")),s===null&&(s=i(a,"data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:{noscroll:n,prefetch:r,reload:s},has:e?{rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)}:{}}}function i(t,e){const n=t.getAttribute(e);return n===null?n:n===""?!0:(n==="off",!1)}function d(t){const e=u(t);let n=!0;function r(){n=!0,e.update(a=>a)}function s(a){n=!1,e.set(a)}function o(a){let l;return e.subscribe(c=>{(l===void 0||n&&c!==l)&&a(l=c)})}return{notify:r,set:s,subscribe:o}}function g(){const{set:t,subscribe:e}=u(!1);let n;async function r(){clearTimeout(n);const s=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const a=(await s.json()).version!==p;return a&&(t(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:r}}let h;function U(t){h=t.client}const y={url:d({}),page:d({}),navigating:u(null),updated:g()};export{k as a,_ as b,v as c,h as d,A as f,w as g,U as i,y as s};
