'use client';
import { useLogout } from '@/features/auth';
import { AddContact, Contact } from '@/features/contact';
import { ProfileAvatar } from '@/features/profile';
import { ProfileDocument } from '@/shared/graphql/graphql';
import { ConfirmButton } from '@/shared/ui/confirm-button';
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
import { LiaUserEditSolid } from 'react-icons/lia';

export const ProfileCard = () => {
  const { logout, loading: logoutLoading } = useLogout();
  const { data, loading } = useQuery(ProfileDocument);
  return (
    <Card className="max-w-[550px] w-full relative">
      <Button
        isIconOnly
        variant="light"
        className="absolute top-4 right-4 z-[11]"
      >
        <LiaUserEditSolid className="size-6" />
      </Button>
      <CardHeader className="flex flex-col gap-2">
        <ProfileAvatar
          name={data?.profile.profile.name || ''}
          src={data?.profile.profile.logo || ''}
        />
        <div className="flex flex-col items-center gap-2">
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <h3 className="text-lg font-semibold">
              {data?.profile.profile.name || 'Name skeleton'}
            </h3>
          </Skeleton>
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <p className="text-small text-default-500 self-start w-full">
              <b className="text-default-700 font-medium">О себе: </b>
              {data?.profile.profile.about || 'тут пока ничего нет'}
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
                  href={contact.url}
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
        >
          Выйти
        </Button>
        <ConfirmButton
          title="Удалить аккаунт"
          description="Вы действительно хотите свой удалить аккаунт? Это действие нельзя будет отменить!"
          onComplete={() => logout()}
          label="Подтверждаю"
          confirmLabel="Удалить аккаунт"
        />
      </CardFooter>
    </Card>
  );
};
