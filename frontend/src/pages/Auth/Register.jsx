import AuthLayout from "../../components/layout/AuthLayout";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start your AI-powered learning journey today."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;