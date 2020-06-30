import React from "react";
import AlbumsComponent from "../../components/Albums";
import Query from "../../components/Query";
import ALBUMS_QUERY from "../../queries/album/albums";

const Albums = ({setCurrAlbum}) => {
  setCurrAlbum('')
  return (
    <div>
      <div className="uk-container uk-container-large">
        <Query query={ALBUMS_QUERY}>
          {({ data: { albums } }) => {
            return <AlbumsComponent albums={albums} />;
          }}
        </Query>
      </div>
    </div>
  );
};

export default Albums;
