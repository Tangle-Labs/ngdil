import{s as T,b as B,d as P,u as L,g as z,e as A,c as V}from"../chunks/scheduler.BSbnpsnJ.js";import{S as F,i as H,e as $,s as D,c as b,a as k,f as E,d as g,k as f,g as S,h as _,q as I,r as w,w as K,m as q,n as C,p as G,y as N,u as J,t as O,b as Q,j as R,v as U}from"../chunks/index.CHa0mS77.js";import{$ as W}from"../chunks/runtime.T3TU12bC.js";/* empty css                                                            */import{T as X}from"../chunks/Typography.hOQtM-ml.js";import{P as Y}from"../chunks/ProgressBar.CLfbec_I.js";import{b as Z}from"../chunks/flows.store.DMURw1eI.js";import{c as x}from"../chunks/onboarding.store.DOujBY4Z.js";import{a as ee}from"../chunks/axios.utils.Dn6T8Bpt.js";function M(n){let t,a,s,c,h,m,u,p,r,y,i,o;return m=new X({props:{variant:"button",color:"--black-300",$$slots:{default:[se]},$$scope:{ctx:n}}}),r=new Y({props:{nodes:5,current:n[2]}}),{c(){t=$("div"),a=$("div"),s=$("img"),h=D(),q(m.$$.fragment),u=D(),p=$("div"),q(r.$$.fragment),this.h()},l(e){t=b(e,"DIV",{class:!0});var l=k(t);a=b(l,"DIV",{class:!0});var v=k(a);s=b(v,"IMG",{src:!0,alt:!0,class:!0}),h=E(v),C(m.$$.fragment,v),v.forEach(g),u=E(l),p=b(l,"DIV",{class:!0});var d=k(p);C(r.$$.fragment,d),d.forEach(g),l.forEach(g),this.h()},h(){P(s.src,c="/imgs/back.svg")||f(s,"src",c),f(s,"alt",""),f(s,"class","icon"),f(a,"class","back svelte-yx894m"),f(p,"class","progress svelte-yx894m"),f(t,"class","bottom svelte-yx894m")},m(e,l){S(e,t,l),_(t,a),_(a,s),_(a,h),G(m,a,null),_(t,u),_(t,p),G(r,p,null),y=!0,i||(o=N(a,"click",n[4]),i=!0)},p(e,l){const v={};l&34&&(v.$$scope={dirty:l,ctx:e}),m.$set(v);const d={};l&4&&(d.current=e[2]),r.$set(d)},i(e){y||(I(m.$$.fragment,e),I(r.$$.fragment,e),y=!0)},o(e){w(m.$$.fragment,e),w(r.$$.fragment,e),y=!1},d(e){e&&g(t),J(m),J(r),i=!1,o()}}}function se(n){let t=n[1]("components.back")+"",a;return{c(){a=O(t)},l(s){a=Q(s,t)},m(s,c){S(s,a,c)},p(s,c){c&2&&t!==(t=s[1]("components.back")+"")&&R(a,t)},d(s){s&&g(a)}}}function te(n){let t,a,s,c,h,m,u,p,r;const y=n[3].default,i=B(y,n,n[5],null);let o=!(window.location.pathname==="/demo/choose-journey"&&n[0].length>0)&&M(n);return{c(){t=$("div"),a=$("div"),s=$("div"),c=$("img"),m=D(),u=$("div"),i&&i.c(),p=D(),o&&o.c(),this.h()},l(e){t=b(e,"DIV",{class:!0});var l=k(t);a=b(l,"DIV",{class:!0});var v=k(a);s=b(v,"DIV",{class:!0});var d=k(s);c=b(d,"IMG",{src:!0,class:!0,alt:!0}),m=E(d),u=b(d,"DIV",{class:!0});var j=k(u);i&&i.l(j),j.forEach(g),p=E(d),o&&o.l(d),d.forEach(g),v.forEach(g),l.forEach(g),this.h()},h(){P(c.src,h="/imgs/ngdil.svg")||f(c,"src",h),f(c,"class","logo"),f(c,"alt",""),f(u,"class","slot svelte-yx894m"),f(s,"class","container svelte-yx894m"),f(a,"class","background svelte-yx894m"),f(t,"class","main svelte-yx894m")},m(e,l){S(e,t,l),_(t,a),_(a,s),_(s,c),_(s,m),_(s,u),i&&i.m(u,null),_(s,p),o&&o.m(s,null),r=!0},p(e,[l]){i&&i.p&&(!r||l&32)&&L(i,y,e,e[5],r?A(y,e[5],l,null):z(e[5]),null),window.location.pathname==="/demo/choose-journey"&&e[0].length>0?o&&(U(),w(o,1,1,()=>{o=null}),K()):o?(o.p(e,l),l&1&&I(o,1)):(o=M(e),o.c(),I(o,1),o.m(s,null))},i(e){r||(I(i,e),I(o),r=!0)},o(e){w(i,e),w(o),r=!1},d(e){e&&g(t),i&&i.d(e),o&&o.d()}}}function ae(n,t,a){let s,c,h;V(n,Z,r=>a(0,s=r)),V(n,W,r=>a(1,c=r)),V(n,x,r=>a(2,h=r));let{$$slots:m={},$$scope:u}=t;ee.get("/");const p=()=>{history.back()};return n.$$set=r=>{"$$scope"in r&&a(5,u=r.$$scope)},[s,c,h,m,p,u]}class pe extends F{constructor(t){super(),H(this,t,ae,te,T,{})}}export{pe as component};