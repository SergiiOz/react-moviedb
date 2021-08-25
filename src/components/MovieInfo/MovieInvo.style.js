import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInvo 2ss;

  @keyframes animateMovieInvo {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.div``;

export const Text = styled.div``;
