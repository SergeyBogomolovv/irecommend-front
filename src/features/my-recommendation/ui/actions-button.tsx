import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdDeleteOutline } from 'react-icons/md';
import { useDeleteRecommendation } from '../model/use-delete-recommendation';

interface Props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  id: string;
}

export const ActionsButton = ({ setEditMode, id }: Props) => {
  const { deleteRecommendation, loading } = useDeleteRecommendation(id);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isLoading={loading} isIconOnly variant="light">
          <HiDotsHorizontal className="size-6" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Recommendation Actions">
        <DropdownItem
          onPress={() => setEditMode(true)}
          startContent={<FiEdit className="size-4" />}
          key="edit"
        >
          Редактировать
        </DropdownItem>
        <DropdownItem
          onPress={() => deleteRecommendation()}
          startContent={<MdDeleteOutline className="size-4" />}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Удалить
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
