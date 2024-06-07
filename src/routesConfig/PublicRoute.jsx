import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  if (isLogged) {
    navigate("/recommended");
  }
  return children;
};

export default PublicRoute;
