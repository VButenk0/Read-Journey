import { BookInfo, BookWrpr } from "./BookCard.styled";

const BookCard = ({ title, author, imageUrl }) => {
  return (
    <BookWrpr>
      <img src={imageUrl} alt={title + "'s Cover"} width={137} height={208} />
      <BookInfo>
        <p>{title}</p>
        <p>{author}</p>
      </BookInfo>
    </BookWrpr>
  );
};

export default BookCard;
