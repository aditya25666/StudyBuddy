import AuthLayout from "../../components/layout/AuthLayout";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your learning journey."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;