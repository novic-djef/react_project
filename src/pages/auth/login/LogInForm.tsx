import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "components/ui/Form/TextField";
import { PrimaryButton } from "components/ui/Button";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FormContainer from "components/ui/Form/FormContainer";
import useAuth from "utilities/hooks/useAuth";

interface Props {
  disableSubmit: boolean;
}

const LogInForm = ({ disableSubmit }: Props) => {
  const { signIn } = useAuth();
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
      setTimeout(signIn, 1200);
    }
  });

  return (
    <>
      <FormContainer
        titleForm="Espace de connexion"
        descriptionForm="Se connecter via e-mail"
      >
        <FormProvider {...form}>
          <TextField
            icon={EnvelopeIcon}
            label="Email"
            type="email"
            name="email"
            autoComplete="off"
            disabled={isLoading}
            autoFocus
            rules={{
              required: {
                message: "Ce champ est obligatoire",
                value: true,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }}
          />
          <br />
          <TextField
            label="Mot de passe"
            type="password"
            name="password"
            autoComplete="off"
            disabled={isLoading}
            rules={{
              required: {
                message: "Ce champ est obligatoire",
                value: true,
              },
            }}
          />
        </FormProvider>
        <PrimaryButton
          type="submit"
          onClick={(e) => submit(e)}
          isLoading={isLoading}
          className="my-5"
        >
          <span className="ml-3">Se connecter</span>
        </PrimaryButton>
      </FormContainer>

      <div className="flex-col text-center pt-5">
        <Link
          to="/forgot-password"
          className=" text-center mt-2 -mb-2 text-sm text-gray-600 underline cursor-pointer hover:text-primary/60"
        >
          Mot de passe oublié?
        </Link>
        <div className="mt-2 text-sm text-gray-600 ">
          Pas de compte chez nous?
          <Link
            to="/#"
            className="ml-2 underline cursor-pointer hover:text-primary/60"
          >
            Nous rejoindre
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
