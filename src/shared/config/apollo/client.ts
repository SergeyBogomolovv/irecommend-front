import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { fromPromise } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const uploadLink = createUploadLink({
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
  uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
  credentials: 'include',
});

const REFRESH = gql`
  query Refresh {
    refresh {
      access_token
    }
  }
`;

export const refreshLink = onError(({ graphQLErrors, forward, operation }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === 'UNAUTHENTICATED') {
        return fromPromise(
          client
            .query({ query: REFRESH })
            .then(({ data }) => {
              localStorage.setItem('access_token', data.refresh.access_token);
              return data.refresh.access_token;
            })
            .catch(() => {
              localStorage.removeItem('access_token');
              return;
            }),
        )
          .filter(Boolean)
          .flatMap(() => {
            return forward(operation);
          });
      }
    }
  }
});

const client = new ApolloClient({
  link: from([authLink, refreshLink, uploadLink]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
