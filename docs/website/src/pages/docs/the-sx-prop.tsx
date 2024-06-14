import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import TheSxPropTemplate from '@/Components/Templates/TheSxProp';

const Docs: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <TheSxPropTemplate />
    </Layout>
  );
};

export default Docs;
