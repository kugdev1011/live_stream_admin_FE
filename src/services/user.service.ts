import axios from "axios";
import authHeader from "./auth-header";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/api";

export const getAccountList = (
  page: number = 1,
  pageSize: number = 10,
  sort_by: string = "username",
  sort: string = "ASC",
  keyword: string = ""
) => {
  return axios.get(
    `${API_URL}/users?page=${page}&limit=${pageSize}&sort_by=${sort_by}&sort=${sort}&keyword=${keyword}`,
    {
      headers: authHeader(),
    }
  );
};

export const getAccountListWithRole = (role: string) => {
  return axios.get(
    `${API_URL}/users?page=1&limit=20&sort_by=username&sort=ASC&role=${role}`,
    {
      headers: authHeader(),
    }
  );
};

export const createAccount = async (data: any) => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("display_name", data.display_name);
  formData.append("email", data.email);
  formData.append("role_type", data.role.toLowerCase());
  formData.append("password", data.password);
  formData.append("avatar", data.avatar); // Assuming data.avatar is a File object

  return await axios.post(`${API_URL}/users`, formData, {
    headers: {
      ...authHeader(),
      "Content-Type": "multipart/form-data", // Set the content type for FormData
    },
  });
};

export const changePassword = async (userId: string, data: any) => {
  return await axios.patch(
    `${API_URL}/users/${userId}/change-password`,
    {
      password: data.password,
      confirm_password: data.confirmPassword,
    },
    {
      headers: authHeader(),
    }
  );
};

export const deleteAccount = async (userId: string) => {
  if (userId.length === 0) return;
  return await axios.delete(`${API_URL}/users/${userId}`, {
    headers: authHeader(),
  });
};

export const getAccountLog = async (
  page: number = 1,
  pageSize: number = 20,
  sort_by: string = "performed_at",
  sort: string = "ASC",
  keyword: string = "",
  filter_by: string = "username"
) => {
  return await axios.get(
    `${API_URL}/admins/logs?page=${page}&limit=${pageSize}&sort_by=${sort_by}&sort=${sort}&filter_by=${filter_by}&keyword=${keyword}`,
    {
      headers: authHeader(),
    }
  );
};

export const getUsernames = async () => {
  return await axios.get(`${API_URL}/users/list-username`, {
    headers: authHeader(),
  });
};

export const updateAccount = async (id: string, data: any) => {
  return await axios.put(
    `${API_URL}/users/${id}`,
    {
      username: data.username,
      display_name: data.display_name,
      email: data.email,
      role_type: data.role_type,
    },
    { headers: authHeader() }
  );
};
