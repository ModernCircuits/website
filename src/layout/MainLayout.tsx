import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <footer>
        <Link to="#">Facebook</Link>
        <Link to="#">Twitter</Link>
        <Link to="#">Instagram</Link>
        <Link to="#">GitHub</Link>
        <br />
        <Link to="impressum">Impressum</Link>
      </footer>
    </div>
  );
};
