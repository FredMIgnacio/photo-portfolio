import React from "react";
import Card from "../Card";

const AlbumsComponent = ({ albums }) => {
  return (
    <div>
      <div data-uk-grid>
        <div>
          <div className="uk-child-width-1-3@m uk-grid-match" data-uk-grid>
            {albums.map((album) => {
              return <Card album={album} key={`album_${album.id}`}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumsComponent;
