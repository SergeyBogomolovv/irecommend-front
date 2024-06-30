'use client';
import { Skeleton } from '@nextui-org/react';

export function CommentSkeleton() {
  return (
    <div className="w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full size-10" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-2.5 w-2/5 rounded-lg" />
        <Skeleton className="h-2.5 w-full rounded-lg" />
      </div>
    </div>
  );
}
