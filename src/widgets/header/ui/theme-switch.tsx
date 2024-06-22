'use client';
import { Button } from '@nextui-org/react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';
import { useThemeSwitch } from '../model/use-theme-switch';

export function ThemeSwitch() {
  const { isLigthTheme, onClick } = useThemeSwitch();

  return (
    <Button onClick={onClick} isIconOnly variant="light">
      {isLigthTheme ? (
        <MdOutlineWbSunny size={22} />
      ) : (
        <IoMoonOutline size={22} />
      )}
    </Button>
  );
}
