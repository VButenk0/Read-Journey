import Container from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  HeaderWrpr,
  LogoWrpr,
  LogoutBtn,
  StyledNavLink,
  UserBarWrpr,
  UserNavWrpr,
  UserWrpr,
} from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen, selectUser } from "../../redux/selectors";
import Modal from "../Modal/Modal";
import { signoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);
  const userData = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(signoutThunk());
  };

  return (
    <Container>
      <HeaderWrpr>
        {/* Logo */}
        <LogoWrpr to={"/recommended"}>
          <svg width={42} height={17}>
            <use href={sprite + "#Logo"}></use>
          </svg>
          <p>Read Journey</p>
        </LogoWrpr>

        {/* UserNav */}
        <UserNavWrpr>
          <StyledNavLink to={"/recommended"}>Home</StyledNavLink>
          <StyledNavLink to={"/library"}>My library</StyledNavLink>
        </UserNavWrpr>

        <UserWrpr>
          {/* UserBar */}
          <UserBarWrpr>
            <div>{userData.name[0]}</div>
            <p>{userData.name}</p>
          </UserBarWrpr>
          {/* Logout */}
          <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
        </UserWrpr>
      </HeaderWrpr>
      {modalIsOpen && <Modal />}
    </Container>
  );
};

export default Header;
