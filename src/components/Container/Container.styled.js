import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1280px;
  }
`;
