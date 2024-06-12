import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DocsTemplate from '@/Components/Templates/GettingStarted';

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

export default Docs;
