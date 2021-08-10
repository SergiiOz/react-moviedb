import React from 'react';

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
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

//HOME COMPONENT
const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <React.Fragment>
      {/* HERO IMAGE */}
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      {/* SEARCH BAR */}

      <SearchBar setSearchTherm={setSearchTerm} />

      {/* GRID */}
      <Grid
        header={searchTerm ? `Search Result "${searchTerm}"` : 'Popular Movie'}
      >
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

      {/* SPINNER */}
      {loading && <Spinner />}

      {/* BUTTON */}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </React.Fragment>
  );
};

export default Home;
