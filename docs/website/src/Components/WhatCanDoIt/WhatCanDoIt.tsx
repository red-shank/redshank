import { Button, Grid, Image, Text } from '@nextui-org/react';
import Title from '@/Components/Title';
import { REPO_NAME } from '@/config';
import Link from 'next/link';
import ROUTES from '@/config/routes';

const WhatCanDoIt = () => {
  return (
    <Grid.Container
      gap={4}
      alignItems="center"
      css={{
        minHeight: 500
      }}
    >
      <Grid xs={12} sm={4} justify="center">
        <Image
          width={400}
          height={400}
          src="/brand.svg"
          alt="Default Image"
          objectFit="contain"
        />
      </Grid>
      <Grid xs={12} sm={8} alignItems="center" direction="column">
        <Title className="text-center">
          <code className="text-6xl">Sx</code> props for create beautiful apps very fast
        </Title>
        <Text size="$2xl" className="text-center w-full mb-4">
          With{' '}
          <Text as="strong" color="warning" transform="capitalize">
            {REPO_NAME}
          </Text>{' '}
          You can build UI by directly passing the styles to the root of the
          components or by sx prop these styles use customizable spacing and can
          access the theme, such as for the color palette.
        </Text>
        <Button className="mb-5">
          <Link href={ROUTES.SX_PROPS.path} className="text-current">
            View More
          </Link>
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default WhatCanDoIt;
