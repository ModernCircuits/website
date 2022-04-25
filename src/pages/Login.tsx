import * as React from "react";

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
          <input type="text" />
          <input type="password" />
          <p>New here? Register now!</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
