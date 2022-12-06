import ForgotPassword from "pages/auth/forgot-password";
import LoginPage from "pages/auth/login";
import PageNotFound from "pages/not-found";
import { Route, Routes } from "react-router-dom";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AuthRouter;
