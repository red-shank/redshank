import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import Playground from '@/Components/Playground';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';
import { PACKAGE_NAME } from '@/config';

const DarkThemeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Dark Mode</Title>
      <Text>
        <b>{PACKAGE_NAME}</b> automatically handles the dark and light theme you can
        change using a useTheme function.
      </Text>

      <TitleLink>Change Theme:</TitleLink>

      <BlockCode code={examples.basic} />

      <TitleLink>Custom colors:</TitleLink>

      <BlockCode code={examples.customColors} />

      <TitleLink>Complete example:</TitleLink>
      <Playground code={examples.basicExpo} />
    </WrapperStyle>
  );
};
export default DarkThemeTemplate;
