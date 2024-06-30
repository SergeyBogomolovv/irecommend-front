import { Button, Tooltip } from '@nextui-org/react';
import { LiaUserEditSolid } from 'react-icons/lia';

interface Props {
  onOpen: () => void;
}

export function TriggerButton({ onOpen }: Props) {
  return (
    <Tooltip content={'Редактировать профиль'}>
      <Button
        onPress={onOpen}
        isIconOnly
        variant="light"
        className="absolute top-4 right-4 z-[11]"
      >
        <LiaUserEditSolid className="size-6" />
      </Button>
    </Tooltip>
  );
}
