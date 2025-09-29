/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }: any) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }: any) => {
      console.error(
        `[GraphQL Error]: MessageL ${message}, Location ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

// Set up the API URL
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// Set uo the HTTP Link URL and headers
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// Set up the link
const link = ApolloLink.from([errorLink, httpLink]);

// Set up the client object
const client = new ApolloClient({ link, cache: new InMemoryCache() });

export default client;
