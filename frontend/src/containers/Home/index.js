import React from "react";
import Query from "../../components/Query";
import HOMEPHOTO_QUERY from "../../queries/homePhoto/homePhoto";
import { urlBuilder } from "../../utils/helper";

const Home = ({ setCurrAlbum }) => {
  setCurrAlbum("");
  return (
    <div>
      <Query query={HOMEPHOTO_QUERY}>
        {({
          data: {
            homePhoto: {
              image: { url },
            },
          },
        }) => {
          const imageUrl = urlBuilder(url);
          return (
            <img
              width="100%"
              height="auto"
              alt="hero"
              className="home-image"
              uk-img={`data-src:${imageUrl}`}
            />
          );
        }}
      </Query>
    </div>
  );
};

export default Home;
