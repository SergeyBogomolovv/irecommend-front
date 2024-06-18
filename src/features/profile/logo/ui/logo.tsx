'use client';
import { Avatar } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  fileRef: UseFormRegisterReturn;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export default function ProfileLogo({ fileRef, setImageUrl }: Props) {
  return (
    <>
      <input
        id="logoInput"
        type="file"
        accept=".png,.jpeg,.jpg,.webp"
        {...fileRef}
        onChange={(e) => {
          if (e.target.files?.length) {
            setImageUrl(URL.createObjectURL(e.target.files[0]));
            fileRef.onChange(e);
          }
        }}
        hidden
      />
      <Avatar
        onClick={() => document.getElementById('logoInput')?.click()}
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
    </>
  );
}
