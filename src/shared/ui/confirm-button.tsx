'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

interface Props {
  title: string;
  description: string;
  onComplete: () => any;
  label: string;
  loading?: boolean;
}

export function ConfirmButton({
  title,
  description,
  onComplete,
  label,
  loading,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="w-full" color="danger" onPress={onOpen}>
        {title}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Отмена
                </Button>
                <Button
                  isLoading={loading}
                  variant="light"
                  color="danger"
                  onPress={() => {
                    onComplete();
                    onClose();
                  }}
                >
                  {label}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
