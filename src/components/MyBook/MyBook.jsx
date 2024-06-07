import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { selectSelectedItem } from "../../redux/selectors";
import {
  BookWrpr,
  MyBookDscr,
  NoImgMyBook,
  ReadingWrpr,
  RecStopIcon,
  Title,
} from "./MyBook.styled";

const MyBook = () => {
  const selectedBook = useSelector(selectSelectedItem);
  const { title, author, imageUrl, progress } = selectedBook;

  const isActive = progress.some((p) => p.status === "active");

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
        <RecStopIcon width="50" height="50">
          {!isActive ? (
            <use href={sprite + "#start-rec"}></use>
          ) : (
            <use href={sprite + "#stop-rec"}></use>
          )}
        </RecStopIcon>
      </BookWrpr>
    </ReadingWrpr>
  );
};

export default MyBook;
