function y(){}const A=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function B(){return Object.create(null)}function q(t){t.forEach(E)}function v(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function D(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return m(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,l){if(o){const _=x(n,e,r,l);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){return t??""}function L(t){return t&&v(t.destroy)?t.destroy:y}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function Q(t){k().$$.on_mount.push(t)}function R(t){k().$$.after_update.push(t)}const a=[],b=[];let c=[];const p=[],w=Promise.resolve();let g=!1;function O(){g||(g=!0,w.then(F))}function T(){return O(),w}function z(t){c.push(t)}function V(t){p.push(t)}const h=new Set;let s=0;function F(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),M(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();g=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function W(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{d as A,E as B,a as C,O as D,K as a,G as b,U as c,D as d,H as e,S as f,J as g,z as h,v as i,b as j,V as k,L as l,R as m,y as n,Q as o,A as p,N as q,q as r,C as s,T as t,I as u,B as v,F as w,P as x,W as y,f as z};
