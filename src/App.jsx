import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../src/components/MainLayout/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import PrivateRoute from "./routesConfig/PrivateRoute";
import PublicRoute from "./routesConfig/PublicRoute";
import Loader from "./components/Loader/Loader";
import { currentThunk, refreshThunk } from "./redux/auth/operations";
import {
  selectIsLoading,
  selectIsLoadingB,
  selectRefreshToken,
  selectToken,
} from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLoadingB = useSelector(selectIsLoadingB);
  const token = useSelector(selectToken);
  const refreshToken = useSelector(selectRefreshToken);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          await dispatch(currentThunk()).unwrap();
        } catch {
          if (refreshToken) {
            try {
              await dispatch(refreshThunk()).unwrap();
              await dispatch(currentThunk()).unwrap();
            } catch (error) {
              console.error("Refresh token failed", error);
            }
          }
        }
      }
    };
    checkAuth();
  }, [dispatch, token, refreshToken]);

  return (
    <>
      {(isLoading || isLoadingB) && <Loader />}
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route
            path="/recommended"
            element={
              <PrivateRoute>
                <RecommendedPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <MyLibraryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute>
                <ReadingPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
