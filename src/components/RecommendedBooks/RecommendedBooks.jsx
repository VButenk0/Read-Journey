import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import {
  BooksList,
  PaginationWrpr,
  RcmndBooksWrpr,
  RcmndHeader,
  Title,
} from "./RecommendedBooks.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBooks,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors";
import { recommendBooksThunk } from "../../redux/books/operations";
import {
  decrementRcmndPage,
  incrementRcmndPage,
} from "../../redux/books/booksSlice";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const [actualPage, setActualPage] = useState(page);

  const onDecrementClick = () => {
    if (actualPage > 1) {
      dispatch(decrementRcmndPage());
      setActualPage((prevPage) => prevPage - 1);
    }
  };

  const onIncrementClick = () => {
    if (actualPage < totalPages) {
      dispatch(incrementRcmndPage());
      setActualPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    dispatch(recommendBooksThunk({ page: actualPage }));
  }, [dispatch, actualPage]);

  return (
    <RcmndBooksWrpr>
      <RcmndHeader>
        <Title>Recommended</Title>
        <PaginationWrpr>
          <button
            className={page === 1 ? "disable" : ""}
            onClick={onDecrementClick}
          >
            {"<"}
          </button>
          <button
            className={page === totalPages ? "disable" : ""}
            onClick={onIncrementClick}
          >
            {">"}
          </button>
        </PaginationWrpr>
      </RcmndHeader>
      <BooksList>
        {books.map(({ _id, title, author, imageUrl }) => (
          <BookCard
            key={_id}
            title={title}
            author={author}
            imageUrl={imageUrl}
          />
        ))}
      </BooksList>
    </RcmndBooksWrpr>
  );
};

export default RecommendedBooks;
