import PropTypes from 'prop-types';
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = (props) => {
  return (
    <Wrapper image={props.image}>
      <Content>
        <Text>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  test: PropTypes.string,
};

export default HeroImage;
