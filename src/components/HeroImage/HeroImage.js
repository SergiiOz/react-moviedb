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

export default HeroImage;
