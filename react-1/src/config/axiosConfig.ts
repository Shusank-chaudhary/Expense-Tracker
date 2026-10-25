import axios from "axios";
import { AppConfig } from "./appConfig";

import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL:AppConfig.baseUrl,
    timeout:30000,
    timeoutErrorMessage:'Server timed out...',
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
  const _at7 = Cookies.get("_at7")
  if(_at7) {
    config.headers.Authorization = "Bearer "+_at7
  }
  return config;
});

export default axiosInstance;