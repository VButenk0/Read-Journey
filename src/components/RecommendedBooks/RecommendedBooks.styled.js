import styled from "styled-components";

export const RcmndBooksWrpr = styled.div`
  width: 847px;
  height: 651px;

  padding: 40px;
  background-color: var(--bg-color);
  border-radius: 30px;
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
  row-gap: 7px;
`;
