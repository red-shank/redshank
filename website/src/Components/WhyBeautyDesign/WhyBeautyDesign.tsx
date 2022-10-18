import { Grid, Text } from '@nextui-org/react';

import CardWhy from '@/Components/CardWhy';
import {
  DesktopIcon,
  CodeIcon,
  PaletteIcon,
  HappyIcon
} from '@/Components/Icons';
import Title from '@/Components/Title';

import { WrapperStyle } from './style';
import { useTranslation } from 'next-i18next';

type WhyBeautyDesignProps = {};
const WhyBeautyDesign = (props: WhyBeautyDesignProps) => {
  const { t } = useTranslation();
  return (
    <WrapperStyle className="mt-8 mb-8">
      <Title className="text-center">
        {t(
          'home:why-section.title',
          'Why '
        )}
        <Text
          as="span"
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%'
          }}
        >
          Beauty Design?
        </Text>
      </Title>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<DesktopIcon />}
            title={t(
              'home:why-section.card1.title',
              'Beautiful Design'
            )}
            content={t(
              'home:why-section.card1.description',
              'Create bright, beautiful and full of life apps, we have 25+ reusable components.'
              )}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<CodeIcon />}
            title={t(
              'home:why-section.card2.title',
              'Easy to use'
              )}
            content={t(
              'home:why-section.card2.description',
              'Beautiful and vibrant applications with just one import, reduce development times and let us design for you.'
            )}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<PaletteIcon />}
            title={t(
              'home:why-section.card3.title',
              'Customizable'
            )}

            content={t(
              'home:why-section.card3.description',
              'Customize each element of the components and change their appearance in dark and light mode.'
            )}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <CardWhy
            icon={<HappyIcon />}
            title={t(
              'home:why-section.card4.title',
              'Progressive updates'
            )}
            content={t(
              'home:why-section.card4.description',
              'We try to keep the library up to date and compatible with the latest versions of React, React Native and Expo.'
            )}
          />
        </Grid>
      </Grid.Container>
    </WrapperStyle>
  );
};

export default WhyBeautyDesign;
