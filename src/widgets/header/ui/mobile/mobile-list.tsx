'use client';
import { useViewer } from '@/entities/viewer';
import {
  favoritesRoute,
  loginRoute,
  profileRoute,
  registerRoute,
  viewersRecommendationsRoute,
} from '@/shared/constants/routes';
import {
  Button,
  Divider,
  Link,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { LogoutButton } from './logout-button';
import { FaUserCircle } from 'react-icons/fa';
import { MdFavorite, MdOutlineRecommend } from 'react-icons/md';
import { recommendationTypes } from '@/shared/constants/recommendations';
import { Search } from '@/features/search';
import { RecommendationLink } from '@/shared/ui/recommendation-link';

export default function MobileList() {
  const { notAuthenticated } = useViewer();
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Search />
      </NavbarMenuItem>
      <div className="w-full flex gap-4 items-center justify-center py-3 max-w-screen flex-wrap">
        {recommendationTypes.map((recommendationType) => (
          <RecommendationLink
            key={recommendationType.type}
            title={recommendationType.title}
            type={recommendationType.type}
          />
        ))}
      </div>
      <Divider />
      {notAuthenticated ? (
        <>
          <NavbarMenuItem>
            <Button
              as={Link}
              href={loginRoute}
              className="w-full"
              color="primary"
            >
              Вход
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              as={Link}
              href={registerRoute}
              className="w-full"
              color="primary"
            >
              Регистрация
            </Button>
          </NavbarMenuItem>
        </>
      ) : (
        <>
          <NavbarMenuItem>
            <Link href={profileRoute} color="foreground" size="lg">
              <FaUserCircle className="size-5 mr-2" />
              Профиль
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={favoritesRoute} color="foreground" size="lg">
              <MdFavorite className="size-5 mr-2" />
              Избранное
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href={viewersRecommendationsRoute}
              color="foreground"
              size="lg"
            >
              <MdOutlineRecommend className="size-5 mr-2" />
              Рекомендации
            </Link>
          </NavbarMenuItem>
          <Divider />
          <NavbarMenuItem>
            <LogoutButton />
          </NavbarMenuItem>
        </>
      )}
    </NavbarMenu>
  );
}
