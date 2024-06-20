'use client';
import { Dropdown, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { useLogout } from '@/features/auth';
import { profileRoute } from '@/shared/constants/routes';
import { Trigger } from './trigger';

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
          endContent={<FaUsers className="size-5" />}
          key="friends"
          href={'/profile/friends'}
        >
          Друзья
        </DropdownItem>
        <DropdownItem
          endContent={<MdOutlineRecommend className="size-5" />}
          key="my-recommendations"
          href={'/profile/recommendations'}
        >
          Рекомендации
        </DropdownItem>
        <DropdownItem
          endContent={<IoIosSettings className="size-5" />}
          key="settings"
          href={'/profile/settings'}
        >
          Настройки
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
