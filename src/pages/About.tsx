import React from "react";

import milan from "../img/milan.jpg";
import tobias from "../img/tobias.jpg";
import lukas from "../img/lukas.jpg";

import "./About.css";

export const About = () => {
  return (
    <div className="page-content page-about">
      <div className="card card-primary card-person card-milan">
        <img src={milan} alt="Milan Rottinger" className="center" />
        <h4>Milan Rottinger</h4>
        <h5>CEO</h5>
        <p>Sounddesigner, studio-musician and expert in recording technology</p>
      </div>
      <div className="card card-primary card-person card-tobias">
        <img src={tobias} alt="Tobias Hienzsch" className="center" />
        <h4>Tobias Hienzsch</h4>
        <h5>CTO</h5>
        <p>Tech developer and expert in digital networking and circuits</p>
      </div>
      <div className="card card-primary card-person card-lukas">
        <img src={lukas} alt="Lukas Kähler" className="center" />
        <h4>Lukas Kähler</h4>
        <h5>CSO</h5>
        <p>
          Music producer, multi-instrumentalist and expert in DSP programming
        </p>
      </div>
    </div>
  );
};
