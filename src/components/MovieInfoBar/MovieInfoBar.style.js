import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 0 20px;
  background-color: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 20px;
    border-radius: 20px;
    background-color: var(--medGrey);
    flex: 1 1 0;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
