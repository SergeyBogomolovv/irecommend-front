import {
  Modal,
  ModalContent,
  useDisclosure,
  Image,
  Button,
} from '@nextui-org/react';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteImage } from '../model/use-delete-image';
import { Image as IImage } from '@/shared/graphql/graphql';

interface Props {
  image: IImage;
  editable?: boolean;
}

export const ModalImage = ({ image, editable }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { loading, deleteImage } = useDeleteImage(image.id);

  return (
    <>
      <div className="relative rounded-md">
        {editable && (
          <Button
            isIconOnly
            isLoading={loading}
            variant="flat"
            size="sm"
            className="absolute bottom-2 right-2 z-50"
            onPress={() => deleteImage()}
          >
            <MdDeleteOutline className="size-4" />
          </Button>
        )}
        <Image
          alt="image"
          onClick={onOpen}
          src={image.url}
          className="object-cover rounded-xl w-full h-full cursor-pointer aspect-auto"
          width={500}
          height={500}
        />
      </div>
      <Modal
        backdrop="blur"
        size="xl"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <Image
              isBlurred
              alt="image"
              onClick={onOpen}
              src={image.url}
              className="object-cover rounded-xl w-full h-full"
              width={1000}
              height={1000}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
