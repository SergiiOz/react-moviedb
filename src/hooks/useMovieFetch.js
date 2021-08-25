import { useState, useEffect } from 'react';

//API
import API from '../API';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        //get details of the film
        const movie = await API.fetchMovie(movieId);
        //movie's actors
        const credits = await API.fetchCredits(movieId);
        //Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors: directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    //call function
    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};
