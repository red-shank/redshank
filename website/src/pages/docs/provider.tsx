import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import ProviderTemplate from '@/Components/Templates/Provider';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Provider: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <ProviderTemplate />
    </Layout>
  );
};

export async function getStaticProps({ locale }: RouterLocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["docs"]))
      // Will be passed to the page component as pages
    }
  };
}

export default Provider;
