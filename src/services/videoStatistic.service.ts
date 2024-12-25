import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";

export const getVideoStatistics = async (
  page: number = 1,
  pageSize: number = 20,
  sort_by: string = "started_at",
  sort: string = "DESC",
  search?: string,
) => {
  try {
    // Always use statistics endpoint when searching
    const url = `${API_URL}/streams${search ? '/statistics' : ''}`;
    
    const params: any = {
      page,
      limit: pageSize,
      sort_by,
      sort,
    };

    // Only add keyword parameter if there's a search term
    if (search && search.trim()) {
      params.keyword = search.trim();
    }

    console.log("Request URL:", url);
    console.log("Request Params:", params);

    const response = await axios.get(url, {
      params,
      headers: authHeader(),
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error: any) {
    // More detailed error logging
    console.error("Error in getVideoStatistics:");
    console.error("Status:", error.response?.status);
    console.error("Status Text:", error.response?.statusText);
    console.error("Response Data:", error.response?.data);
    console.error("Request Config:", {
      url: error.config?.url,
      params: error.config?.params,
      headers: error.config?.headers
    });
    throw error;
  }
};