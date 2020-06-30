import React from "react";
import { Link } from "react-router-dom";

const tabs = {
  Fotografias: "albums",
  Bio: "biography",
};
const Footer = () => {
  return (
    <div
      id="footer"
      className="uk-text-uppercase uk-text-meta uk-text-light uk-container uk-container-expand uk-padding-small"
      uk-grid="true"
    >
      <div className="uk-width-1-2@m uk-text-right">
        <span className="uk-text-muted font">Diana Rietveld ® - 2020</span>
        <span className="uk-text-muted uk-margin-medium-left font">|</span>
      </div>
      <div className="uk-width-1-2@m uk-text-left">
        <a className="font" target="_blank" href="https://www.instagram.com/diana.rietveld/">
          <span uk-icon="instagram"></span> @diana.rietveld
        </a>
        <a className="font" target="_blank" href="mailto:diana.rietveld@hotmail.com" className="uk-margin-medium-left">
          <span uk-icon="mail"></span> diana.rietveld@hotmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
