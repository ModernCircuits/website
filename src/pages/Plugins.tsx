import React from "react";
import asic_dynamic_vlcd from "../img/asic/asic_dynamic_vlcd.png";
import asic_filter_vlcd from "../img/asic/asic_filter_vlcd.png";
import asic_shape_vlcd from "../img/asic/asic_shape_vlcd.png";
import asic_space_vlcd from "../img/asic/asic_space_vlcd.png";
import asic_tone_vlcd from "../img/asic/asic_tone_vlcd.png";

export const Plugins = () => {
  return (
    <div className="page-content page-plugins">
      <div className="section-plugin-preview">
        <div className="card card-primary ">
          <h4 className="center">ASIC Shape</h4>
          <hr />
          <img src={asic_shape_vlcd} alt="ASIC Shape" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h4 className="center">ASIC</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            tenetur deleniti placeat voluptatem dicta ducimus et quaerat quasi.
          </p>
        </div>
        <div className="card card-primary ">
          <h4 className="center">ASIC Tone</h4>
          <hr />
          <img src={asic_tone_vlcd} alt="ASIC Tone" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h4 className="center">ASIC Filter</h4>
          <hr />
          <img src={asic_filter_vlcd} alt="ASIC Filter" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h4 className="center">ASIC Space</h4>
          <hr />
          <img src={asic_space_vlcd} alt="ASIC Space" className="center" />
          <p className="center">High quality saturation</p>
        </div>
        <div className="card card-primary ">
          <h4 className="center">ASIC Dynamic</h4>
          <hr />
          <img src={asic_dynamic_vlcd} alt="ASIC Dynamic" className="center" />
          <p className="center">High quality saturation</p>
        </div>
      </div>
    </div>
  );
};
