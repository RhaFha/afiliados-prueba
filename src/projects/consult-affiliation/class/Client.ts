import axios, { AxiosRequestHeaders } from "axios";
import { AXIOS_DEFAULT_OPTIONS } from "../../../utils/constans";

class Client {
  path: string;
  private baseURL = 'http://192.168.6.92:6002/';
  //private token = localStorage.getItem("jwt") || "";

  constructor(path: string) {
    this.path = path;
  }

  // private buildHeaders = () => {
  //   const headers: AxiosRequestHeaders = {
  //       'Accept': "application/json, text/plain, */*",
  //       'Content-Type': null
  //   };
  //   return headers;
  // };

  getAxiosInstance = () => {
    return axios.create({
      baseURL: this.baseURL + this.path,
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
    },
    });
  };
}

export default Client;