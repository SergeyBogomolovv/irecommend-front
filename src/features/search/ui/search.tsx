import { Input, Tooltip } from '@nextui-org/react';
import { IoSearchOutline } from 'react-icons/io5';

export function Search() {
  return (
    <Input
      isClearable
      radius="lg"
      placeholder="Поиск..."
      startContent={
        <Tooltip content={'Найти'}>
          <button>
            <IoSearchOutline className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          </button>
        </Tooltip>
      }
    />
  );
}
