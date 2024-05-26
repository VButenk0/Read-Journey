import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/recommended");
    }
  }, [isLogged, navigate]);

  return !isLogged ? children : null;
};

export default PublicRoute;
