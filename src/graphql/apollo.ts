import { ApolloClient, from, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';
import { cache, graphQLError } from '@/graphql/cache';

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'http://localhost/graphql';

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
  fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLError(graphQLErrors);
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
});
