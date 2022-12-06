import { useState } from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "components/ui/Form/TextField";
import { PrimaryButton } from "components/ui/Button";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FormContainer from "components/ui/Form/FormContainer";

interface Props {
  disableSubmit: boolean;
  execute?: any;
}

const ForgotForm = ({ disableSubmit, execute }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = form.handleSubmit((formData) => {
    setIsLoading(true);
    const { email } = formData;
    if (email) {
      setTimeout(() => execute(2), 1200);
    }
  });

  return (
    <>
      <FormContainer
        titleForm="Mot de passe oublié"
        descriptionForm=" Reinitialiser votre mot de passe"
      >
        <FormProvider {...form}>
          <TextField
            icon={EnvelopeIcon}
            label="Email"
            type="email"
            name="email"
            autoComplete="off"
            disabled={false}
            autoFocus
            rules={{
              required: {
                message: "Ce champ est obligatoire",
                value: true,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse e-mail invalide",
              },
            }}
          />
        </FormProvider>
        <PrimaryButton
          type="submit"
          onClick={(e) => {
            submit(e);
          }}
          isLoading={isLoading}
          className="my-5"
        >
          <span className="ml-3">Reinitialiser</span>
        </PrimaryButton>
      </FormContainer>

      <div className="flex-col text-center pt-5">
        <div className="mt-2 text-sm text-gray-600 ">
          Déjà un compte?
          <Link
            to="/#"
            className="ml-2 underline cursor-pointer hover:text-primary/60"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotForm;
