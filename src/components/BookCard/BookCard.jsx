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
  NoImgWrpr,
  TextBtnWrpr,
} from "./BookCard.styled";
import { deleteBookThunk } from "../../redux/books/operations";

const BookCard = ({
  id,
  title,
  author,
  imageUrl,
  totalPages,
  status,
  progress,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = location.pathname;

  const handleBookInfo = () => {
    dispatch(
      changeSelectedItem({
        id,
        title,
        author,
        imageUrl,
        totalPages,
        status,
        progress,
      })
    );
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
    <BookWrpr>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title + "'s Cover"}
          width={137}
          height={208}
          onClick={handleBookInfo}
        />
      ) : (
        <NoImgWrpr onClick={handleBookInfo}>
          <svg width="50" height="50" stroke="var(--primary-text)">
            <use href={sprite + "#no-image"}></use>
          </svg>
          <p>No cover</p>
        </NoImgWrpr>
      )}
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
            <svg width="14" height="14" stroke="var(--red)">
              <use href={sprite + "#trash"}></use>
            </svg>
          </DeleteBtn>
        </TextBtnWrpr>
      )}
    </BookWrpr>
  );
};

export default BookCard;
