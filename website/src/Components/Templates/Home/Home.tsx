import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Loading } from '@nextui-org/react';

import Dots from '@/Components/Dots';
import Container from '@/Components/Container';
import WhatCanDoIt from '@/Components/WhatCanDoIt';
import Banner from '@/Components/Banner';
import Donations from '@/Components/Donations';
import DarkAndLightTheme from '@/Components/DarkAndLightTheme';
import WhyBeautyDesign from '@/Components/WhyBeautyDesign';

import { WrapperStyle } from './style';

const PlaygroundSection = dynamic(
  () => import('@/Components/PlaygroundSection'),
  { suspense: true }
);

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Container className="relative" css={{ zIndex: '$zIndices$1' }}>
        <Dots />
        <Banner />
        <WhyBeautyDesign />
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
        <WhatCanDoIt />
        <DarkAndLightTheme />
        <Donations />
      </Container>
    </WrapperStyle>
  );
};
export default HomeTemplate;
