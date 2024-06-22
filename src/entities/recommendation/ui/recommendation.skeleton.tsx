import { UserSkeleton } from '@/entities/user';
import { Card, CardHeader, CardBody, Skeleton } from '@nextui-org/react';

export const RecommendationSkeleton = () => {
  return (
    <Card className="py-2 sm:w-[524px]">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between items-center w-full mb-3">
          <UserSkeleton />
          <Skeleton className="rounded-full w-20 h-6" />
        </div>
        <Skeleton className="rounded-full mb-3">
          <h4 className="font-bold text-large">Some title</h4>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <small className="text-default-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis enim recusandae quis illum quam harum esse delectus
            sint necessitatibus
          </small>
        </Skeleton>
      </CardHeader>
      <CardBody className="overflow-visible">
        <Skeleton className="rounded-lg w-full sm:h-96 h-64"></Skeleton>
      </CardBody>
    </Card>
  );
};
