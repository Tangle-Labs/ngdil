import { b as PUBLIC_WS_URI } from './axios.utils-acadfc84.js';

function createWebsocket() {
  let ws;
  let retries;
  let interval;
  ws = new WebSocket(PUBLIC_WS_URI);
  ws.onclose = function(e) {
    console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason);
    interval = setInterval(function() {
      console.log("attempting reconnect");
      ws = new WebSocket(PUBLIC_WS_URI);
      retries++;
      if (retries < 10)
        return;
      if (!interval)
        return;
      clearInterval(interval);
    }, 2e3);
  };
  ws.onopen = () => {
    interval = null;
    if (!interval)
      return;
    clearInterval(interval);
  };
  return ws;
}

export { createWebsocket as c };
//# sourceMappingURL=ws.util-8a542ab8.js.map
