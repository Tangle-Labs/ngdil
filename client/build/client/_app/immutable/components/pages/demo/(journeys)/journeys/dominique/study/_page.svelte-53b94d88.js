import{S as $e,i as me,s as pe,P as _e,Q as ve,k as C,w as A,a as T,l as I,m as D,x as S,c as R,h as c,n as k,b as V,y as L,G as p,R as ge,t as y,d as x,f as E,z as Y,H as he,o as Ee,e as ae,p as B,g as ee,N as be,q as H,r as q,I as fe,u as J,B as ue}from"../../../../../../../chunks/index-6e3ec9d0.js";import{g as ke}from"../../../../../../../chunks/navigation-be9c5bf7.js";import{B as se}from"../../../../../../../chunks/Button-ea2aef43.js";/* empty css                                                                      */import{M as ye}from"../../../../../../../chunks/Modal-0acebe8d.js";import{T as j}from"../../../../../../../chunks/Typography-155fda85.js";import{L as we}from"../../../../../../../chunks/Loading-da8ae858.js";import{H as de}from"../../../../../../../chunks/Highlight-6e81e904.js";import{K as Ce}from"../../../../../../../chunks/Kw1c-db2036ff.js";import{a as le,g as Ie,f as te}from"../../../../../../../chunks/flows.store-fcabe1c0.js";import{C as Oe}from"../../../../../../../chunks/Confetti-f43be199.js";function oe(n,e,r){const t=n.slice();return t[9]=e[r],t}function De(n){let e=n[3]?"YOU HAVE RECEIVED & ACCEPTED YOUR NEW COURSE CREDENTIAL.":"KW1C HAS SENT YOU A NEW COURSE CREDENTIAL",r;return{c(){r=H(e)},l(t){r=q(t,e)},m(t,l){V(t,r,l)},p(t,l){l&8&&e!==(e=t[3]?"YOU HAVE RECEIVED & ACCEPTED YOUR NEW COURSE CREDENTIAL.":"KW1C HAS SENT YOU A NEW COURSE CREDENTIAL")&&J(r,e)},d(t){t&&c(r)}}}function Ve(n){let e,r;return e=new we({props:{img:"/imgs/blue-loading.png"}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p:ue,i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Ue(n){let e,r,t,l,s,a;return s=new se({props:{label:"CONTINUE",variant:"kw1c",onClick:n[5]}}),{c(){e=C("img"),t=T(),l=C("div"),A(s.$$.fragment),this.h()},l(i){e=I(i,"IMG",{class:!0,src:!0,alt:!0}),t=R(i),l=I(i,"DIV",{class:!0});var g=D(l);S(s.$$.fragment,g),g.forEach(c),this.h()},h(){k(e,"class","checked svelte-1dv1rmr"),fe(e.src,r="/imgs/checked.png")||k(e,"src",r),k(e,"alt",""),k(l,"class","button svelte-1dv1rmr")},m(i,g){V(i,e,g),V(i,t,g),V(i,l,g),L(s,l,null),a=!0},p:ue,i(i){a||(E(s.$$.fragment,i),a=!0)},o(i){y(s.$$.fragment,i),a=!1},d(i){i&&c(e),i&&c(t),i&&c(l),Y(s)}}}function Ne(n){let e=n[3]?"Click Continue to proceed":"Awaiting credential acceptance...",r;return{c(){r=H(e)},l(t){r=q(t,e)},m(t,l){V(t,r,l)},p(t,l){l&8&&e!==(e=t[3]?"Click Continue to proceed":"Awaiting credential acceptance...")&&J(r,e)},d(t){t&&c(r)}}}function Te(n){let e,r,t,l,s,a,i,g=n[3]?"This is now visible in your wallet and free for you to share with anyone, at any time. ":"In your mobile wallet accept the credential from KW1C to receive your new qualification.",U,w,_,b,O,$,d,M;s=new j({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[De]},$$scope:{ctx:n}}});const K=[Ue,Ve],W=[];function G(h,f){return h[3]?0:1}return _=G(n),b=W[_]=K[_](n),d=new j({props:{variant:"sub-text",$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){e=C("div"),r=C("img"),l=T(),A(s.$$.fragment),a=T(),i=C("div"),U=H(g),w=T(),b.c(),O=T(),$=C("div"),A(d.$$.fragment),this.h()},l(h){e=I(h,"DIV",{class:!0});var f=D(e);r=I(f,"IMG",{src:!0,alt:!0,class:!0}),l=R(f),S(s.$$.fragment,f),a=R(f),i=I(f,"DIV",{class:!0});var m=D(i);U=q(m,g),m.forEach(c),w=R(f),b.l(f),O=R(f),$=I(f,"DIV",{class:!0});var o=D($);S(d.$$.fragment,o),o.forEach(c),f.forEach(c),this.h()},h(){fe(r.src,t="/imgs/kw1c-white.png")||k(r,"src",t),k(r,"alt",""),k(r,"class","logo svelte-1dv1rmr"),k(i,"class","p svelte-1dv1rmr"),k($,"class","subtext svelte-1dv1rmr"),k(e,"class","modal-content svelte-1dv1rmr")},m(h,f){V(h,e,f),p(e,r),p(e,l),L(s,e,null),p(e,a),p(e,i),p(i,U),p(e,w),W[_].m(e,null),p(e,O),p(e,$),L(d,$,null),M=!0},p(h,f){const m={};f&4104&&(m.$$scope={dirty:f,ctx:h}),s.$set(m),(!M||f&8)&&g!==(g=h[3]?"This is now visible in your wallet and free for you to share with anyone, at any time. ":"In your mobile wallet accept the credential from KW1C to receive your new qualification.")&&J(U,g);let o=_;_=G(h),_===o?W[_].p(h,f):(ee(),y(W[o],1,1,()=>{W[o]=null}),x(),b=W[_],b?b.p(h,f):(b=W[_]=K[_](h),b.c()),E(b,1),b.m(e,O));const Q={};f&4104&&(Q.$$scope={dirty:f,ctx:h}),d.$set(Q)},i(h){M||(E(s.$$.fragment,h),E(b),E(d.$$.fragment,h),M=!0)},o(h){y(s.$$.fragment,h),y(b),y(d.$$.fragment,h),M=!1},d(h){h&&c(e),Y(s),W[_].d(),Y(d)}}}function Re(n){let e,r;return e=new j({props:{variant:"heading",$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Ae(n){let e,r;return e=new j({props:{variant:"heading",$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Se(n){let e;return{c(){e=H("You have been accepted")},l(r){e=q(r,"You have been accepted")},m(r,t){V(r,e,t)},d(r){r&&c(e)}}}function Le(n){let e,r,t,l;return r=new de({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){e=H("Congratulations. "),A(r.$$.fragment),t=H(` on the course. Now you need
				to complete your studies.`)},l(s){e=q(s,"Congratulations. "),S(r.$$.fragment,s),t=q(s,` on the course. Now you need
				to complete your studies.`)},m(s,a){V(s,e,a),L(r,s,a),V(s,t,a),l=!0},p(s,a){const i={};a&4096&&(i.$$scope={dirty:a,ctx:s}),r.$set(i)},i(s){l||(E(r.$$.fragment,s),l=!0)},o(s){y(r.$$.fragment,s),l=!1},d(s){s&&c(e),Y(r,s),s&&c(t)}}}function Ye(n){let e;return{c(){e=H("Exciting times. You have completed your course")},l(r){e=q(r,"Exciting times. You have completed your course")},m(r,t){V(r,e,t)},d(r){r&&c(e)}}}function Me(n){let e,r,t;return e=new de({props:{$$slots:{default:[Ye]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment),r=H(`with top marks. Let\u2019s
				get your credential.`)},l(l){S(e.$$.fragment,l),r=q(l,`with top marks. Let\u2019s
				get your credential.`)},m(l,s){L(e,l,s),V(l,r,s),t=!0},p(l,s){const a={};s&4096&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){Y(e,l),l&&c(r)}}}function We(n){let e;return{c(){e=H("Click the start studying button to continue and complete the course.")},l(r){e=q(r,"Click the start studying button to continue and complete the course.")},m(r,t){V(r,e,t)},d(r){r&&c(e)}}}function He(n){let e;return{c(){e=H("Click the get credential button to receive your credential from KW1C.")},l(r){e=q(r,"Click the get credential button to receive your credential from KW1C.")},m(r,t){V(r,e,t)},d(r){r&&c(e)}}}function qe(n){let e;function r(s,a){return s[1]?He:We}let t=r(n),l=t(n);return{c(){l.c(),e=ae()},l(s){l.l(s),e=ae()},m(s,a){l.m(s,a),V(s,e,a)},p(s,a){t!==(t=r(s))&&(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},d(s){l.d(s),s&&c(e)}}}function ie(n){let e,r,t;return r=new Oe({props:{x:[-5,5],y:[0,.1],delay:[500,5e3],duration:"2000",amount:"500",fallDistance:"100vh"}}),{c(){e=C("div"),A(r.$$.fragment),this.h()},l(l){e=I(l,"DIV",{style:!0,class:!0});var s=D(e);S(r.$$.fragment,s),s.forEach(c),this.h()},h(){B(e,"position","fixed"),B(e,"top","-50px"),B(e,"left","0"),B(e,"height","100vh"),B(e,"width","100vw"),B(e,"display","flex"),B(e,"justify-content","center"),B(e,"overflow","hidden"),B(e,"pointer-events","none"),k(e,"class","svelte-1dv1rmr")},m(l,s){V(l,e,s),L(r,e,null),t=!0},i(l){t||(E(r.$$.fragment,l),t=!0)},o(l){y(r.$$.fragment,l),t=!1},d(l){l&&c(e),Y(r)}}}function Ke(n){let e=n[1]?"CONGRATULATIONS DOMINIQUE, YOU HAVE COMPLETED YOUR COURSE!":"HELLO DOMINIQUE, WELCOME TO YOUR NEW COURSE",r;return{c(){r=H(e)},l(t){r=q(t,e)},m(t,l){V(t,r,l)},p(t,l){l&2&&e!==(e=t[1]?"CONGRATULATIONS DOMINIQUE, YOU HAVE COMPLETED YOUR COURSE!":"HELLO DOMINIQUE, WELCOME TO YOUR NEW COURSE")&&J(r,e)},d(t){t&&c(r)}}}function Ge(n){let e=te[n[4]].category.toUpperCase()+"",r;return{c(){r=H(e)},l(t){r=q(t,e)},m(t,l){V(t,r,l)},p(t,l){l&16&&e!==(e=te[t[4]].category.toUpperCase()+"")&&J(r,e)},d(t){t&&c(r)}}}function Pe(n){let e=te[n[4]].name.toUpperCase()+"",r;return{c(){r=H(e)},l(t){r=q(t,e)},m(t,l){V(t,r,l)},p(t,l){l&16&&e!==(e=te[t[4]].name.toUpperCase()+"")&&J(r,e)},d(t){t&&c(r)}}}function Qe(n){let e,r;return e=new se({props:{variant:"kw1c",label:"START STUDYING",onClick:n[8]}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p(t,l){const s={};l&3&&(s.onClick=t[8]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function Be(n){let e,r;return e=new se({props:{variant:"kw1c",label:"GET CREDENTIAL",onClick:n[7]}}),{c(){A(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p(t,l){const s={};l&12&&(s.onClick=t[7]),e.$set(s)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){Y(e,t)}}}function je(n){let e,r;return{c(){e=H(n[0]),r=H("%")},l(t){e=q(t,n[0]),r=q(t,"%")},m(t,l){V(t,e,l),V(t,r,l)},p(t,l){l&1&&J(e,t[0])},d(t){t&&c(e),t&&c(r)}}}function ce(n){let e,r,t,l,s,a,i,g,U,w,_,b,O;return _=new j({props:{variant:"status",fontVariant:"kw1c",color:"--kw1c-blue-900",$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){e=C("div"),r=C("div"),t=T(),l=C("div"),s=T(),a=C("div"),i=T(),g=C("div"),U=T(),w=C("div"),A(_.$$.fragment),b=T(),this.h()},l($){e=I($,"DIV",{class:!0});var d=D(e);r=I(d,"DIV",{class:!0}),D(r).forEach(c),t=R(d),l=I(d,"DIV",{class:!0}),D(l).forEach(c),s=R(d),a=I(d,"DIV",{class:!0}),D(a).forEach(c),i=R(d),g=I(d,"DIV",{class:!0}),D(g).forEach(c),U=R(d),w=I(d,"DIV",{class:!0});var M=D(w);S(_.$$.fragment,M),M.forEach(c),b=R(d),d.forEach(c),this.h()},h(){k(r,"class","dash red-dash svelte-1dv1rmr"),k(l,"class","dash blue-dash svelte-1dv1rmr"),k(a,"class","dash gray-dash svelte-1dv1rmr"),k(g,"class","dash gray-dash svelte-1dv1rmr"),k(w,"class","progress"),k(e,"class","card svelte-1dv1rmr")},m($,d){V($,e,d),p(e,r),p(e,t),p(e,l),p(e,s),p(e,a),p(e,i),p(e,g),p(e,U),p(e,w),L(_,w,null),p(e,b),O=!0},p($,d){const M={};d&4097&&(M.$$scope={dirty:d,ctx:$}),_.$set(M)},i($){O||(E(_.$$.fragment,$),O=!0)},o($){y(_.$$.fragment,$),O=!1},d($){$&&c(e),Y(_)}}}function ze(n){let e,r,t,l,s,a,i,g,U,w,_,b,O,$,d,M,K,W;t=new j({props:{variant:"kw1c-header",fontVariant:"kw1c",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),g=new j({props:{variant:"kw1c-sub-text",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[Ge]},$$scope:{ctx:n}}}),_=new j({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-blue-900",$$slots:{default:[Pe]},$$scope:{ctx:n}}});const G=[Be,Qe],h=[];function f(u,v){return u[1]?0:1}$=f(n),d=h[$]=G[$](n);let m=Array(4),o=[];for(let u=0;u<m.length;u+=1)o[u]=ce(oe(n,m,u));const Q=u=>y(o[u],1,1,()=>{o[u]=null});return{c(){e=C("div"),r=C("div"),A(t.$$.fragment),l=T(),s=C("div"),a=C("div"),i=C("div"),A(g.$$.fragment),U=T(),w=C("div"),A(_.$$.fragment),b=T(),O=C("div"),d.c(),M=T(),K=C("div");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=I(u,"DIV",{class:!0});var v=D(e);r=I(v,"DIV",{class:!0});var P=D(r);S(t.$$.fragment,P),P.forEach(c),l=R(v),s=I(v,"DIV",{class:!0});var z=D(s);a=I(z,"DIV",{class:!0});var F=D(a);i=I(F,"DIV",{class:!0});var X=D(i);S(g.$$.fragment,X),X.forEach(c),U=R(F),w=I(F,"DIV",{class:!0});var N=D(w);S(_.$$.fragment,N),N.forEach(c),F.forEach(c),b=R(z),O=I(z,"DIV",{class:!0});var Z=D(O);d.l(Z),Z.forEach(c),z.forEach(c),M=R(v),K=I(v,"DIV",{class:!0});var ne=D(K);for(let re=0;re<o.length;re+=1)o[re].l(ne);ne.forEach(c),v.forEach(c),this.h()},h(){k(r,"class","title"),k(i,"class","category"),k(w,"class","course"),k(a,"class","text"),k(O,"class","button svelte-1dv1rmr"),k(s,"class","details svelte-1dv1rmr"),k(K,"class","cards svelte-1dv1rmr"),k(e,"class","dashboard svelte-1dv1rmr")},m(u,v){V(u,e,v),p(e,r),L(t,r,null),p(e,l),p(e,s),p(s,a),p(a,i),L(g,i,null),p(a,U),p(a,w),L(_,w,null),p(s,b),p(s,O),h[$].m(O,null),p(e,M),p(e,K);for(let P=0;P<o.length;P+=1)o[P].m(K,null);W=!0},p(u,v){const P={};v&4098&&(P.$$scope={dirty:v,ctx:u}),t.$set(P);const z={};v&4112&&(z.$$scope={dirty:v,ctx:u}),g.$set(z);const F={};v&4112&&(F.$$scope={dirty:v,ctx:u}),_.$set(F);let X=$;if($=f(u),$===X?h[$].p(u,v):(ee(),y(h[X],1,1,()=>{h[X]=null}),x(),d=h[$],d?d.p(u,v):(d=h[$]=G[$](u),d.c()),E(d,1),d.m(O,null)),v&1){m=Array(4);let N;for(N=0;N<m.length;N+=1){const Z=oe(u,m,N);o[N]?(o[N].p(Z,v),E(o[N],1)):(o[N]=ce(Z),o[N].c(),E(o[N],1),o[N].m(K,null))}for(ee(),N=m.length;N<o.length;N+=1)Q(N);x()}},i(u){if(!W){E(t.$$.fragment,u),E(g.$$.fragment,u),E(_.$$.fragment,u),E(d);for(let v=0;v<m.length;v+=1)E(o[v]);W=!0}},o(u){y(t.$$.fragment,u),y(g.$$.fragment,u),y(_.$$.fragment,u),y(d),o=o.filter(Boolean);for(let v=0;v<o.length;v+=1)y(o[v]);W=!1},d(u){u&&c(e),Y(t),Y(g),Y(_),h[$].d(),be(o,u)}}}function Fe(n){let e,r,t,l,s,a,i,g,U,w,_,b,O,$,d;function M(m){n[6](m)}let K={$$slots:{default:[Te]},$$scope:{ctx:n}};n[2]!==void 0&&(K.isOpen=n[2]),r=new ye({props:K}),_e.push(()=>ve(r,"isOpen",M));const W=[Ae,Re],G=[];function h(m,o){return m[1]?0:1}a=h(n),i=G[a]=W[a](n),w=new j({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}});let f=n[1]&&ie();return $=new Ce({props:{variant:"blue",$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){e=C("div"),A(r.$$.fragment),l=T(),s=C("div"),i.c(),g=T(),U=C("div"),A(w.$$.fragment),_=T(),f&&f.c(),b=T(),O=C("div"),A($.$$.fragment),this.h()},l(m){e=I(m,"DIV",{class:!0});var o=D(e);S(r.$$.fragment,o),l=R(o),s=I(o,"DIV",{class:!0});var Q=D(s);i.l(Q),Q.forEach(c),g=R(o),U=I(o,"DIV",{class:!0});var u=D(U);S(w.$$.fragment,u),u.forEach(c),_=R(o),f&&f.l(o),b=R(o),O=I(o,"DIV",{class:!0});var v=D(O);S($.$$.fragment,v),v.forEach(c),o.forEach(c),this.h()},h(){k(s,"class","heading svelte-1dv1rmr"),k(U,"class","sub-text svelte-1dv1rmr"),k(O,"class","dash-outer svelte-1dv1rmr"),k(e,"class","container svelte-1dv1rmr")},m(m,o){V(m,e,o),L(r,e,null),p(e,l),p(e,s),G[a].m(s,null),p(e,g),p(e,U),L(w,U,null),p(e,_),f&&f.m(e,null),p(e,b),p(e,O),L($,O,null),d=!0},p(m,[o]){const Q={};o&4104&&(Q.$$scope={dirty:o,ctx:m}),!t&&o&4&&(t=!0,Q.isOpen=m[2],ge(()=>t=!1)),r.$set(Q);let u=a;a=h(m),a!==u&&(ee(),y(G[u],1,1,()=>{G[u]=null}),x(),i=G[a],i||(i=G[a]=W[a](m),i.c()),E(i,1),i.m(s,null));const v={};o&4098&&(v.$$scope={dirty:o,ctx:m}),w.$set(v),m[1]?f?o&2&&E(f,1):(f=ie(),f.c(),E(f,1),f.m(e,b)):f&&(ee(),y(f,1,1,()=>{f=null}),x());const P={};o&4127&&(P.$$scope={dirty:o,ctx:m}),$.$set(P)},i(m){d||(E(r.$$.fragment,m),E(i),E(w.$$.fragment,m),E(f),E($.$$.fragment,m),d=!0)},o(m){y(r.$$.fragment,m),y(i),y(w.$$.fragment,m),y(f),y($.$$.fragment,m),d=!1},d(m){m&&c(e),Y(r),G[a].d(),Y(w),f&&f.d(),Y($)}}}function Je(n,e,r){let t;he(n,Ie,b=>r(4,t=b));let l=0,s=!1,a=!1,i=!1;Ee(()=>{le.set(2)});const g=()=>ke("/demo/journeys/dominique/finished-course");function U(b){a=b,r(2,a)}return[l,s,a,i,t,g,U,()=>{r(2,a=!0),setTimeout(()=>{le.set(4),r(3,i=!0)},9e3)},()=>{le.set(3),r(1,s=!0),r(0,l=100)}]}class it extends $e{constructor(e){super(),me(this,e,Je,Fe,pe,{})}}export{it as default};
