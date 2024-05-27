import { BookInfo, BookWrpr } from "./BookCard.styled";
import {
  changeAddToLibraryModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { useDispatch } from "react-redux";
import { changeSelectedItem } from "../../redux/books/booksSlice";

const BookCard = ({ id, title, author, imageUrl, totalPages }) => {
  const dispatch = useDispatch();
  const handleBookInfo = () => {
    dispatch(changeSelectedItem({ id, title, author, imageUrl, totalPages }));
    dispatch(changeModalOpen(true));
    dispatch(changeAddToLibraryModal(true));
  };
  return (
    <BookWrpr onClick={handleBookInfo}>
      <img src={imageUrl} alt={title + "'s Cover"} width={137} height={208} />
      <BookInfo>
        <p>{title}</p>
        <p>{author}</p>
      </BookInfo>
    </BookWrpr>
  );
};

export default BookCard;
