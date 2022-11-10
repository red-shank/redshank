import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import HomeTemplate from '@/Components/Templates/Home';

const Home: NextPage = () => {
  return (
    <Layout withAside={false} isActive={ROUTES.HOME.name}>
      <HomeTemplate />
    </Layout>
  );
};

export async function getStaticProps({ locale }: RouterLocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
      // Will be passed to the page component as pages
    }
  };
}

export default Home;
