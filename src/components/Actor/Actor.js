import { Wrapper, Image } from './Actor.style';

const Actor = ({ character, name, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

export default Actor;
