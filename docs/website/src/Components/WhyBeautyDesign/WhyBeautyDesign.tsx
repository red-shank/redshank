import { Grid, Text } from '@nextui-org/react';

import CardWhy from '@/Components/CardWhy';
import {
  DesktopIcon,
  CodeIcon,
  PaletteIcon,
  HappyIcon
} from '@/Components/Icons';
import Title from '@/Components/Title';
import { REPO_NAME } from '@/config';

import { WrapperStyle } from './style';

const WhyBeautyDesign = () => {
  return (
    <WrapperStyle className="mt-8 mb-8">
      <Title className="text-center">
        Why{' '}
        <Text
          as="span"
          css={{
            textTransform: 'capitalize',
            textGradient: '45deg, $purple600 -20%, $pink600 100%'
          }}
        >
          {REPO_NAME}?
        </Text>
      </Title>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<DesktopIcon />}
            title={'Beautiful Design'}
            content={
              'Create bright, beautiful and full of life apps, we have 25+ reusable components.'
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<CodeIcon />}
            title={'Easy to use'}
            content={
              'Beautiful and vibrant applications with just one import, reduce development times and let us design for you.'
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<PaletteIcon />}
            title={'Customizable'}
            content={
              'Customize each element of the components and change their appearance in dark and light mode.'
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<HappyIcon />}
            title={'Progressive updates'}
            content={
              'We try to keep the library up to date and compatible with the latest versions of React, React Native and Expo.'
            }
          />
        </Grid>
      </Grid.Container>
    </WrapperStyle>
  );
};

export default WhyBeautyDesign;
