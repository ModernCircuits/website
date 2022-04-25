import React from "react";

import "./Impressum.css";

export const Impressum = () => {
  return (
    <div className="page-content page-impressum">
      <div className="card card-primary card-impressum">
        <div className="impressum-text ">
          <h2>Imprint</h2>
          <hr />
          <br />
          <h3>
            <b>Modern Circuits UG (haftungsbeschränkt)</b>
          </h3>
          <p>
            <b>Hochstädter Straße 23 13347 Berlin</b>
          </p>
          <p>
            Handelsregister / Trade Register: <b>HRB 219278 B</b>
          </p>
          <p>
            Gerichtsstand / Jurisdiction: <b>Berlin (Charlottenburg)</b>
          </p>
          <p>
            Steuernummer / Tax: <b>30/446/50492</b>
          </p>
          <p>
            Geschäftsführer / CEO: <b>Milan Rottinger</b>
          </p>
          <p>
            Kontakt / Contact: <b>mail@modern-circuits.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};
