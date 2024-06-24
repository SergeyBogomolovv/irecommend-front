'use client';
import { type CarouselApi } from '@/shared/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/shared/ui/carousel';
import { ModalImage } from '@/shared/ui/modal-image';
import { useEffect, useState } from 'react';

interface Props {
  images: string[];
}

const ImagesCarousel = ({ images }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((src) => (
            <CarouselItem key={src} className="aspect-auto">
              <ModalImage src={src} />
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
          {current} из {images.length}
        </div>
      )}
    </div>
  );
};

export default ImagesCarousel;
