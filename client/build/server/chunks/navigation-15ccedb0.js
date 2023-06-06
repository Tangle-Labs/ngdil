import './index-78a5ef04.js';

function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");

export { goto as g };
//# sourceMappingURL=navigation-15ccedb0.js.map
