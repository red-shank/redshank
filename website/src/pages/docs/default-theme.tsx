import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DefaultThemeTemplate from '@/Components/Templates/DefaultTheme';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DefaultTheme: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <DefaultThemeTemplate />
    </Layout>
  );
};

export async function getStaticProps({ locale }: RouterLocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
      // Will be passed to the page component as props
    }
  };
}

export default DefaultTheme;
