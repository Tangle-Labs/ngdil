import{S as H,i as K,s as Q,P as z,Q as J,k as w,a as k,w as V,l as y,c as O,x as L,I as F,n as _,b as S,y as A,K as W,R as Y,f as b,t as N,h,z as B,m as E,G as $,g as X,d as Z,N as x,q as P,r as R,u as q}from"./index-6e3ec9d0.js";import{T}from"./Typography-155fda85.js";/* empty css                                            */import{M as ee}from"./Modal-0acebe8d.js";function G(l,e,a){const t=l.slice();return t[7]=e[a],t}function te(l){let e;return{c(){e=P(l[1])},l(a){e=R(a,l[1])},m(a,t){S(a,e,t)},p(a,t){t&2&&q(e,a[1])},d(a){a&&h(e)}}}function ae(l){let e,a;return{c(){e=P("Issued by "),a=P(l[2])},l(t){e=R(t,"Issued by "),a=R(t,l[2])},m(t,n){S(t,e,n),S(t,a,n)},p(t,n){n&4&&q(a,t[2])},d(t){t&&h(e),t&&h(a)}}}function se(l){let e=l[7]+"",a;return{c(){a=P(e)},l(t){a=R(t,e)},m(t,n){S(t,a,n)},p(t,n){n&1&&e!==(e=t[7]+"")&&q(a,e)},d(t){t&&h(a)}}}function ne(l){let e=l[0][l[7]]+"",a;return{c(){a=P(e)},l(t){a=R(t,e)},m(t,n){S(t,a,n)},p(t,n){n&1&&e!==(e=t[0][t[7]]+"")&&q(a,e)},d(t){t&&h(a)}}}function U(l){let e,a,t,n,p,c,m,v;return t=new T({props:{variant:"sub-text",$$slots:{default:[se]},$$scope:{ctx:l}}}),c=new T({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}}),{c(){e=w("div"),a=w("div"),V(t.$$.fragment),n=k(),p=w("div"),V(c.$$.fragment),m=k(),this.h()},l(u){e=y(u,"DIV",{class:!0});var s=E(e);a=y(s,"DIV",{class:!0});var r=E(a);L(t.$$.fragment,r),r.forEach(h),n=O(s),p=y(s,"DIV",{class:!0});var d=E(p);L(c.$$.fragment,d),d.forEach(h),m=O(s),s.forEach(h),this.h()},h(){_(a,"class","caption"),_(p,"class","data"),_(e,"class","text-block svelte-uvueln")},m(u,s){S(u,e,s),$(e,a),A(t,a,null),$(e,n),$(e,p),A(c,p,null),$(e,m),v=!0},p(u,s){const r={};s&1025&&(r.$$scope={dirty:s,ctx:u}),t.$set(r);const d={};s&1025&&(d.$$scope={dirty:s,ctx:u}),c.$set(d)},i(u){v||(b(t.$$.fragment,u),b(c.$$.fragment,u),v=!0)},o(u){N(t.$$.fragment,u),N(c.$$.fragment,u),v=!1},d(u){u&&h(e),B(t),B(c)}}}function le(l){let e,a,t,n,p,c,m,v,u,s,r,d;m=new T({props:{variant:"card-header",$$slots:{default:[te]},$$scope:{ctx:l}}}),s=new T({props:{color:"--black-500",$$slots:{default:[ae]},$$scope:{ctx:l}}});let D=Object.keys(l[0]),f=[];for(let o=0;o<D.length;o+=1)f[o]=U(G(l,D,o));const j=o=>N(f[o],1,1,()=>{f[o]=null});return{c(){e=w("div"),a=w("div"),t=w("img"),p=k(),c=w("div"),V(m.$$.fragment),v=k(),u=w("div"),V(s.$$.fragment),r=k();for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var i=E(e);a=y(i,"DIV",{class:!0});var I=E(a);t=y(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(h),p=O(i),c=y(i,"DIV",{class:!0});var M=E(c);L(m.$$.fragment,M),M.forEach(h),v=O(i),u=y(i,"DIV",{class:!0});var g=E(u);L(s.$$.fragment,g),g.forEach(h),r=O(i);for(let C=0;C<f.length;C+=1)f[C].l(i);i.forEach(h),this.h()},h(){F(t.src,n=l[3])||_(t,"src",n),_(t,"alt",""),_(t,"class","svelte-uvueln"),_(a,"class","logo svelte-uvueln"),_(c,"class","cred-name svelte-uvueln"),_(u,"class","cred-issuer svelte-uvueln"),_(e,"class","card-content svelte-uvueln")},m(o,i){S(o,e,i),$(e,a),$(a,t),$(e,p),$(e,c),A(m,c,null),$(e,v),$(e,u),A(s,u,null),$(e,r);for(let I=0;I<f.length;I+=1)f[I].m(e,null);d=!0},p(o,i){(!d||i&8&&!F(t.src,n=o[3]))&&_(t,"src",n);const I={};i&1026&&(I.$$scope={dirty:i,ctx:o}),m.$set(I);const M={};if(i&1028&&(M.$$scope={dirty:i,ctx:o}),s.$set(M),i&1){D=Object.keys(o[0]);let g;for(g=0;g<D.length;g+=1){const C=G(o,D,g);f[g]?(f[g].p(C,i),b(f[g],1)):(f[g]=U(C),f[g].c(),b(f[g],1),f[g].m(e,null))}for(X(),g=D.length;g<f.length;g+=1)j(g);Z()}},i(o){if(!d){b(m.$$.fragment,o),b(s.$$.fragment,o);for(let i=0;i<D.length;i+=1)b(f[i]);d=!0}},o(o){N(m.$$.fragment,o),N(s.$$.fragment,o),f=f.filter(Boolean);for(let i=0;i<f.length;i+=1)N(f[i]);d=!1},d(o){o&&h(e),B(m),B(s),x(f,o)}}}function re(l){let e,a,t,n,p,c,m,v;function u(r){l[6](r)}let s={$$slots:{default:[le]},$$scope:{ctx:l}};return l[4]!==void 0&&(s.isOpen=l[4]),n=new ee({props:s}),z.push(()=>J(n,"isOpen",u)),{c(){e=w("img"),t=k(),V(n.$$.fragment),this.h()},l(r){e=y(r,"IMG",{src:!0,class:!0,alt:!0}),t=O(r),L(n.$$.fragment,r),this.h()},h(){F(e.src,a="/imgs/show.svg")||_(e,"src",a),_(e,"class","show svelte-uvueln"),_(e,"alt","")},m(r,d){S(r,e,d),S(r,t,d),A(n,r,d),c=!0,m||(v=W(e,"click",l[5]),m=!0)},p(r,[d]){const D={};d&1039&&(D.$$scope={dirty:d,ctx:r}),!p&&d&16&&(p=!0,D.isOpen=r[4],Y(()=>p=!1)),n.$set(D)},i(r){c||(b(n.$$.fragment,r),c=!0)},o(r){N(n.$$.fragment,r),c=!1},d(r){r&&h(e),r&&h(t),B(n,r),m=!1,v()}}}function oe(l,e,a){let{credential:t}=e,{name:n}=e,{issuer:p}=e,{logo:c}=e,m=!1;const v=()=>{console.log("hello"),a(4,m=!0)};function u(s){m=s,a(4,m)}return l.$$set=s=>{"credential"in s&&a(0,t=s.credential),"name"in s&&a(1,n=s.name),"issuer"in s&&a(2,p=s.issuer),"logo"in s&&a(3,c=s.logo)},[t,n,p,c,m,v,u]}class me extends H{constructor(e){super(),K(this,e,oe,re,Q,{credential:0,name:1,issuer:2,logo:3})}}const de={nationalId:{"Full Name":"","Passport Number":Math.random().toString(36).slice(2).toString().toUpperCase(),Nationality:"Netherlands","Date of Birth":"01/01/1999","Date Issued":"15/09/2018","Date Expires":"14/09/2028"},courseCred:{"Student Name":"","Course Name":"3D Engineering","Course Type":"Higher National Certificate","EQF Level":"4",Duration:"4 Years","Date Issued":new Date(Date.now()).toDateString(),Language:"Dutch"},collegeId:{Issuer:"Koning Willem 1 College","Student Name":"","Student Number":Math.random().toString(36).slice(2).toUpperCase(),"Date Issued":new Date(Date.now()-1e9).toDateString(),"Date Expires":new Date(Date.now()+1e9).toDateString()},staffId:{Issuer:"","Staff Name":"","Job Title":"",Department:"Human Rusources","Date Issued":new Date(Date.now()-1e9).toDateString(),"Date Expires":new Date(Date.now()+1e9).toDateString()},internshipBadge:{Issuer:"","Intern Name":"",Country:"","Activity Start":"07/01/2023","Activity End":"27/03/2023","Date Issued":new Date(Date.now()).toDateString()},personalStatement:{"Full Name":"","Passport Number":Math.random().toString(36).slice(2).toString().toUpperCase(),Statement:"lorem ipsum dolor sit amet","Date Issued":new Date(Date.now()-1e9).toDateString()},internationalisation:{"Course Name":"Internationalisation",Language:"Dutch","Activity Start":"07/01/2023","Activity End":"27/03/2023","Date Issued":new Date(Date.now()).toDateString()},internshipReference:{"Badge Name":"Professional Reference",Country:"",Language:"English",Description:"Lorem ipsum dolor sit amet.","Date Issued":new Date(Date.now()).toDateString()}};export{me as C,de as c};
