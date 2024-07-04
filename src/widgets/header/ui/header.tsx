'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react';
import Image from 'next/image';
import { Account } from './desktop/account';
import MobileList from './mobile/mobile-list';
import { Search } from '@/features/search';
import { ThemeSwitch } from '@/shared/ui/theme-switch';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="space-x-2">
          <Image src={'/logo.svg'} width={23} height={23} alt="logo" />
          <Link href="/" className="font-bold text-inherit">
            IRECOMMEND
          </Link>
        </NavbarBrand>
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

      <MobileList setIsMenuOpen={setIsMenuOpen} />

      <NavbarMenuToggle className="sm:hidden" />
    </Navbar>
  );
}
