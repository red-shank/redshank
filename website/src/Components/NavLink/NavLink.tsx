import { ReactNode, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ItemStyle } from './style';

type NavLinkProps = {
  href: string;
  className?: string;
  activeCss: any;
  children?: ReactNode;
};

const NavLink = ({
  href,
  children,
  className = '',
  activeCss = {}
}: NavLinkProps) => {
  const { pathname, query, locale } = useRouter();

  const isActive = useMemo(() => {
    const withSlug = pathname.includes('[...slug]');
    if (!withSlug) {
      return pathname.startsWith(href);
    }

    const newPathname = `${pathname.replace(
      '[...slug]',
      query.slug as string
    )}`;

    return newPathname.startsWith(href);
  }, [pathname, query, href]);

  return (
    <Link href={href} locale={locale} passHref>
      <ItemStyle
        className={`before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded ${className}`}
        css={isActive ? activeCss : {}}
      >
        {children}
      </ItemStyle>
    </Link>
  );
};

export default NavLink;
