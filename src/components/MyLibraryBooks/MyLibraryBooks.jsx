import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { selectIsAuthChecked, selectLibrary } from "../../redux/selectors";
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
  const library = useSelector(selectLibrary);
  const isAuthChecked = useSelector(selectIsAuthChecked);
  const [filter, setFilter] = useState("all");

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
    if (isAuthChecked) {
      dispatch(getUserBooksThunk());
    }
  }, [dispatch, filter, isAuthChecked]);

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
            ({ id, title, author, imageUrl, totalPages, status, progress }) => (
              <BookCard
                key={id}
                id={id}
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
          {filter === "all" || filteredLibrary.length !== 0 ? (
            <p>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </p>
          ) : (
            <p>No books are in the {filter} status yet</p>
          )}
        </NoBooksWrpr>
      )}
    </LibraryWrpr>
  );
};

export default MyLibraryBooks;
