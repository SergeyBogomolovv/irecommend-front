import { ApolloClient, InMemoryCache, from, fromPromise } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { setContext } from '@apollo/client/link/context';
import { accessTokenKey } from '@/shared/constants/tokens';
import { RefreshDocument } from '@/shared/graphql/graphql';

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(accessTokenKey);
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
  try {
    const { data } = await client.query({ query: RefreshDocument });
    if (data.refresh.access_token)
      localStorage.setItem(accessTokenKey, data.refresh.access_token);
    return data.refresh.access_token;
  } catch (error) {
    return null;
  }
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          if (operation.operationName === 'Refresh') return;
          return fromPromise(
            getNewToken().then((token) => {
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  authorization: `Bearer ${token}`,
                },
              });
            }),
          ).flatMap(() => {
            return forward(operation);
          });
      }
    }
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, uploadLink]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
