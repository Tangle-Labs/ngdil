import{s as B,n as I,a as V}from"./scheduler.CIMAALbM.js";import{S as C,i as j,e as g,s as w,c as m,a as p,d as v,f as b,k as c,g as q,h as _,l as z}from"./index.C_4Wf81m.js";import{e as A}from"./each.BzNZ2yMi.js";/* empty css                                         */function P(r,s,a){const e=r.slice();return e[3]=s[a],e[5]=a,e}function S(r){let s,a;return{c(){s=g("div"),this.h()},l(e){s=m(e,"DIV",{class:!0}),p(s).forEach(v),this.h()},h(){c(s,"class",a=V(`node ${r[1]>r[5]?"completed":r[1]===r[5]?"active":""}`)+" svelte-1opg2hh")},m(e,o){q(e,s,o)},p(e,o){o&2&&a!==(a=V(`node ${e[1]>e[5]?"completed":e[1]===e[5]?"active":""}`)+" svelte-1opg2hh")&&c(s,"class",a)},d(e){e&&v(s)}}}function F(r){let s,a,e,o,d,n,k,D,u,f=A([...Array(r[0]).keys()]),i=[];for(let t=0;t<f.length;t+=1)i[t]=S(P(r,f,t));return{c(){s=g("div"),a=g("div"),e=g("div"),d=w(),n=g("div"),D=w(),u=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){s=m(t,"DIV",{class:!0});var h=p(s);a=m(h,"DIV",{class:!0});var l=p(a);e=m(l,"DIV",{class:!0,style:!0}),p(e).forEach(v),d=b(l),n=m(l,"DIV",{class:!0,style:!0}),p(n).forEach(v),l.forEach(v),D=b(h),u=m(h,"DIV",{class:!0});var y=p(u);for(let E=0;E<i.length;E+=1)i[E].l(y);y.forEach(v),h.forEach(v),this.h()},h(){c(e,"class","curr svelte-1opg2hh"),c(e,"style",o=`width: ${r[2]}%;`),c(n,"class","active svelte-1opg2hh"),c(n,"style",k=`width: ${r[1]!==r[0]&&1/(r[0]-1)*100}%;`),c(a,"class","progress svelte-1opg2hh"),c(u,"class","nodes svelte-1opg2hh"),c(s,"class","bar svelte-1opg2hh")},m(t,h){q(t,s,h),_(s,a),_(a,e),_(a,d),_(a,n),_(s,D),_(s,u);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(u,null)},p(t,[h]){if(h&4&&o!==(o=`width: ${t[2]}%;`)&&c(e,"style",o),h&3&&k!==(k=`width: ${t[1]!==t[0]&&1/(t[0]-1)*100}%;`)&&c(n,"style",k),h&3){f=A([...Array(t[0]).keys()]);let l;for(l=0;l<f.length;l+=1){const y=P(t,f,l);i[l]?i[l].p(y,h):(i[l]=S(y),i[l].c(),i[l].m(u,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=f.length}},i:I,o:I,d(t){t&&v(s),z(i,t)}}}function G(r,s,a){let e,{nodes:o=2}=s,{current:d=1}=s;return r.$$set=n=>{"nodes"in n&&a(0,o=n.nodes),"current"in n&&a(1,d=n.current)},r.$$.update=()=>{r.$$.dirty&3&&a(2,e=(d-1)/(o-1)*100<100?(d-1)/(o-1)*100:100)},[o,d,e]}class M extends C{constructor(s){super(),j(this,s,G,F,B,{nodes:0,current:1})}}export{M as P};
