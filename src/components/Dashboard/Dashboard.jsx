import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import {
  addBookThunk,
  getBookInfoThunk,
  recommendBooksThunk,
  startReadingThunk,
} from "../../redux/books/operations";
import { selectPage, selectSelectedItem } from "../../redux/selectors";
import { selectBooks } from "../../redux/selectors";
import {
  changeAddedBookModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import {
  BookCard,
  BookInfo,
  DashboardStyled,
  PreviewBooksWrpr,
  FilterInput,
  FiltersWrpr,
  InputsWrpr,
  InstructionWrpr,
  QuoteWrpr,
  StepWrpr,
  StyledForm,
  StyledLink,
  ToApplyBtn,
  ProgressWrpr,
} from "./Dashboard.styled";
import { useState } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationPage = location.pathname;

  const books = useSelector(selectBooks);
  const previewBooks = books.slice(0, 3);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  const selectedItem = useSelector(selectSelectedItem);
  const bookInfo = () => {
    const id = selectedItem.id;
    const info = dispatch(getBookInfoThunk(id));
    return info;
  };
  const status = selectedItem.status;
  const isReading = status !== "unread";
  const isReaded = status === "done";
  const [mode, setMode] = useState("Diary");

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    author: Yup.string(),
    totalPages: Yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const page = useSelector(selectPage);
  const limit = () => {
    let perPage;
    if (isMobile) {
      perPage = 2;
    } else if (isTablet) {
      perPage = 8;
    } else {
      perPage = 10;
    }
    return perPage;
  };

  const onSubmit = (data) => {
    console.log(data);

    if (locationPage === "/recommended") {
      const reqBody = { ...data, page, limit };
      dispatch(recommendBooksThunk(reqBody));
    } else if (locationPage === "/library") {
      dispatch(addBookThunk(data)).then(() => {
        dispatch(changeModalOpen(true));
        dispatch(changeAddedBookModal(true));
      });
    } else {
      // ADD ID OF READING BOOK
      dispatch(startReadingThunk(data));
    }
  };

  const toggleMode = () => {
    setMode((prevState) => {
      if (prevState === "Diary") {
        prevState = "Statistics";
      } else {
        prevState = "Diary";
      }
    });
  };

  return (
    <DashboardStyled>
      <FiltersWrpr>
        {(locationPage === "/recommended" && <p>Filters:</p>) ||
          (locationPage === "/library" && <p>Create your library:</p>) ||
          (locationPage === "/reading" && <p>Start page:</p>)}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputsWrpr>
            {locationPage != "/reading" && (
              <>
                <FilterInput>
                  <label htmlFor="title">Book title:</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter text"
                    {...register("title")}
                  />
                  {errors.title && <p>{errors.title.message}</p>}
                </FilterInput>
                <FilterInput>
                  <label htmlFor="author">The author:</label>
                  <input
                    id="author"
                    name="author"
                    type="text"
                    placeholder="Enter text"
                    {...register("author")}
                  />
                  {errors.author && <p>{errors.author.message}</p>}
                </FilterInput>
              </>
            )}
            {locationPage != "/recommended" && (
              <FilterInput>
                <label htmlFor="totalPages">
                  {(locationPage === "/library" && "Number of pages:") ||
                    (locationPage === "/reading" && "Page number:")}
                </label>
                <input
                  id="totalPages"
                  name="totalPages"
                  type="text"
                  placeholder="Enter text"
                  {...register("totalPages")}
                />
                {errors.page && <p>{errors.page.message}</p>}
              </FilterInput>
            )}
          </InputsWrpr>
          <ToApplyBtn type="submit">To apply</ToApplyBtn>
        </StyledForm>
      </FiltersWrpr>
      {locationPage != "/reading" && (
        <InstructionWrpr>
          {locationPage === "/recommended" ? (
            <h2>Start your workout</h2>
          ) : (
            <h2>Recommended books</h2>
          )}
          {locationPage === "/recommended" ? (
            <>
              <StepWrpr>
                <div>1</div>
                <p>
                  Create a personal library:{" "}
                  <span>add the books you intend to read to it.</span>
                </p>
              </StepWrpr>
              <StepWrpr>
                <div>2</div>
                <p>
                  Create your first workout:{" "}
                  <span>define a goal, choose a period, start training.</span>
                </p>
              </StepWrpr>
            </>
          ) : (
            <PreviewBooksWrpr>
              {previewBooks.map(({ _id, title, author, imageUrl }) => (
                <BookCard key={_id}>
                  <img
                    src={imageUrl}
                    alt={title + "'s Cover"}
                    width={71}
                    height={107}
                  />
                  <BookInfo>
                    <p>{title}</p>
                    <p>{author}</p>
                  </BookInfo>
                </BookCard>
              ))}
            </PreviewBooksWrpr>
          )}
          <StyledLink
            to={locationPage === "/recommended" ? "/library" : "/recommended"}
          >
            {locationPage === "/recommended" ? <p>My library</p> : <p>Home</p>}
            <svg width="24" height="24">
              <use href={sprite + "#login"}></use>
            </svg>
          </StyledLink>
        </InstructionWrpr>
      )}
      {locationPage === "/recommended" && (
        <QuoteWrpr>
          <p>📚</p>
          <p>
            &quot;Books are <span>windows</span> to the world, and reading is a
            journey into the unknown.&quot;
          </p>
        </QuoteWrpr>
      )}
      {locationPage === "/reading" && (
        <ProgressWrpr>
          <h2>
            {(!isReading && "Progress") || mode === "Diary" ? (
              <div>
                <h2>Diary</h2>
                <div>
                  <svg width="20" height="20" onClick={toggleMode}>
                    <use href={sprite + "#hourglass"}></use>
                  </svg>
                  <svg width="20" height="20" onClick={toggleMode}>
                    <use href={sprite + "#pie-chart"}></use>
                  </svg>
                </div>
              </div>
            ) : (
              <div>
                <h2>Statistics</h2>
                <div>
                  <svg width="20" height="20" onClick={toggleMode}>
                    <use href={sprite + "#hourglass"}></use>
                  </svg>
                  <svg width="20" height="20" onClick={toggleMode}>
                    <use href={sprite + "#pie-chart"}></use>
                  </svg>
                </div>
              </div>
            )}
          </h2>
          {(!isReading && (
            <>
              <p>
                Here you will see when and how much you read. To record, click
                on the red button above.
              </p>
              <p>🌟</p>
            </>
          )) ||
          mode === "Diary" ? (
            <div>??.??.???? ??pages</div>
          ) : (
            <div>
              <p>
                Each page, each chapter is a new round of knowledge, a new step
                towards understanding. By rewriting statistics, we create our
                own reading history.
              </p>
              <div>
                <div>%</div>
                <p>%</p>
                <p>pages read</p>
              </div>
            </div>
          )}
        </ProgressWrpr>
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
