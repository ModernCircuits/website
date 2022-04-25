import React from "react";
import { Link } from "react-router-dom";

// import facebook from "../img/icons/brands/facebook.svg";
// import twitter from "../img/icons/brands/twitter.svg";
// import instagram from "../img/icons/brands/instagram.svg";
// import github from "../img/icons/brands/github.svg";
// import tiktok from "../img/icons/brands/tiktok.svg";
// import youtube from "../img/icons/brands/youtube.svg";

import "./Footer.css";

interface FooterSocialLinkProps {
  url: string;
  alt: string;
  icon: string;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => {
  return (
    <a href={props.url} className="footer-social-link">
      {props.icon.length > 0 ? (
        <img src={props.icon} alt={props.alt} />
      ) : (
        <p>{props.alt}</p>
      )}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-social-links">
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="Facebook"
            icon=""
          />
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="Instagram"
            icon=""
          />
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="Twitter"
            icon=""
          />
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="TikTok"
            icon=""
          />
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="YouTube"
            icon=""
          />
          <FooterSocialLink
            url="https://github.com/ModernCircuits"
            alt="GitHub"
            icon=""
          />
        </div>
      </div>
      <div className="footer-internal-links">
        <p>Modern Circuits UG (haftungsbeschränkt). All rights reserved.</p>
      </div>
      <div className="footer-internal-links ">
        <Link to="impressum">Impressum / Legal</Link>
      </div>
    </footer>
  );
};
