import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DarkThemeTemplate from '@/Components/Templates/DarkMode';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DarkPage: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <DarkThemeTemplate />
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

export default DarkPage;
