import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrpr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 1216px;
  background-color: var(--bg-color);
  border-radius: 15px;
  padding: 11px 20px;
  margin: 20px 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 16px;
    margin: 32px 0 16px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
  }

  @media only screen and (max-width: 767px) {
    width: 335px;
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

  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.28px;
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

export const StyledBurger = styled.div`
  width: 30px;
  height: 22.5px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:open span {
    z-index: 1000;
  }

  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: var(--white-bg);
    border-radius: 4.5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  &.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -1.5px;
    left: 4px;
  }
  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 19.5px;
    left: 4px;
  }
`;
