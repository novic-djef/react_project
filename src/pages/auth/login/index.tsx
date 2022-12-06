import AuthLayout from "components/layout/AuthLayout";
import LogInForm from "./LogInForm";

function LoginPage() {
  return (
    <AuthLayout>
      <LogInForm disableSubmit={true} />
    </AuthLayout>
  );
}

export default LoginPage;
