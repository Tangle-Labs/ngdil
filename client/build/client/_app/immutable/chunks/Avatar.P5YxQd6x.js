import{s as I,d,i as q,n as g}from"./scheduler.BSbnpsnJ.js";import{S as y,i as A,e as h,s as D,c as v,a as C,f as E,d as o,k as f,x as u,g as b,h as _,y as S,t as V,b as j,j as G}from"./index.CHa0mS77.js";/* empty css                                                    */function k(i){let a,t;return{c(){a=h("div"),t=V(i[2]),this.h()},l(l){a=v(l,"DIV",{class:!0});var s=C(a);t=j(s,i[2]),s.forEach(o),this.h()},h(){f(a,"class","accompanying-text svelte-135hnrv")},m(l,s){b(l,a,s),_(a,t)},p(l,s){s&4&&G(t,l[2])},d(l){l&&o(a)}}}function M(i){let a,t,l,s,c,m,e=i[2]&&k(i);return{c(){a=h("div"),t=h("img"),s=D(),e&&e.c(),this.h()},l(r){a=v(r,"DIV",{class:!0});var n=C(a);t=v(n,"IMG",{src:!0,alt:!0,class:!0}),s=E(n),e&&e.l(n),n.forEach(o),this.h()},h(){d(t.src,l=i[0])||f(t,"src",l),f(t,"alt","user avatar"),f(t,"class","avatar-img svelte-135hnrv"),u(t,"large",i[1]==="large"),u(t,"small",i[1]==="small"),f(a,"class","avatar svelte-135hnrv")},m(r,n){b(r,a,n),_(a,t),_(a,s),e&&e.m(a,null),c||(m=S(a,"click",function(){q(i[3])&&i[3].apply(this,arguments)}),c=!0)},p(r,[n]){i=r,n&1&&!d(t.src,l=i[0])&&f(t,"src",l),n&2&&u(t,"large",i[1]==="large"),n&2&&u(t,"small",i[1]==="small"),i[2]?e?e.p(i,n):(e=k(i),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:g,o:g,d(r){r&&o(a),e&&e.d(),c=!1,m()}}}function w(i,a,t){let{image:l}=a,{variant:s="medium"}=a,{text:c=null}=a,{onClick:m=()=>null}=a;return i.$$set=e=>{"image"in e&&t(0,l=e.image),"variant"in e&&t(1,s=e.variant),"text"in e&&t(2,c=e.text),"onClick"in e&&t(3,m=e.onClick)},[l,s,c,m]}class H extends y{constructor(a){super(),A(this,a,w,M,I,{image:0,variant:1,text:2,onClick:3})}}export{H as A};