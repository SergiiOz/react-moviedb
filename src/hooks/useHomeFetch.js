import { useState, useEffect } from 'react';

//API
import API from '../API';

//Initial State
const iniialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

//Custom Hooks useHomeFetch
export const useHomeFetch = () => {
  const [state, seState] = useState(iniialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //fetch movies list
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);

      seState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  console.log(state);

  //initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { state, loading, error };
};
