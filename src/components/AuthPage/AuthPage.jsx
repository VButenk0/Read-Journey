import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import phone from "../../images/iPhone 15 Black.png";
import sprite from "../../assets/sprite.svg";
import Container from "../Container/Container";
import { signinThunk, signupThunk } from "../../redux/auth/operations";
import {
  AuthPageWrpr,
  AuthTitle,
  BlockWrpr,
  BtnRlctWrpr,
  InputWrpr,
  InputsWrpr,
  LogoWrpr,
  RelocateLink,
  SubmitBtn,
  ErrorMsg,
  SuccessMsg,
} from "./AuthPage.styled";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/selectors";

const AuthForm = ({ mode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";

  const validationSchema = Yup.object().shape({
    name: !isLogin && Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const watchedFields = watch();

  const isFieldValid = (fieldName) => {
    return (
      dirtyFields[fieldName] &&
      !errors[fieldName] &&
      fieldName === "password" &&
      watchedFields[fieldName]?.length >= 7
    );
  };

  const onSubmit = (data) => {
    console.log(data);
    if (isLogin) {
      dispatch(signinThunk(data)).then(() => {
        console.log(`Welcome back, ${user.name}!`);
        navigate("/recommended");
      });
    } else {
      dispatch(signupThunk(data)).then(() => {
        console.log(`Welcome, ${user.name}!`);
        navigate("/recommended");
      });
    }
  };

  return (
    <Container>
      <AuthPageWrpr>
        <BlockWrpr>
          <LogoWrpr>
            <svg width="42" height="17">
              <use href={`${sprite}#Logo`}></use>
            </svg>
            <p>Read Journey</p>
          </LogoWrpr>
          <AuthTitle>
            Expand your mind, reading <span>a book</span>
          </AuthTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputsWrpr>
              {!isLogin && (
                <InputWrpr $haserror={!!errors.name}>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    onBlur={() => trigger("name")}
                  />
                  {errors.name && (
                    <svg width="20" height="20">
                      <use href={sprite + "#error"}></use>
                    </svg>
                  )}
                  {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </InputWrpr>
              )}
              <InputWrpr $haserror={!!errors.email}>
                <label htmlFor="email">Mail:</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                  onBlur={() => trigger("email")}
                />
                {errors.mail && (
                  <svg width="20" height="20">
                    <use href={sprite + "#error"}></use>
                  </svg>
                )}
                {errors.mail && <ErrorMsg>{errors.email.message}</ErrorMsg>}
              </InputWrpr>
              <InputWrpr
                $haserror={!!errors.password}
                $isfilled={!!watchedFields.password}
                $isvalid={isFieldValid("password")}
              >
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  onBlur={() => trigger("password")}
                />
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <use href={sprite + "#eye-off"}></use>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <use href={sprite + "#eye"}></use>
                  </svg>
                )}
                {errors.password && (
                  <svg width="20" height="20">
                    <use href={sprite + "#error"}></use>
                  </svg>
                )}
                {isFieldValid("password") && watchedFields.password && (
                  <svg width="20" height="20">
                    <use href={sprite + "#correct"}></use>
                  </svg>
                )}
                {errors.password ? (
                  <ErrorMsg>{errors.password.message}</ErrorMsg>
                ) : (
                  watchedFields.password &&
                  isFieldValid("password") && (
                    <SuccessMsg>Password is secure</SuccessMsg>
                  )
                )}
              </InputWrpr>
            </InputsWrpr>
            <BtnRlctWrpr>
              <SubmitBtn type="submit">
                {isLogin ? "Log In" : "Registration"}
              </SubmitBtn>
              <RelocateLink href={isLogin ? "/register" : "/login"}>
                {isLogin
                  ? "Don’t have an account?"
                  : "Already have an account?"}
              </RelocateLink>
            </BtnRlctWrpr>
          </form>
        </BlockWrpr>
        <BlockWrpr className="rightBlock">
          <img src={phone} alt="Phone App" width={405} height={656} />
        </BlockWrpr>
      </AuthPageWrpr>
    </Container>
  );
};

export default AuthForm;
