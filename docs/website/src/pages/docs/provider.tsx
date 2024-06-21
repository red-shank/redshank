import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import ProviderTemplate from '@/Components/Templates/Provider';
import { isProd } from '@/config';
import { saveAlgoliaObject } from '@/lib/docs/algolia';
import extractTextFromJSX from '@/lib/docs/extractTextFromJSX';

const Provider = () => {
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

if (isProd) {
  saveAlgoliaObject('provider', extractTextFromJSX(ProviderTemplate())).then(
    (result) => result && console.log('provider saved to Algolia.')
  );
}

export default Provider;
