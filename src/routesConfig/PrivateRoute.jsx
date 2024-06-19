import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLogged,
  selectIsLoading,
  selectUser,
} from "../redux/selectors";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return null;
  }

  if (!isLogged || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
