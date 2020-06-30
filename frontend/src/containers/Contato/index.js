import ReactMarkdown from "react-markdown";
import React from "react";
import Query from "../../components/Query";
import CONTATO_QUERY from "../../queries/contato/contato";


const Contato = ({ setCurrAlbum }) => {
  return (
    <Query query={CONTATO_QUERY}>
      {({ data: { contato } }) => {
        setCurrAlbum("");
        return (
          <div id="contato" className="uk-container uk-text-justify uk-container-small font">
            <ReactMarkdown source={contato.content} />
          </div>
        );
      }}
    </Query>
  );
};

export default Contato;
