import type { LoginFormInput, RegisterFormInput } from "./userTypes";
import { apiClient } from "./axiosConfig";


export const login = async ({ email, password }: LoginFormInput) => {
  const response = await apiClient.post(
    `users/login`,
    {
      email,
      password,
    }
  );
  return response.data;
};

export const register = async ({
  fullName,
  email,
  password,
}: RegisterFormInput) => {
  const response = await apiClient.post(
    `users/register`,
    {
      fullName,
      email,
      password,
    }
  );
  return response.data;
};

export const getProfile = async ()=>{
  const response=await apiClient.get('users/profile')
  return response.data;
}

export const refreshAccessToken  = async ()=>{
  const response=await apiClient.post('users/refresh-token');
  return response.data;
}