import axios from "axios";
//import { getEnvVariables } from "../helpers/getEnvVariables";
//const { REACT_APP_API_URL } = getEnvVariables();


const appApi = axios.create({
    baseURL: 'http://localhost:3002/api',
   
});

appApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default appApi;