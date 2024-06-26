import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Container from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import Modal from "../Modal/Modal";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { signoutThunk } from "../../redux/auth/operations";
import {
  changeBurgerMenu,
  changeLogoutModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import {
  selectBurgerMenu,
  selectIsModalOpen,
  selectUser,
} from "../../redux/selectors";
import {
  HeaderWrpr,
  LogoWrpr,
  LogoutBtn,
  StyledBurger,
  StyledNavLink,
  UserBarWrpr,
  UserNavWrpr,
  UserWrpr,
} from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const userData = useSelector(selectUser);
  const burgerMenu = useSelector(selectBurgerMenu);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const toggleBurger = () => {
    dispatch(changeBurgerMenu(true));
  };

  const handleLogout = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogoutModal(true));
  };

  return (
    <Container>
      <HeaderWrpr>
        <LogoWrpr to={"/recommended"}>
          <svg width={42} height={17}>
            <use href={sprite + "#Logo"}></use>
          </svg>
          {isDesktop && <p>Read Journey</p>}
        </LogoWrpr>

        {!isMobile && (
          <UserNavWrpr>
            <StyledNavLink to={"/recommended"}>Home</StyledNavLink>
            <StyledNavLink to={"/library"}>My library</StyledNavLink>
          </UserNavWrpr>
        )}

        <UserWrpr>
          <UserBarWrpr>
            <div>{userData.name[0]}</div>
            {isDesktop && <p>{userData.name}</p>}
          </UserBarWrpr>
          {!isMobile && <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>}
          {isMobile && (
            <button>
              <StyledBurger
                className={burgerMenu ? "open" : ""}
                onClick={toggleBurger}
              >
                <span></span>
                <span></span>
                <span></span>
              </StyledBurger>
            </button>
          )}
        </UserWrpr>
      </HeaderWrpr>
      {modalIsOpen && <Modal />}
      {burgerMenu && isMobile && <BurgerMenu />}
    </Container>
  );
};

export default Header;
