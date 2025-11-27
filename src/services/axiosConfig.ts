import axios from "axios";
import { store } from "../redux/store";
import { loggedOut, refreshToken } from "../redux/userSlice";
import { refreshAccessToken } from "./userService";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: { "Content-Type": "application/json" },
  withCredentials:true
});

const refresh = async () => {
  try {
    return await refreshAccessToken();
  } catch (error) {
    store.dispatch(loggedOut());
    window.location.href = "/";
    throw error;
  }
};

apiClient.interceptors.request.use((config) => {
  const accessToken = store.getState().user.accessToken;
  
  if (accessToken && !config?.url?.includes("users/refresh-token")) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
},(error)=>{
    return Promise.reject(error)
});

apiClient.interceptors.response.use(
    (response)=>response,
async (error)=>{
    const request = error.config;
    if(error.response?.status === 401 && !error.config?.url?.includes('/login') && !request._retry){
        request._retry=true
        try{
            const newToken=await refresh();
            
            store.dispatch(refreshToken(newToken))
            request.headers["Authorization"] = `Bearer ${newToken}`;
            return apiClient(request);
        }catch(error){
            return Promise.reject(error)
        }
    }
    return Promise.reject(error)
})
