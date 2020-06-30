import React from "react";
import { useParams } from "react-router";
import Photos from "../../components/Photos";
import Query from "../../components/Query";
import ALBUM_PHOTOS_QUERY from "../../queries/album/photos";

const Album = ({ setCurrAlbum }) => {
  let id = useParams().id;
  return (
    <Query query={ALBUM_PHOTOS_QUERY} id={id}>
      {({ data: { album } }) => {
        setCurrAlbum(`${album.name} - ${album.year}`);
        return (
          <div className="uk-container uk-container-large">
            <Photos photos={album.photos} />
          </div>
        );
      }}
    </Query>
  );
};

export default Album;
