import gql from "graphql-tag";

const HOMEPHOTO_QUERY = gql`
query HomePhotos {
  homePhoto{
    image {
      url
    }
    id
  }
}
`;

export default HOMEPHOTO_QUERY;
