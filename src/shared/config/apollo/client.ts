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
  try {
    const { data } = await client.query({ query: RefreshDocument });
    if (data.refresh.access_token)
      localStorage.setItem('access_token', data.refresh.access_token);
    return data.refresh.access_token;
  } catch (error) {
    return null;
  }
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === 'UNAUTHENTICATED') {
        return fromPromise(
          getNewToken().then((newToken) => {
            if (newToken) {
              operation.setContext(({ headers = {} }) => ({
                headers: {
                  ...headers,
                  authorization: `Bearer ${newToken}`,
                  isRetry: true,
                },
              }));
              return forward(operation);
            } else {
              return;
            }
          }),
        ).flatMap(() => {
          return forward(operation);
        });
      }
    }
  } else {
    return;
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, uploadLink]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
