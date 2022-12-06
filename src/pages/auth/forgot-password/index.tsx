import AuthLayout from "components/layout/AuthLayout";
import { useState } from "react";
import CheckEmailForm from "./CheckEmailForm";
import ForgotForm from "./ForgotForm";

const ForgotPassword = () => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <AuthLayout>
      {step === 1 ? (
        <ForgotForm disableSubmit={false} execute={setStep} />
      ) : (
        <CheckEmailForm disableSubmit={false} />
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
