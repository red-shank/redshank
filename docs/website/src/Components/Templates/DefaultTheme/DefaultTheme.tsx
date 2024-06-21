import { useMemo } from 'react';
import {
  Text,
  Link as NLink,
  useTheme,
  Grid,
  Tooltip
} from '@nextui-org/react';
import Link from 'next/link';

import { libTheme, PACKAGE_NAME } from '@/config';
import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';
import processColor from '@/utils/processColor';

import { WrapperStyle } from './style';
import processObject from '@/utils/processObject';

export const content = {
  header: (
    <>
      <Title>Default Theme</Title>
      <Text>
        <b>{PACKAGE_NAME}</b> default theme is based on React Context API.
      </Text>
      <TitleLink>Colors:</TitleLink>

      <Text>
        <b>{PACKAGE_NAME}</b> includes a default color palette out-of-the-box
        that is a great starting point if you don't have your own specific
        branding in mind. You can access the colors through the theme object,
        see the{' '}
        <Link href={ROUTES.PROVIDER.path + '#theme-object'}>
          <NLink className="inline">theme object</NLink>
        </Link>{' '}
        for more information.
      </Text>
    </>
  ),
  padding: <TitleLink>Paddings:</TitleLink>,
  margins: <TitleLink>Margins:</TitleLink>,
  borderRadius: <TitleLink>Border Radius:</TitleLink>,
  zIndex: <TitleLink>zIndex:</TitleLink>
};

const DefaultThemeTemplate = () => {
  const palette = useMemo(() => {
    return {
      dark: processColor(libTheme.colorsDark),
      light: processColor(libTheme.colorsLight)
    };
  }, []);

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
      {content.header}

      {palette.dark.map(({ colors, name }, indexPalette) => {
        return (
          <div key={name}>
            <TitleLink>{name}</TitleLink>

            <Grid.Container gap={2}>
              {colors.map(({ value: darkColor, name: nameColor }, index) => {
                const lightColor =
                  palette.light?.[indexPalette]?.colors?.[index].value;

                return (
                  <Grid key={nameColor}>
                    <div className="rounded-2xl grid place-items-center">
                      <Tooltip trigger="click" content="Copied key color!">
                        <div
                          onClick={() => onCopy(nameColor)}
                          className="h-28 w-28 rounded-2xl cursor-pointer relative overflow-hidden"
                        >
                          <div
                            className="absolute top-0 left-0 w-[50%] h-full"
                            style={{ background: lightColor }}
                          />

                          <div
                            className="absolute top-0 left-[50%] w-[50%] h-full"
                            style={{ background: darkColor }}
                          />
                        </div>
                      </Tooltip>

                      <div className="text-center">
                        <p className={`font-bold`}>{nameColor}</p>
                        <Tooltip trigger="click" content="Copied Light!">
                          <p
                            onClick={() => onCopy(lightColor)}
                            className={`text-sm cursor-pointer`}
                          >
                            Light:{' '}
                            <span className="font-bold">{lightColor}</span>
                          </p>
                        </Tooltip>
                        <Tooltip trigger="click" content="Copied Dark!">
                          <p
                            onClick={() => onCopy(darkColor)}
                            className={`text-sm cursor-pointer`}
                          >
                            Dark: <span className="font-bold">{darkColor}</span>
                          </p>
                        </Tooltip>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid.Container>
          </div>
        );
      })}

      {content.padding}
      <BlockCode language="JSON" code={paddingObjectString} />

      {content.margins}
      <BlockCode language="JSON" code={marginObjectString} />

      {content.borderRadius}
      <BlockCode language="JSON" code={borderRadiusObjectString} />

      {content.zIndex}
      <BlockCode language="JSON" code={zIndicesObjectString} />
    </WrapperStyle>
  );
};
export default DefaultThemeTemplate;
