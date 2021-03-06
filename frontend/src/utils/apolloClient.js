import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { backendUrl } from "./helper";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${backendUrl}/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
