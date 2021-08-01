import { Wrapper, Content } from './Grid.style';

const Grid = (props) => {
  return (
    <Wrapper>
      <h1>{props.header}</h1>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default Grid;
