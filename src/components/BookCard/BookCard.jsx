import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import {
  changeAddToLibraryModal,
  changeModalOpen,
  changeStartReadingModal,
} from "../../redux/modals/modalsSlice";
import { changeSelectedItem } from "../../redux/books/booksSlice";
import {
  BookInfo,
  BookWrpr,
  DeleteBtn,
  LibBookInfo,
  TextBtnWrpr,
} from "./BookCard.styled";
import { deleteBookThunk } from "../../redux/books/operations";

const BookCard = ({ id, title, author, imageUrl, totalPages }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = location.pathname;

  const handleBookInfo = () => {
    dispatch(changeSelectedItem({ id, title, author, imageUrl, totalPages }));
    dispatch(changeModalOpen(true));
    if (page === "/recommended") {
      dispatch(changeAddToLibraryModal(true));
    } else {
      dispatch(changeStartReadingModal(true));
    }
  };

  const handleDelete = () => {
    dispatch(deleteBookThunk(id));
  };
  return (
    <BookWrpr onClick={handleBookInfo}>
      <img src={imageUrl} alt={title + "'s Cover"} width={137} height={208} />
      {page === "/recommended" ? (
        <BookInfo>
          <p>{title}</p>
          <p>{author}</p>
        </BookInfo>
      ) : (
        <TextBtnWrpr>
          <LibBookInfo>
            <p>{title}</p>
            <p>{author}</p>
          </LibBookInfo>
          <DeleteBtn onClick={handleDelete}>
            <svg width="14" height="14">
              <use href={sprite + "#trash"}></use>
            </svg>
          </DeleteBtn>
        </TextBtnWrpr>
      )}
    </BookWrpr>
  );
};

export default BookCard;
