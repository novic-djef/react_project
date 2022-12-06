import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main className="relative z-1  flex-1 overflow-hidden">{children}</main>
  );
};

export default Main;
