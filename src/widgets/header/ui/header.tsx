import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { ThemeSwitch } from '@/features/theme-switch/ui/theme-switch';
import { Divider } from '@nextui-org/divider';
import Logo from './logo';
import { Search } from '@/features/search';
import { Account } from './account';

export function Header() {
  return (
    <>
      <Navbar>
        <NavbarContent justify="start">
          <Logo />
          <NavbarItem>
            <Search />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <ThemeSwitch />
          <Account />
        </NavbarContent>
      </Navbar>
      <Divider />
    </>
  );
}
