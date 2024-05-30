import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import BookCard from "../BookCard/BookCard";
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
import {
  BooksList,
  PaginationWrpr,
  RcmndBooksWrpr,
  RcmndHeader,
  Title,
} from "./RecommendedBooks.styled";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const totalPagesBooks = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const [actualPage, setActualPage] = useState(page);

  const onDecrementClick = () => {
    if (actualPage > 1) {
      dispatch(decrementRcmndPage());
      setActualPage((prevPage) => prevPage - 1);
    }
  };

  const onIncrementClick = () => {
    if (actualPage < totalPagesBooks) {
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
            <svg width="20" height="20">
              <use href={sprite + "#chevron-left"}></use>
            </svg>
          </button>
          <button
            className={page === totalPagesBooks ? "disable" : ""}
            onClick={onIncrementClick}
          >
            <svg width="20" height="20">
              <use href={sprite + "#chevron-right"}></use>
            </svg>
          </button>
        </PaginationWrpr>
      </RcmndHeader>
      <BooksList>
        {books.map(({ _id, title, author, imageUrl, totalPages }) => (
          <BookCard
            key={_id}
            id={_id}
            title={title}
            author={author}
            imageUrl={imageUrl}
            totalPages={totalPages}
          />
        ))}
      </BooksList>
    </RcmndBooksWrpr>
  );
};

export default RecommendedBooks;
