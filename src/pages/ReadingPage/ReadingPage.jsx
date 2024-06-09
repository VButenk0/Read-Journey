import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyBook from "../../components/MyBook/MyBook";
import {
  finishReadingThunk,
  getBookInfoThunk,
  startReadingThunk,
} from "../../redux/books/operations";
import { selectSelectedItem } from "../../redux/selectors";
import { ReadingPageWrpr } from "./ReadingPage.styled";
import {
  FilterInput,
  FiltersWrpr,
  InputsWrpr,
  ProgrDscrText,
  ProgressTitle,
  ProgressWrpr,
  StarIcon,
  StatIcon,
  StatIconWrpr,
  StatNTitleWrpr,
  StyledForm,
  ToApplyBtn,
} from "../../components/Dashboard/Dashboard.styled";
import Statistics from "../../components/Statistics/Statistics";
import Diary from "../../components/Diary/Diary";
import { useEffect } from "react";
import {
  changeModalOpen,
  changeReadedBookModal,
} from "../../redux/modals/modalsSlice";
import { ErrorMsg } from "../../components/AuthPage/AuthPage.styled";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("Diary");

  const selectedItem = useSelector(selectSelectedItem);
  const { id, status, progress } = selectedItem;

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

  const isActive = progress.some((p) => p.status === "active");

  const onSubmit = (data) => {
    const page = data.totalPages;
    if (isActive) {
      dispatch(finishReadingThunk({ id, page }));
    } else {
      if (page > progress[progress.length - 1].finishPage) {
        dispatch(startReadingThunk({ id, page }));
      } else {
        console.log("You can't read readed page");
      }
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

  useEffect(() => {
    dispatch(getBookInfoThunk(id));
    if (status === "done") {
      dispatch(changeModalOpen(true));
      dispatch(changeReadedBookModal(true));
    }
  }, [dispatch, id, status]);

  return (
    <Container>
      <ReadingPageWrpr>
        <Dashboard>
          <FiltersWrpr>
            <p>Start page:</p>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InputsWrpr>
                <FilterInput>
                  <label htmlFor="totalPages">Page number:</label>
                  <input
                    id="totalPages"
                    name="totalPages"
                    type="text"
                    placeholder="Enter text"
                    defaultValue={
                      progress[progress.length - 1].finishPage + 1 ||
                      progress[progress.length - 1].startPage + 1
                    }
                    {...register("totalPages")}
                  />
                  {errors.totalPages && (
                    <ErrorMsg>{errors.totalPages.message}</ErrorMsg>
                  )}
                </FilterInput>
              </InputsWrpr>
              <ToApplyBtn type="submit">
                {!isActive ? "To start" : "To stop"}
              </ToApplyBtn>
            </StyledForm>
          </FiltersWrpr>
          <ProgressWrpr>
            {status === "unread" ? (
              <ProgressTitle>Progress</ProgressTitle>
            ) : mode === "Diary" ? (
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

            {!progress.some((p) => p.finishPage) ? (
              <>
                <ProgrDscrText>
                  Here you will see when and how much you read. To record, click
                  on the red button above.
                </ProgrDscrText>
                <StarIcon>🌟</StarIcon>
              </>
            ) : mode === "Diary" ? (
              <Diary />
            ) : (
              <Statistics />
            )}
          </ProgressWrpr>
        </Dashboard>
        <MyBook />
      </ReadingPageWrpr>
    </Container>
  );
};

export default ReadingPage;
