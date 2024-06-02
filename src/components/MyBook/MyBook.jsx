import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { selectSelectedItem } from "../../redux/selectors";
import { ReadingWrpr, Title } from "./MyBook.styled";

const MyBook = () => {
  const selectedBook = useSelector(selectSelectedItem);
  const { title, author, imageUrl } = selectedBook;

  return (
    <ReadingWrpr>
      <Title>My reading</Title>
      <div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title + "'s Cover"}
            width={224}
            height={340}
          />
        ) : (
          <div>
            <svg width="100" height="100" stroke="var(--primary-text)">
              <use href={sprite + "#no-image"}></use>
            </svg>
            <p>No cover</p>
          </div>
        )}
        <div>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        {selectedBook ? (
          <svg width="24" height="24">
            <use href={sprite + "#start-rec"}></use>
          </svg>
        ) : (
          <svg width="24" height="24">
            <use href={sprite + "#stop-rec"}></use>
          </svg>
        )}
      </div>
    </ReadingWrpr>
  );
};

export default MyBook;
