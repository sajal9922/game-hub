import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>('/games', {signal: controler.signal})
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if( error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);

      });
      return () => {
        controler.abort();
      }
  }, []); 
  return { genres, error, isLoading};}

export default useGenres