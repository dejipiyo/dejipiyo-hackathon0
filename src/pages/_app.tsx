import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { apolloClient } from '@/graphql/apollo';
import '@/style/index.css';

if (process.env.NEXT_PUBLIC_GRAPHQL_URL === undefined) {
  // eslint-disable-next-line global-require
  require('@/mocks');
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
