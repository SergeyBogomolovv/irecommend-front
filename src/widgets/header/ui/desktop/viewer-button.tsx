'use client';
import { Dropdown, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { IoLogOut } from 'react-icons/io5';
import { useLogout } from '@/features/auth';
import {
  favoritesRoute,
  profileRoute,
  viewersRecommendationsRoute,
} from '@/shared/constants/routes';
import { Trigger } from './viewer-button-trigger';

export function ViewerButton() {
  const { logout } = useLogout();

  return (
    <Dropdown placement="bottom-end">
      <Trigger />
      <DropdownMenu aria-label="Профиль" variant="flat">
        <DropdownItem
          endContent={<FaUserCircle className="size-5" />}
          key="profile"
          href={profileRoute}
        >
          Профиль
        </DropdownItem>
        <DropdownItem
          endContent={<MdFavorite className="size-5" />}
          key="favorites"
          href={favoritesRoute}
        >
          Избранное
        </DropdownItem>
        <DropdownItem
          endContent={<MdOutlineRecommend className="size-5" />}
          key="my-recommendations"
          href={viewersRecommendationsRoute}
        >
          Рекомендации
        </DropdownItem>
        <DropdownItem
          endContent={<IoLogOut className="size-5" />}
          key="logout"
          color="danger"
          onClick={() => logout()}
        >
          Выход
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
