'use client';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const isSelected = theme === 'light' || isSSR;

  return (
    <Button onClick={onClick} isIconOnly variant="light">
      {!isSelected || isSSR ? (
        <MdOutlineWbSunny size={22} />
      ) : (
        <IoMoonOutline size={22} />
      )}
    </Button>
  );
}
