import axios, { Axios, AxiosRequestConfig } from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const API_URL = "http://localhost:8000";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig)=>{
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };
  return config;
},
(error) => {
    return Promise.reject(error);
});

export default $api;
