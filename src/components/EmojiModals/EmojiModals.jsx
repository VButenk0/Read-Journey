import { useLocation } from "react-router-dom";
import { Emoji, EmojiModalWrpr, MainText, Title } from "./EmojiModals.styled";

const EmojiModals = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <EmojiModalWrpr>
      {page === "/reading" ? <Emoji>📚</Emoji> : <Emoji>👍</Emoji>}
      {page === "/reading" ? (
        <Title>The book is read</Title>
      ) : (
        <Title>Good job</Title>
      )}
      {page === "/library" ? (
        <MainText>
          Your book is now in <span>the library!</span> The joy knows no bounds
          and now you can start your training
        </MainText>
      ) : (
        <MainText>
          It was an <span>exciting journey</span>, where each page revealed new
          horizons, and the characters became inseparable friends.
        </MainText>
      )}
    </EmojiModalWrpr>
  );
};

export default EmojiModals;
