import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyLibraryBooks from "../../components/MyLibraryBooks/MyLibraryBooks";
import {
  changeAddedBookModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { addBookThunk } from "../../redux/books/operations";
import { selectBooks } from "../../redux/selectors";
import { LibraryPageWrpr } from "./MyLibraryPage.styled";
import {
  BookCard,
  BookInfo,
  FilterInput,
  FiltersWrpr,
  InputsWrpr,
  InstructionWrpr,
  PreviewBooksWrpr,
  StyledForm,
  StyledLink,
  ToApplyBtn,
} from "../../components/Dashboard/Dashboard.styled";

const MyLibraryPage = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const previewBooks = books.slice(0, 3);

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

  const onSubmit = (data) => {
    dispatch(addBookThunk(data)).then(() => {
      dispatch(changeModalOpen(true));
      dispatch(changeAddedBookModal(true));
    });
  };

  return (
    <Container>
      <LibraryPageWrpr>
        <Dashboard>
          <FiltersWrpr>
            <p>Create your library:</p>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InputsWrpr>
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
                <FilterInput>
                  <label htmlFor="totalPages">Number of pages:</label>
                  <input
                    id="totalPages"
                    name="totalPages"
                    type="text"
                    placeholder="Enter text"
                    {...register("totalPages")}
                  />
                  {errors.page && <p>{errors.page.message}</p>}
                </FilterInput>
              </InputsWrpr>
              <ToApplyBtn type="submit">Add book</ToApplyBtn>
            </StyledForm>
          </FiltersWrpr>
          <InstructionWrpr>
            <h2 style={{ paddingBottom: 0 }}>Recommended books</h2>
            <PreviewBooksWrpr>
              {previewBooks.map(({ id, title, author, imageUrl }) => (
                <BookCard key={id}>
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
            <StyledLink to={"/recommended"}>
              <p>Home</p>
              <svg width="24" height="24">
                <use href={sprite + "#login"}></use>
              </svg>
            </StyledLink>
          </InstructionWrpr>
        </Dashboard>
        <MyLibraryBooks />
      </LibraryPageWrpr>
    </Container>
  );
};

export default MyLibraryPage;
