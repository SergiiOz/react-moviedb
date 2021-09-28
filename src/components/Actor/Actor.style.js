
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 5px;
  border-radius: 20px;
  color: var(--white);
  background: var(--medGrey);

  h3 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 15px;
`;
