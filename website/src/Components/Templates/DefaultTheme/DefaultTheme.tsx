import { useMemo } from 'react';
import {
  Text,
  Link as NLink,
  useTheme,
  Grid,
  Tooltip
} from '@nextui-org/react';
import Link from 'next/link';

import { libTheme } from '@/config';
import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';
import processColor, { isLight } from '@/utils/processColor';

import { ColorStyle, WrapperStyle } from './style';
import processObject from '@/utils/processObject';
import { useTranslation } from 'next-i18next';

const DefaultThemeTemplate = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const colors = useMemo(() => {
    return processColor(libTheme[isDark ? 'colorsDark' : 'colorsLight']);
  }, [isDark]);

  const paddingObjectString = useMemo(() => {
    return processObject(libTheme.paddingSizes);
  }, []);

  const marginObjectString = useMemo(() => {
    return processObject(libTheme.marginSizes);
  }, []);

  const borderRadiusObjectString = useMemo(() => {
    return processObject(libTheme.borderRadius);
  }, []);

  const zIndicesObjectString = useMemo(() => {
    return processObject(libTheme.zIndices);
  }, []);

  const onCopy = (color: string) => {
    return navigator.clipboard.writeText(color);
  };

  return (
    <WrapperStyle>
      <Title>{t('docs:defaultTheme.title', 'Default Theme')}</Title>
      <Text>
        {' '}
        {t(
          'docs:defaultTheme.description',
          '@redshank default theme is based on React Context API.'
        )}
      </Text>
      <TitleLink>{t('docs:defaultTheme.colors', 'Colors:')}</TitleLink>

      <Text>
        {t(
          'docs:defaultTheme.instruction',
          '@redshank includes a default color palette out-of-the-box that is a\n' +
            "        great starting point if you don't have your own specific branding in\n" +
            '        mind. You can access the colors through the theme object, see the '
        )}
        <Link href={ROUTES.PROVIDER.path + '#theme-object'}>
          <NLink className="inline">
            {t('docs:defaultTheme.themeObject', 'theme object')}
          </NLink>
        </Link>
        {t('docs:defaultTheme.info', 'for more information.')}
      </Text>

      {colors.map(({ colors, name }) => {
        return (
          <div key={name}>
            <TitleLink>{name}</TitleLink>

            <Grid.Container gap={2}>
              {colors.map(({ value: color, name: nameColor }) => {
                const isWhiteText = isLight(color)
                  ? 'text-black'
                  : 'text-white';
                return (
                  <Grid key={nameColor}>
                    <Tooltip trigger="click" content="Copied!">
                      <ColorStyle
                        onClick={() => onCopy(color)}
                        className="h-28 w-28 rounded-2xl grid place-items-center cursor-pointer"
                        style={{ background: color }}
                      >
                        <div className="text-center">
                          <p className={`text-sm ${isWhiteText}`}>
                            {nameColor}
                          </p>
                          <p className={`font-bold ${isWhiteText}`}>{color}</p>
                        </div>
                      </ColorStyle>
                    </Tooltip>
                  </Grid>
                );
              })}
            </Grid.Container>
          </div>
        );
      })}

      <TitleLink>{t('docs:defaultTheme.padding', 'Paddings:')}</TitleLink>

      <BlockCode language="JSON" code={paddingObjectString} />

      <TitleLink>{t('docs:defaultTheme.margin', 'Margins:')}</TitleLink>
      <BlockCode language="JSON" code={marginObjectString} />

      <TitleLink>
        {t('docs:defaultTheme.borderRadius', 'Border Radius:')}
      </TitleLink>
      <BlockCode language="JSON" code={borderRadiusObjectString} />

      <TitleLink>zIndex:</TitleLink>
      <BlockCode language="JSON" code={zIndicesObjectString} />
    </WrapperStyle>
  );
};
export default DefaultThemeTemplate;
