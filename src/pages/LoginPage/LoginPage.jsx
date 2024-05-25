import Container from "../../components/Container/Container";
import AuthForm from "../../components/AuthPage/AuthPage";

const LoginPage = () => {
  return (
    <Container>
      <AuthForm mode="login" />
    </Container>
  );
};

export default LoginPage;
