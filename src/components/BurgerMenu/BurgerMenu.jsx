import { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";
import sprite from "../../assets/sprite.svg";
import { closeModals } from "../../redux/modals/modalsSlice";
import { selectBurgerMenu } from "../../redux/selectors";
import { BtnClose, Overlay } from "../Modal/Modal.styled";
import { StyledNavLink } from "../Header/Header.styled";
import { BurgerMenuWrpr, NavLinksWrpr } from "./BurgerMenu.styled";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const burgerMenu = useSelector(selectBurgerMenu);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";

    dispatch(closeModals());
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onBackdropClick}>
        <Fade in={burgerMenu} timeout={700}>
          <BurgerMenuWrpr>
            <NavLinksWrpr>
              <StyledNavLink to={"/recommended"}>Home</StyledNavLink>
              <StyledNavLink to={"/library"}>My library</StyledNavLink>
            </NavLinksWrpr>
            <BtnClose type="button" onClick={closeModal}>
              <svg width={22} height={22}>
                <use href={sprite + "#x"} />
              </svg>
            </BtnClose>
          </BurgerMenuWrpr>
        </Fade>
      </Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default BurgerMenu;
