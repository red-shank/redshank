import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DefaultThemeTemplate from '@/Components/Templates/DefaultTheme';

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

export default DefaultTheme;
