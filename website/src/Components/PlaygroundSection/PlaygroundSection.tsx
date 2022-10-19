import { Grid, Text } from '@nextui-org/react';
import Playground from '@/Components/Playground';
import Title from '@/Components/Title';

import { basicExample } from './example';
import { useTranslation } from 'next-i18next';

const PlaygroundSection = () => {
  const { t } = useTranslation();
  return (
    <Grid.Container
      justify="center"
      alignItems="center"
      css={{ paddingTop: 50, paddingBottom: 150 }}
    >
      <Grid xs={12} alignItems="center" direction="column">
        <Title className="text-center">
          {t(
            'home:playground.title',
            'Create beautiful apps very fast'
          )}
        </Title>
        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          {t(
            'home:playground.description',
            'Building apps in React Native has never been so easy.'
          )}
        </Text>
      </Grid>

      <Grid xs={12} sm={10} justify="center">
        <Playground code={basicExample} />
      </Grid>
    </Grid.Container>
  );
};

export default PlaygroundSection;
