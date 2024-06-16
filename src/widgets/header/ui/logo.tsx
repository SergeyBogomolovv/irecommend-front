import Image from 'next/image';
import { NavbarBrand, Link } from '@nextui-org/react';

export default function Logo() {
  return (
    <NavbarBrand className="space-x-2">
      <Image src={'/logo.svg'} width={23} height={23} alt="logo" />
      <Link href="/" className="font-bold text-inherit">
        IRECOMMEND
      </Link>
    </NavbarBrand>
  );
}
