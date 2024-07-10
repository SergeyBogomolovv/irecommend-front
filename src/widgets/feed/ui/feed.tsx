'use client';
import Image from 'next/image';
import { useGetLastRecommendations } from '../model/use-get-last-recommendations';
import FeedContainer from './feed-container';
import { Link } from '@nextui-org/react';
interface Props {
  type?: string;
}

export function Feed({ type }: Props) {
  const { recommendations, loading, onPageChange, pagesCount } =
    useGetLastRecommendations(type);

  return (
    <FeedContainer
      recommendations={recommendations}
      loading={loading}
      onPageChange={onPageChange}
      pagesCount={pagesCount}
      emptyRender={
        <div className="mt-10 flex flex-col gap-y-4 items-center justify-center">
          <Image
            className="w-10/12"
            src={'/no-results.svg'}
            alt=""
            width={500}
            height={500}
          />
          <p className="text-xl font-semibold text-center">
            В данной категории ничего не найдено.
          </p>
          <Link href="/">На главную</Link>
        </div>
      }
    />
  );
}
