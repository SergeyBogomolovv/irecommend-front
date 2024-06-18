import { NextRequest, NextResponse } from 'next/server';
import { Validate_AuthDocument } from './shared/graphql/generated/graphql';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import {
  loginRoute,
  profileRoute,
  registerRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
  verifyAccountRoute,
} from './shared/constants/routes';
import { refreshTokenKey } from './shared/constants/tokens';

const authRoutes = [
  loginRoute,
  registerRoute,
  verifyAccountRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
];

const privateRoutes = [profileRoute];

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
});

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isOnAuthRoute = authRoutes.includes(pathname);
  const isOnPrivateRoute = privateRoutes.includes(pathname);
  if (!isOnAuthRoute && !isOnPrivateRoute) return;
  const refreshToken = request.cookies.get(refreshTokenKey)?.value;
  const { authenticated } = (
    await client.query({
      query: Validate_AuthDocument,
      variables: { refreshToken },
    })
  ).data.validate_auth;

  if (isOnAuthRoute && authenticated) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (isOnPrivateRoute && !authenticated) {
    return NextResponse.redirect(new URL(loginRoute, request.nextUrl));
  }

  return;
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
