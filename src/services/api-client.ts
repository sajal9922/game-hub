import axios, {  AxiosRequestConfig } from 'axios';


export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}


const axiosInstance =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    
    key:'a23cd0bc33034dba94fdec9f3efbf000'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  
  }
getAll = (config: AxiosRequestConfig) => {
  return axiosInstance
  .get<FetchResponse<T>>(this.endpoint, config)
  . then((response) => response.data);
}

}

export default APIClient;
