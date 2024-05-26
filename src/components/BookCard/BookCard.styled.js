import styled from "styled-components";

export const BookWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 137px;
    height: 208px;
    border-radius: 8px;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p:first-of-type {
    width: 137px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-family: "Gilroy Bold";
  }

  p:last-of-type {
    color: var(--secondary-text);
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.2px;
  }
`;
