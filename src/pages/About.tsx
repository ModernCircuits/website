import React from "react";

import milan from "../img/milan.jpg";
import tobias from "../img/tobias.jpg";
import lukas from "../img/lukas.jpg";

import "./About.css";

interface AboutFounderProps {
  name: string;
  description: string;
  position: string;
  img: string;
  grid_position: string;
}

const AboutFounder: React.FunctionComponent<
  AboutFounderProps & React.HTMLAttributes<HTMLDivElement>
> = (props: AboutFounderProps) => {
  return (
    <div className={"card card-primary card-person " + props.grid_position}>
      <h2 className="center">{props.name}</h2>
      <hr />
      <h3 className="center">{props.position}</h3>
      <img src={props.img} alt={props.name} className="center" />
      <p>{props.description}</p>
    </div>
  );
};

export const About = () => {
  return (
    <div className="page-content page-about">
      <p className="aside-message">
        With years of experience in studio technolgy, analogue and digital audio
        editing, product development and a clear vision of the production tools
        of the future, we founded Modern Circuits in 2020. Our concepts are
        based on minimizing the technical challenge and enhancing the creative
        process. That's what we call workflow.
      </p>
      <AboutFounder
        name="Milan Rottinger"
        description="Sounddesigner, studio-musician and expert in recording technology"
        position="CEO"
        img={milan}
        grid_position="card-milan"
      />
      <AboutFounder
        name="Tobias Hienzsch"
        description="Tech developer and expert in digital networking and circuits"
        position="CTO"
        img={tobias}
        grid_position="card-tobias"
      />
      <AboutFounder
        name="Lukas Kähler"
        description="Music producer, multi-instrumentalist and expert in DSP programming"
        position="CEO"
        img={lukas}
        grid_position="card-lukas"
      />
    </div>
  );
};
