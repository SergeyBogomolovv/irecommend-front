'use client';
import Image from 'next/image';
import { useGetFavorites } from '../model/use-get-favorites';
import FeedContainer from './feed-container';
import { Link } from '@nextui-org/react';

export function Favorites() {
  const { recommendations, loading, onPageChange, pagesCount } =
    useGetFavorites();

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
            src={'/favorite.svg'}
            alt=""
            width={500}
            height={500}
          />
          <p className="text-xl font-semibold">В избранном пока что пусто.</p>
          <Link href="/">Смотреть рекомендации</Link>
        </div>
      }
    />
  );
}
