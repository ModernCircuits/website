import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="main-content">
        <Outlet />
      </div>
      <hr />
      <footer>
        <Link to="#">Facebook</Link>
        <Link to="#">Twitter</Link>
        <Link to="#">Instagram</Link>
        <Link to="#">GitHub</Link>
        <Link to="impressum">Impressum</Link>
      </footer>
    </div>
  );
};
