import styled, { keyframes } from "styled-components";

const paging = keyframes`
  to {
    transform: rotateY(-180deg);
  }
`;

export const LoaderWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLoader = styled.span`
  width: 200px;
  height: 140px;
  background: var(--white-bg);
  box-sizing: border-box;
  position: relative;
  border-radius: 8px;
  perspective: 1000px;

  &:before {
    content: "";
    position: absolute;
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
    background: var(--bg-color) no-repeat;
    background-size: 60px 10px;
    background-image: linear-gradient(
        var(--active-page-line) 100px,
        transparent 0
      ),
      linear-gradient(var(--active-page-line) 100px, transparent 0),
      linear-gradient(var(--active-page-line) 100px, transparent 0),
      linear-gradient(var(--active-page-line) 100px, transparent 0),
      linear-gradient(var(--active-page-line) 100px, transparent 0),
      linear-gradient(var(--active-page-line) 100px, transparent 0);

    background-position: 15px 30px, 15px 60px, 15px 90px, 105px 30px, 105px 60px,
      105px 90px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
  &:after {
    content: "";
    position: absolute;
    width: calc(50% - 10px);
    right: 10px;
    top: 10px;
    bottom: 10px;
    border-radius: 8px;
    background: var(--addition-bg-color) no-repeat;
    background-size: 60px 10px;
    background-image: linear-gradient(
        var(--active-page-line) 100px,
        transparent 0
      ),
      linear-gradient(var(--active-page-line) 100px, transparent 0),
      linear-gradient(var(--active-page-line) 100px, transparent 0);
    background-position: 50% 30px, 50% 60px, 50% 90px;
    transform: rotateY(0deg);
    transform-origin: left center;
    animation: ${paging} 1s linear infinite;
  }
`;
