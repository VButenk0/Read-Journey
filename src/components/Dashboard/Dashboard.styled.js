import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 353px;
  height: 651px;

  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 30px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 32px 16px;
    gap: 40px;
  }
`;

export const FiltersWrpr = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 20px 0 8px 14px;
  }

  form:first-child {
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 1439px) {
    padding-bottom: 20px;

    p {
      padding-top: 0;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 14px;
  background-color: var(--addition-bg-color);
  border: 1px solid transparent;
  border-radius: 12px;

  label {
    color: var(--secondary-text);
    flex-shrink: 0;
  }

  input {
    flex: 1;
    color: var(--primary-text);
  }

  input::placeholder {
    color: var(--primary-text);
  }

  &:hover,
  &:active {
    border-color: var(--border-color);
  }
`;

export const ToApplyBtn = styled.button`
  padding: 12px 28px;
  width: fit-content;

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

export const InstructionWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: var(--addition-bg-color);
  border-radius: 12px;

  padding: 20px;

  width: 313px;

  h2 {
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;

    padding-bottom: 20px;
  }

  @media only screen and (max-width: 1439px) {
    width: auto;
  }
`;

export const StepWrpr = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 44px;
    height: 44px;

    border-radius: 50%;
    background-color: var(--white-bg);

    color: var(--black-text);
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
  }

  p span {
    color: var(--secondary-text);
  }
`;

export const PreviewBooksWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 71px;
    height: 107px;
    border-radius: 8px;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 2px;

  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.2px;

  p:first-of-type {
    width: 71px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Gilroy Bold";
  }
  p:last-of-type {
    color: var(--secondary-text);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  p {
    flex-shrink: 0;
    color: var(--secondary-text);
    text-decoration: underline;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    p {
      color: var(--primary-text);
    }
  }
`;

export const QuoteWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px 20px;
  background-color: var(--addition-bg-color);
  border-radius: 12px;

  p:first-of-type {
    flex-shrink: 0;
    font-size: 40px;
    line-height: 1;
    letter-spacing: -0.8px;
  }

  p {
    color: var(--secondary-text);

    span {
      color: var(--primary-text);
    }
  }
`;

export const ProgressWrpr = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-top: 40px;

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 0;
  }
`;

export const ProgrDscrText = styled.p`
  color: var(--secondary-text);

  padding-bottom: 60px;
`;

export const StarIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--addition-bg-color);
  flex-shrink: 0;

  font-size: 50px;
  line-height: 1.4;
  letter-spacing: -1px;
`;

export const ProgressTitle = styled.h2`
  font-family: "Gilroy Bold";
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.4px;

  padding-bottom: 14px;
`;

export const StatNTitleWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 14px;

  h2 {
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
  }
`;

export const StatIconWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatIcon = styled.svg`
  stroke: var(--secondary-text);
  cursor: pointer;

  &.active {
    stroke: var(--primary-text);
  }
`;

export const StatisticsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p:first-child {
    color: var(--secondary-text);
  }
`;

export const ReadedStatWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-radius: 12px;
  background-color: var(--addition-bg-color);

  padding: 20px;
`;

export const DoughnutWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 189px;
  height: 189px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 24px;
    font-family: "Gilroy Bold";
    color: var(--primary-text);
  }
  canvas {
    width: 378px !important;
    height: 189px !important;

    padding: 10px;
  }
`;

export const StatBottomWrpr = styled.div`
  display: flex;
  gap: 15px;

  padding-top: 10px;

  span {
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background-color: var(--green);
  }
`;

export const StatTextWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p:first-of-type {
    color: var(--primary-text);
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;
  }
  p:last-of-type {
    color: var(--secondary-text);
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: -0.24px;
  }
`;
