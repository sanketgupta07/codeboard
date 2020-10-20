import { ApolloLink, from, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
require("dotenv").config();

const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem("access_token"));
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: "Bearer " + token,
    },
  }));

  return forward(operation);
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});
