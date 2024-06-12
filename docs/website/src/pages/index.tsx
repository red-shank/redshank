import type { NextPage } from 'next';

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

export default Home;
