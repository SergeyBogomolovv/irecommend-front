import { Button } from '@nextui-org/react';
import { useAddImage } from '../model/use-add-image';
import { GoPaperclip } from 'react-icons/go';

interface Props {
  recommendationId: string;
}

export const AddImageButton = ({ recommendationId }: Props) => {
  const { inputRef, handleUploadFile, loading, onAddImageClick } =
    useAddImage(recommendationId);
  return (
    <>
      <input
        multiple
        disabled={loading}
        accept=".png,.jpeg,.jpg,.webp"
        type="file"
        ref={inputRef}
        onChange={handleUploadFile}
        hidden
      />
      <Button
        onClick={onAddImageClick}
        type="button"
        isIconOnly
        size="sm"
        isLoading={loading}
      >
        <GoPaperclip className="size-5" />
      </Button>
    </>
  );
};
