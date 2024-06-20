'use client';
import { Skeleton } from '@nextui-org/react';

export function UserSkeleton() {
  return (
    <div className="max-w-[160px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full size-10" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-2.5 w-4/5 rounded-lg" />
        <Skeleton className="h-2.5 w-full rounded-lg" />
      </div>
    </div>
  );
}
