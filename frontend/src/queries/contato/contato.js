import gql from "graphql-tag";

const CONTATO_QUERY = gql`
query Contatos {
  contato{
    content
    id
  }
}
`;

export default CONTATO_QUERY;