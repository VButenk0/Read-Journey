import styled from "styled-components";

export const RcmndBooksWrpr = styled.div`
  width: 847px;
  height: 651px;

  padding: 40px 42px 28px 40px;
  background-color: var(--bg-color);
  border-radius: 30px;

  @media only screen and (max-width: 767px) {
    padding: 40px 20px;
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 40px;
    width: 100%;
  }
`;

export const RcmndHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: "Gilroy Bold";
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: 0.56px;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
  }
`;

export const PaginationWrpr = styled.div`
  display: flex;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: 1px solid var(--border-color);

    transition: all 0.3s;

    svg use {
      stroke: var(--primary-text);
    }

    @media only screen and (max-width: 767px) {
      width: 32px;
      height: 32px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  button:hover,
  button:active {
    background-color: var(--white-bg);
    border-color: transparent;

    svg use {
      stroke: var(--black-text);
    }
  }

  button.disable {
    cursor: default;
    svg use {
      stroke: var(--border-color);
    }

    &:hover,
    &:active {
      background-color: transparent;
      border: 1px solid var(--border-color);
    }
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
