import PropTypes from 'prop-types';
//Styles
import { Wrapper } from './Button.style';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
