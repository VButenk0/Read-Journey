import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { selectLibrary } from "../../redux/selectors";
import {
  BooksList,
  LibHeader,
  LibraryWrpr,
  NoBooksWrpr,
  StyledSelect,
  Title,
} from "./MyLibraryBooks.styled";
import { getUserBooksThunk } from "../../redux/books/operations";

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const library = useSelector(selectLibrary);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredLibrary =
    filter === "all"
      ? library
      : library.filter((book) => book.status === filter);

  useEffect(() => {
    if (filter !== "all") {
      dispatch(getUserBooksThunk(filter));
    }
    dispatch(getUserBooksThunk());
  }, [dispatch, filter]);

  return (
    <LibraryWrpr>
      <LibHeader>
        <Title>My library</Title>
        <StyledSelect
          name="status"
          id="status"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="unread">Unread</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
          <option value="all">All books</option>
        </StyledSelect>
      </LibHeader>
      {filteredLibrary.length !== 0 ? (
        <BooksList>
          {filteredLibrary.map(
            ({
              _id,
              title,
              author,
              imageUrl,
              totalPages,
              status,
              progress,
            }) => (
              <BookCard
                key={_id}
                id={_id}
                title={title}
                author={author}
                imageUrl={imageUrl}
                totalPages={totalPages}
                status={status}
                progress={progress}
              />
            )
          )}
        </BooksList>
      ) : (
        <NoBooksWrpr>
          <p>&#128218;</p>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </NoBooksWrpr>
      )}
    </LibraryWrpr>
  );
};

export default MyLibraryBooks;
