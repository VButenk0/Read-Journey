import styled from "styled-components";

export const DiaryWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  border-radius: 12px;
  background-color: var(--addition-bg-color);

  position: relative;
  padding: 20px;

  height: 373px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--white-bg);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bg-color);
  }
`;

export const OneReadWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: relative;
  width: 100%;

  padding-left: 30px;
  padding-right: 22px;
`;

export const Square = styled.div`
  position: absolute;
  /* top: 0;
  left: 0px; */
  top: 0;
  left: -30px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--secondary-text);

  div {
    border-radius: 2px;
    background-color: var(--bg-color);
    width: 12px;
    height: 12px;
  }

  &.first {
    background-color: var(--primary-text);
    div {
      background-color: var(--main-bg-color);
    }
  }
`;

export const HorizWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const DateText = styled.p`
  font-family: "Gilroy Bold";
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: 0.32px;

  color: var(--secondary-text);

  &.first {
    color: var(--primary-text);
  }
`;

export const PagesText = styled.p`
  color: var(--secondary-text);
`;

export const StatsWrpr = styled.div`
  position: relative;
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
  text-align: center;
`;

export const TrashIcon = styled.svg`
  position: absolute;
  top: 6px;
  right: -22px;

  cursor: pointer;

  &:hover,
  &:active {
    stroke: var(--red);
  }
`;

export const Sideline = styled.div`
  position: absolute;
  top: 25px;
  left: 28px;

  width: 2px;
  height: 100%;

  background-color: var(--bg-color);
`;
