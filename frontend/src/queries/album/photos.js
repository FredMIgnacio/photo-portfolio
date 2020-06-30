import gql from "graphql-tag";

const ALBUM_PHOTOS_QUERY = gql`
  query Album($id: ID!) {
    album(id: $id) {
      id
      name
      photos {
        id
        image {
          url
        }
        album {
          id
          name
        }
      }
    }
  }
`;

export default ALBUM_PHOTOS_QUERY;
