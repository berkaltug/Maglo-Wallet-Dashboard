import type { LoginFormInput, RegisterFormInput } from "./userTypes";
import { apiClient } from "./axiosConfig";
import axios from "axios";

export const login = async ({ email, password }: LoginFormInput) => {
  const response = await apiClient.post(`users/login`, {
    email,
    password,
  });
  return response.data;
};

export const register = async ({
  fullName,
  email,
  password,
}: RegisterFormInput) => {
  try {
    const response = await apiClient.post(`users/register`, {
      fullName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProfile = async () => {
  const response = await apiClient.get("users/profile");
  return response.data;
};

export const refreshAccessToken = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_API}users/refresh-token`,
    {},
    {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
