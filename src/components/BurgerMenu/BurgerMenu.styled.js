import styled from "styled-components";

export const BurgerMenuWrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 100vh;

  position: fixed;
  right: 0;

  background-color: var(--addition-bg-color);
`;

export const NavLinksWrpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
