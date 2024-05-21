import { Route, Routes } from "react-router-dom";
import MainLayout from "../src/components/MainLayout/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/register"
            element={
              // <PublicRoute>
              <RegisterPage />
              // </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              // <PublicRoute>
              <LoginPage />
              // </PublicRoute>
            }
          />
          <Route
            path="/recommended"
            element={
              // <PrivateRoute>
              <RecommendedPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              // <PrivateRoute>
              <MyLibraryPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              // <PrivateRoute>
              <ReadingPage />
              // </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
