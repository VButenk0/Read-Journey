import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors.js";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return isLogged ? children : null;
};

export default PrivateRoute;
