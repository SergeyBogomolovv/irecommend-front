import { EditProfile, ProfileAvatar } from '@/features/profile';
import { Profile } from '@/shared/graphql/graphql';
import { Card, CardHeader, Skeleton } from '@nextui-org/react';

interface Props {
  loading: boolean;
  profile: Profile;
}

const PublicInfo = ({ loading, profile }: Props) => {
  return (
    <Card className="w-full">
      {loading ? (
        <Skeleton className="absolute rounded-lg top-4 right-4 z-[11] h-8 w-8" />
      ) : (
        <EditProfile profile={profile} />
      )}
      <CardHeader className="flex flex-col gap-2 pattern-opacity-100 pattern-sky-500 dark:pattern-sky-900 pattern-bg-black pattern-wavy md:pattern-size-16">
        <ProfileAvatar name={profile?.name || ''} src={profile?.logo || ''} />
        <div className="flex flex-col gap-2 items-center">
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <h3 className="text-lg font-semibold text-center text-white text-shadow shadow-black">
              {profile?.name || 'Name skeleton'}
            </h3>
          </Skeleton>
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <p className="text-small p-2 rounded-lg text-white text-shadow shadow-black font-mono">
              {profile?.about || 'Тут пока ничего нет'}
            </p>
          </Skeleton>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PublicInfo;
