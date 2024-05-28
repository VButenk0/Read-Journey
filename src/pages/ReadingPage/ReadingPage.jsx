import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyBook from "../../components/MyBook/MyBook";
import { ReadingPageWrpr } from "./ReadingPage.styled";

const ReadingPage = () => {
  return (
    <Container>
      <ReadingPageWrpr>
        <Dashboard />
        <MyBook />
      </ReadingPageWrpr>
    </Container>
  );
};

export default ReadingPage;
