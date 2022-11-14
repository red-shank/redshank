import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Aside from '@/Components/Aside';
import Footer from '@/Components/Footer';
import HeadSeo from '@/Components/HeadSeo';
import { useComponent } from '@/context/components';
import NextAndPrevStep from '@/Components/NextAndPrevStep';
import { getHeadings, Heading } from '@/utils/getHeadings';
import TableOfContent from '@/Components/TableOfContent/TableOfContent';
import {
  AsideStyle,
  WrapperStyle,
  ContentStyle,
  BodyStyle,
  BreadStyle
} from './style';

type LayoutProps = {
  children?: ReactNode;
  css?: any;
};

const LayoutContainer = ({ children, ...props }: LayoutProps) => {
  const routes = useRouter();
  const { t } = useTranslation();
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    setHeadings(getHeadings());
  }, [routes]);

  const title = useMemo<string>(() => {
    const isComponent = routes.pathname.includes('components');
    if (isComponent) {
      const [_, key] = routes.pathname.split('components');
      return key.replace('/', '');
    }

    const [_, key] = routes.pathname.split('docs');
    return key.replace('/', '');
  }, [routes.pathname]);

  const { previousComponent, nextComponent, currentComponent } =
    useComponent(title);

  return (
    <WrapperStyle
      className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-8"
      {...props}
    >
      <HeadSeo title={currentComponent?.name} description="Hooks utilities." />
      <AsideStyle className="hidden lg:block fixed z-20 inset-0 top-[88px] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
        <nav className="lg:text-sm lg:leading-6 relative h-full px-5">
          <Aside t={t} />
        </nav>
      </AsideStyle>

      <BodyStyle className="lg:pl-[19.5rem]">
        <ContentStyle className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[13.2rem] xl:pr-16">
          {children}
          <div className="h-20" />
          <div className="flex justify-between items-end">
            {previousComponent ? (
              <NextAndPrevStep
                isPrev
                title={previousComponent?.name}
                href={previousComponent?.path}
              />
            ) : (
              <span />
            )}
            {nextComponent ? (
              <NextAndPrevStep
                title={nextComponent?.name}
                href={nextComponent?.path}
              />
            ) : (
              <span />
            )}
          </div>
          <Footer className="rounded p-4" completeFooter={false} />

          <BreadStyle className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
            <div className="px-8">
              <TableOfContent headings={headings} />
            </div>
          </BreadStyle>
        </ContentStyle>
      </BodyStyle>
    </WrapperStyle>
  );
};

export default LayoutContainer;
