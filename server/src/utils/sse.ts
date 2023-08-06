export const connections = new Map();

export const transmitSSEEventToSession = (sessionId: string, message: Record<string, any>) => {
	if (connections.has(sessionId)) {
		const connection = connections.get(sessionId);
		connection.write(JSON.stringify({ message }));
	} else {
		throw new Error("Session id not found");
	}
};
