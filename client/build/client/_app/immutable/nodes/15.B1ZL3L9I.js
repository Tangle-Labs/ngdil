import{s as be,k as we,l as ke,c as ie,o as qe,d as ue,n as oe}from"../chunks/scheduler.BSbnpsnJ.js";import{S as je,i as Ie,F as Ee,e as y,m as H,s as I,c as w,a as E,n as S,d as u,f as D,k as $,g as j,h as d,p as R,q as M,r as O,u as B,H as De,A as re,E as Ve,t as A,b as P,j as J,o as fe,y as ge,v as he,w as ye,G as Y}from"../chunks/index.CHa0mS77.js";import{g as Me}from"../chunks/entry.dRRcpOW3.js";import{$ as Oe}from"../chunks/runtime.T3TU12bC.js";/* empty css                                                            */import{O as Te}from"../chunks/OpenJobsNetwork.vuaiUePy.js";import{T as K}from"../chunks/Typography.hOQtM-ml.js";import{A as Ce}from"../chunks/Avatar.P5YxQd6x.js";import{L as Ne}from"../chunks/Loading.B17qSDmq.js";import{M as Le}from"../chunks/Modal.DGa-GgHy.js";import{g as Ue,h as He,a as Se,i as me}from"../chunks/flows.store.DMURw1eI.js";import{a as Re}from"../chunks/axios.utils.Dn6T8Bpt.js";import{a as Be}from"../chunks/public.CYJn8K7S.js";import"../chunks/index.MNzK6mZV.js";import{h as pe}from"../chunks/highlight.Cec1JXTB.js";function Ge(n){let e,s=pe(n[3]("journeys.dominique.logged_in_to_open_job_network"))+"",t;return{c(){e=new De(!1),t=re(),this.h()},l(r){e=Ve(r,!1),t=re(),this.h()},h(){e.a=t},m(r,a){e.m(s,r,a),j(r,t,a)},p(r,a){a&8&&s!==(s=pe(r[3]("journeys.dominique.logged_in_to_open_job_network"))+"")&&e.p(s)},d(r){r&&(u(t),e.d())}}}function ze(n){let e=n[3]("journeys.dominique.share_cred_btn_desc")+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&8&&e!==(e=t[3]("journeys.dominique.share_cred_btn_desc")+"")&&J(s,e)},d(t){t&&u(s)}}}function Ae(n){let e=(n[1]?n[3]("journeys.dominique.open_job_network_received_confirmation"):n[3]("journeys.dominique.allow_open_job_network_to_share_cred"))+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&10&&e!==(e=(t[1]?t[3]("journeys.dominique.open_job_network_received_confirmation"):t[3]("journeys.dominique.allow_open_job_network_to_share_cred"))+"")&&J(s,e)},d(t){t&&u(s)}}}function Pe(n){let e=n[0],s,t,r=$e(n);return{c(){r.c(),s=re()},l(a){r.l(a),s=re()},m(a,l){r.m(a,l),j(a,s,l),t=!0},p(a,l){l&1&&be(e,e=a[0])?(he(),O(r,1,1,oe),ye(),r=$e(a),r.c(),M(r,1),r.m(s.parentNode,s)):r.p(a,l)},i(a){t||(M(r),t=!0)},o(a){O(r),t=!1},d(a){a&&u(s),r.d(a)}}}function Je(n){let e,s,t,r,a=n[3]("components.continue")+"",l,i,v;return{c(){e=y("img"),t=I(),r=y("button"),l=A(a),this.h()},l(m){e=w(m,"IMG",{class:!0,src:!0,alt:!0}),t=D(m),r=w(m,"BUTTON",{class:!0});var h=E(r);l=P(h,a),h.forEach(u),this.h()},h(){$(e,"class","checked svelte-4vbcdu"),ue(e.src,s="/imgs/open-jobs-check.png")||$(e,"src",s),$(e,"alt",""),$(r,"class","button svelte-4vbcdu")},m(m,h){j(m,e,h),j(m,t,h),j(m,r,h),d(r,l),i||(v=ge(r,"click",n[6]),i=!0)},p(m,h){h&8&&a!==(a=m[3]("components.continue")+"")&&J(l,a)},i:oe,o:oe,d(m){m&&(u(e),u(t),u(r)),i=!1,v()}}}function $e(n){let e,s,t,r,a;return r=new Ne({props:{size:"30px",img:"/imgs/blue-loading.png"}}),{c(){e=y("open-id-qr"),s=I(),t=y("div"),H(r.$$.fragment),this.h()},l(l){e=w(l,"OPEN-ID-QR",{"request-uri":!0,"event-stream-uri":!0,size:!0,class:!0}),E(e).forEach(u),s=D(l),t=w(l,"DIV",{class:!0});var i=E(t);S(r.$$.fragment,i),i.forEach(u),this.h()},h(){Y(e,"request-uri",n[0]),Y(e,"event-stream-uri",n[4]),Y(e,"size",240),Y(e,"class","svelte-4vbcdu"),$(t,"class","loading svelte-4vbcdu")},m(l,i){j(l,e,i),j(l,s,i),j(l,t,i),R(r,t,null),a=!0},p(l,i){(!a||i&1)&&Y(e,"request-uri",l[0]),(!a||i&16)&&Y(e,"event-stream-uri",l[4])},i(l){a||(M(r.$$.fragment,l),a=!0)},o(l){O(r.$$.fragment,l),a=!1},d(l){l&&(u(e),u(s),u(t)),B(r)}}}function Qe(n){let e=(n[1]?n[3]("journeys.dominique.click_to_proceed"):n[3]("journeys.dominique.waiting_for_creds"))+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&10&&e!==(e=(t[1]?t[3]("journeys.dominique.click_to_proceed"):t[3]("journeys.dominique.waiting_for_creds"))+"")&&J(s,e)},d(t){t&&u(s)}}}function Fe(n){let e,s,t,r,a,l,i,v=(n[1]?n[3]("journeys.dominique.continue_further_in_browser"):n[3]("journeys.dominique.scan_qr_and_share_cred_to_open_job_network"))+"",m,h,b,_,p,C,T,o;a=new K({props:{variant:"card-header",color:"--bbc-blue",$$slots:{default:[Ae]},$$scope:{ctx:n}}});const f=[Je,Pe],k=[];function U(c,g){return c[1]?0:c[0]?1:-1}return~(b=U(n))&&(_=k[b]=f[b](n)),T=new K({props:{variant:"sub-text",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),{c(){e=y("div"),s=y("img"),r=I(),H(a.$$.fragment),l=I(),i=y("div"),m=A(v),h=I(),_&&_.c(),p=I(),C=y("div"),H(T.$$.fragment),this.h()},l(c){e=w(c,"DIV",{class:!0});var g=E(e);s=w(g,"IMG",{src:!0,alt:!0,class:!0}),r=D(g),S(a.$$.fragment,g),l=D(g),i=w(g,"DIV",{class:!0});var Q=E(i);m=P(Q,v),Q.forEach(u),h=D(g),_&&_.l(g),p=D(g),C=w(g,"DIV",{class:!0});var N=E(C);S(T.$$.fragment,N),N.forEach(u),g.forEach(u),this.h()},h(){ue(s.src,t="/imgs/openjobs.png")||$(s,"src",t),$(s,"alt",""),$(s,"class","logo svelte-4vbcdu"),$(i,"class","p svelte-4vbcdu"),$(C,"class","subtext svelte-4vbcdu"),$(e,"class","modal-content svelte-4vbcdu")},m(c,g){j(c,e,g),d(e,s),d(e,r),R(a,e,null),d(e,l),d(e,i),d(i,m),d(e,h),~b&&k[b].m(e,null),d(e,p),d(e,C),R(T,C,null),o=!0},p(c,g){const Q={};g&1034&&(Q.$$scope={dirty:g,ctx:c}),a.$set(Q),(!o||g&10)&&v!==(v=(c[1]?c[3]("journeys.dominique.continue_further_in_browser"):c[3]("journeys.dominique.scan_qr_and_share_cred_to_open_job_network"))+"")&&J(m,v);let N=b;b=U(c),b===N?~b&&k[b].p(c,g):(_&&(he(),O(k[N],1,1,()=>{k[N]=null}),ye()),~b?(_=k[b],_?_.p(c,g):(_=k[b]=f[b](c),_.c()),M(_,1),_.m(e,p)):_=null);const G={};g&1034&&(G.$$scope={dirty:g,ctx:c}),T.$set(G)},i(c){o||(M(a.$$.fragment,c),M(_),M(T.$$.fragment,c),o=!0)},o(c){O(a.$$.fragment,c),O(_),O(T.$$.fragment,c),o=!1},d(c){c&&u(e),B(a),~b&&k[b].d(),B(T)}}}function Ke(n){let e=n[3]("journeys.dominique.welcome_dominique")+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&8&&e!==(e=t[3]("journeys.dominique.welcome_dominique")+"")&&J(s,e)},d(t){t&&u(s)}}}function We(n){let e=n[3]("journeys.dominique.your_latest_creds")+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&8&&e!==(e=t[3]("journeys.dominique.your_latest_creds")+"")&&J(s,e)},d(t){t&&u(s)}}}function Xe(n){let e=me[n[5]].name+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){j(t,s,r)},p(t,r){r&32&&e!==(e=me[t[5]].name+"")&&J(s,e)},d(t){t&&u(s)}}}function Ye(n){let e=n[3]("components.issued_by",{values:{IssuerName:""}})+"",s,t,r,a=n[3]("issuer.koning_willem_i_college")+"",l;return{c(){s=A(e),t=y("br"),r=I(),l=A(a)},l(i){s=P(i,e),t=w(i,"BR",{}),r=D(i),l=P(i,a)},m(i,v){j(i,s,v),j(i,t,v),j(i,r,v),j(i,l,v)},p(i,v){v&8&&e!==(e=i[3]("components.issued_by",{values:{IssuerName:""}})+"")&&J(s,e),v&8&&a!==(a=i[3]("issuer.koning_willem_i_college")+"")&&J(l,a)},d(i){i&&(u(s),u(t),u(r),u(l))}}}function Ze(n){let e,s,t,r,a,l,i,v,m,h,b='<div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div>',_,p,C='<div class="card svelte-4vbcdu"><div class="pic svelte-4vbcdu"></div> <div class="bars svelte-4vbcdu"><div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div></div></div> <div class="card svelte-4vbcdu"><div class="pic svelte-4vbcdu"></div> <div class="bars svelte-4vbcdu"><div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div></div></div> <div class="card svelte-4vbcdu"><div class="pic svelte-4vbcdu"></div> <div class="bars svelte-4vbcdu"><div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div> <div class="bar svelte-4vbcdu"></div></div></div>',T,o,f,k,U,c,g,Q,N,G,ae,X,F,ne,W,Z=n[3]("journeys.dominique.share_cred_btn")+"",se,x,le,ce;return t=new Ce({props:{variant:"small",image:"/imgs/dominique.png"}}),l=new K({props:{variant:"button",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),k=new K({props:{variant:"list",$$slots:{default:[We]},$$scope:{ctx:n}}}),G=new K({props:{variant:"card-header",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),F=new K({props:{variant:"sub-text",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),{c(){e=y("div"),s=y("div"),H(t.$$.fragment),r=I(),a=y("div"),H(l.$$.fragment),i=I(),v=y("div"),m=I(),h=y("div"),h.innerHTML=b,_=I(),p=y("div"),p.innerHTML=C,T=I(),o=y("div"),f=y("div"),H(k.$$.fragment),U=I(),c=y("img"),Q=I(),N=y("div"),H(G.$$.fragment),ae=I(),X=y("div"),H(F.$$.fragment),ne=I(),W=y("button"),se=A(Z),this.h()},l(q){e=w(q,"DIV",{class:!0});var V=E(e);s=w(V,"DIV",{class:!0});var z=E(s);S(t.$$.fragment,z),r=D(z),a=w(z,"DIV",{class:!0});var ee=E(a);S(l.$$.fragment,ee),ee.forEach(u),i=D(z),v=w(z,"DIV",{class:!0}),E(v).forEach(u),m=D(z),h=w(z,"DIV",{class:!0,"data-svelte-h":!0}),fe(h)!=="svelte-10j1e48"&&(h.innerHTML=b),z.forEach(u),_=D(V),p=w(V,"DIV",{class:!0,"data-svelte-h":!0}),fe(p)!=="svelte-t2dfs0"&&(p.innerHTML=C),T=D(V),o=w(V,"DIV",{class:!0});var L=E(o);f=w(L,"DIV",{class:!0});var te=E(f);S(k.$$.fragment,te),te.forEach(u),U=D(L),c=w(L,"IMG",{src:!0,alt:!0,class:!0}),Q=D(L),N=w(L,"DIV",{class:!0});var de=E(N);S(G.$$.fragment,de),de.forEach(u),ae=D(L),X=w(L,"DIV",{class:!0});var ve=E(X);S(F.$$.fragment,ve),ve.forEach(u),ne=D(L),W=w(L,"BUTTON",{class:!0});var _e=E(W);se=P(_e,Z),_e.forEach(u),L.forEach(u),V.forEach(u),this.h()},h(){$(a,"class","welcome svelte-4vbcdu"),$(v,"class","big-bar svelte-4vbcdu"),$(h,"class","bars svelte-4vbcdu"),$(s,"class","avatar svelte-4vbcdu"),$(p,"class","cards svelte-4vbcdu"),$(f,"class","header svelte-4vbcdu"),ue(c.src,g="/imgs/kw1c-white.png")||$(c,"src",g),$(c,"alt",""),$(c,"class","logo svelte-4vbcdu"),$(N,"class","credential svelte-4vbcdu"),$(X,"class","issued-by svelte-4vbcdu"),$(W,"class","button svelte-4vbcdu"),$(o,"class","share svelte-4vbcdu"),$(e,"class","content svelte-4vbcdu")},m(q,V){j(q,e,V),d(e,s),R(t,s,null),d(s,r),d(s,a),R(l,a,null),d(s,i),d(s,v),d(s,m),d(s,h),d(e,_),d(e,p),d(e,T),d(e,o),d(o,f),R(k,f,null),d(o,U),d(o,c),d(o,Q),d(o,N),R(G,N,null),d(o,ae),d(o,X),R(F,X,null),d(o,ne),d(o,W),d(W,se),x=!0,le||(ce=ge(W,"click",n[8]),le=!0)},p(q,V){const z={};V&1032&&(z.$$scope={dirty:V,ctx:q}),l.$set(z);const ee={};V&1032&&(ee.$$scope={dirty:V,ctx:q}),k.$set(ee);const L={};V&1056&&(L.$$scope={dirty:V,ctx:q}),G.$set(L);const te={};V&1032&&(te.$$scope={dirty:V,ctx:q}),F.$set(te),(!x||V&8)&&Z!==(Z=q[3]("journeys.dominique.share_cred_btn")+"")&&J(se,Z)},i(q){x||(M(t.$$.fragment,q),M(l.$$.fragment,q),M(k.$$.fragment,q),M(G.$$.fragment,q),M(F.$$.fragment,q),x=!0)},o(q){O(t.$$.fragment,q),O(l.$$.fragment,q),O(k.$$.fragment,q),O(G.$$.fragment,q),O(F.$$.fragment,q),x=!1},d(q){q&&u(e),B(t),B(l),B(k),B(G),B(F),le=!1,ce()}}}function xe(n){let e,s,t,r,a,l,i,v,m,h,b,_,p;t=new K({props:{variant:"heading",$$slots:{default:[Ge]},$$scope:{ctx:n}}}),l=new K({props:{$$slots:{default:[ze]},$$scope:{ctx:n}}});function C(o){n[7](o)}let T={borderRadius:16,$$slots:{default:[Fe]},$$scope:{ctx:n}};return n[2]!==void 0&&(T.isOpen=n[2]),v=new Le({props:T}),we.push(()=>Ee(v,"isOpen",C)),_=new Te({props:{$$slots:{default:[Ze]},$$scope:{ctx:n}}}),{c(){e=y("div"),s=y("div"),H(t.$$.fragment),r=I(),a=y("div"),H(l.$$.fragment),i=I(),H(v.$$.fragment),h=I(),b=y("div"),H(_.$$.fragment),this.h()},l(o){e=w(o,"DIV",{class:!0});var f=E(e);s=w(f,"DIV",{class:!0});var k=E(s);S(t.$$.fragment,k),k.forEach(u),r=D(f),a=w(f,"DIV",{class:!0});var U=E(a);S(l.$$.fragment,U),U.forEach(u),i=D(f),S(v.$$.fragment,f),h=D(f),b=w(f,"DIV",{class:!0});var c=E(b);S(_.$$.fragment,c),c.forEach(u),f.forEach(u),this.h()},h(){$(s,"class","heading svelte-4vbcdu"),$(a,"class","sub-text svelte-4vbcdu"),$(b,"class","dash svelte-4vbcdu"),$(e,"class","container svelte-4vbcdu")},m(o,f){j(o,e,f),d(e,s),R(t,s,null),d(e,r),d(e,a),R(l,a,null),d(e,i),R(v,e,null),d(e,h),d(e,b),R(_,b,null),p=!0},p(o,[f]){const k={};f&1032&&(k.$$scope={dirty:f,ctx:o}),t.$set(k);const U={};f&1032&&(U.$$scope={dirty:f,ctx:o}),l.$set(U);const c={};f&1051&&(c.$$scope={dirty:f,ctx:o}),!m&&f&4&&(m=!0,c.isOpen=o[2],ke(()=>m=!1)),v.$set(c);const g={};f&1068&&(g.$$scope={dirty:f,ctx:o}),_.$set(g)},i(o){p||(M(t.$$.fragment,o),M(l.$$.fragment,o),M(v.$$.fragment,o),M(_.$$.fragment,o),p=!0)},o(o){O(t.$$.fragment,o),O(l.$$.fragment,o),O(v.$$.fragment,o),O(_.$$.fragment,o),p=!1},d(o){o&&u(e),B(t),B(l),B(v),B(_)}}}function et(n,e,s){let t,r,a;ie(n,Oe,p=>s(3,t=p)),ie(n,Ue,p=>s(4,r=p)),ie(n,He,p=>s(5,a=p));let l;function i(p){p&&document.addEventListener("open-id-qr-success",C=>{C.detail.type==="vp"&&s(1,v=!0)})}let v=!1;qe(async()=>{Se.set(1);const{data:{uri:p}}=await Re.post("/api/oid4vp",{presentationStage:"dominiqueShareCred",clientMetadata:{logoUri:new URL("/imgs/openjobs.png",Be).toString(),clientName:"Open Jobs Network"}});s(0,l=p)});let m=!1;const h=()=>Me("/demo/journeys/dominique/new-message");function b(p){m=p,s(2,m)}const _=()=>{s(2,m=!0)};return n.$$.update=()=>{n.$$.dirty&1&&i(l)},[l,v,m,t,r,a,h,b,_]}class pt extends je{constructor(e){super(),Ie(this,e,et,xe,be,{})}}export{pt as component};