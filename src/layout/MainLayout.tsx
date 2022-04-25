import * as React from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
