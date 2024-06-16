import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import noImage from "../../images/no-image.png";
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
            <img src={noImage} alt="No Image Cover" width={174} height={112} />
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
