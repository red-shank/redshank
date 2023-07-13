import { ReactNode } from 'react';
import Link from 'next/link';

type NavbarItemProps = {
  Component: any;
  href: string;
  children: ReactNode;
  [key: string]: any;
};

export default function RenderItem({
  Component,
  href,
  children,
  ...rest
}: NavbarItemProps) {
  return (
    <Link href={href} passHref>
      <Component {...rest}>{children}</Component>
    </Link>
  );
}
