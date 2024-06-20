import { Button, Tooltip } from '@nextui-org/react';
import { TbMessage2Plus } from 'react-icons/tb';

export function CreateRecommendationButton() {
  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Создать рекомендацию</div>
          <div className="text-tiny">
            Вы перейдете на страницу создания новой рекомендации
          </div>
        </div>
      }
    >
      <Button
        isIconOnly
        radius="full"
        size="lg"
        className="fixed bottom-0 z-[11] right-0 mb-4 mr-4 sm:mb-6 md:mb-8 sm:mr-6 md:mr-8 bg-gradient-to-tr from-sky-500 to-blue-800 text-white shadow-md border-1"
      >
        <TbMessage2Plus className="size-8" />
      </Button>
    </Tooltip>
  );
}
