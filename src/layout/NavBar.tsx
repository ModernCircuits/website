import * as React from "react";
import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <div className="container">
          <Link to="/">
            <img
              src="https://modern-circuits.com/static/logo512.png"
              alt="modern circuits"
              className="logo"
            />
          </Link>
          <div className="menu">
            <Link to="plugins">Plugins</Link>
            <Link to="about">About Us</Link>
            <Link to="support">Support</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
