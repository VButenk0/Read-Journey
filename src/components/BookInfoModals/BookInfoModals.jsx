import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import {
  selectAddToLibraryModal,
  selectSelectedItem,
} from "../../redux/selectors";
import {
  addRcmndBookThunk,
  startReadingThunk,
} from "../../redux/books/operations";
import { AllInfoWrpr, SubmitBtn, TextInfoWrpr } from "./BookInfoModals.styled";
import { closeModals } from "../../redux/modals/modalsSlice";
import { NoImgWrpr } from "../BookCard/BookCard.styled";
import { useNavigate } from "react-router-dom";

const BookInfoModals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToLibraryModal = useSelector(selectAddToLibraryModal);
  const selectedBook = useSelector(selectSelectedItem);
  const { id, title, author, imageUrl, totalPages } = selectedBook;

  const addToLibrary = () => {
    dispatch(addRcmndBookThunk(id))
      .then(() => {
        dispatch(closeModals());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const startReading = () => {
    dispatch(closeModals());
    navigate("/reading");
  };

  return (
    <AllInfoWrpr>
      {imageUrl ? (
        <img src={imageUrl} alt={title + "'s Cover"} width={153} height={233} />
      ) : (
        <NoImgWrpr>
          <svg width="50" height="50" stroke="var(--primary-text)">
            <use href={sprite + "#no-image"}></use>
          </svg>
          <p>No cover</p>
        </NoImgWrpr>
      )}
      <TextInfoWrpr>
        <p>{title}</p>
        <p>{author}</p>
        <p>{totalPages + " pages"}</p>
      </TextInfoWrpr>
      <SubmitBtn onClick={addToLibraryModal ? addToLibrary : startReading}>
        {addToLibraryModal ? "Add to library" : "Start reading"}
      </SubmitBtn>
    </AllInfoWrpr>
  );
};

export default BookInfoModals;
