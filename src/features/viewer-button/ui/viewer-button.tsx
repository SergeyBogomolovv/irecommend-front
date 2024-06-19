'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineRecommend } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { useLogout } from '@/features/auth';
import { profileRoute } from '@/shared/constants/routes';
import { useViewer } from '@/entities/viewer';
import { UserSkeleton } from '@/entities/user';

export function ViewerButton() {
  const { logout } = useLogout();
  const { viewer, loading } = useViewer();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger disabled={loading}>
        {loading ? (
          <UserSkeleton />
        ) : (
          <User
            as="button"
            className="transition-transform"
            name={viewer?.profile?.name}
            description={viewer?.email}
            avatarProps={{
              src: viewer?.profile?.logo || '',
              name: viewer?.profile?.name?.toLocaleUpperCase(),
            }}
          />
        )}
      </DropdownTrigger>
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
