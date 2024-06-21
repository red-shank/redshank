import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import HooksTemplate from '@/Components/Templates/Hooks';
import { isProd } from '@/config';
import { saveAlgoliaObject } from '@/lib/docs/algolia';
import extractTextFromJSX from '@/lib/docs/extractTextFromJSX';

const HooksPage = () => {
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

if (isProd) {
  saveAlgoliaObject('hooks', extractTextFromJSX(HooksTemplate())).then(
    (result) => result && console.log('hooks saved to Algolia.')
  );
}

export default HooksPage;
