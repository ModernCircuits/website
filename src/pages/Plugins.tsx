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

interface PluginPreviewProps {
  name: string;
  description: string;
  img: string;
}

const PluginPreview = (props: PluginPreviewProps) => {
  return (
    <div className="card card-primary ">
      <h3 className="center">{props.name}</h3>
      <hr />
      <img src={props.img} alt={props.name} className="center" />
      <p className="center">{props.description}</p>
    </div>
  );
};

interface BundlePreviewProps {}

const BundlePreview = (props: BundlePreviewProps) => {
  return (
    <div className="card card-primary ">
      <h3 className="center">ASIC</h3>
      <hr />
      <p className="asic-bundle-description">
        Designed for outstanding productions, great sound and a fast workflow.
        Five high-quality audio effects that work as VST3, AudioUnit and AAX in
        almost any DAW.
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
  );
};

export const Plugins = () => {
  return (
    <div className="page-content page-plugins">
      <div className="section-plugin-preview">
        <PluginPreview
          name="Shape"
          description="High quality saturation"
          img={asic_shape_vlcd}
        />
        <BundlePreview />
        <PluginPreview
          name="Tone"
          description="Technical tuning device"
          img={asic_tone_vlcd}
        />
        <PluginPreview
          name="Filter"
          description="Precise equalizer"
          img={asic_filter_vlcd}
        />
        <PluginPreview
          name="Space"
          description="Intuitive room processor"
          img={asic_space_vlcd}
        />
        <PluginPreview
          name="Dynamic"
          description="Precise peak controller"
          img={asic_dynamic_vlcd}
        />
      </div>
    </div>
  );
};
