'use client';
import { useViewer } from '@/entities/viewer';
import {
  favoritesRoute,
  loginRoute,
  profileRoute,
  registerRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
  verifyAccountRoute,
  viewersRecommendationsRoute,
} from '@/shared/constants/routes';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const authRoutes = [
  loginRoute,
  registerRoute,
  verifyAccountRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
];

const privateRoutes = [
  profileRoute,
  viewersRecommendationsRoute,
  favoritesRoute,
];

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const isOnAuthRoute = authRoutes.includes(pathname);
  const isOnPrivateRoute = privateRoutes.includes(pathname);
  const { notAuthenticated, loading } = useViewer();
  const cannotBeOnAuth = isOnAuthRoute && !notAuthenticated;
  const cannotBeOnPrivate = notAuthenticated && isOnPrivateRoute;

  useEffect(() => {
    if (!loading) {
      if (cannotBeOnPrivate) {
        router.push('/login');
      } else if (cannotBeOnAuth) {
        router.push('/');
      }
    }
  }, [pathname, notAuthenticated]);

  return <>{children}</>;
}
