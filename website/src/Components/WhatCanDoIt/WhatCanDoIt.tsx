import { Button, Grid, Image, Text } from '@nextui-org/react';
import Title from '@/Components/Title';
import { useTranslation } from 'next-i18next';
import { REPO_NAME } from '@/config';

type WhatCanDoItProps = {};

const WhatCanDoIt = (props: WhatCanDoItProps) => {
  const { t } = useTranslation();
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
          {t(
            'home:can-do-it.title',
            'Reusable Components and easy to implement'
          )}
        </Title>
        <Text size="$2xl" className="text-center w-full mb-4">
          {t(
            'home:can-do-it.with',
            'With '
          )}
          <Text as="strong" color="warning" transform="capitalize">
            {REPO_NAME}
          </Text>{' '}
          {t(
            'home:can-do-it.description',
            'you can use any component with few lines of code and with great customization, and most importantly very easy to use and understand.'
          )}

        </Text>
        <Button className="mb-5"> {t(
          'home:can-do-it.components',
          'Components'
        )}</Button>
      </Grid>
    </Grid.Container>
  );
};

export default WhatCanDoIt;
