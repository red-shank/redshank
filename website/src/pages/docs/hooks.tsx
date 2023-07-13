import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import HooksTemplate from '@/Components/Templates/Hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HooksPage: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <HooksTemplate />
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

export default HooksPage;
