import { Skeleton } from '@nextui-org/react';

const AuthLoading = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="max-w-[550px] w-full flex flex-col gap-y-4">
        <Skeleton className="w-1/2 h-4 rounded-lg" />
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="w-full h-12 rounded-xl" />
        <Skeleton className="w-1/2 h-4 rounded-xl self-center" />
      </div>
    </main>
  );
};
export default AuthLoading;
