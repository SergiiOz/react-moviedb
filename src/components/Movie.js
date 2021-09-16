import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid/Grid';
import Spinner from './Spiner/Spinner';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';

//Hook

import { useMovieFetch } from '../hooks/useMovieFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
  //get id movie from url
  //movieId because we have name 'movieId' in Route App.js
  const { movieId } = useParams();
  console.log(movieId);
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie, loading, error);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;
  return (
    <React.Fragment>
      {/* <div> */}
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      {/* <h1 style={{ color: 'black' }}>Movie page</h1> */}
      {/* <h2 style={{ color: 'black' }}>"{movie.original_title}"</h2> */}
      {/* <h3>{movie.genres && movie.genres[1].name}</h3>
        <ul>
          {movie.actors
            ? movie.actors.map((actor) => (
                <li style={{ color: 'red' }}>{actor.name}</li>
              ))
            : "sorry doesn't have list"}
        </ul> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default Movie;
