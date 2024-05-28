import Container from "../../components/Container/Container";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import { RcmndPageWrpr } from "./RecommendedPage.styled";

const RecommendedPage = () => {
  return (
    <Container>
      <RcmndPageWrpr>
        <Dashboard />
        <RecommendedBooks />
      </RcmndPageWrpr>
    </Container>
  );
};

export default RecommendedPage;
