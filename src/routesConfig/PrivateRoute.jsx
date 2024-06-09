import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged, selectIsLoading } from "../redux/selectors";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return null;
  }

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
