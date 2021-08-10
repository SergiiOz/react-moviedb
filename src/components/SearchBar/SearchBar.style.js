import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  background-color: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  color: var(--white);
  border-radius: 40px;
  margin: 0 auto;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    z-index: 2;
  }

  input {
    position: absolute;
    left: 0;
    width: 95%;
    height: 40px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    background: transparent;
    color: var(--white);
    font-size: var(--fontBig);

    :focus {
      outline: none;
    }
  }
`;
