import{S as j,i as y,s as D,e as w,b,g as _,v as E,d as p,f as I,h as d,k as g,a as M,y as S,l as k,m as v,c as V,z,n as B,p as P,A,K as F,W as R,_ as h,B as G,C as H,F as K,G as N,H as W}from"./index.c696c2c0.js";/* empty css                                                 *//* empty css                                         */import{C as J}from"./Card.5a9a43d6.js";import{a as q,f as C}from"./Highlight.13a17350.js";function O(l){let s,a,t,e,r,n,f,u,m;return r=new J({props:{withBorder:l[1],withoutPadding:l[2],borderRadius:l[3],$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){s=g("div"),t=M(),e=g("div"),S(r.$$.fragment),this.h()},l(i){s=k(i,"DIV",{class:!0}),v(s).forEach(d),t=V(i),e=k(i,"DIV",{class:!0});var o=v(e);z(r.$$.fragment,o),o.forEach(d),this.h()},h(){B(s,"class","backdrop svelte-14quojq"),B(e,"class","modal svelte-14quojq"),P(e,"border-radius",`${l[3]}px`)},m(i,o){b(i,s,o),b(i,t,o),b(i,e,o),A(r,e,null),f=!0,u||(m=F(s,"click",l[5]),u=!0)},p(i,o){const c={};o&2&&(c.withBorder=i[1]),o&4&&(c.withoutPadding=i[2]),o&8&&(c.borderRadius=i[3]),o&64&&(c.$$scope={dirty:o,ctx:i}),r.$set(c),o&8&&P(e,"border-radius",`${i[3]}px`)},i(i){f||(R(()=>{a||(a=h(s,q,{},!0)),a.run(1)}),_(r.$$.fragment,i),R(()=>{n||(n=h(e,C,{y:50,duration:400},!0)),n.run(1)}),f=!0)},o(i){a||(a=h(s,q,{},!1)),a.run(0),p(r.$$.fragment,i),n||(n=h(e,C,{y:50,duration:400},!1)),n.run(0),f=!1},d(i){i&&d(s),i&&a&&a.end(),i&&d(t),i&&d(e),G(r),i&&n&&n.end(),u=!1,m()}}}function L(l){let s;const a=l[4].default,t=H(a,l,l[6],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,r){t&&t.m(e,r),s=!0},p(e,r){t&&t.p&&(!s||r&64)&&K(t,a,e,e[6],s?W(a,e[6],r,null):N(e[6]),null)},i(e){s||(_(t,e),s=!0)},o(e){p(t,e),s=!1},d(e){t&&t.d(e)}}}function Q(l){let s,a,t=l[0]&&O(l);return{c(){t&&t.c(),s=w()},l(e){t&&t.l(e),s=w()},m(e,r){t&&t.m(e,r),b(e,s,r),a=!0},p(e,[r]){e[0]?t?(t.p(e,r),r&1&&_(t,1)):(t=O(e),t.c(),_(t,1),t.m(s.parentNode,s)):t&&(E(),p(t,1,1,()=>{t=null}),I())},i(e){a||(_(t),a=!0)},o(e){p(t),a=!1},d(e){t&&t.d(e),e&&d(s)}}}function T(l,s,a){let{$$slots:t={},$$scope:e}=s,{isOpen:r=!1}=s,{withBorder:n=!1}=s,{withoutPadding:f=!1}=s,{borderRadius:u=0}=s;const m=()=>a(0,r=!1);return l.$$set=i=>{"isOpen"in i&&a(0,r=i.isOpen),"withBorder"in i&&a(1,n=i.withBorder),"withoutPadding"in i&&a(2,f=i.withoutPadding),"borderRadius"in i&&a(3,u=i.borderRadius),"$$scope"in i&&a(6,e=i.$$scope)},[r,n,f,u,t,m,e]}class x extends j{constructor(s){super(),y(this,s,T,Q,D,{isOpen:0,withBorder:1,withoutPadding:2,borderRadius:3})}}export{x as M};
