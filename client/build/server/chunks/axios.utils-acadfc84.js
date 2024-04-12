import Axios from 'axios';

const PUBLIC_BASE_URI = "http://192.168.1.12:4269";
const PUBLIC_WS_URI = "ws://192.168.1.12:4269/";
const PUBLIC_CLIENT_URI = "http://192.168.1.12:5777";
const apiClient = Axios.create({
  baseURL: PUBLIC_BASE_URI,
  withCredentials: true
});

export { PUBLIC_CLIENT_URI as P, apiClient as a, PUBLIC_WS_URI as b };
//# sourceMappingURL=axios.utils-acadfc84.js.map
