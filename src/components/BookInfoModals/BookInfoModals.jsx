import { useDispatch, useSelector } from "react-redux";
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

const BookInfoModals = () => {
  const dispatch = useDispatch();
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
    let page = 1;
    dispatch(startReadingThunk(id, page));
  };

  return (
    <AllInfoWrpr>
      <img src={imageUrl} alt={title + "'s Cover"} width={153} height={233} />
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
