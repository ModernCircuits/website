import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo512.png";

export const NavBar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="modern circuits" className="logo" />
            Modern Circuits
          </Link>
        </div>
        <div className="nav-links">
          <Link to="plugins">Plugins</Link>
          <Link to="about">About Us</Link>
          <Link to="support">Support</Link>
        </div>
      </nav>
    </header>
  );
};
