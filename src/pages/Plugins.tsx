import React from "react";

import asic_dynamic_vlcd from "../img/asic/asic_dynamic_vlcd.png";
import asic_filter_vlcd from "../img/asic/asic_filter_vlcd.png";
import asic_shape_vlcd from "../img/asic/asic_shape_vlcd.png";
import asic_space_vlcd from "../img/asic/asic_space_vlcd.png";
import asic_tone_vlcd from "../img/asic/asic_tone_vlcd.png";
import asic_dynamic_logo from "../img/asic/asic_dynamic_logo.png";
import asic_filter_logo from "../img/asic/asic_filter_logo.png";
import asic_shape_logo from "../img/asic/asic_shape_logo.png";
import asic_space_logo from "../img/asic/asic_space_logo.png";
import asic_tone_logo from "../img/asic/asic_tone_logo.png";

import "./Plugins.css";

export const Plugins = () => {
  return (
    <div className="page-content page-plugins">
      <div className="section-plugin-preview">
        <div className="card card-primary ">
          <h3 className="center">ASIC Shape</h3>
          <hr />
          <img src={asic_shape_vlcd} alt="ASIC Shape" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h3 className="center">ASIC</h3>
          <hr />
          <p>
            Designed for outstanding productions, great sound and a fast
            workflow. Five high-quality audio effects that work as VST3,
            AudioUnit and AAX in almost any DAW.
          </p>
          <div className="center">
            <img src={asic_shape_logo} alt="ASIC Shape" />
            <img src={asic_filter_logo} alt="ASIC Filter" />
            <img src={asic_space_logo} alt="ASIC Space" />
            <img src={asic_dynamic_logo} alt="ASIC Dynamic" />
            <img src={asic_tone_logo} alt="ASIC Tone" />
          </div>
          <p>$219 Single Payment</p>
          <p>$6/Month subscription</p>
        </div>
        <div className="card card-primary ">
          <h3 className="center">ASIC Tone</h3>
          <hr />
          <img src={asic_tone_vlcd} alt="ASIC Tone" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h3 className="center">ASIC Filter</h3>
          <hr />
          <img src={asic_filter_vlcd} alt="ASIC Filter" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h3 className="center">ASIC Space</h3>
          <hr />
          <img src={asic_space_vlcd} alt="ASIC Space" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h3 className="center">ASIC Dynamic</h3>
          <hr />
          <img src={asic_dynamic_vlcd} alt="ASIC Dynamic" className="center" />
          <p className="center">High quality saturation</p>
        </div>
      </div>
    </div>
  );
};
