import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DocsTemplate from '@/Components/Templates/GettingStarted';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Docs: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <DocsTemplate />
    </Layout>
  );
};

export async function getStaticProps({ locale }: RouterLocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['docs']))
    }
  };
}

export default Docs;
