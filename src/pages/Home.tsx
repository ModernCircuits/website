import React from "react";

import "./Home.css";

import asic_dynamic_screenshot_small from "../img/asic/asic_dynamic_screenshot_small.png";
import asic_filter_screenshot_small from "../img/asic/asic_filter_screenshot_small.png";
import asic_shape_screenshot_small from "../img/asic/asic_shape_screenshot_small.png";
import asic_space_screenshot_small from "../img/asic/asic_space_screenshot_small.png";
import asic_tone_screenshot_small from "../img/asic/asic_tone_screenshot_small.png";
import { ImageGrid } from "../component/ImageGrid";
interface HomeProductPreviewProps {
  name: string;
  short_description: string;
  long_description: string;
  img: string;
}

const HomeProductPreview: React.FunctionComponent<
  HomeProductPreviewProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  return (
    <div className={"card card-primary card-home " + props.className}>
      <h2 className="center">{props.name}</h2>
      <hr />
      <h3 className="center">{props.short_description}</h3>
      {props.children}
      <p className="center">{props.long_description}</p>
    </div>
  );
};

export const Home = () => {
  const products = [
    {
      name: "ASIC",
      short_description: "Audio plugin bundle",
      long_description:
        "Designed for outstanding productions, great sound and a fast workflow. Five high-quality audio effects that work as VST3, AudioUnit & AAX with almost any DAW.",
      img: "",
    },
    {
      name: "Zentrale",
      short_description: "Download Manager",
      long_description:
        "The fastest way to get Modern Circuits into your project. Manage and download your plugins, licenses & updates. For Windows, macOS and Linux.",
      img: "",
    },
  ];
  return (
    <div>
      <div className="page-content page-home">
        <p className="aside-message">
          A warm welcome to modern circuits from berlin wedding. We develop and
          manufacture professional audio technology in knobs and code.
        </p>
        <HomeProductPreview
          name={products[0].name}
          short_description={products[0].short_description}
          long_description={products[0].long_description}
          img={products[0].img}
          className="card-home-asic"
        >
          <ImageGrid
            items={[
              { img: asic_shape_screenshot_small, alt: "ASIC Shape" },
              { img: asic_tone_screenshot_small, alt: "ASIC Tone" },
              { img: asic_filter_screenshot_small, alt: "ASIC Filter" },
              { img: asic_space_screenshot_small, alt: "ASIC Space" },
              { img: asic_dynamic_screenshot_small, alt: "ASIC Dynamic" },
            ]}
          />
        </HomeProductPreview>
        <HomeProductPreview
          name={products[1].name}
          short_description={products[1].short_description}
          long_description={products[1].long_description}
          img={products[1].img}
          className="card-home-zentrale"
        >
          <ImageGrid
            items={[
              { img: asic_shape_screenshot_small, alt: "ASIC Shape" },
              { img: asic_tone_screenshot_small, alt: "ASIC Tone" },
              { img: asic_filter_screenshot_small, alt: "ASIC Filter" },
              { img: asic_space_screenshot_small, alt: "ASIC Space" },
              { img: asic_dynamic_screenshot_small, alt: "ASIC Dynamic" },
            ]}
          />
        </HomeProductPreview>
      </div>
    </div>
  );
};
