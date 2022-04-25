import React from "react";

import { ImageGrid } from "../component/ImageGrid";

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
  logo: string;
  vlcd: string;
}

const PluginPreview = (props: PluginPreviewProps) => {
  return (
    <div className="card card-primary card-plugin-preview">
      <div className="card-plugin-preview-heading">
        <img src={props.logo} alt={props.name} className="center" />
        <h3 className="card-plugin-preview-heading-text center">
          {props.name}
        </h3>
      </div>
      <img src={props.vlcd} alt={props.name} className="center" />
      <h4 className="center">{props.description}</h4>
    </div>
  );
};

interface BundlePreviewProps {}

const BundlePreview = (props: BundlePreviewProps) => {
  return (
    <div className="card card-primary card-plugin-preview">
      <div className="card-plugin-preview-heading">
        <h3 className="card-plugin-preview-heading-full center">
          <b>ASIC</b>
        </h3>
      </div>
      <p className="asic-bundle-description">
        Designed for outstanding productions, great sound and a fast workflow.
        Five high-quality audio effects that work as VST3, AudioUnit and AAX in
        almost any DAW.
      </p>
      <div className="center">
        <ImageGrid
          items={[
            { img: asic_shape_logo, alt: "ASIC Shape" },
            { img: asic_tone_logo, alt: "ASIC Tone" },
            { img: asic_filter_logo, alt: "ASIC Filter" },
            { img: asic_space_logo, alt: "ASIC Space" },
            { img: asic_dynamic_logo, alt: "ASIC Dynamic" },
          ]}
        />
      </div>
      {/* <div>
        <p>$219 Single Payment</p>
        <p>$6/Month subscription</p>
      </div> */}
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
          logo={asic_shape_logo}
          vlcd={asic_shape_vlcd}
        />
        <BundlePreview />
        <PluginPreview
          name="Tone"
          description="Technical tuning device"
          logo={asic_tone_logo}
          vlcd={asic_tone_vlcd}
        />
        <PluginPreview
          name="Filter"
          description="Precise equalizer"
          logo={asic_filter_logo}
          vlcd={asic_filter_vlcd}
        />
        <PluginPreview
          name="Space"
          description="Intuitive room processor"
          logo={asic_space_logo}
          vlcd={asic_space_vlcd}
        />
        <PluginPreview
          name="Dynamic"
          description="Precise peak controller"
          logo={asic_dynamic_logo}
          vlcd={asic_dynamic_vlcd}
        />
      </div>
    </div>
  );
};
