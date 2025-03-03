import { lazy, Suspense } from 'react';
import { Loading } from '@nextui-org/react';

import Dots from '@/Components/Dots';
import Container from '@/Components/Container';
import WhatCanDoIt from '@/Components/WhatCanDoIt';
import Banner from '@/Components/Banner';
import DarkAndLightTheme from '@/Components/DarkAndLightTheme';
import WhyBeautyDesign from '@/Components/WhyBeautyDesign';

import { WrapperStyle } from './style';
import dynamic from 'next/dynamic';

const PlaygroundSection = lazy(() => import('@/Components/PlaygroundSection'));

const Donations = dynamic(() => import('@/Components/Donations'), {
  ssr: false
});

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Container className="relative" css={{ zIndex: '$zIndices$1' }}>
        <Dots />
        <Banner />
        <WhyBeautyDesign />
        <WhatCanDoIt />
        <Suspense
          fallback={
            <div className="h-96 bg-[#151718] w-full flex items-center justify-center">
              <div className="text-center flex flex-col">
                <Loading />
                Loading example...
              </div>
            </div>
          }
        >
          <PlaygroundSection />
        </Suspense>
        <DarkAndLightTheme />
        <Donations />
      </Container>
    </WrapperStyle>
  );
};
export default HomeTemplate;
