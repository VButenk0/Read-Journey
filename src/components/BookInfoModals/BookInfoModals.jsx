import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import noImage from "../../images/no-image.png";
import {
  selectAddToLibraryModal,
  selectSelectedItem,
} from "../../redux/selectors";
import { addRcmndBookThunk } from "../../redux/books/operations";
import { closeModals } from "../../redux/modals/modalsSlice";
import { NoImgWrpr } from "../BookCard/BookCard.styled";
import { AllInfoWrpr, SubmitBtn, TextInfoWrpr } from "./BookInfoModals.styled";

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
          <img src={noImage} alt="No Image Cover" width={111} height={72} />
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
