import { default as Axios } from "axios";
import { PUBLIC_BASE_URI } from "$env/static/public";

export const apiClient = Axios.create({
	baseURL: PUBLIC_BASE_URI,
	withCredentials: true
});
