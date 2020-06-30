import React from "react";
import { urlBuilder } from "../../utils/helper";

const Photos = ({ photos }) => {
  return (
    <div className="image-slider uk-align-center">
      <div
        className="uk-position-relative uk-visible-toggle uk-dark"
        tabIndex="-1"
        uk-slideshow="animation: fade; ratio: 16:9;"
        uk-height-viewport="min-height: 600"
      >
        <ul className="uk-slideshow-items">
          {photos.map((photo) => {
            return (
              <li key={`photo_${photo.id}`}>
                <img
                  alt={photo.title}
                  uk-cover="true"
                  className="high-image-fix"
                  uk-img={`data-src:${urlBuilder(photo.image.url)}`}
                />
              </li>
            );
          })}
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover uk-overlay-default"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover uk-overlay-default"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  );
};

export default Photos;
