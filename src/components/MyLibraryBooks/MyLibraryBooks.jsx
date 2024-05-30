import { useSelector } from "react-redux";
import { selectLibrary } from "../../redux/selectors";
import {
  BooksList,
  LibHeader,
  LibraryWrpr,
  Title,
} from "./MyLibraryBooks.styled";
import BookCard from "../BookCard/BookCard";

const MyLibraryBooks = () => {
  const library = useSelector(selectLibrary);

  return (
    <LibraryWrpr>
      <LibHeader>
        <Title>My library</Title>
        <select name="status" id="status" defaultValue={"all"}>
          <option value="unread">Unread</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
          <option value="all">All books</option>
        </select>
      </LibHeader>
      {library.length !== 0 ? (
        <BooksList>
          {library.map(({ _id, title, author, imageUrl }) => (
            <BookCard
              key={_id}
              id={_id}
              title={title}
              author={author}
              imageUrl={imageUrl}
            />
          ))}
        </BooksList>
      ) : (
        <div>
          <p>&#128218;</p>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      )}
    </LibraryWrpr>
  );
};

export default MyLibraryBooks;
