'use client';
import { useViewer } from '@/entities/viewer';
import {
  loginRoute,
  profileRoute,
  registerRoute,
} from '@/shared/constants/routes';
import { Divider, Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { LogoutButton } from './logout-button';
import { LinkButton } from './link-button';
import { Search } from '@/features/navbar';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';

export default function MobileList() {
  const { notAuthenticated } = useViewer();
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Search />
      </NavbarMenuItem>
      <Divider />
      {notAuthenticated ? (
        <>
          <NavbarMenuItem>
            <LinkButton href={loginRoute}>Вход</LinkButton>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkButton href={registerRoute}>Регистрация</LinkButton>
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
            <Link href={profileRoute} color="foreground" size="lg">
              <FaUsers className="size-5 mr-2" />
              Друзья
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={profileRoute} color="foreground" size="lg">
              <MdOutlineRecommend className="size-5 mr-2" />
              Рекомендации
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href={profileRoute} color="foreground" size="lg">
              <IoIosSettings className="size-5 mr-2" />
              Настройки
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
