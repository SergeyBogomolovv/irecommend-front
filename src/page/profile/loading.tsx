import { Card, CardHeader, CardBody, Skeleton } from '@nextui-org/react';

export default function ProfileLoading() {
  return (
    <div className="flex flex-col max-w-[550px] sm:gap-y-8 gap-y-6 w-full items-center justify-center my-6">
      <Card className="w-full">
        <Skeleton className="absolute rounded-lg top-4 right-4 z-[11] h-8 w-8" />
        <CardHeader className="flex flex-col gap-2">
          <Skeleton className="size-28 rounded-full" />
          <div className="flex flex-col gap-2 items-center">
            <Skeleton className="rounded-lg">
              <h3 className="text-lg font-semibold text-center text-white text-shadow shadow-black">
                Name skeletonName skeletonName skeletonName skeletonName
                skeletonName skeleton
              </h3>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <p className="text-small p-2 rounded-lg text-white text-shadow shadow-black font-mono">
                Тут пока ничего нетТут пока ничего нетТут пока ничего нетТут
                пока ничего нетТут пока ничего нетТут пока ничего нетТут пока
                ничего нет
              </p>
            </Skeleton>
          </div>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardBody className="flex flex-col gap-y-2">
          <Skeleton className="rounded-lg">
            <h3 className="text-lg font-semibold">Личная информация</h3>
          </Skeleton>

          <div className="flex items-center justify-between bg-default-100 p-2 rounded-lg text-sm">
            <Skeleton className="rounded-lg">
              <p>Name skeleton:</p>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <p className="font-mono truncate max-w-[200px]">
                some text for skeleton
              </p>
            </Skeleton>
          </div>
          <div className="flex items-center justify-between bg-default-100 p-2 rounded-lg text-sm">
            <Skeleton className="rounded-lg">
              <p>Name skeleton:</p>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <p className="font-mono truncate max-w-[200px]">
                some text for skeleton
              </p>
            </Skeleton>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full">
        <CardBody className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <Skeleton className="rounded-lg">
              <h3 className="text-lg font-semibold">Контакты</h3>
            </Skeleton>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Skeleton className="rounded-full h-6 w-32" />
            <Skeleton className="rounded-full h-6 w-32" />
            <Skeleton className="rounded-full h-6 w-32" />
            <Skeleton className="rounded-full h-6 w-32" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
