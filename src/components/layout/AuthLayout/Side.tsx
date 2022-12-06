import React, { ReactNode } from "react";
import { APP_NAME } from "constants/app.constant";

interface Props {
  children: ReactNode;
  content?: any;
}

const Side = ({ children, content, ...rest }: Props) => {
  return (
    <div className="grid lg:grid-cols-3 h-full">
      <div className="bg-no-repeat bg-cover bg-[#046db5] py-6 px-16 flex-col justify-between hidden lg:flex">
        <p className="text-lg text-white ">Logo</p>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="text-white">
              <div className="text-3xl">Mobile Payment Admin</div>
              <span className="opacity-80">
                Le moyen de paiement le plus sécurisé
              </span>
            </div>
          </div>
          <p className="text-lg text-white opacity-80">
            Bienvenue dans l'espace d'administration de Payment Mobile, vous
            aurez accès, une fois connecté à :
            <br />
            <br />* Une liste exhaustive des dernières transactions
            <br />* Une liste exhaustive des tickets de caisse générés par les
            marchants
          </p>
        </div>
        <span className="text-white">
          Copyright &copy; {`${new Date().getFullYear()}`}{" "}
          <span className="font-semibold">{`${APP_NAME}`}</span>{" "}
        </span>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center bg-primary/5 dark:bg-gray-800">
        <div className="xl:min-w-[450px] px-8">
          <div className="mb-8">{content}</div>
          {children ?? null}
        </div>
      </div>
    </div>
  );
};

export default Side;
