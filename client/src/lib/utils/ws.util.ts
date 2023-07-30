import { PUBLIC_WS_URI } from "$env/static/public";

export const websocketClient = new WebSocket(PUBLIC_WS_URI);
