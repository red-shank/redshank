import Link from 'next/link';
import { Button, Grid, Text } from '@nextui-org/react';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import Frame from '@/Components/Frame';
import BlockCode from '@/Components/BlockCode';
import { REPO_NAME } from '@/config';

const Banner = () => {
  return (
    <Grid.Container
      gap={4}
      alignItems="center"
      css={{
        minHeight: 'calc(100vh - 76px)'
      }}
    >
      <Grid xs={12} sm={8} alignItems="center" direction="column">
        <Title
          h1
          className="text-center"
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
            '@sm': {
              fontSize: '$7xl'
            }
          }}
        >
          @{REPO_NAME} Framework Component for React Native
        </Title>
        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          Create your apps in React Native in a simple, fast and beautiful way.
        </Text>

        <BlockCode
          isInline
          className="mt-4"
          language="bash"
          code="yarn add @redshank/native"
        />

        <Button
          className="mb-5"
          css={{
            background: 'linear-gradient(45deg, $yellow600 -20%, $red600 100%)'
          }}
        >
          <Link href={ROUTES.DOCS.path} passHref>
            <a className="text-current">Get started</a>
          </Link>
        </Button>
      </Grid>

      <Grid xs={12} sm={4} justify="center">
        <Frame isVideo src="/assets/redshank-v1.mp4" />
      </Grid>
    </Grid.Container>
  );
};

export default Banner;
