import styled, { css } from "styled-components";

export const AuthPageWrpr = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0;
`;

export const BlockWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: var(--bg-color);
  padding: 40px 64px;
  border-radius: 30px;
  width: 600px;
  flex-shrink: 0;

  &.rightBlock {
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 0;
  }
`;

export const LogoWrpr = styled.div`
  display: flex;
  gap: 4px;
  font-family: "Gilroy Bold";
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  padding-bottom: 87px;
`;

export const AuthTitle = styled.h1`
  width: 444px;
  font-family: "Gilroy Bold";
  font-size: 64px;
  line-height: 0.9375;
  list-style: 1.28px;
  padding-bottom: 40px;

  span {
    color: var(--trnsprnt-text);
  }
`;

export const InputsWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 472px;
  padding-bottom: 60px;
`;

export const InputWrpr = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px 14px;
  background-color: var(--addition-bg-color);
  border: 2px solid transparent;
  border-radius: 12px;

  &:hover,
  &:focus-within {
    border: 2px solid var(--border10-color);
  }

  ${({ $isvalid, $haserror, $isfilled }) => css`
    border: 2px solid
      ${$haserror
        ? "var(--red)"
        : $isvalid
        ? "var(--green)"
        : $isfilled
        ? "inherit"
        : "transparent"};
    svg {
      fill: ${$haserror ? "var(--red)" : $isvalid && "var(--green)"};
    }
  `}

  label {
    color: var(--secondary-text);
    padding-right: 10px;
  }

  input {
    display: flex;
    align-items: center;
    flex: 1;
    color: var(--primary-text);

    &::placeholder {
      color: var(--primary-text);
    }
  }

  svg {
    cursor: pointer;
  }

  :nth-child(4) {
    padding-left: 5px;
  }
`;

export const BtnRlctWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  bottom: -22px;
  left: 14px;

  color: var(--red);
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.24px;
`;

export const SuccessMsg = styled.p`
  position: absolute;
  bottom: -22px;
  left: 14px;

  color: var(--green);
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.24px;
`;

export const SubmitBtn = styled.button`
  padding: 16px 54px;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: var(--white-bg);
  color: var(--black-text);
  font-family: "Gilroy Bold";
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.4px;

  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--primary-text);
    background-color: transparent;
    border: 1px solid var(--border-color);
  }
`;

export const RelocateLink = styled.a`
  color: var(--secondary-text);
  text-decoration: underline;

  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--primary-text);
  }
`;
