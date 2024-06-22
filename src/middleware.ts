import { NextRequest, NextResponse } from 'next/server';
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

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isOnAuthRoute = authRoutes.includes(pathname);
  const isOnPrivateRoute = privateRoutes.includes(pathname);
  if (!isOnAuthRoute && !isOnPrivateRoute) return;

  const authenticated = request.cookies.has(refreshTokenKey);

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
