import Main from "components/layout/Main";
import SideBarDesktop from "components/layout/SideBarDesktop";
import SideBarMobile from "components/layout/SideBarMobile";
import { Dashboard } from "pages/dashboard";
import Marchants from "pages/compteMarchants/marchants";
import HomePage from "pages/home";
import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Tickets from "pages/ticketsCaisse/tickets";
import TermineauxMobile from "pages/termineauxMobile/termineauxMobile";
import Operateurs from "pages/operateursMobile/operateurs";
import Parametres from "pages/parametres/parametres";
import Context from "pages/compteMarchants/context";

function AlredyConnected() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen ">
      <SideBarMobile open={sidebarOpen} set={setSidebarOpen} />
      <SideBarDesktop />
      {/* <div className="flex min-w-0  overflow-hidden"> */}
        <Main>
          <Outlet />
        </Main>
      {/* </div> */}
    </div>
  );
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AlredyConnected />}>
        <Route index element={<Dashboard />} />
        <Route path="marchants" element={<Marchants />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="pos" element={<TermineauxMobile />} />
        <Route path="operator" element={<Operateurs />} />
        <Route path="settings" element={<Parametres />} />
        <Route path="context" element={<Context />} />
        {/* products */}
        <Route path="products" element={<Outlet />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
