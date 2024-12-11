import axios from "axios";
import authHeader from "@/services/auth-header.ts";

const API_URL = "http://127.0.0.1:8080/api/streams/statistics/";

	export const getOverviewStatistics = () => {
	return axios.get(API_URL + "total", {headers: authHeader()});
}