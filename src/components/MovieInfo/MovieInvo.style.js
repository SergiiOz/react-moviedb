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

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0;
    background: #fff;
    color: #000;
    font-weight: 800;
  }

  .director {
    margin-left: 40px;
  }

  p {
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 10px;

    @media sreen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
