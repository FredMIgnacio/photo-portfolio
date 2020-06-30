import React from "react";
import { Link } from "react-router-dom";

const tabs = {
  fotografias: "albums",
  audiovisual: "audiovisual",
  bio: "biography",
  contato: "contact",
};
const Nav = ({ currAlbum }) => {
  return (
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <Link className="text-main-size font" to="/">Diana Rietveld</Link>
          </li>
          {Object.entries(tabs).map(([tabName, tabValue]) => {
            return (
              <li key={tabName}>
                <Link
                  to={`/${tabValue}`}
                  className="uk-link-reset uk-text-light text-lowercase-size font"
                >
                  {tabName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="link-not-link font">{currAlbum}</li>
        </ul>
      </div>
    </nav>
  );
};

export { Nav };
