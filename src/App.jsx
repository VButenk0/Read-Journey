import { Route, Routes } from "react-router-dom";
import MainLayout from "../src/components/MainLayout/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import PrivateRoute from "./routesConfig/PrivateRoute";
import PublicRoute from "./routesConfig/PublicRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentThunk, refreshThunk } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";
import { selectIsLoading, selectIsLoadingB } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLoadingB = useSelector(selectIsLoadingB);

  useEffect(() => {
    dispatch(currentThunk()).catch(() => {
      dispatch(refreshThunk());
      dispatch(currentThunk());
    });
  }, [dispatch]);

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
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
