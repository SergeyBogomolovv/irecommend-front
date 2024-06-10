import { ApolloClient, InMemoryCache, from, fromPromise } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { setContext } from '@apollo/client/link/context';
import { RefreshDocument } from '@/graphql/generated/graphql';

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

const getNewToken = async () => {
  return client
    .query({ query: RefreshDocument })
    .then(({ data }) => data.refresh.access_token)
    .catch(() => {});
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === 'UNAUTHENTICATED') {
        if (operation.getContext().isRetry) {
          return;
        }
        operation.setContext({ isRetry: true });
        return fromPromise(getNewToken())
          .filter(Boolean)
          .flatMap((access_token) => {
            const oldHeaders = operation.getContext().headers;
            if (access_token) {
              localStorage.setItem('access_token', access_token);
            }
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${access_token}`,
              },
            });
            return forward(operation);
          });
      }
    }
  }
});

const client = new ApolloClient({
  link: from([authLink, errorLink, uploadLink]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
