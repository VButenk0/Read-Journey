import styled from "styled-components";

export const AllInfoWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 50px;
  width: 500px;

  img {
    width: 153px;
    height: 233px;
    flex-shrink: 0;
    border-radius: 8px;
  }
`;

export const TextInfoWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 16px;

  p:first-of-type {
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;

    padding-bottom: 2px;
  }

  p:nth-child(2) {
    color: var(--secondary-text);
    padding-bottom: 4px;
  }

  p:last-of-type {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.2px;
  }
`;

export const SubmitBtn = styled.button`
  padding: 14px 28px;
  border: 1px solid var(--border-color);
  border-radius: 30px;

  font-family: "Gilroy Bold";
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: 0.32px;

  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: var(--white-bg);
    border-color: transparent;

    color: var(--black-text);
  }
`;
