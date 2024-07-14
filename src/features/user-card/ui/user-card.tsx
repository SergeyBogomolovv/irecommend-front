'use client';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Popover,
  PopoverContent,
  Skeleton,
} from '@nextui-org/react';
import { useGetUser } from '../model/use-get-user';
import { TriggerButton } from './trigger-button';
import { Contact } from '@/features/contact';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { FaUser } from 'react-icons/fa';

interface Props {
  id: string;
  description?: string;
  children?: React.ReactNode;
}

export const UserCard = ({ id, description, children }: Props) => {
  const { user, loading } = useGetUser(id);
  return (
    <Popover placement="bottom" backdrop="opaque">
      <TriggerButton
        name={user?.profile.name}
        description={description}
        avatarUrl={user?.profile.logo}
        loading={loading}
        customChildren={children}
      />
      <PopoverContent className="p-0">
        <Card
          className="sm:max-w-[400px] max-w-[350px] border-none bg-transparent"
          shadow="none"
        >
          <CardHeader className="flex gap-x-2 items-start">
            <Avatar className="size-12">
              <AvatarImage
                src={user?.profile.logo || ''}
                className="aspect-square object-cover"
              />
              <AvatarFallback>
                <FaUser className="size-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-col flex-grow">
              <p className="text-sm font-semibold">{user?.profile.name}</p>
              <p className="text-sm text-default-500">
                {user?.profile.about || 'Тут пока ничего нет'}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-2">
            <h3 className="font-semibold">Контакты</h3>
            <div className="flex gap-2 flex-wrap">
              {loading ? (
                <>
                  <Skeleton className="rounded-full h-6 w-32" />
                  <Skeleton className="rounded-full h-6 w-32" />
                  <Skeleton className="rounded-full h-6 w-32" />
                </>
              ) : (
                <>
                  {user?.profile?.contacts.length ? (
                    <>
                      {user?.profile.contacts.map((contact) => (
                        <Contact
                          key={contact.id}
                          id={contact.id}
                          type={contact.type}
                          href={contact?.url}
                          nickname={contact.nickname}
                        />
                      ))}
                    </>
                  ) : (
                    <p className="text-default-400 text-sm">
                      Пользователь не добавил ни одного контакта.
                    </p>
                  )}
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
