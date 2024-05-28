import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyLibraryBooks from "../../components/MyLibraryBooks/MyLibraryBooks";
import { LibraryPageWrpr } from "./MyLibraryPage.styled";

const MyLibraryPage = () => {
  return (
    <Container>
      <LibraryPageWrpr>
        <Dashboard />
        <MyLibraryBooks />
      </LibraryPageWrpr>
    </Container>
  );
};

export default MyLibraryPage;
