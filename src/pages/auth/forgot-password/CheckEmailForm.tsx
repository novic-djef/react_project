import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "components/ui/Button";
import FormContainer from "components/ui/Form/FormContainer";

interface Props {
  disableSubmit: boolean;
}

const CheckEmailForm = ({ disableSubmit }: Props) => {
  return (
    <>
      <FormContainer titleForm="Email envoyé">
        <p className="text-center">
          Nous avons envoyé une instruction de récupération de mot de passe à
          votre adresse e-mail
        </p>
        <PrimaryButton
          type="submit"
          onClick={(e) => null}
          isLoading={false}
          className="my-5"
        >
          <span className="ml-3">Renvoyer le mail</span>
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

export default CheckEmailForm;
