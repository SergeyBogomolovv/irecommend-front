import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { Image } from '@nextui-org/react';

interface IImage {
  url: string;
  id: string;
}

interface Props {
  images: IImage[];
}

const ImagesCarousel = ({ images }: Props) => {
  return (
    <Carousel className="relative">
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
    </Carousel>
  );
};

export default ImagesCarousel;
