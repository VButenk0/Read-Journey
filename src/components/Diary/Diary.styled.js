import styled from "styled-components";

export const OneReadWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 100%;

  padding-right: 22px;
`;

export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--primary-text);

  div {
    border-radius: 2px;
    background-color: var(--main-bg-color);
    width: 12px;
    height: 12px;
  }

  &:not(:first-of-type) {
    background-color: var(--secondary-text);
    div {
      background-color: var(--bg-color);
    }
  }
`;

export const HorizWrpr = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-of-type(2) {
    padding-left: 30px;
  }
`;

export const DateWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DateText = styled.p`
  font-family: "Gilroy Bold";
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: 0.32px;
`;

export const PagesText = styled.p`
  color: var(--secondary-text);
`;

export const PercMinWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PercentText = styled.p`
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.4px;
`;

export const MinutesText = styled.p`
  color: var(--secondary-text);
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
`;

export const ChartPpHWrpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  canvas {
    height: 25px !important;
  }
`;

export const PagesPerHourText = styled.p`
  color: var(--secondary-text);
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  width: 55px;
`;
