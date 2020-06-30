import gql from "graphql-tag";

const BIO_QUERY = gql`
query Bios {
  bio{
    content
    id
  }
}
`;

export default BIO_QUERY;