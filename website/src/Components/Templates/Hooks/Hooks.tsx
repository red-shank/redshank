import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';

const HooksTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Hooks</Title>
      <Text>Hooks utilities.</Text>

      <TitleLink>useTheme</TitleLink>
      <Text>You can access all values of the current theme</Text>

      <BlockCode code={examples.useTheme} />

      <TitleLink>useModal</TitleLink>
      <Text>You can toggle modals easy.</Text>

      <BlockCode code={examples.useModal} />

      <TitleLink>useHeaderHeight</TitleLink>
      <Text>You can get current status bar height (Header).</Text>

      <BlockCode code={examples.useHeaderHeight} />
    </WrapperStyle>
  );
};
export default HooksTemplate;
