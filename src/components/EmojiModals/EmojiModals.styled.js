import styled from "styled-components";

export const EmojiModalWrpr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 342px;
  padding: 50px;
`;

export const Emoji = styled.p`
  font-size: 68px;

  padding-bottom: 32px;
`;

export const Title = styled.p`
  font-family: "Gilroy Bold";
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.4px;

  padding-bottom: 14px;
`;

export const MainText = styled.p`
  color: var(--secondary-text);
  text-align: center;

  width: 242px;
  text-align: center;

  span {
    color: var(--primary-text);
  }
`;
