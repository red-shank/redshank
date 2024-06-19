import { ReactNode } from 'react';
import { Image, Link, Text } from '@nextui-org/react';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import Footer from '@/Components/Footer';
import LayoutContainer from '@/Components/LayoutContainer';
import Navbar from '@/Components/Navbar';
import { PACKAGE_NAME } from '@/config';

type LayoutProps = {
  children?: ReactNode;
  isActive?: string;
  contentFit?: boolean;
  withAside?: boolean;
  withFooter?: boolean;
  background?: 'bg1' | 'bg2';
};

const Layout = ({
  children,
  isActive,
  background = 'bg1',
  withFooter = true,
  withAside = true,
  contentFit = false
}: LayoutProps) => {
  return (
    <>
      <Navbar contentFit={contentFit} isActive={isActive} />

      <Image
        height="150vh"
        width="100%"
        objectFit="cover"
        alt="Default Image"
        className="fixed top-0 right-0"
        src={background === 'bg1' ? '/bg.svg' : '/bg2.svg'}
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          objectPosition: '60%'
        }}
      />

      {withAside ? (
        <LayoutContainer>
          {children}
          {!withFooter && (
            <>
              <Title level={2} className="mt-12">
                Community:
              </Title>
              <Text>
                We're excited to see the community adopt <b>{PACKAGE_NAME}</b>,
                raise issues, and provide feedback. Whether it's a feature
                request, bug report, or a project to showcase, please get
                involved!
              </Text>

              {/*<Link*/}
              {/*  isExternal*/}
              {/*  target="_blank"*/}
              {/*  href={ROUTES.DISCORD.path}*/}
              {/*  className="mt-4 mb-2 before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded"*/}
              {/*>*/}
              {/*  Discord*/}
              {/*</Link>*/}
              <Link
                isExternal
                target="_blank"
                href={ROUTES.GITHUB.path}
                className="before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded"
              >
                Github
              </Link>

              <Title level={2} className="mt-12">
                Contributing:
              </Title>
              <Text>
                PR's on <b>{PACKAGE_NAME}</b> are always welcome, please see our
                <Link href="#" className="inline">
                  {' '}
                  contribution guidelines
                </Link>{' '}
                to learn how you can contribute to this project.
              </Text>
            </>
          )}
        </LayoutContainer>
      ) : (
        children
      )}

      {withFooter && <Footer />}
    </>
  );
};

export default Layout;
