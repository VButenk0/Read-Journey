import { useState } from "react";
import { useDispatch } from "react-redux";
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

const AuthForm = ({ mode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLogin = mode === "login";

  const validationSchema = Yup.object().shape({
    name: !isLogin && Yup.string().required("Name is required"),
    mail: Yup.string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const watchedFields = watch();

  const isvalid = (fieldName) => {
    return !errors[fieldName] && touchedFields[fieldName];
  };

  const onSubmit = (data) => {
    if (isLogin) {
      dispatch(signinThunk(data));
    } else {
      dispatch(signupThunk(data));
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
                <InputWrpr
                  $haserror={errors.name}
                  $isfilled={!!watchedFields.name}
                  $isvalid={isvalid("name")}
                >
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    onBlur={() => trigger("name")}
                  />
                  {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </InputWrpr>
              )}
              <InputWrpr
                $haserror={errors.mail}
                $isfilled={!!watchedFields.mail}
                $isvalid={isvalid("mail")}
              >
                <label htmlFor="mail">Mail:</label>
                <input
                  id="mail"
                  name="mail"
                  type="text"
                  placeholder="Enter your email"
                  {...register("mail")}
                  onBlur={() => trigger("mail")}
                />
                {errors.mail ? (
                  <ErrorMsg>{errors.mail.message}</ErrorMsg>
                ) : (
                  watchedFields.mail && <SuccessMsg>Mail is secure</SuccessMsg>
                )}
              </InputWrpr>
              <InputWrpr
                $haserror={errors.password}
                $isfilled={!!watchedFields.password}
                $isvalid={isvalid("password")}
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
                <svg
                  width="20"
                  height="20"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                >
                  <use
                    href={`${sprite}#${showPassword ? "eye-off" : "eye"}`}
                  ></use>
                </svg>
                {errors.password ? (
                  <ErrorMsg>{errors.password.message}</ErrorMsg>
                ) : (
                  !!watchedFields.password &&
                  isvalid("password") && (
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
