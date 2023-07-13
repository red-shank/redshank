import dynamic from 'next/dynamic';

import Dots from '@/Components/Dots';
import Container from '@/Components/Container';
import WhatCanDoIt from '@/Components/WhatCanDoIt';

import { WrapperStyle } from './style';

const DarkAndLightTheme = dynamic(
  () => import('@/Components/DarkAndLightTheme'),
  { suspense: true }
);
const Donations = dynamic(() => import('@/Components/Donations'), {
  suspense: true
});
const Banner = dynamic(() => import('@/Components/Banner'), { suspense: true });
const WhyBeautyDesign = dynamic(() => import('@/Components/WhyBeautyDesign'), {
  suspense: true
});
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
        <PlaygroundSection />
        <WhatCanDoIt />
        <DarkAndLightTheme />
        <Donations />
      </Container>
    </WrapperStyle>
  );
};
export default HomeTemplate;
