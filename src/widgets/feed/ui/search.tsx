'use client';
import Image from 'next/image';
import { useGetBySearch } from '../model/use-get-by-search';
import FeedContainer from './feed-container';
import { Link } from '@nextui-org/react';

export const SearchByParams = () => {
  const { recommendations, loading } = useGetBySearch();
  return (
    <FeedContainer
      recommendations={recommendations}
      loading={loading}
      emptyRender={
        <div className="mt-10 flex flex-col gap-y-4 items-center justify-center">
          <Image
            className="w-10/12"
            src={'/no-results.svg'}
            alt=""
            width={500}
            height={500}
          />
          <p className="text-xl font-semibold">
            По данному запросу ничего не найдено.
          </p>
          <Link href="/">На главную</Link>
        </div>
      }
    />
  );
};
