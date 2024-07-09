'use client';
import { type CarouselApi } from '@/shared/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/shared/ui/carousel';
import { ModalImage } from '@/features/images/ui/modal-image';
import { useEffect, useState } from 'react';
import { Image } from '@/shared/graphql/graphql';

interface Props {
  images: Image[];
  isEditable?: boolean;
}

export const ImagesCarousel = ({ images, isEditable }: Props) => {
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
          {images.map((image) => (
            <CarouselItem key={image.id} className="aspect-auto">
              <ModalImage image={image} editable={isEditable} />
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
