import { PUBLIC_WS_URI } from "$env/static/public";

export class WebsocketClient {
	static ws: WebSocket;
	static init() {
		WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
		WebsocketClient.ws.onclose = function (e) {
			console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason);
			setTimeout(function () {
				WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
			}, 5000);
		};
	}
}

WebsocketClient.init();
