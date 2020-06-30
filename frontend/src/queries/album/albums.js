import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
      id
      name
      mainPhoto {
        image {
          url
        }
      }
    }
  }
`;

export default ALBUMS_QUERY;
