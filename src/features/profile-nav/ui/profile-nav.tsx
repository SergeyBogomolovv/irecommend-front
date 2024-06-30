'use client';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { links } from '../model/links';

export function ProfileNav() {
  const pathName = usePathname();
  return (
    <Breadcrumbs
      size="md"
      classNames={{
        list: 'gap-3 mx-auto',
      }}
      itemClasses={{
        item: [
          'px-2 py-0.5 border-small border-default-400 rounded-small',
          'data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors',
          'data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100',
        ],
        separator: 'hidden',
      }}
    >
      {links.map((link) => (
        <BreadcrumbItem
          key={link.key}
          isCurrent={pathName === link.route}
          href={link.route}
        >
          {link.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
