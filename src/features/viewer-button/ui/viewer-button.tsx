'use client';
import { useLogout } from '@/shared/hooks/use-logout';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  AvatarProps,
  User,
} from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';

interface Props {
  name?: string;
  description?: string | null;
  avatarProps: AvatarProps;
}

export function ViewerButton({ description, avatarProps, name }: Props) {
  const [logout] = useLogout();
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <User
          as="button"
          className="transition-transform"
          name={name}
          description={description}
          avatarProps={avatarProps}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Профиль" variant="flat">
        <DropdownItem
          endContent={<FaUserCircle className="size-5" />}
          key="profile"
          href={'/profile'}
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
          onAction={logout}
          key="logout"
          color="danger"
        >
          Выход
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
