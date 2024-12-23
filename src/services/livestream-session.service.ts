import axios from "axios";
import authHeader from "@/services/auth-header.ts";

const API_URL = "http://localhost:8080/api";

export const getLivestreamSessionList = (
	page: number = 1,
	options?: string[]
) => {
	const additionalParams = options?.length
		? options.map((option) => option.replace("=", "=")).join("&")
		: "";

	const URL = `${API_URL}/streams?page=${page}&limit=10&sort_by=started_at&sort=DESC${additionalParams ? `&${additionalParams}` : ""}`;
	return axios.get(
		URL
		,
		{
			headers: authHeader(),
		}
	)
}