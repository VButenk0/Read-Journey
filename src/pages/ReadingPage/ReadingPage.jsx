import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import sprite from "../../assets/sprite.svg";
import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyBook from "../../components/MyBook/MyBook";
import Diary from "../../components/Diary/Diary";
import Statistics from "../../components/Statistics/Statistics";
import {
  finishReadingThunk,
  startReadingThunk,
} from "../../redux/books/operations";
import { selectSelectedItem } from "../../redux/selectors";
import {
  changeModalOpen,
  changeReadedBookModal,
} from "../../redux/modals/modalsSlice";
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
import { ErrorMsg } from "../../components/AuthPage/AuthPage.styled";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("Diary");
  const [isActive, setIsActive] = useState(false);

  const selectedItem = useSelector(selectSelectedItem);
  const { id, totalPages, status, progress } = selectedItem;

  const validationSchema = Yup.object().shape({
    pages: Yup.number()
      .min(1, "Page number must be at least 1")
      .max(
        totalPages,
        `Page number must be less than or equal to ${totalPages}`
      )
      .required("Page number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    if (progress) {
      const page = data.pages;
      if (isActive) {
        dispatch(finishReadingThunk({ id, page }));
        setIsActive(false);
        toast.success("You have finished reading");
      } else {
        dispatch(startReadingThunk({ id, page }));
        toast.success("You started reading");
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
    if (progress) {
      setIsActive(() => {
        if (progress.some((p) => p.status === "active")) {
          return true;
        }
        return false;
      });
    }

    if (status === "done") {
      dispatch(changeModalOpen(true));
      dispatch(changeReadedBookModal(true));
    }
  }, [dispatch, id, progress, status]);

  return (
    <Container>
      <ReadingPageWrpr>
        <Dashboard>
          <FiltersWrpr>
            <p>Start page:</p>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InputsWrpr>
                <FilterInput>
                  <label htmlFor="pages">Page number:</label>
                  <input
                    id="pages"
                    name="pages"
                    type="number"
                    placeholder="Enter text"
                    defaultValue={
                      (progress &&
                        (progress[progress.length - 1]?.finishPage + 1 ||
                          progress[progress.length - 1]?.startPage + 1)) ||
                      1
                    }
                    min={1}
                    max={totalPages}
                    {...register("pages")}
                  />
                  {errors.pages && <ErrorMsg>{errors.pages.message}</ErrorMsg>}
                </FilterInput>
              </InputsWrpr>
              <ToApplyBtn type="submit">
                {!isActive ? "To start" : "To stop"}
              </ToApplyBtn>
            </StyledForm>
          </FiltersWrpr>
          <ProgressWrpr>
            {!progress?.some((p) => p.finishPage) ? (
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

            {!progress?.some((p) => p.finishPage) ? (
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
