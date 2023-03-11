import { FC, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/graphql/apollo';

export const createWrapper = () => {
  const wrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  );
  return wrapper;
};
