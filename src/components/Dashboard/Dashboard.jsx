import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import {
  addBookThunk,
  recommendBooksThunk,
  startReadingThunk,
} from "../../redux/books/operations";
import { selectPage } from "../../redux/selectors";
import { selectBooks } from "../../redux/selectors";
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
} from "./Dashboard.styled";

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationPage = location.pathname;

  const books = useSelector(selectBooks);
  const previewBooks = books.slice(0, 3);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    author: Yup.string(),
    page: Yup.number(),
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
      dispatch(addBookThunk(data));
    } else {
      // ADD ID OF READING BOOK
      dispatch(startReadingThunk(data));
    }
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
                <label htmlFor="page]">
                  {(locationPage === "/library" && "Number of pages:") ||
                    (locationPage === "/reading" && "Page number:")}
                </label>
                <input
                  id="page"
                  name="page"
                  type="text"
                  placeholder="Enter text"
                  {...register("page")}
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
          <p>&#128218;</p>
          <p>
            &quot;Books are <span>windows</span> to the world, and reading is a
            journey into the unknown.&quot;
          </p>
        </QuoteWrpr>
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
