import React, { createContext, ReactNode, useState } from "react";
import { User } from "models/User";

type Props = {
  children: ReactNode;
};

export interface AuthContextInterface {
  user: User | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

export const authContextDefaults: AuthContextInterface = {
  user: null,
  isLoading: true,
  login: () => {},
  logout: () => {},
};

export const AuthContext =
  createContext<AuthContextInterface>(authContextDefaults);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async () => {
    setIsLoading(true);
    setTimeout(() => {
      const userVal: User = {
        email: "cedric",
        phone: "66666",
      };
      setUser(userVal);
      setIsLoading(false);
    }, 1200);
  };

  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  const value = React.useMemo(
    () => ({
      user,
      isLoading,
      login,
      logout,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
