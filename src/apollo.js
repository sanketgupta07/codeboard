import { ApolloLink, from, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
require("dotenv").config();

const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  }));

  // console.log(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);
  return forward(operation);
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});
