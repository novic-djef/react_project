import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  titleForm: string;
  descriptionForm?: string;
}

const FormContainer = ({ children, titleForm, descriptionForm }: Props) => {
  return (
    <div className="flex-1 w-full mt-8  p-14 pb-5 bg-white z-10 shadow">
      <div className="mb-8">
        <h3 className="mb-1 text-3xl text-center">{titleForm}</h3>
      </div>
      {descriptionForm && (
        <div className="my-5 text-center border-b">
          <div className="inline-block px-2 leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
            {descriptionForm}
          </div>
        </div>
      )}

      <div className="max-w-xs mx-auto">{children}</div>
    </div>
  );
};

export default FormContainer;
