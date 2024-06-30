import { Button, Tooltip } from '@nextui-org/react';
import { Plus } from 'lucide-react';

interface Props {
  onOpen: () => void;
}

export function TriggerButton({ onOpen }: Props) {
  return (
    <Tooltip content={'Добавить контакт'}>
      <Button variant="flat" isIconOnly size="sm" onPress={onOpen}>
        <Plus />
      </Button>
    </Tooltip>
  );
}
