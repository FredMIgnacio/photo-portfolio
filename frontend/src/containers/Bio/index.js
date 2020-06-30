import ReactMarkdown from "react-markdown";
import React from "react";
import Query from "../../components/Query";
import BIO_QUERY from "../../queries/bio/bio";


const Bio = ({ setCurrAlbum }) => {
  return (
    <Query query={BIO_QUERY}>
      {({ data: { bio } }) => {
        setCurrAlbum("");
        return (
          <div id="bio" className="uk-container uk-text-justify uk-container-small font">
            <ReactMarkdown source={bio.content} />
          </div>
        );
      }}
    </Query>
  );
};

export default Bio;
