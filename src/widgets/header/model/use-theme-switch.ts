'use client';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
export function useThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const isSelected = theme === 'light' || isSSR;

  return { onClick, isLigthTheme: !isSelected || isSSR };
}
