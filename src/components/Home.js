import React from 'react';
import { useEffect, useState } from 'react';

// //API
// import API from '../API';

//Config
import {
  //   SEARCH_BASE_URL,
  //   POPULAR_BASE_URL,
  //   API_URL,
  //   API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  //   POSTER_SIZE,
  //   REQUEST_TOKEN_URL,
  //   LOGIN_URL,
  //   SESSION_ID_URL,
} from '../config';

//Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spiner/Spinner';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <React.Fragment>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      {/* GRID */}
      <Grid header="Popular Movie">
        {state.results.map((movie) => (
          // <div key={movie.id}>{movie.title}</div>
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </React.Fragment>
  );
};

export default Home;
