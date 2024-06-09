import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged, selectIsLoading } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return null;
  }

  if (isLogged) {
    return <Navigate to="/recommended" replace />;
  }

  return children;
};

export default PublicRoute;
