'use client';
import { useViewer } from '@/entities/viewer';
import { Button, Tooltip } from '@nextui-org/react';
import { CiBookmarkPlus } from 'react-icons/ci';
interface Props {
  onOpen: () => void;
}
export function TriggerButton({ onOpen }: Props) {
  const { notAuthenticated } = useViewer();

  return (
    <Tooltip content={'Создать рекомендацию'}>
      <Button
        isDisabled={notAuthenticated}
        onPress={onOpen}
        isIconOnly
        radius="full"
        size="lg"
        type="submit"
        color="primary"
        variant="shadow"
        className="size-16 fixed bottom-0 z-[11] right-0 mb-4 mr-4 sm:mb-6 md:mb-8 sm:mr-6 md:mr-8"
      >
        <CiBookmarkPlus className="size-8" />
      </Button>
    </Tooltip>
  );
}
