import styled from "styled-components";

export const LibraryWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 847px;
  height: 651px;

  padding: 40px;
  background-color: var(--bg-color);
  border-radius: 30px;

  @media only screen and (max-width: 1439px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 767px) {
    padding: 40px 20px;
  }
`;

export const LibHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Gilroy Bold";
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: 0.56px;
`;

export const StyledSelect = styled.select`
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 14px;
  outline: none;

  color: var(--primary-text);

  option {
    background-color: var(--addition-bg-color);
    color: var(--secondary-text);
  }
`;

export const BooksList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
  row-gap: 27px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    row-gap: 23px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    column-gap: 25px;
  }
`;

export const NoBooksWrpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 100%;

  p:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--addition-bg-color);
    border-radius: 50%;
    padding: 30px;

    font-size: 70px;
  }

  p:last-of-type {
    width: 274px;
    text-align: center;

    span {
      color: var(--secondary-text);
    }
  }
`;
