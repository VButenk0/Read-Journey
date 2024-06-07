import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors.js";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  if (isLogged) {
    return children;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
