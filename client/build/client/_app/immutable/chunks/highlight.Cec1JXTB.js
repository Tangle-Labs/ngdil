function g(s){const h=/\[(.*?)\]/g;return s.replace(h,(e,o)=>`<span class="highlight-swoosh">
		<img src="/imgs/swoosh.svg" class="swoosh" alt="" />
            ${o}
        </span>`)}export{g as h};
