/* eslint-disable react/no-unescaped-entities */
import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';
import TitleLink from '@/Components/TitleLink';
import { useTranslation } from 'next-i18next';
import { PACKAGE_NAME } from '@/config';

const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <WrapperStyle>
      <Title>{t('docs:home.title', 'Getting started')}</Title>
      <Text>
        {t('docs:home.welcome', ' Welcome to the')}{' '}
        <Text as="strong">{PACKAGE_NAME}</Text>{' '}
        {t(
          'docs:home.description',
          ' documentation! @redshank allows you to make beautiful, modern, and fast mobile/applications regardless of your design experience, created with React and React Native.'
        )}
      </Text>

      <TitleLink className="mt-12">
        {t('docs:home.install', 'Installation:')}
      </TitleLink>

      <Text>
        {t(
          'docs:home.instruction',
          `Inside your React project directory, install ${PACKAGE_NAME} by running either of the following:`
        )}
      </Text>

      <BlockCode
        className="mt-4"
        language="bash"
        code={`expo install ${PACKAGE_NAME}`}
      />
      <BlockCode language="bash" code={`yarn add ${PACKAGE_NAME}`} />
      <BlockCode language="bash" code={`npm install ${PACKAGE_NAME}`} />
    </WrapperStyle>
  );
};
export default HomeTemplate;
