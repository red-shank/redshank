import { Grid, Text } from '@nextui-org/react';
import Frame from '@/Components/Frame';
import Title from '@/Components/Title';

const DarkAndLightTheme = () => {
  return (
    <Grid.Container
      alignItems="center"
      className="my-10"
      css={{
        minHeight: 'calc(100vh - 76px)'
      }}
    >
      <Grid xs={12} sm={8} alignItems="center" direction="column">
        <Title className="text-center" withMaxWidth>
          Compatibility With
          <Text
            as="span"
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 80%'
            }}
          >
            Dark
          </Text>
          And{' '}
          <Text
            as="span"
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 80%'
            }}
          >
            Light
          </Text>{' '}
          Mode
        </Title>
        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          Invert the colors of the texts, backgrounds to be able to display the
          info correctly and automatically.
        </Text>
      </Grid>

      <Grid xs={12} sm={4} justify="center">
        <Frame isVideo src="/assets/redshank-dark-mode-v1.mp4" />
      </Grid>
    </Grid.Container>
  );
};

export default DarkAndLightTheme;
