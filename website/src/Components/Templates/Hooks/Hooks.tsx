import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';
import { useTranslation } from 'next-i18next';

const HooksTemplate = () => {
  const { t } = useTranslation();
  return (
    <WrapperStyle>
      <Title>Hooks</Title>
      <Text>{t('docs:hooks.utilities', 'Hooks utilities.')}</Text>

      <TitleLink>useTheme</TitleLink>
      <Text>
        {t('docs:hooks.description', 'You can access all values of the current theme')}</Text>

      <BlockCode code={examples.useTheme} />

      <TitleLink>useModal</TitleLink>
      <Text> {t('docs:hooks.instruction', 'You can toggle modals easy.')}</Text>

      <BlockCode code={examples.useModal} />
    </WrapperStyle>
  );
};
export default HooksTemplate;
