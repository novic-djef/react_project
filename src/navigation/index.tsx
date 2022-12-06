import { AuthProvider } from "context/AuthContext";
import React from "react";
import Routes from "../routes";

function Navigation() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Navigation;
