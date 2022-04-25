import * as React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export const Login = (): JSX.Element => {
  return (
    <div className="page-content page-login">
      <div className="card card-primary card-login-form">
        <div>
          <h2 className="card-heading center">Login</h2>
          <hr />
        </div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            New here?{" "}
            <Link to="/register">
              <b>Register now!</b>
            </Link>
          </p>
          <button>
            <Link to="/user">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
