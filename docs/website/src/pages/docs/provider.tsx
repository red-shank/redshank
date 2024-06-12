import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import ProviderTemplate from '@/Components/Templates/Provider';

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

export default Provider;
