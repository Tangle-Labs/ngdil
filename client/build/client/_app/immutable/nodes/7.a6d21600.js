import{S as fe,i as $e,s as pe,w as me,N as de,k as C,y as A,a as N,l as y,m as R,z as L,h as u,c as V,n as I,b as D,E as g,A as U,O as ge,g as E,d as q,B as T,o as he,q as W,r as Y,v as ee,P as _e,f as te,D as se,u as le,Q as ve,I as x}from"../chunks/index.c696c2c0.js";import{g as we}from"../chunks/navigation.56143c5a.js";import{B as ue}from"../chunks/Button.55f92c4b.js";/* empty css                                                 */import{M as ke}from"../chunks/Modal.e79947f2.js";import{T as B}from"../chunks/Typography.c955645f.js";import{L as Ie}from"../chunks/Loading.f896444c.js";import{H as Ee}from"../chunks/Highlight.13a17350.js";import{K as be}from"../chunks/Kw1c.5b6e7780.js";import{Q as Ce}from"../chunks/Qr.d5fcac3f.js";import{a as ae,g as ne,h as ye}from"../chunks/flows.store.949a2a01.js";import{a as qe,P as Oe}from"../chunks/axios.utils.3c0e9132.js";import{c as Re}from"../chunks/ws.util.90c9586f.js";function oe(n,e,t){const s=n.slice();return s[7]=e[t],s[9]=t,s}function De(n){let e;return{c(){e=W("take a look at the courses")},l(t){e=Y(t,"take a look at the courses")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function Se(n){let e,t,s,a;return t=new Ee({props:{$$slots:{default:[De]},$$scope:{ctx:n}}}),{c(){e=W("You’re in! Now let’s "),A(t.$$.fragment),s=W(`available and select
			the course you wish to study.`)},l(l){e=Y(l,"You’re in! Now let’s "),L(t.$$.fragment,l),s=Y(l,`available and select
			the course you wish to study.`)},m(l,r){D(l,e,r),U(t,l,r),D(l,s,r),a=!0},p(l,r){const m={};r&1024&&(m.$$scope={dirty:r,ctx:l}),t.$set(m)},i(l){a||(E(t.$$.fragment,l),a=!0)},o(l){q(t.$$.fragment,l),a=!1},d(l){l&&u(e),T(t,l),l&&u(s)}}}function Ne(n){let e;return{c(){e=W(`Click the enrol now button to select the course you wish to study to begin the application
			process.`)},l(t){e=Y(t,`Click the enrol now button to select the course you wish to study to begin the application
			process.`)},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function Ve(n){let e=n[0]?"KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS.":"KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION",t;return{c(){t=W(e)},l(s){t=Y(s,e)},m(s,a){D(s,t,a)},p(s,a){a&1&&e!==(e=s[0]?"KW1C HAS RECEIVED YOUR APPLICATION CREDENTIALS.":"KW1C IS REQUESTING YOU SHARE YOUR CREDENTIALS FOR COURSE APPLICATION")&&le(t,e)},d(s){s&&u(t)}}}function ie(n){let e,t,s;return t=new Ce({props:{data:n[1],size:200}}),{c(){e=C("div"),A(t.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var l=R(e);L(t.$$.fragment,l),l.forEach(u),this.h()},h(){I(e,"class","qr svelte-qlxolw")},m(a,l){D(a,e,l),U(t,e,null),s=!0},p(a,l){const r={};l&2&&(r.data=a[1]),t.$set(r)},i(a){s||(E(t.$$.fragment,a),s=!0)},o(a){q(t.$$.fragment,a),s=!1},d(a){a&&u(e),T(t)}}}function Ae(n){let e,t;return e=new Ie({props:{img:"/imgs/blue-loading.png"}}),{c(){A(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,a){U(e,s,a),t=!0},p:x,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){q(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function Le(n){let e,t,s,a,l;return a=new ue({props:{label:"CONTINUE",variant:"kw1c",onClick:n[3]}}),{c(){e=C("img"),s=N(),A(a.$$.fragment),this.h()},l(r){e=y(r,"IMG",{class:!0,src:!0,alt:!0}),s=V(r),L(a.$$.fragment,r),this.h()},h(){I(e,"class","checked svelte-qlxolw"),se(e.src,t="/imgs/checked.png")||I(e,"src",t),I(e,"alt","")},m(r,m){D(r,e,m),D(r,s,m),U(a,r,m),l=!0},p:x,i(r){l||(E(a.$$.fragment,r),l=!0)},o(r){q(a.$$.fragment,r),l=!1},d(r){r&&u(e),r&&u(s),T(a,r)}}}function Ue(n){let e=n[0]?"Click continue to proceed":"Waiting for credentials",t;return{c(){t=W(e)},l(s){t=Y(s,e)},m(s,a){D(s,t,a)},p(s,a){a&1&&e!==(e=s[0]?"Click continue to proceed":"Waiting for credentials")&&le(t,e)},d(s){s&&u(t)}}}function Te(n){let e,t,s,a,l,r,m,o=n[0]?"You may continue further in the browser. ":"In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.",i,$,O,h,v,M,S,c,f;l=new B({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[Ve]},$$scope:{ctx:n}}});let _=!n[0]&&ie(n);const P=[Le,Ae],k=[];function Q(d,p){return d[0]?0:1}return h=Q(n),v=k[h]=P[h](n),c=new B({props:{variant:"sub-text",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){e=C("div"),t=C("img"),a=N(),A(l.$$.fragment),r=N(),m=C("div"),i=W(o),$=N(),_&&_.c(),O=N(),v.c(),M=N(),S=C("div"),A(c.$$.fragment),this.h()},l(d){e=y(d,"DIV",{class:!0});var p=R(e);t=y(p,"IMG",{src:!0,alt:!0,class:!0}),a=V(p),L(l.$$.fragment,p),r=V(p),m=y(p,"DIV",{class:!0});var H=R(m);i=Y(H,o),H.forEach(u),$=V(p),_&&_.l(p),O=V(p),v.l(p),M=V(p),S=y(p,"DIV",{class:!0});var K=R(S);L(c.$$.fragment,K),K.forEach(u),p.forEach(u),this.h()},h(){se(t.src,s="/imgs/kw1c-white.png")||I(t,"src",s),I(t,"alt",""),I(t,"class","logo svelte-qlxolw"),I(m,"class","p svelte-qlxolw"),I(S,"class","subtext svelte-qlxolw"),I(e,"class","modal-content svelte-qlxolw")},m(d,p){D(d,e,p),g(e,t),g(e,a),U(l,e,null),g(e,r),g(e,m),g(m,i),g(e,$),_&&_.m(e,null),g(e,O),k[h].m(e,null),g(e,M),g(e,S),U(c,S,null),f=!0},p(d,p){const H={};p&1025&&(H.$$scope={dirty:p,ctx:d}),l.$set(H),(!f||p&1)&&o!==(o=d[0]?"You may continue further in the browser. ":"In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.")&&le(i,o),d[0]?_&&(ee(),q(_,1,1,()=>{_=null}),te()):_?(_.p(d,p),p&1&&E(_,1)):(_=ie(d),_.c(),E(_,1),_.m(e,O));let K=h;h=Q(d),h===K?k[h].p(d,p):(ee(),q(k[K],1,1,()=>{k[K]=null}),te(),v=k[h],v?v.p(d,p):(v=k[h]=P[h](d),v.c()),E(v,1),v.m(e,M));const F={};p&1025&&(F.$$scope={dirty:p,ctx:d}),c.$set(F)},i(d){f||(E(l.$$.fragment,d),E(_),E(v),E(c.$$.fragment,d),f=!0)},o(d){q(l.$$.fragment,d),q(_),q(v),q(c.$$.fragment,d),f=!1},d(d){d&&u(e),T(l),_&&_.d(),k[h].d(),T(c)}}}function Pe(n){let e=n[7].category.toUpperCase()+"",t;return{c(){t=W(e)},l(s){t=Y(s,e)},m(s,a){D(s,t,a)},p:x,d(s){s&&u(t)}}}function We(n){let e=n[7].name.toUpperCase()+"",t;return{c(){t=W(e)},l(s){t=Y(s,e)},m(s,a){D(s,t,a)},p:x,d(s){s&&u(t)}}}function Ye(n){let e;return{c(){e=W("This course requires the following credentials:")},l(t){e=Y(t,"This course requires the following credentials:")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function Ke(n){let e;return{c(){e=W("National ID")},l(t){e=Y(t,"National ID")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function Me(n){let e;return{c(){e=W("School Course Certificate")},l(t){e=Y(t,"School Course Certificate")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function ce(n,e){let t,s,a,l,r,m,o,i,$,O,h,v,M,S,c,f,_,P,k,Q,d,p,H,K;m=new B({props:{variant:"kw1c-sub-text",fontVariant:"kw1c",color:"--kw1c-red-900",$$slots:{default:[Pe]},$$scope:{ctx:e}}}),$=new B({props:{variant:"kw1c-header",fontVariant:"kw1c",color:"--kw1c-blue-900",$$slots:{default:[We]},$$scope:{ctx:e}}}),v=new B({props:{$$slots:{default:[Ye]},$$scope:{ctx:e}}}),f=new B({props:{$$slots:{default:[Ke]},$$scope:{ctx:e}}}),k=new B({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}});function F(){return e[5](e[9])}return p=new ue({props:{onClick:F,variant:"kw1c",label:"ENROL NOW"}}),{key:n,first:null,c(){t=C("div"),s=C("img"),l=N(),r=C("div"),A(m.$$.fragment),o=N(),i=C("div"),A($.$$.fragment),O=N(),h=C("div"),A(v.$$.fragment),M=N(),S=C("ul"),c=C("li"),A(f.$$.fragment),_=N(),P=C("li"),A(k.$$.fragment),Q=N(),d=C("div"),A(p.$$.fragment),H=N(),this.h()},l(b){t=y(b,"DIV",{class:!0});var w=R(t);s=y(w,"IMG",{src:!0,alt:!0,class:!0}),l=V(w),r=y(w,"DIV",{class:!0});var j=R(r);L(m.$$.fragment,j),j.forEach(u),o=V(w),i=y(w,"DIV",{class:!0});var J=R(i);L($.$$.fragment,J),J.forEach(u),O=V(w),h=y(w,"DIV",{class:!0});var G=R(h);L(v.$$.fragment,G),M=V(G),S=y(G,"UL",{});var z=R(S);c=y(z,"LI",{});var X=R(c);L(f.$$.fragment,X),X.forEach(u),_=V(z),P=y(z,"LI",{});var Z=R(P);L(k.$$.fragment,Z),Z.forEach(u),z.forEach(u),G.forEach(u),Q=V(w),d=y(w,"DIV",{class:!0});var re=R(d);L(p.$$.fragment,re),re.forEach(u),H=V(w),w.forEach(u),this.h()},h(){se(s.src,a=e[7].img)||I(s,"src",a),I(s,"alt",""),I(s,"class","svelte-qlxolw"),I(r,"class","subtext svelte-qlxolw"),I(i,"class","title svelte-qlxolw"),I(h,"class","requirements svelte-qlxolw"),I(d,"class","button svelte-qlxolw"),I(t,"class","course svelte-qlxolw"),this.first=t},m(b,w){D(b,t,w),g(t,s),g(t,l),g(t,r),U(m,r,null),g(t,o),g(t,i),U($,i,null),g(t,O),g(t,h),U(v,h,null),g(h,M),g(h,S),g(S,c),U(f,c,null),g(S,_),g(S,P),U(k,P,null),g(t,Q),g(t,d),U(p,d,null),g(t,H),K=!0},p(b,w){e=b;const j={};w&1024&&(j.$$scope={dirty:w,ctx:e}),m.$set(j);const J={};w&1024&&(J.$$scope={dirty:w,ctx:e}),$.$set(J);const G={};w&1024&&(G.$$scope={dirty:w,ctx:e}),v.$set(G);const z={};w&1024&&(z.$$scope={dirty:w,ctx:e}),f.$set(z);const X={};w&1024&&(X.$$scope={dirty:w,ctx:e}),k.$set(X);const Z={};w&4&&(Z.onClick=F),p.$set(Z)},i(b){K||(E(m.$$.fragment,b),E($.$$.fragment,b),E(v.$$.fragment,b),E(f.$$.fragment,b),E(k.$$.fragment,b),E(p.$$.fragment,b),K=!0)},o(b){q(m.$$.fragment,b),q($.$$.fragment,b),q(v.$$.fragment,b),q(f.$$.fragment,b),q(k.$$.fragment,b),q(p.$$.fragment,b),K=!1},d(b){b&&u(t),T(m),T($),T(v),T(f),T(k),T(p)}}}function Qe(n){let e,t,s=[],a=new Map,l,r=ne;const m=o=>o[7].name;for(let o=0;o<r.length;o+=1){let i=oe(n,r,o),$=m(i);a.set($,s[o]=ce($,i))}return{c(){e=C("div"),t=C("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var i=R(e);t=y(i,"DIV",{class:!0});var $=R(t);for(let O=0;O<s.length;O+=1)s[O].l($);$.forEach(u),i.forEach(u),this.h()},h(){I(t,"class","courses svelte-qlxolw"),I(e,"class","content")},m(o,i){D(o,e,i),g(e,t);for(let $=0;$<s.length;$+=1)s[$].m(t,null);l=!0},p(o,i){i&4&&(r=ne,ee(),s=_e(s,i,m,1,o,r,a,t,ve,ce,null,oe),te())},i(o){if(!l){for(let i=0;i<r.length;i+=1)E(s[i]);l=!0}},o(o){for(let i=0;i<s.length;i+=1)q(s[i]);l=!1},d(o){o&&u(e);for(let i=0;i<s.length;i+=1)s[i].d()}}}function He(n){let e,t,s,a,l,r,m,o,i,$,O,h,v;s=new B({props:{variant:"heading",$$slots:{default:[Se]},$$scope:{ctx:n}}}),r=new B({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}});function M(c){n[4](c)}let S={borderRadius:16,$$slots:{default:[Te]},$$scope:{ctx:n}};return n[2]!==void 0&&(S.isOpen=n[2]),o=new ke({props:S}),me.push(()=>de(o,"isOpen",M)),h=new be({props:{variant:"white",title:"AVAILABLE COURSES",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),{c(){e=C("div"),t=C("div"),A(s.$$.fragment),a=N(),l=C("div"),A(r.$$.fragment),m=N(),A(o.$$.fragment),$=N(),O=C("div"),A(h.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0});var f=R(e);t=y(f,"DIV",{class:!0});var _=R(t);L(s.$$.fragment,_),_.forEach(u),a=V(f),l=y(f,"DIV",{class:!0});var P=R(l);L(r.$$.fragment,P),P.forEach(u),m=V(f),L(o.$$.fragment,f),$=V(f),O=y(f,"DIV",{class:!0});var k=R(O);L(h.$$.fragment,k),k.forEach(u),f.forEach(u),this.h()},h(){I(t,"class","heading svelte-qlxolw"),I(l,"class","sub-text svelte-qlxolw"),I(O,"class","dash svelte-qlxolw"),I(e,"class","container svelte-qlxolw")},m(c,f){D(c,e,f),g(e,t),U(s,t,null),g(e,a),g(e,l),U(r,l,null),g(e,m),U(o,e,null),g(e,$),g(e,O),U(h,O,null),v=!0},p(c,[f]){const _={};f&1024&&(_.$$scope={dirty:f,ctx:c}),s.$set(_);const P={};f&1024&&(P.$$scope={dirty:f,ctx:c}),r.$set(P);const k={};f&1027&&(k.$$scope={dirty:f,ctx:c}),!i&&f&4&&(i=!0,k.isOpen=c[2],ge(()=>i=!1)),o.$set(k);const Q={};f&1028&&(Q.$$scope={dirty:f,ctx:c}),h.$set(Q)},i(c){v||(E(s.$$.fragment,c),E(r.$$.fragment,c),E(o.$$.fragment,c),E(h.$$.fragment,c),v=!0)},o(c){q(s.$$.fragment,c),q(r.$$.fragment,c),q(o.$$.fragment,c),q(h.$$.fragment,c),v=!1},d(c){c&&u(e),T(s),T(r),T(o),T(h)}}}function Be(n,e,t){let s=!1,a;const l=Re();l.onmessage=$=>{JSON.parse($.data).received&&t(0,s=!0)};let r=!1;he(async()=>{ae.set(1);const{data:{uri:$}}=await qe.post("/api/oid4vp",{presentationStage:"dominiqueEnrolCourse",clientMetadata:{logoUri:new URL("/imgs/kw1c-white.png",Oe).toString(),clientName:"Koning Willem I College"}});t(1,a=$)});const m=()=>{ae.set(2),we("/demo/journeys/dominique/study")};function o($){r=$,t(2,r)}return[s,a,r,m,o,$=>{t(2,r=!0),ye.set($)}]}class at extends fe{constructor(e){super(),$e(this,e,Be,He,pe,{})}}export{at as component};