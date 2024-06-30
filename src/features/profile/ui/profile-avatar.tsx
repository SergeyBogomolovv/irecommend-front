'use client';
import { Avatar, Badge, Tooltip } from '@nextui-org/react';
import { useUpdateAvatar } from '../model/use-update-avatar';

interface Props {
  name: string;
  src: string;
}

export const ProfileAvatar = ({ name, src }: Props) => {
  const { loading, handleUploadFile, inputRef } = useUpdateAvatar();
  return (
    <Badge content="" color="success" shape="circle" placement="bottom-right">
      <Tooltip content={'Сменить аватарку'}>
        <div
          className="relative w-28 h-28 group cursor-pointer rounded-full"
          onClick={() => inputRef.current?.click()}
        >
          <div className="bg-black/50 w-full rounded-full h-full z-[12] absolute top-0 bottom-0 group-hover:block hidden" />
          <Avatar
            src={src}
            className="w-full h-full text-6xl"
            name={name[0]}
            isFocusable
          />
          <input
            disabled={loading}
            accept=".png,.jpeg,.jpg,.webp"
            type="file"
            ref={inputRef}
            onChange={handleUploadFile}
            hidden
          />
        </div>
      </Tooltip>
    </Badge>
  );
};
