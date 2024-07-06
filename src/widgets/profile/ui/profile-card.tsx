'use client';
import { useLogout } from '@/features/auth';
import { Profile, ProfileDocument } from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';
import { Button } from '@nextui-org/react';
import PublicInfo from './public-info';
import PersonalInfo from './personal-info';
import Contacts from './contacts';

export const ProfileCard = () => {
  const { logout, loading: logoutLoading } = useLogout();
  const { data, loading } = useQuery(ProfileDocument);
  return (
    <div className="flex flex-col max-w-[550px] sm:gap-y-8 gap-y-6 w-full items-center justify-center my-6">
      <PublicInfo
        loading={loading}
        profile={data?.profile?.profile as Profile}
      />
      <PersonalInfo
        loading={loading}
        id={data?.profile?.id}
        email={data?.profile?.email || ''}
        date={data?.profile?.created_at}
      />
      <Contacts loading={loading} profile={data?.profile?.profile as Profile} />
      <Button
        isLoading={logoutLoading}
        onClick={() => logout()}
        className="w-full"
        color="danger"
      >
        Выйти
      </Button>
    </div>
  );
};
