import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Logo from './logo';
import { Account } from './account';
import MobileList from './mobile-list';
import { ThemeSwitch } from './theme-switch';
import { Search } from '@/features/search';

export function Header() {
  return (
    <Navbar isBordered position="sticky">
      <NavbarContent justify="start">
        <NavbarItem>
          <Logo />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="sm:flex hidden">
        <NavbarItem>
          <Search />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <Account />
      </NavbarContent>

      <MobileList />

      <NavbarMenuToggle className="sm:hidden" />
    </Navbar>
  );
}
