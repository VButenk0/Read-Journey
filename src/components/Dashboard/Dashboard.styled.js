import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 353px !important;
  height: 651px;

  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 30px;
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

  h2 {
    font-family: "Gilroy Bold";
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;

    padding-bottom: 20px;
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
  justify-content: center;
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
