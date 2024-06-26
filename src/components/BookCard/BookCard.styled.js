import styled from "styled-components";

export const BookWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 137px;
  height: 248px;

  img {
    width: 100%;
    height: 100%;
    max-width: 137px;
    max-height: 208px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: all 0.3s;

    cursor: pointer;
  }

  img:hover,
  img:active {
    border: 1px solid var(--hover-border);
  }
`;

export const NoImgWrpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 137px;
  height: 208px;

  border: 1px solid var(--border10-color);
  border-radius: 8px;

  transition: all 0.3s;

  &:hover,
  &:active {
    border: 1px solid var(--hover-border);
  }

  img {
    width: 111px;
    height: 72px;
    pointer-events: none;
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

export const TextBtnWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LibBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p:first-of-type {
    width: 89px;
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

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  background-color: #e850501a;
  border: 1px solid #e8505033;
  border-radius: 50%;

  transition: all 0.3s;
  &:hover,
  &:active {
    border-color: var(--red);
  }
`;
