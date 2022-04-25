import * as React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export const Register = (): JSX.Element => {
  return (
    <div className="page-content page-login">
      <div className="card card-primary card-login-form">
        <div>
          <h2 className="card-heading center">Register</h2>
          <hr />
        </div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <b>Login here!</b>
            </Link>
          </p>
          <button>
            <Link to="/login">Register</Link>
          </button>
        </form>
      </div>
    </div>
  );
};
