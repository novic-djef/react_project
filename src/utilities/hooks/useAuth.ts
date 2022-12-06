import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

function useAuth() {
  const { login, logout } = useContext(AuthContext);

  const signIn = async () => {
    login();
  };

  const handleSignOut = () => {
    logout();
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    signIn,
    signOut,
  };
}

export default useAuth;
