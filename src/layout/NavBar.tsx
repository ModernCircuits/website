import * as React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo512.png";
import cart from "../img/icons/cart.svg";
import user from "../img/icons/user.svg";

import "./NavBar.css";

export const NavBar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="modern circuits" className="logo" />
          </Link>
          <br />
          <h3 className="center">Modern Circuits</h3>
          <h6 className="center">Professional audio technology</h6>
        </div>
        <div className="nav-links">
          <Link to="plugins">Plugins</Link>
          <Link to="about">About Us</Link>
          <Link to="support">Support</Link>
          <Link to="#">
            <img src={cart} alt="Shopping Cart" />
          </Link>
          <Link to="#">
            <img src={user} alt="User Account" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
