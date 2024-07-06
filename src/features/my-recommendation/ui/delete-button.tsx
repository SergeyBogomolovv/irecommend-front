'use client';
import { Button } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import { useDeleteRecommendation } from '../model/use-delete-recommendation';

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const { deleteRecommendation, loading } = useDeleteRecommendation(id);
  return (
    <Button
      isLoading={loading}
      onPress={() => deleteRecommendation()}
      color="danger"
      size="sm"
      className="w-full"
      startContent={<Trash2 className="size-4" />}
    >
      Удалить
    </Button>
  );
};

export default DeleteButton;
