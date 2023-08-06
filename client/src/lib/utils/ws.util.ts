import { PUBLIC_WS_URI } from "$env/static/public";

export class WebsocketClient {
	static ws: WebSocket;
	static retries: number;
	static interval: NodeJS.Timer | null;
	static init() {
		WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
		WebsocketClient.ws.onclose = function (e) {
			console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason);
			WebsocketClient.interval = setInterval(function () {
				console.log("should not bombard this");
				WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
				WebsocketClient.retries++;
				if (WebsocketClient.retries < 10) return;
				if (!WebsocketClient.interval) return;
				clearInterval(WebsocketClient.interval);
			}, 2000);
		};
		WebsocketClient.ws.onopen = () => {
			console.log("here?");
			WebsocketClient.interval = null;
			if (!WebsocketClient.interval) return;
			clearInterval(WebsocketClient.interval);
		};
	}
}

WebsocketClient.init();
