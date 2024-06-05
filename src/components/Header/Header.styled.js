import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
  background-color: var(--bg-color);
  border-radius: 15px;
  padding: 11px 20px;
  margin: 20px 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 16px;
    margin: 32px 0 16px;
  }
`;

export const LogoWrpr = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    font-family: "Gilroy Bold";
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }
`;

export const UserNavWrpr = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--secondary-text);
  font-family: "Gilroy Medium";
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.32px;

  padding-bottom: 8px;

  &.active {
    color: var(--primary-text);
    border-bottom: 3px solid var(--active-page-line);
  }
`;

export const UserWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const UserBarWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background-color: var(--addition-bg-color);
    border: 1px solid var(--border-color);
    border-radius: 50%;

    font-family: "Gilroy Bold";
    font-size: 16px;
    line-height: 1.125;
    letter-spacing: -0.32px;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.125;
    letter-spacing: -0.32px;
  }
`;

export const LogoutBtn = styled.button`
  padding: 12px 28px;
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
