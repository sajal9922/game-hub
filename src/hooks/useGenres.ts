import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";


const apiClient = new APIClient<Genres>('/genres');

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
queryKey:['genres'],
queryFn:  apiClient.getAll,
staleTime: 1000 * 60 * 60 * 24, // 24 hours
initialData: { count: genres.length, results: genres },


})
export default useGenres