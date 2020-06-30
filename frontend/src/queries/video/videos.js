import gql from "graphql-tag";

const VIDEOS_QUERY = gql`
  query Videos {
    videos {
      id
      name
      video_url
      cover_image {
        url
      }
    }
  }
`;

export default VIDEOS_QUERY;
