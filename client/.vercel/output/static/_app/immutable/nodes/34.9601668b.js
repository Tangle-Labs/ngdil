import{S as We,i as Xe,s as Ze,w as Ke,N as je,k,y as M,a as O,l as y,m as w,z as P,c as N,h as f,n as m,b as v,A as Y,E as d,O as Fe,g as S,d as T,B as q,J as xe,o as et,q as C,r as B,M as Ve,K as Je,v as fe,P as ke,f as ue,L as ze,D as tt,I as $e,Q as ye,e as Ce,u as pe}from"../chunks/index.c696c2c0.js";import{g as lt}from"../chunks/navigation.3c5cee39.js";import{T as J}from"../chunks/Typography.c955645f.js";/* empty css                                                 */import{M as st}from"../chunks/Modal.e79947f2.js";import{L as nt}from"../chunks/Loading.f896444c.js";import{R as rt}from"../chunks/Radio.ab2dc47e.js";import{H as at}from"../chunks/Highlight.13a17350.js";import{K as ot}from"../chunks/Kw1c.5b6e7780.js";import{a as Be,v as it,w as ct}from"../chunks/flows.store.949a2a01.js";function Re(o,e,t){const l=o.slice();return l[9]=e[t],l}function Le(o,e,t){const l=o.slice();return l[9]=e[t],l}function Ge(o,e,t){const l=o.slice();return l[9]=e[t],l}function Me(o,e,t){const l=o.slice();return l[9]=e[t],l[16]=e,l[17]=t,l}function ft(o,e,t){const l=o.slice();return l[18]=e[t],l}function ut(o){let e,t=o[3].length+"",l,r;return{c(){e=C("YOU ARE ABOUT TO ISSUE "),l=C(t),r=C(" STUDENT INTERNATIONALISATION COURSE BADGES")},l(s){e=B(s,"YOU ARE ABOUT TO ISSUE "),l=B(s,t),r=B(s," STUDENT INTERNATIONALISATION COURSE BADGES")},m(s,n){v(s,e,n),v(s,l,n),v(s,r,n)},p(s,n){n&8&&t!==(t=s[3].length+"")&&pe(l,t)},d(s){s&&f(e),s&&f(l),s&&f(r)}}}function dt(o){let e,t=o[3].length+"",l,r;return{c(){e=C("YOU HAVE SUCCESSFULLY ISSUED "),l=C(t),r=C(" STUDENT INTERNATIONALISATION COURSE BADGES")},l(s){e=B(s,"YOU HAVE SUCCESSFULLY ISSUED "),l=B(s,t),r=B(s," STUDENT INTERNATIONALISATION COURSE BADGES")},m(s,n){v(s,e,n),v(s,l,n),v(s,r,n)},p(s,n){n&8&&t!==(t=s[3].length+"")&&pe(l,t)},d(s){s&&f(e),s&&f(l),s&&f(r)}}}function _t(o){let e;function t(s,n){return s[2]==="loaded"?dt:ut}let l=t(o),r=l(o);return{c(){r.c(),e=Ce()},l(s){r.l(s),e=Ce()},m(s,n){r.m(s,n),v(s,e,n)},p(s,n){l===(l=t(s))&&r?r.p(s,n):(r.d(1),r=l(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){r.d(s),s&&f(e)}}}function ht(o){let e;return{c(){e=C("Click ISSUE BADGES button to issue the selected students.")},l(t){e=B(t,"Click ISSUE BADGES button to issue the selected students.")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function $t(o){let e;return{c(){e=C("Click the CONTINUE button to continue and assign student internship placements.")},l(t){e=B(t,"Click the CONTINUE button to continue and assign student internship placements.")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function pt(o){let e,t=o[2]==="init"?"ISSUE BADGES":"CONTINUE",l,r,s;return{c(){e=k("button"),l=C(t),this.h()},l(n){e=y(n,"BUTTON",{class:!0});var c=w(e);l=B(c,t),c.forEach(f),this.h()},h(){m(e,"class","button svelte-bwlrzy")},m(n,c){v(n,e,c),d(e,l),r||(s=Je(e,"click",o[6]),r=!0)},p(n,c){c&4&&t!==(t=n[2]==="init"?"ISSUE BADGES":"CONTINUE")&&pe(l,t)},i:$e,o:$e,d(n){n&&f(e),r=!1,s()}}}function gt(o){let e,t;return e=new nt({props:{img:"/imgs/blue-loading.png"}}),{c(){M(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,r){Y(e,l,r),t=!0},p:$e,i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function mt(o){let e,t,l,r,s,n,c,E,u,b,V,p,A,H;s=new J({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[_t]},$$scope:{ctx:o}}});function Q(_,U){return _[2]==="loaded"?$t:ht}let g=Q(o),h=g(o);const L=[gt,pt],I=[];function j(_,U){return _[2]==="loading"?0:1}return u=j(o),b=I[u]=L[u](o),A=new J({props:{variant:"sub-text"}}),{c(){e=k("div"),t=k("img"),r=O(),M(s.$$.fragment),n=O(),c=k("div"),h.c(),E=O(),b.c(),V=O(),p=k("div"),M(A.$$.fragment),this.h()},l(_){e=y(_,"DIV",{class:!0});var U=w(e);t=y(U,"IMG",{src:!0,alt:!0,class:!0}),r=N(U),P(s.$$.fragment,U),n=N(U),c=y(U,"DIV",{class:!0});var W=w(c);h.l(W),W.forEach(f),E=N(U),b.l(U),V=N(U),p=y(U,"DIV",{class:!0});var G=w(p);P(A.$$.fragment,G),G.forEach(f),U.forEach(f),this.h()},h(){tt(t.src,l="/imgs/kw1c-white.png")||m(t,"src",l),m(t,"alt",""),m(t,"class","logo svelte-bwlrzy"),m(c,"class","p svelte-bwlrzy"),m(p,"class","subtext svelte-bwlrzy"),m(e,"class","modal-content svelte-bwlrzy")},m(_,U){v(_,e,U),d(e,t),d(e,r),Y(s,e,null),d(e,n),d(e,c),h.m(c,null),d(e,E),I[u].m(e,null),d(e,V),d(e,p),Y(A,p,null),H=!0},p(_,U){const W={};U&2097164&&(W.$$scope={dirty:U,ctx:_}),s.$set(W),g!==(g=Q(_))&&(h.d(1),h=g(_),h&&(h.c(),h.m(c,null)));let G=u;u=j(_),u===G?I[u].p(_,U):(fe(),T(I[G],1,1,()=>{I[G]=null}),ue(),b=I[u],b?b.p(_,U):(b=I[u]=L[u](_),b.c()),S(b,1),b.m(e,V))},i(_){H||(S(s.$$.fragment,_),S(b),S(A.$$.fragment,_),H=!0)},o(_){T(s.$$.fragment,_),T(b),T(A.$$.fragment,_),H=!1},d(_){_&&f(e),q(s),h.d(),I[u].d(),q(A)}}}function vt(o){let e;return{c(){e=C("All the students have passed!")},l(t){e=B(t,"All the students have passed!")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function bt(o){let e,t,l;return e=new at({props:{$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment),t=C(` That’s great news. Let’s issue their course
			badges.`)},l(r){P(e.$$.fragment,r),t=B(r,` That’s great news. Let’s issue their course
			badges.`)},m(r,s){Y(e,r,s),v(r,t,s),l=!0},p(r,s){const n={};s&2097152&&(n.$$scope={dirty:s,ctx:r}),e.$set(n)},i(r){l||(S(e.$$.fragment,r),l=!0)},o(r){T(e.$$.fragment,r),l=!1},d(r){q(e,r),r&&f(t)}}}function kt(o){let e;return{c(){e=C(`Select the checkboxes next to the students and click the issue course badges button to issue
			their badges.`)},l(t){e=B(t,`Select the checkboxes next to the students and click the issue course badges button to issue
			their badges.`)},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function yt(o){let e,t,l,r,s;return{c(){e=k("div"),t=k("div"),l=O(),r=k("div"),s=O(),this.h()},l(n){e=y(n,"DIV",{class:!0});var c=w(e);t=y(c,"DIV",{class:!0}),w(t).forEach(f),l=N(c),r=y(c,"DIV",{class:!0}),w(r).forEach(f),s=N(c),c.forEach(f),this.h()},h(){m(t,"class","square svelte-bwlrzy"),m(r,"class","rect svelte-bwlrzy"),m(e,"class","menu-item svelte-bwlrzy")},m(n,c){v(n,e,c),d(e,t),d(e,l),d(e,r),d(e,s)},p:$e,d(n){n&&f(e)}}}function wt(o){let e;return{c(){e=C(".")},l(t){e=B(t,".")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function Pe(o,e){let t,l,r,s,n;function c(u){e[8](u,e[9])}let E={};return e[0][e[9]]!==void 0&&(E.checked=e[0][e[9]]),l=new rt({props:E}),Ke.push(()=>je(l,"checked",c)),{key:o,first:null,c(){t=k("div"),M(l.$$.fragment),s=O(),this.h()},l(u){t=y(u,"DIV",{class:!0});var b=w(t);P(l.$$.fragment,b),s=N(b),b.forEach(f),this.h()},h(){m(t,"class","data svelte-bwlrzy"),this.first=t},m(u,b){v(u,t,b),Y(l,t,null),d(t,s),n=!0},p(u,b){e=u;const V={};!r&&b&17&&(r=!0,V.checked=e[0][e[9]],Fe(()=>r=!1)),l.$set(V)},i(u){n||(S(l.$$.fragment,u),n=!0)},o(u){T(l.$$.fragment,u),n=!1},d(u){u&&f(t),q(l)}}}function Et(o){let e;return{c(){e=C("Student Applicant")},l(t){e=B(t,"Student Applicant")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function St(o){let e=o[9].toUpperCase()+"",t;return{c(){t=C(e)},l(l){t=B(l,e)},m(l,r){v(l,t,r)},p(l,r){r&16&&e!==(e=l[9].toUpperCase()+"")&&pe(t,e)},d(l){l&&f(t)}}}function Ye(o){let e,t,l,r;return t=new J({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-blue-900",$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){e=k("div"),M(t.$$.fragment),l=O(),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);P(t.$$.fragment,n),l=N(n),n.forEach(f),this.h()},h(){m(e,"class","data svelte-bwlrzy")},m(s,n){v(s,e,n),Y(t,e,null),d(e,l),r=!0},p(s,n){const c={};n&2097168&&(c.$$scope={dirty:n,ctx:s}),t.$set(c)},i(s){r||(S(t.$$.fragment,s),r=!0)},o(s){T(t.$$.fragment,s),r=!1},d(s){s&&f(e),q(t)}}}function It(o){let e;return{c(){e=C("Internship Category")},l(t){e=B(t,"Internship Category")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function Dt(o){let e;return{c(){e=C("3D Print Design")},l(t){e=B(t,"3D Print Design")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function qe(o,e){let t,l,r,s;return l=new J({props:{variant:"kw1c-sub-text",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[Dt]},$$scope:{ctx:e}}}),{key:o,first:null,c(){t=k("div"),M(l.$$.fragment),r=O(),this.h()},l(n){t=y(n,"DIV",{class:!0});var c=w(t);P(l.$$.fragment,c),r=N(c),c.forEach(f),this.h()},h(){m(t,"class","data svelte-bwlrzy"),this.first=t},m(n,c){v(n,t,c),Y(l,t,null),d(t,r),s=!0},p(n,c){e=n;const E={};c&2097152&&(E.$$scope={dirty:c,ctx:e}),l.$set(E)},i(n){s||(S(l.$$.fragment,n),s=!0)},o(n){T(l.$$.fragment,n),s=!1},d(n){n&&f(t),q(l)}}}function Tt(o){let e;return{c(){e=C("Course Result")},l(t){e=B(t,"Course Result")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function At(o){let e;return{c(){e=C("PASS")},l(t){e=B(t,"PASS")},m(t,l){v(t,e,l)},d(t){t&&f(e)}}}function He(o,e){let t,l,r,s;return l=new J({props:{variant:"kw1c-sub-text",fontVariant:"kw1c",color:"--green-900",$$slots:{default:[At]},$$scope:{ctx:e}}}),{key:o,first:null,c(){t=k("div"),M(l.$$.fragment),r=O(),this.h()},l(n){t=y(n,"DIV",{class:!0});var c=w(t);P(l.$$.fragment,c),r=N(c),c.forEach(f),this.h()},h(){m(t,"class","data svelte-bwlrzy"),this.first=t},m(n,c){v(n,t,c),Y(l,t,null),d(t,r),s=!0},p(n,c){e=n;const E={};c&2097152&&(E.$$scope={dirty:c,ctx:e}),l.$set(E)},i(n){s||(S(l.$$.fragment,n),s=!0)},o(n){T(l.$$.fragment,n),s=!1},d(n){n&&f(t),q(l)}}}function Ut(o){let e,t,l,r,s,n,c,E,u=[],b=new Map,V,p,A,H,Q,g,h,L,I,j,_=[],U=new Map,W,G,le,X,ge,K=[],we=new Map,me,se,Z,ve,de,ne,be,Ee,Se=Array(5),x=[];for(let a=0;a<Se.length;a+=1)x[a]=yt(ft(o,Se,a));c=new J({props:{variant:"sub-text",fontVariant:"kw1c",color:"--white-300",$$slots:{default:[wt]},$$scope:{ctx:o}}});let re=o[4];const Ie=a=>a[9];for(let a=0;a<re.length;a+=1){let i=Me(o,re,a),$=Ie(i);b.set($,u[a]=Pe($,i))}H=new J({props:{variant:"sub-text",fontVariant:"kw1c",$$slots:{default:[Et]},$$scope:{ctx:o}}});let ee=o[4],D=[];for(let a=0;a<ee.length;a+=1)D[a]=Ye(Ge(o,ee,a));const Qe=a=>T(D[a],1,1,()=>{D[a]=null});I=new J({props:{variant:"sub-text",fontVariant:"kw1c",$$slots:{default:[It]},$$scope:{ctx:o}}});let ae=o[4];const De=a=>a[9];for(let a=0;a<ae.length;a+=1){let i=Le(o,ae,a),$=De(i);U.set($,_[a]=qe($,i))}X=new J({props:{variant:"sub-text",fontVariant:"kw1c",$$slots:{default:[Tt]},$$scope:{ctx:o}}});let oe=o[4];const Te=a=>a[9];for(let a=0;a<oe.length;a+=1){let i=Re(o,oe,a),$=Te(i);we.set($,K[a]=He($,i))}return{c(){e=k("div");for(let a=0;a<x.length;a+=1)x[a].c();t=O(),l=k("div"),r=k("div"),s=k("div"),n=k("div"),M(c.$$.fragment),E=O();for(let a=0;a<u.length;a+=1)u[a].c();V=O(),p=k("div"),A=k("div"),M(H.$$.fragment),Q=O();for(let a=0;a<D.length;a+=1)D[a].c();g=O(),h=k("div"),L=k("div"),M(I.$$.fragment),j=O();for(let a=0;a<_.length;a+=1)_[a].c();W=O(),G=k("div"),le=k("div"),M(X.$$.fragment),ge=O();for(let a=0;a<K.length;a+=1)K[a].c();me=O(),se=k("div"),Z=k("button"),ve=C("ISSUE COURSE BADGES"),this.h()},l(a){e=y(a,"DIV",{class:!0});var i=w(e);for(let R=0;R<x.length;R+=1)x[R].l(i);i.forEach(f),t=N(a),l=y(a,"DIV",{class:!0});var $=w(l);r=y($,"DIV",{class:!0});var F=w(r);s=y(F,"DIV",{class:!0});var te=w(s);n=y(te,"DIV",{class:!0});var ie=w(n);P(c.$$.fragment,ie),ie.forEach(f),E=N(te);for(let R=0;R<u.length;R+=1)u[R].l(te);te.forEach(f),V=N(F),p=y(F,"DIV",{class:!0});var z=w(p);A=y(z,"DIV",{class:!0});var ce=w(A);P(H.$$.fragment,ce),ce.forEach(f),Q=N(z);for(let R=0;R<D.length;R+=1)D[R].l(z);z.forEach(f),g=N(F),h=y(F,"DIV",{class:!0});var _e=w(h);L=y(_e,"DIV",{class:!0});var Ae=w(L);P(I.$$.fragment,Ae),Ae.forEach(f),j=N(_e);for(let R=0;R<_.length;R+=1)_[R].l(_e);_e.forEach(f),W=N(F),G=y(F,"DIV",{class:!0});var he=w(G);le=y(he,"DIV",{class:!0});var Ue=w(le);P(X.$$.fragment,Ue),Ue.forEach(f),ge=N(he);for(let R=0;R<K.length;R+=1)K[R].l(he);he.forEach(f),F.forEach(f),me=N($),se=y($,"DIV",{class:!0});var Oe=w(se);Z=y(Oe,"BUTTON",{class:!0});var Ne=w(Z);ve=B(Ne,"ISSUE COURSE BADGES"),Ne.forEach(f),Oe.forEach(f),$.forEach(f),this.h()},h(){m(e,"class","sidebar svelte-bwlrzy"),m(n,"class","header svelte-bwlrzy"),m(s,"class","column col-1 svelte-bwlrzy"),m(A,"class","header svelte-bwlrzy"),m(p,"class","column svelte-bwlrzy"),m(L,"class","header svelte-bwlrzy"),m(h,"class","column svelte-bwlrzy"),m(le,"class","header action svelte-bwlrzy"),m(G,"class","column svelte-bwlrzy"),m(r,"class","table svelte-bwlrzy"),m(Z,"class",de=Ve(`button ${o[3].length<=0&&"disabled"}`)+" svelte-bwlrzy"),m(se,"class","button-container svelte-bwlrzy"),m(l,"class","card svelte-bwlrzy")},m(a,i){v(a,e,i);for(let $=0;$<x.length;$+=1)x[$].m(e,null);v(a,t,i),v(a,l,i),d(l,r),d(r,s),d(s,n),Y(c,n,null),d(s,E);for(let $=0;$<u.length;$+=1)u[$].m(s,null);d(r,V),d(r,p),d(p,A),Y(H,A,null),d(p,Q);for(let $=0;$<D.length;$+=1)D[$].m(p,null);d(r,g),d(r,h),d(h,L),Y(I,L,null),d(h,j);for(let $=0;$<_.length;$+=1)_[$].m(h,null);d(r,W),d(r,G),d(G,le),Y(X,le,null),d(G,ge);for(let $=0;$<K.length;$+=1)K[$].m(G,null);d(l,me),d(l,se),d(se,Z),d(Z,ve),ne=!0,be||(Ee=Je(Z,"click",o[5]),be=!0)},p(a,i){const $={};i&2097152&&($.$$scope={dirty:i,ctx:a}),c.$set($),i&17&&(re=a[4],fe(),u=ke(u,i,Ie,1,a,re,b,s,ye,Pe,null,Me),ue());const F={};if(i&2097152&&(F.$$scope={dirty:i,ctx:a}),H.$set(F),i&16){ee=a[4];let z;for(z=0;z<ee.length;z+=1){const ce=Ge(a,ee,z);D[z]?(D[z].p(ce,i),S(D[z],1)):(D[z]=Ye(ce),D[z].c(),S(D[z],1),D[z].m(p,null))}for(fe(),z=ee.length;z<D.length;z+=1)Qe(z);ue()}const te={};i&2097152&&(te.$$scope={dirty:i,ctx:a}),I.$set(te),i&16&&(ae=a[4],fe(),_=ke(_,i,De,1,a,ae,U,h,ye,qe,null,Le),ue());const ie={};i&2097152&&(ie.$$scope={dirty:i,ctx:a}),X.$set(ie),i&16&&(oe=a[4],fe(),K=ke(K,i,Te,1,a,oe,we,G,ye,He,null,Re),ue()),(!ne||i&8&&de!==(de=Ve(`button ${a[3].length<=0&&"disabled"}`)+" svelte-bwlrzy"))&&m(Z,"class",de)},i(a){if(!ne){S(c.$$.fragment,a);for(let i=0;i<re.length;i+=1)S(u[i]);S(H.$$.fragment,a);for(let i=0;i<ee.length;i+=1)S(D[i]);S(I.$$.fragment,a);for(let i=0;i<ae.length;i+=1)S(_[i]);S(X.$$.fragment,a);for(let i=0;i<oe.length;i+=1)S(K[i]);ne=!0}},o(a){T(c.$$.fragment,a);for(let i=0;i<u.length;i+=1)T(u[i]);T(H.$$.fragment,a),D=D.filter(Boolean);for(let i=0;i<D.length;i+=1)T(D[i]);T(I.$$.fragment,a);for(let i=0;i<_.length;i+=1)T(_[i]);T(X.$$.fragment,a);for(let i=0;i<K.length;i+=1)T(K[i]);ne=!1},d(a){a&&f(e),ze(x,a),a&&f(t),a&&f(l),q(c);for(let i=0;i<u.length;i+=1)u[i].d();q(H),ze(D,a),q(I);for(let i=0;i<_.length;i+=1)_[i].d();q(X);for(let i=0;i<K.length;i+=1)K[i].d();be=!1,Ee()}}}function Ot(o){let e,t,l,r,s,n,c,E,u,b,V,p,A;function H(g){o[7](g)}let Q={borderRadius:16,$$slots:{default:[mt]},$$scope:{ctx:o}};return o[1]!==void 0&&(Q.isOpen=o[1]),t=new st({props:Q}),Ke.push(()=>je(t,"isOpen",H)),n=new J({props:{variant:"heading",$$slots:{default:[bt]},$$scope:{ctx:o}}}),u=new J({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),p=new ot({props:{variant:"white",title:"INTERNATIONALISATION COURSE STUDENTS",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){e=k("div"),M(t.$$.fragment),r=O(),s=k("div"),M(n.$$.fragment),c=O(),E=k("div"),M(u.$$.fragment),b=O(),V=k("div"),M(p.$$.fragment),this.h()},l(g){e=y(g,"DIV",{class:!0});var h=w(e);P(t.$$.fragment,h),r=N(h),s=y(h,"DIV",{class:!0});var L=w(s);P(n.$$.fragment,L),L.forEach(f),c=N(h),E=y(h,"DIV",{class:!0});var I=w(E);P(u.$$.fragment,I),I.forEach(f),b=N(h),V=y(h,"DIV",{class:!0});var j=w(V);P(p.$$.fragment,j),j.forEach(f),h.forEach(f),this.h()},h(){m(s,"class","heading svelte-bwlrzy"),m(E,"class","sub-text svelte-bwlrzy"),m(V,"class","dash svelte-bwlrzy"),m(e,"class","container svelte-bwlrzy")},m(g,h){v(g,e,h),Y(t,e,null),d(e,r),d(e,s),Y(n,s,null),d(e,c),d(e,E),Y(u,E,null),d(e,b),d(e,V),Y(p,V,null),A=!0},p(g,[h]){const L={};h&2097164&&(L.$$scope={dirty:h,ctx:g}),!l&&h&2&&(l=!0,L.isOpen=g[1],Fe(()=>l=!1)),t.$set(L);const I={};h&2097152&&(I.$$scope={dirty:h,ctx:g}),n.$set(I);const j={};h&2097152&&(j.$$scope={dirty:h,ctx:g}),u.$set(j);const _={};h&2097177&&(_.$$scope={dirty:h,ctx:g}),p.$set(_)},i(g){A||(S(t.$$.fragment,g),S(n.$$.fragment,g),S(u.$$.fragment,g),S(p.$$.fragment,g),A=!0)},o(g){T(t.$$.fragment,g),T(n.$$.fragment,g),T(u.$$.fragment,g),T(p.$$.fragment,g),A=!1},d(g){g&&f(e),q(t),q(n),q(u),q(p)}}}function Nt(o,e,t){let l,r;xe(o,it,p=>t(4,r=p));let s={"Sarah Jones":!1,"Ivar Leifsson":!1,"Lagertha Bonde":!1},n=!1,c="init";function E(){l.length>0&&(ct.set(l),t(1,n=!0))}function u(){c==="loaded"?lt("/demo/journeys/peter/students"):(t(2,c="loading"),setTimeout(()=>{t(2,c="loaded"),Be.set(2)},3e3))}et(()=>{Be.set(1)});function b(p){n=p,t(1,n)}function V(p,A){o.$$.not_equal(s[A],p)&&(s[A]=p,t(0,s))}return o.$$.update=()=>{o.$$.dirty&1&&t(3,l=Object.keys(s).filter(p=>s[p]))},[s,n,c,l,r,E,u,b,V]}class qt extends We{constructor(e){super(),Xe(this,e,Nt,Ot,Ze,{})}}export{qt as component};
