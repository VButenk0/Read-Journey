import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import sprite from "../../assets/sprite.svg";
import {
  addBookThunk,
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
  ProgressTitle,
  StatNTitleWrpr,
  StatIcon,
  StatIconWrpr,
  StarIcon,
  ProgrDscrText,
  StatisticsWrpr,
  DoughnutWrpr,
  ReadedStatWrpr,
  StatTextWrpr,
  StatBottomWrpr,
} from "./Dashboard.styled";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  const { _id, totalPages, status, progress } = selectedItem;
  const isReading = status !== "unread";
  const [mode, setMode] = useState("Diary");
  console.log(mode);

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
      dispatch(startReadingThunk(_id, data));
    }
  };

  const toggleMode = () => {
    setMode((prevState) => {
      if (prevState === "Diary") {
        return "Statistics";
      } else if (prevState === "Statistics") {
        return "Diary";
      }
    });
  };

  const getCurrentPage = () => {
    if (progress) {
      const activeProgress = progress?.find((p) => p.status === "active");
      if (activeProgress) {
        return activeProgress.startPage;
      } else {
        const lastProgress = progress[progress?.length - 1];
        return lastProgress.finishPage;
      }
    } else {
      return 0;
    }
  };

  const readed = () => {
    const actualPage = getCurrentPage();
    const readedPercentage = (actualPage / totalPages) * 100;
    return readedPercentage;
  };

  const data = {
    datasets: [
      {
        data: [readed(), 100 - readed()],
        backgroundColor: ["#30B94D", "#1F1F1F"],
        borderRadius: [50, 0],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    cutout: "80%",
    responsive: false,
    maintainAspectRatio: false,
    hover: { mode: null },
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
          <ToApplyBtn type="submit">
            {locationPage === "/recommended" && "To apply"}
            {locationPage === "/library" && "Add book"}
            {locationPage === "/reading" &&
              (!isReading ? "To start" : "To stop")}
          </ToApplyBtn>
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
          {(!isReading && <ProgressTitle>Progress</ProgressTitle>) ||
          mode === "Diary" ? (
            <StatNTitleWrpr>
              <h2>Diary</h2>
              <StatIconWrpr>
                <StatIcon
                  width="20"
                  height="20"
                  onClick={toggleMode}
                  className={mode === "Diary" && "active"}
                >
                  <use href={sprite + "#hourglass"}></use>
                </StatIcon>
                <StatIcon
                  width="20"
                  height="20"
                  onClick={toggleMode}
                  className={mode === "Statistics" && "active"}
                >
                  <use href={sprite + "#pie-chart"}></use>
                </StatIcon>
              </StatIconWrpr>
            </StatNTitleWrpr>
          ) : (
            <StatNTitleWrpr>
              <h2>Statistics</h2>
              <StatIconWrpr>
                <StatIcon
                  width="20"
                  height="20"
                  onClick={toggleMode}
                  className={mode === "Diary" && "active"}
                >
                  <use href={sprite + "#hourglass"}></use>
                </StatIcon>
                <StatIcon
                  width="20"
                  height="20"
                  onClick={toggleMode}
                  className={mode === "Statistics" && "active"}
                >
                  <use href={sprite + "#pie-chart"}></use>
                </StatIcon>
              </StatIconWrpr>
            </StatNTitleWrpr>
          )}

          {(!isReading && (
            <>
              <ProgrDscrText>
                Here you will see when and how much you read. To record, click
                on the red button above.
              </ProgrDscrText>
              <StarIcon>🌟</StarIcon>
            </>
          )) ||
          mode === "Diary" ? (
            <div>??.??.???? ??pages</div>
          ) : (
            <StatisticsWrpr>
              <p>
                Each page, each chapter is a new round of knowledge, a new step
                towards understanding. By rewriting statistics, we create our
                own reading history.
              </p>
              <ReadedStatWrpr>
                <DoughnutWrpr>
                  <Doughnut data={data} options={options} />
                  <p
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "24px",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {readed().toFixed(0)}%
                  </p>
                </DoughnutWrpr>
                <StatBottomWrpr>
                  <span />
                  <StatTextWrpr>
                    <p>{readed().toFixed(2)}%</p>
                    <p>{getCurrentPage() + " pages read"} </p>
                  </StatTextWrpr>
                </StatBottomWrpr>
              </ReadedStatWrpr>
            </StatisticsWrpr>
          )}
        </ProgressWrpr>
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
