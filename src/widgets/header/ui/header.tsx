import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from '@nextui-org/react';
import Image from 'next/image';
import { ThemeSwitch } from '@/features/theme-switch/theme-switch';
import { IoSearchOutline } from 'react-icons/io5';
import { Divider } from '@nextui-org/divider';

export default function Header() {
  return (
    <>
      <Navbar>
        <NavbarContent justify="start">
          <NavbarBrand className="space-x-2">
            <Image src={'/logo.svg'} width={23} height={23} alt="logo" />
            <Link href="/" className="font-bold text-inherit">
              IRECOMMEND
            </Link>
          </NavbarBrand>
          <NavbarItem className="hidden sm:flex">
            <Input
              radius="lg"
              placeholder="Поиск..."
              startContent={
                <IoSearchOutline className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="flat">
              <ThemeSwitch />
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Вход</Link>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} color="primary" href="/register" variant="flat">
              Регистрация
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Divider />
    </>
  );
}
