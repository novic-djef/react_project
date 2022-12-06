import React, { ReactNode } from "react";
import Side from "./Side";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Side>{children}</Side>
    </div>
  );
};

export default AuthLayout;
