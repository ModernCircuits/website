import * as React from "react";
import { Link, Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import github from "../img/twitter.svg";

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <footer>
        <div className="center">
          <Link to="#">
            <img src={facebook} alt="Facebook" />
          </Link>
          <Link to="#">
            <img src={twitter} alt="Twitter" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link to="#">
            <img src={github} alt="GitHub" />
          </Link>
          <br />
          <Link to="impressum">Impressum</Link>
        </div>
      </footer>
    </div>
  );
};
