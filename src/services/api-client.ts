import axios from 'axios';


export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    
    key:'a23cd0bc33034dba94fdec9f3efbf000'
  }
});