import{w as m}from"./index.dbd32e4c.js";import{U as S}from"./index.c696c2c0.js";var u={};function w(e){return e==="local"?localStorage:sessionStorage}function z(e,p,o){const s=(o==null?void 0:o.serializer)??JSON,c=(o==null?void 0:o.storage)??"local",a=typeof window<"u"&&typeof document<"u";function d(n,i){a&&w(c).setItem(n,s.stringify(i))}if(!u[e]){const n=m(p,t=>{const r=a?w(c).getItem(e):null;if(r&&t(s.parse(r)),a){const g=l=>{l.key===e&&t(l.newValue?s.parse(l.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:i,set:f}=n;u[e]={set(t){d(e,t),f(t)},update(t){const r=t(S(n));d(e,r),f(r)},subscribe:i}}return u[e]}export{z as p};
