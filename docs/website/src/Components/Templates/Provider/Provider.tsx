import { Text, Link as NLink } from '@nextui-org/react';
import Link from 'next/link';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import TitleLink from '@/Components/TitleLink';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';
import { PACKAGE_NAME } from '@/config';

const ProviderTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Provider</Title>
      <Text>
        For <Text as="strong">{PACKAGE_NAME}</Text> to work correctly, you need
        to set up the ThemeProvider at the root of your application.
      </Text>

      <TitleLink>Setup:</TitleLink>

      <Text> Go to the root of your application and do this:</Text>

      <BlockCode className="mt-5" code={examples.basic} />
      <TitleLink>Editing theme:</TitleLink>

      <Text>
        You can override all{' '}
        <Link href={ROUTES.DEFAULT_THEME.path} passHref legacyBehavior>
          <NLink className="inline">default theme</NLink>
        </Link>
      </Text>

      <BlockCode className="mt-5" code={examples.editingTheme} />

      <TitleLink>Theme object:</TitleLink>

      <BlockCode className="mt-5" code={examples.themeObject} />
    </WrapperStyle>
  );
};
export default ProviderTemplate;
