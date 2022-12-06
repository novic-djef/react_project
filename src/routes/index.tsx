import Loading from "components/shared/Loading";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

function Routes() {
  const { user, isLoading } = useContext(AuthContext);

  return <>{isLoading ? <Loading /> : user ? <AppRouter /> : <AuthRouter />}</>;
}

export default Routes;
