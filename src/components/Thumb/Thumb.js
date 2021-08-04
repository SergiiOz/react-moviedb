//Styles
import { Image } from './Thumb.style';

const Thumb = (props) => {
  return (
    <div>
      <Image src={props.image} alt="movie-thumb" />
    </div>
  );
};

export default Thumb;
