import{s as c,d as r,n as m}from"./scheduler.BSbnpsnJ.js";import{S as g,i as o,e as u,c as _,k as l,g as f,d as h}from"./index.CHa0mS77.js";/* empty css                                                    */function d(n){let e,i,a;return{c(){e=u("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),this.h()},h(){r(e.src,i=n[0])||l(e,"src",i),l(e,"alt",""),l(e,"style",a=`height: ${n[1]};`),l(e,"class","loading svelte-v96tiz")},m(t,s){f(t,e,s)},p(t,[s]){s&1&&!r(e.src,i=t[0])&&l(e,"src",i),s&2&&a!==(a=`height: ${t[1]};`)&&l(e,"style",a)},i:m,o:m,d(t){t&&h(e)}}}function z(n,e,i){let{img:a="/imgs/loading.png"}=e,{size:t="50px"}=e;return n.$$set=s=>{"img"in s&&i(0,a=s.img),"size"in s&&i(1,t=s.size)},[a,t]}class q extends g{constructor(e){super(),o(this,e,z,d,c,{img:0,size:1})}}export{q as L};