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
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(iniialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  console.log(searchTerm);

  //fetch movies list
  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);

      setState((prev) => ({
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

  //initial & search
  useEffect(() => {
    setState(iniialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //load More movies
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state, searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
