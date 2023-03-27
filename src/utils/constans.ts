import { AxiosRequestConfig } from "axios";

export const AXIOS_DEFAULT_OPTIONS: AxiosRequestConfig = {
    headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': null
    },
  };