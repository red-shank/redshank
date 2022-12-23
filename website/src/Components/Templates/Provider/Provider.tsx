import { Text, Link as NLink } from '@nextui-org/react';
import Link from 'next/link';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';
import { useTranslation } from 'next-i18next';
import { PACKAGE_NAME } from '@/config';

const ProviderTemplate = () => {
  const { t } = useTranslation();

  return (
    <WrapperStyle>
      <Title>{t('docs:provider.title', 'Provider')}</Title>
      <Text>
        {t('docs:provider.for', 'For')} <Text as="strong">{PACKAGE_NAME}</Text>
        {t(
          'docs:provider.mainInstruction',
          ' to work correctly, you need to set up the ThemeProvider at the root of your application.'
        )}
      </Text>

      <TitleLink>Setup:</TitleLink>

      <Text>
        {t(
          'docs:provider.instruction',
          ' Go to the root of your application and do this:'
        )}
      </Text>

      <BlockCode className="mt-5" code={examples.basic} />
      <TitleLink>{t('docs:provider.edit', 'Editing theme:')}</TitleLink>

      <Text>
        {t('docs:provider.override', 'You can override all ')}
        <Link href={ROUTES.DEFAULT_THEME.path} passHref>
          <NLink className="inline">
            {t('docs:provider.defaultTheme', 'default theme')}
          </NLink>
        </Link>
      </Text>

      <BlockCode className="mt-5" code={examples.editingTheme} />

      <TitleLink>{t('docs:provider.themeObject', 'Theme object:')}</TitleLink>

      <BlockCode className="mt-5" code={examples.themeObject} />
    </WrapperStyle>
  );
};
export default ProviderTemplate;
