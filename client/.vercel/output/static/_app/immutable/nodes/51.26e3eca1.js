import{S as s,i as d,s as l,J as u,o as c}from"../chunks/index.c696c2c0.js";import{g as m}from"../chunks/navigation.3c5cee39.js";import{p}from"../chunks/stores.12a79fb1.js";import{w as g}from"../chunks/config.8d438661.js";function w(n,a,t){let e;u(n,p,r=>t(0,e=r));const o={Android(){return navigator.userAgent.match(/Android/i)},BlackBerry(){return navigator.userAgent.match(/BlackBerry/i)},iOS(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera(){return navigator.userAgent.match(/Opera Mini/i)},Windows(){return navigator.userAgent.match(/IEMobile/i)},any(){return o.Android()||o.BlackBerry()||o.iOS()||o.Opera()||o.Windows()}};return c(()=>{{const r=g.find(i=>i.name===e.params.slug);if(!r)return m("/demo/download-wallet");o.iOS()&&(window.location.href=r.downloads.ios),o.Android()&&(window.location.href=r.downloads.android)}}),[]}class B extends s{constructor(a){super(),d(this,a,w,null,l,{})}}export{B as component};
