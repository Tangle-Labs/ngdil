function highlight(str) {
  const placeholderRegex = /\[(.*?)\]/g;
  return str.replace(placeholderRegex, (_, match) => {
    return `<span class="highlight-swoosh">
		<img src="/imgs/swoosh.svg" class="swoosh" alt="" />
            ${match}
        </span>`;
  });
}

export { highlight as h };
//# sourceMappingURL=highlight-CswzCIho.js.map
