import { Modal, ModalContent, useDisclosure, Image } from '@nextui-org/react';

interface Props {
  src: string;
}

export const ModalImage = ({ src }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Image
        alt="image"
        onClick={onOpen}
        src={src}
        className="object-cover rounded-xl w-full h-full cursor-pointer aspect-auto"
        width={500}
        height={500}
      />
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
              src={src}
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
