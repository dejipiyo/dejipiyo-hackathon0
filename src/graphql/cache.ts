import { InMemoryCache, makeVar } from '@apollo/client';
import { GraphQLErrors } from '@apollo/client/errors';

export const graphQLError = makeVar<GraphQLErrors>([]);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
  },
});
