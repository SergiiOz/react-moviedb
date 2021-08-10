import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  padding: 10px;
  border-radius: 30px;
  margin: 20px auto;
  background-color: var(--darkGrey);
  color: var(--white);
  font-size: var(--fontBig);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
