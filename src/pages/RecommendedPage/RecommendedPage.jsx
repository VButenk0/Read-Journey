import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import { recommendBooksThunk } from "../../redux/books/operations";
import { selectPage } from "../../redux/selectors";
import { RcmndPageWrpr } from "./RecommendedPage.styled";
import {
  FilterInput,
  FiltersWrpr,
  InputsWrpr,
  InstructionWrpr,
  QuoteWrpr,
  StepWrpr,
  StyledForm,
  StyledLink,
  ToApplyBtn,
} from "../../components/Dashboard/Dashboard.styled";

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    author: Yup.string(),
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
    const reqBody = { ...data, page, limit };
    dispatch(recommendBooksThunk(reqBody));
  };

  return (
    <Container>
      <RcmndPageWrpr>
        <Dashboard>
          <FiltersWrpr>
            <p>Filters:</p>
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
              </InputsWrpr>
              <ToApplyBtn type="submit">To apply</ToApplyBtn>
            </StyledForm>
          </FiltersWrpr>
          <InstructionWrpr>
            <h2>Start your workout</h2>
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
            <StyledLink to={"/library"}>
              <p>My library</p>
              <svg width="24" height="24">
                <use href={sprite + "#login"}></use>
              </svg>
            </StyledLink>
          </InstructionWrpr>
          <QuoteWrpr>
            <p>📚</p>
            <p>
              &quot;Books are <span>windows</span> to the world, and reading is
              a journey into the unknown.&quot;
            </p>
          </QuoteWrpr>
        </Dashboard>
        <RecommendedBooks />
      </RcmndPageWrpr>
    </Container>
  );
};

export default RecommendedPage;
