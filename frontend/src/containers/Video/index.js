import React from "react";
import VideosComponent from "../../components/Videos";
import Query from "../../components/Query";
import VIDEOS_QUERY from "../../queries/video/videos";

const Videos = ({ setCurrAlbum }) => {
  setCurrAlbum('')
  console.log("entrou no conatiner video")
  return (
    <div>
      <div className="uk-container uk-container-large">
        <Query query={VIDEOS_QUERY}>
          {({ data: { videos } }) => {
            return (<div className="uk-child-width-1-3@m uk-grid-match" data-uk-grid="true">
              <VideosComponent videos={videos} />
              </div>)
          }}
        </Query>
      </div>
    </div>
  );
};

export default Videos;
