import styled from "styled-components";

export const ReadingWrpr = styled.div`
  display: flex;
  flex-direction: column;

  width: 847px;
  height: 651px;

  padding: 40px;
  padding-bottom: 53px;
  background-color: var(--bg-color);
  border-radius: 30px;

  @media only screen and (max-width: 1439px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: "Gilroy Bold";
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: 0.56px;

  padding-bottom: 44px;
`;

export const BookWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  img {
    width: 100%;
    height: 100%;
    max-width: 224px;
    max-height: 340px;
    object-fit: cover;
    object-position: center;
    flex: 0;
    border-radius: 8px;

    @media only screen and (min-width: 768px) and (max-width: 1439px) {
      width: 169px;
      height: 256px;
    }
  }
`;

export const NoImgMyBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 224px;
  height: 340px;

  border: 2px solid var(--border-color);
  border-radius: 8px;

  font-family: "Gilroy Bold";
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.4px;
`;

export const MyBookDscr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p:first-of-type {
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
  }
  p:last-of-type {
    color: var(--secondary-text);
  }
`;

export const RecStopIcon = styled.svg`
  cursor: pointer;
`;
