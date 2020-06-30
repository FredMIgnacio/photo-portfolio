import React from "react";
import { urlBuilder } from "../../utils/helper";

const VideosComponent = ({ videos }) => {
  console.log("entrou no video component")
  return (
    videos.map(function (video) {
      return (
          <div uk-lightbox="animation: fade" className="uk-link-reset">
             <a  href={video.video_url} data-caption={video.name}>
              <img src={urlBuilder(video.cover_image.url)} alt="hero" className="album-card-img padding"/>
            <p className="video-font-size font">{video.name}</p>
            </a>
          </div>
      )
    })
  )
};

export default VideosComponent;