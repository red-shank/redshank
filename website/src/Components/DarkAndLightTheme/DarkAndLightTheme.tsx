import { Grid, Text } from '@nextui-org/react';
import Frame from '@/Components/Frame';
import Title from '@/Components/Title';
import { useTranslation } from 'next-i18next';

const DarkAndLightTheme = () => {
  const { t, i18n } = useTranslation();

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
          {t(
            'home:theme.compatibility',
            'Compatibility With '
          )}
          <>
            {
              i18n.language ==="es" && t(
                'home:theme.mode',
                'Mode'
              )
            }
          </>
          <Text
            as="span"
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 80%'
            }}
          >
            {t(
              'home:theme.dark',
              'Dark '
            )}
          </Text>{' '}
          {t(
            'home:theme.and',
            'And '
          )}
          <Text
            as="span"
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 80%'
            }}
          >
            {t(
              'home:theme.light',
              'Light '
            )}
          </Text>{' '}
          {
            i18n.language ==="en" && t(
              'home:theme.mode',
              'Mode'
            )
          }
        </Title>
        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          {t(
            'home:theme.description',
            'Invert the colors of the texts, backgrounds to be able to display the info correctly and automatically.'
          )}
        </Text>
      </Grid>

      <Grid xs={12} sm={4} justify="center">
        <Frame isVideo src="https://strike.me/assets/videos/pay.mp4" />
      </Grid>
    </Grid.Container>
  );
};

export default DarkAndLightTheme;
