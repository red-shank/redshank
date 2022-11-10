import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import Playground from '@/Components/Playground';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';
import { useTranslation } from 'next-i18next';

const DarkThemeTemplate = () => {
  const { t } = useTranslation();
  return (
    <WrapperStyle>
      <Title>
        {t('docs:darkMode.title', 'Dark Mode')}
      </Title>
      <Text>
        {t('docs:darkMode.description', 'Beauty Design automatically handles the dark and light theme you can change using a useTheme function.')}

      </Text>

      <TitleLink>
        {t('docs:darkMode.changeTheme', 'Change Theme:')}

      </TitleLink>

      <BlockCode code={examples.basic} />

      <TitleLink>
        {t('docs:darkMode.customColor', 'Custom colors:')}
      </TitleLink>

      <BlockCode code={examples.customColors} />

      <TitleLink>
        {t('docs:darkMode.sample', 'Complete example:')}
      </TitleLink>
      <Playground code={examples.basicExpo} />
    </WrapperStyle>
  );
};
export default DarkThemeTemplate;
