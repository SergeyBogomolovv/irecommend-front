import { NextRequest, NextResponse } from 'next/server';
import { Validate_AuthDocument } from './graphql/generated/graphql';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const authRoutes = ['/login', '/register', '/verify-account'];
const privateRoutes = ['/profile'];

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
  const refreshToken = request.cookies.get('refresh_token')?.value;
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
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  return;
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
