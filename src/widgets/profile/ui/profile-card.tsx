'use client';
import { useLogout } from '@/features/auth';
import { AddContact, Contact } from '@/features/contact';
import { EditProfile, ProfileAvatar } from '@/features/profile';
import { Profile, ProfileDocument } from '@/shared/graphql/graphql';
import InfoBadge from '@/shared/ui/info-badge';
import { useQuery } from '@apollo/client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Skeleton,
} from '@nextui-org/react';
import { format } from 'date-fns';

export const ProfileCard = () => {
  const { logout, loading: logoutLoading } = useLogout();
  const { data, loading } = useQuery(ProfileDocument);
  return (
    <Card className="max-w-[550px] w-full relative">
      {loading ? (
        <Skeleton className="absolute rounded-lg top-4 right-4 z-[11] h-8 w-8" />
      ) : (
        <EditProfile profile={data?.profile.profile as Profile} />
      )}
      <CardHeader className="flex flex-col gap-2 pattern-opacity-100 pattern-sky-500 dark:pattern-sky-900 pattern-bg-black pattern-wavy md:pattern-size-16">
        <ProfileAvatar
          name={data?.profile.profile.name || ''}
          src={data?.profile.profile.logo || ''}
        />
        <div className="flex flex-col gap-2 items-center">
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <h3 className="text-lg font-semibold text-center text-white text-shadow shadow-black">
              {data?.profile.profile.name || 'Name skeleton'}
            </h3>
          </Skeleton>
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <p className="text-small p-2 rounded-lg text-white text-shadow shadow-black font-mono">
              {data?.profile.profile.about || 'Тут пока ничего нет'}
            </p>
          </Skeleton>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">Личная информация</h3>
        <InfoBadge loading={loading} label="ID" text={data?.profile.id} />
        <InfoBadge loading={loading} label="Почта" text={data?.profile.email} />
        <InfoBadge
          loading={loading}
          label="Зарегистрирован"
          text={format(data?.profile.created_at || new Date(), 'dd.LL.yyyy')}
        />
      </CardBody>
      <Divider />
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <h3 className="text-lg font-semibold">Контакты</h3>
          <AddContact />
        </div>
        <div className="flex gap-2 flex-wrap">
          {loading ? (
            <>
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
              <Skeleton className="rounded-full h-6 w-32" />
            </>
          ) : (
            <>
              {data?.profile.profile.contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  type={contact.type}
                  href={contact?.url}
                  nickname={contact.nickname}
                />
              ))}
            </>
          )}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col gap-y-2">
        <Button
          isLoading={logoutLoading}
          onClick={() => logout()}
          className="w-full"
          color="danger"
        >
          Выйти
        </Button>
      </CardFooter>
    </Card>
  );
};
