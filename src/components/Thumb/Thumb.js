import PropTypes from 'prop-types';
//Styles
import { Image } from './Thumb.style';

//Routes
import { Link } from 'react-router-dom';

const Thumb = (props) => {
  return (
    <div>
      {props.clickable ? (
        <Link to={`/${props.movieId}`}>
          <Image src={props.image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={props.image} alt="movie-thumb" />
      )}
    </div>
  );
};

Thumb.propTypes = {
  movieId: PropTypes.number,
  image: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Thumb;
