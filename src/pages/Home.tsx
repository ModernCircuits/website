import React from "react";
import zentrale_logo from "../img/zentrale_logo.png";

export const Home = () => {
  return (
    <div>
      <div className="page-content page-home">
        <div className="card card-primary page-home-welcome section">
          A warm welcome to modern circuits from berlin wedding. We develop and
          manufacture professional audio technology in knobs and code.
        </div>
      </div>
      <div className="section-main-zentrale">
        <div className="section-main-zentrale-left">
          <div className="section">
            <h2>Zentrale</h2>
          </div>
          <div className="section">
            <p>
              The fastest way to get modern circuits into your project. Manage
              and download your licences. For PC, Mac and Linux
            </p>
          </div>
        </div>
        <img src={zentrale_logo} alt="Zentrale" className="center" />
      </div>
    </div>
  );
};