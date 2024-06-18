'use client';

import { LogoutDocument, ViewerDocument } from '@/graphql/generated/graphql';
import { useMutation, useQuery } from '@apollo/client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Skeleton,
  Button,
  Link,
} from '@nextui-org/react';

export default function Home() {
  const { data, loading, error } = useQuery(ViewerDocument, {
    errorPolicy: 'all',
  });
  const [logout] = useMutation(LogoutDocument, {
    onCompleted: () => {
      localStorage.removeItem('access_token');
    },
  });

  return (
    <main>
      {error ? (
        <div>Тут ошибка</div>
      ) : (
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Skeleton isLoaded={!loading}>
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
            </Skeleton>
            <div className="flex flex-col">
              <Skeleton isLoaded={!loading} className="rounded-lg">
                <p className="text-md">
                  {data?.profile.email || 'someemail@gmail.com'}
                </p>
              </Skeleton>
              <Skeleton isLoaded={!loading} className="rounded-lg">
                <p className="text-small text-default-500">
                  {data?.profile.profile?.name || 'some name'}
                </p>
              </Skeleton>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Skeleton isLoaded={!loading} className="rounded-lg">
              <p>{data?.profile.id || 'sdsdnfjnsdjfnsjfn'}</p>
            </Skeleton>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/profile">Профиль</Link>
            <Button onClick={logout}>Выход</Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
}
