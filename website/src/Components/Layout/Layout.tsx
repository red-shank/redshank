import { ReactNode } from 'react';
import { Image, Link, Text } from '@nextui-org/react';

import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import LayoutContainer from '@/Components/LayoutContainer';
import Title from '@/Components/Title';
import ROUTES from '@/config/routes';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation();
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
                {t('common:footer.community', 'Community')}:
              </Title>
              <Text>

                {t('common:layout.description', 'We\'re excited to see the community adopt Beauty Design, raise\n' +
                  '                issues, and provide feedback. Whether it\'s a feature request,\n' +
                  '                bug report, or a project to showcase, please get involved!')}
              </Text>

              <Link
                isExternal
                target="_blank"
                href={ROUTES.DISCORD.path}
                className="mt-4 mb-2 before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded"
              >
                Discord
              </Link>
              <Link
                isExternal
                target="_blank"
                href={ROUTES.GITHUB.path}
                className="before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded"
              >
                Github
              </Link>

              <Title level={2} className="mt-12">
                {t('common:layout.contribute', 'Contributing')}:
              </Title>
              <Text>
                {t('common:layout.contribuiteDescription1', 'PR\'s on NextUI are always welcome, please see our ')}
                <Link href="#" className="inline">
                  {t('common:layout.contribuiteDescription2', ' contribution guidelines ')}
                </Link>
                {t('common:layout.contribuiteDescription3', 'to learn how you can contribute to this project.')}
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
