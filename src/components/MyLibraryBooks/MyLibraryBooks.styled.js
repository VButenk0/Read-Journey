import styled from "styled-components";

export const LibraryWrpr = styled.div`
  width: 847px;
  height: 651px;

  padding: 40px;
  background-color: var(--bg-color);
  border-radius: 30px;
`;

export const LibHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 14px;
`;

export const Title = styled.h1`
  font-family: "Gilroy Bold";
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: 0.56px;
`;

export const BooksList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 7px;
`;
