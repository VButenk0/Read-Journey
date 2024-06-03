import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { selectSelectedItem } from "../../redux/selectors";
import {
  BookWrpr,
  MyBookDscr,
  NoImgMyBook,
  ReadingWrpr,
  Title,
} from "./MyBook.styled";

const MyBook = () => {
  const selectedBook = useSelector(selectSelectedItem);
  const { title, author, imageUrl, status } = selectedBook;

  const inProgress = status === "in-progress";

  return (
    <ReadingWrpr>
      <Title>My reading</Title>
      <BookWrpr>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title + "'s Cover"}
            width={224}
            height={340}
          />
        ) : (
          <NoImgMyBook>
            <svg width="100" height="100" stroke="var(--primary-text)">
              <use href={sprite + "#no-image"}></use>
            </svg>
            <p>No cover</p>
          </NoImgMyBook>
        )}
        <MyBookDscr>
          <p>{title}</p>
          <p>{author}</p>
        </MyBookDscr>
        {!inProgress ? (
          <svg width="50" height="50">
            <use href={sprite + "#start-rec"}></use>
          </svg>
        ) : (
          <svg width="50" height="50">
            <use href={sprite + "#stop-rec"}></use>
          </svg>
        )}
      </BookWrpr>
    </ReadingWrpr>
  );
};

export default MyBook;
