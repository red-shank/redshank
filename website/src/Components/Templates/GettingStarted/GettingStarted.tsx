/* eslint-disable react/no-unescaped-entities */
import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';
import TitleLink from '@/Components/TitleLink';
import { useTranslation } from 'next-i18next';

const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <WrapperStyle>
      <Title>
        {t('docs:home.title', 'Getting started')}
      </Title>
      <Text>
        {t('docs:home.welcome', ' Welcome to the')} <strong>React Native Beauty Design</strong>{' '}
        {t('docs:home.description', ' documentation! Beauty Design allows you to make beautiful, modern, and fast mobile/applications regardless of your design experience, created with React and React Native.')}
      </Text>

      <TitleLink className="mt-12">
        {t('docs:home.install', 'Installation:')}

      </TitleLink>

      <Text>
        {t('docs:home.instruction', 'Inside your React project directory, install NextUI by running either of the following:')}
      </Text>

      <BlockCode
        className="mt-4"
        language="bash"
        code="expo install react-native-beauty-design"
      />
      <BlockCode language="bash" code="yarn add react-native-beauty-design" />
      <BlockCode
        language="bash"
        code="npm install react-native-beauty-design"
      />
    </WrapperStyle>
  );
};
export default HomeTemplate;
