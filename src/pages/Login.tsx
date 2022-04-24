import * as React from "react";

import "./Login.css";

export const Login = (): JSX.Element => {
  return (
    <div className="page-content page-support">
      <div className="card card-primary card-login-form">
        <h2 className="center">Login</h2>
        <hr />
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
