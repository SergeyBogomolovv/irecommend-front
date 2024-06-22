'use client';
import { type CarouselApi } from '@/shared/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/shared/ui/carousel';
import { Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface IImage {
  url: string;
  id: string;
}

interface Props {
  images: IImage[];
}

const ImagesCarousel = ({ images }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image?.id}>
              <Image
                key={image?.id}
                alt="Card image"
                className="object-cover rounded-xl w-full h-full aspect-auto"
                src={image?.url}
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselNext />
            <CarouselPrevious />
          </>
        )}
      </Carousel>
      {images.length > 1 && (
        <div className="pt-2 text-center text-sm text-muted-foreground">
          {current} из {count}
        </div>
      )}
    </div>
  );
};

export default ImagesCarousel;
