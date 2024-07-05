import Image from 'next/image';
import React from 'react';

export const NotFound = () => {
  return (
    <main className="w-full h-full grow flex items-center justify-center">
      <Image
        src={'/not-found.svg'}
        width={1000}
        height={1000}
        alt="not-found"
      />
    </main>
  );
};
