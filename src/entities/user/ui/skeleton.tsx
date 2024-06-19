'use client';
import { Skeleton } from '@nextui-org/react';

export function UserSkeleton() {
  return (
    <div className="max-w-[250px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-10 h-10" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-2.5 w-3/5 rounded-lg" />
        <Skeleton className="h-2.5 w-4/5 rounded-lg" />
      </div>
    </div>
  );
}
