import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
queryKey:['genres'],
queryFn:  () =>  
  apiClient
.get<FetchResponse<Genres>>('/genres')
.then (response => response.data),
staleTime: 1000 * 60 * 60 * 24, // 24 hours
initialData: { count: genres.length, results: genres },


})
export default useGenres