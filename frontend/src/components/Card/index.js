import React from "react";
import { Link } from "react-router-dom";
import { urlBuilder } from "../../utils/helper";

const Card = ({ album }) => {
  const imageUrl = urlBuilder(album.mainPhoto.image.url);
  return (
    <Link to={`/album/${album.id}`} className="uk-link-reset" id="album-card">
      <div id="image-wrapper">
        <img src={imageUrl} alt="hero" className="padding"/>
      </div>
      <p className="photo-font-size font">{album.name}</p>
      {/* <p className="uk-text-muted font">{album.year}</p> */}
    </Link>
  );
};

export default Card;
