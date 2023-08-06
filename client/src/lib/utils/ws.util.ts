import { PUBLIC_WS_URI } from "$env/static/public";

export class WebsocketClient {
	static ws: WebSocket;
	static interval: NodeJS.Timer;
	static init() {
		WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
		WebsocketClient.ws.onclose = function (e) {
			console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason);
			WebsocketClient.interval = setInterval(function () {
				console.log("should not bombard this");
				WebsocketClient.ws = new WebSocket(PUBLIC_WS_URI);
			}, 1000);
		};
		WebsocketClient.ws.onopen = () => {
			clearInterval(WebsocketClient.interval);
		};
	}
}

WebsocketClient.init();
