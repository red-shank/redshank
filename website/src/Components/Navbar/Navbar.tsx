import {
  Navbar as NextNavbar,
  Input,
  Text,
  Image,
  Button,
  Grid,
  Badge
} from '@nextui-org/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useTheme as useNextTheme } from 'next-themes';

import ROUTES from '@/config/routes';
import Aside from '@/Components/Aside';
import {
  GithubIcon,
  SunIcon,
  SearchIcon,
  DiscordIcon
} from '@/Components/Icons';
import { AStyle, onlyDesk, onlyMdMobile, onlyMobile } from './style';

type NavbarProps = {
  isActive?: string;
  contentFit?: boolean;
};

type NavbarItemProps = {
  Component: any;
  href: string;
  children: ReactNode;
  [key: string]: any;
};

const RenderItem = ({
  Component,
  href,
  children,
  ...rest
}: NavbarItemProps) => {
  return (
    <Link href={href} passHref>
      <Component {...rest}>{children}</Component>
    </Link>
  );
};

const RenderLink = ({
  href,
  children,
  css
}: Omit<NavbarItemProps, 'Component'>) => {
  return (
    <Link href={href} passHref>
      <AStyle
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center align-center"
        css={css}
      >
        {children}
      </AStyle>
    </Link>
  );
};

const menu = [ROUTES.HOME, ROUTES.DOCS, ROUTES.COMPONENTS, ROUTES.ABOUT];

const Navbar = ({ isActive, contentFit, ...props }: NavbarProps) => {
  const { setTheme, theme } = useNextTheme();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    router
      .replace(
        {
          pathname: router.pathname,
          query: router.query
        },
        undefined,
        { locale: router.locale === 'es' ? 'en' : 'es' }
      )
      .then();
  };

  return (
    <NextNavbar
      variant="floating"
      className={contentFit ? 'max-w-8xl mx-auto rounded-2xl' : 'rounded-2xl'}
      css={{
        background: 'transparent'
      }}
      containerCss={{ maxWidth: '100%', borderRadius: '$base' }}
      {...props}
    >
      <Link href={ROUTES.HOME.path} passHref>
        <a>
          <NextNavbar.Brand>
            <Image
              src="/brand.svg"
              alt="Default Image"
              width={50}
              height={50}
            />
            <Badge color="warning" content="Preview" shape="rectangle">
              <Text b className="text-2xl">
                Beauty Design
              </Text>
            </Badge>
          </NextNavbar.Brand>
        </a>
      </Link>
      <NextNavbar.Content css={onlyDesk} variant="underline">
        {menu.map((item) => (
          <RenderItem
            href={item.path}
            key={item.name}
            Component={NextNavbar.Link}
            itemCss={{ fontWeight: '$bold' }}
            isActive={item.name === isActive}
          >
            {item[i18n.language as LocaleType] || item.name}
          </RenderItem>
        ))}

        {/*
        <Link href="/" passHref>
          <NextNavbar.Link itemCss={{ fontWeight: '$bold' }}>
            Templates
          </NextNavbar.Link>
        </Link>
        */}
      </NextNavbar.Content>

      <NextNavbar.Content>
        <NextNavbar.Content css={onlyDesk}>
          <Grid.Container gap={2} className="w-auto">
            <Button
              auto
              onClick={toggleLanguage}
              className="h-auto bg-transparent p-0 px-2"
              css={{
                color: '$text',
                fontSize: '1.1rem'
              }}
            >
              <strong>{router.locale === 'es' ? 'EN' : 'ES'}</strong>
            </Button>

            <RenderLink href={ROUTES.DISCORD.path}>
              <Button
                auto
                icon={<DiscordIcon />}
                className="h-auto bg-transparent text-2xl"
                css={{
                  color: '$text'
                }}
              />
            </RenderLink>

            <RenderLink href={ROUTES.GITHUB.path}>
              <Button
                auto
                icon={<GithubIcon />}
                className="h-auto bg-transparent text-2xl"
                css={{
                  color: '$text'
                }}
              />
            </RenderLink>
            <Button
              auto
              onClick={toggleTheme}
              icon={<SunIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </Grid.Container>
          <Input
            bordered
            placeholder={t('common:navbar.search', 'Search...')}
            contentRight={<SearchIcon />}
          />
        </NextNavbar.Content>

        <Grid.Container css={onlyMobile} gap={2}>
          <Button
            auto
            onClick={toggleLanguage}
            className="h-auto bg-transparent p-0 px-2"
            css={{
              color: '$text',
              fontSize: '1.1rem'
            }}
          >
            <strong>{router.locale === 'es' ? 'EN' : 'ES'}</strong>
          </Button>

          <RenderLink href={ROUTES.DISCORD.path} css={onlyMdMobile}>
            <Button
              auto
              icon={<DiscordIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </RenderLink>
          <RenderLink href={ROUTES.GITHUB.path} css={onlyMdMobile}>
            <Button
              auto
              icon={<GithubIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </RenderLink>
          <Button
            auto
            onClick={toggleTheme}
            icon={<SunIcon />}
            className="h-auto bg-transparent text-2xl"
            css={{
              color: '$text'
            }}
          />
          <NextNavbar.Toggle aria-label="toggle navigation" />
        </Grid.Container>

        <NextNavbar.Collapse css={{ background: '$background' }}>
          <NextNavbar.CollapseItem></NextNavbar.CollapseItem>
          <NextNavbar.CollapseItem className="w-full">
            <Input
              bordered
              css={{ width: '100%' }}
              placeholder="Search..."
              contentRight={<SearchIcon />}
            />
          </NextNavbar.CollapseItem>

          <Aside t={t} titleClass="mt-3" />
        </NextNavbar.Collapse>
      </NextNavbar.Content>
    </NextNavbar>
  );
};

export default Navbar;
