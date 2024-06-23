import { useDispatch, useSelector } from "react-redux";
import { signoutThunk } from "../../redux/auth/operations";
import {
  selectAddedBookModal,
  selectLogoutModal,
  selectreadedBookModal,
} from "../../redux/selectors";
import { Emoji, EmojiModalWrpr, MainText, Title } from "./EmojiModals.styled";
import { LogoutBtn } from "../Header/Header.styled";

const EmojiModals = () => {
  const dispatch = useDispatch();
  const addedBookModal = useSelector(selectAddedBookModal);
  const readedBookModal = useSelector(selectreadedBookModal);
  const logoutModal = useSelector(selectLogoutModal);
  console.log(addedBookModal);
  console.log(readedBookModal);
  console.log(logoutModal);
  return (
    <EmojiModalWrpr>
      {readedBookModal && <Emoji>📚</Emoji>}
      {addedBookModal && <Emoji>👍</Emoji>}
      {logoutModal && <Emoji>🥺</Emoji>}
      {readedBookModal ? (
        <Title>The book is read</Title>
      ) : logoutModal ? (
        <Title>Are you leaving?</Title>
      ) : (
        <Title>Good job</Title>
      )}
      {readedBookModal ? (
        <MainText>
          It was an <span>exciting journey</span>, where each page revealed new
          horizons, and the characters became inseparable friends.
        </MainText>
      ) : logoutModal ? (
        <LogoutBtn onClick={() => dispatch(signoutThunk())}>Yes</LogoutBtn>
      ) : (
        <MainText>
          Your book is now in <span>the library!</span> The joy knows no bounds
          and now you can start your training
        </MainText>
      )}
    </EmojiModalWrpr>
  );
};

export default EmojiModals;
