import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import HooksTemplate from '@/Components/Templates/Hooks';

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

export default HooksPage;
