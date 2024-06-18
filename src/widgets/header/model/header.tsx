import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { ThemeSwitch } from '@/features/theme-switch/ui/theme-switch';
import { Divider } from '@nextui-org/divider';
import ViewerInfo from '../ui/viewer-info';
import Logo from '../ui/logo';
import { Search } from '@/features/search';
import { CreateRecommendation } from '@/features/recommendation/create-recommendation';

export function Header() {
  return (
    <>
      <Navbar>
        <NavbarContent justify="start">
          <Logo />
          <NavbarItem className="hidden sm:flex">
            <Search />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <CreateRecommendation />
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>

          <ViewerInfo />
        </NavbarContent>
      </Navbar>
      <Divider />
    </>
  );
}
