import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DocsTemplate from '@/Components/Templates/GettingStarted';
import { isProd } from '@/config';
import { saveAlgoliaObject } from '@/lib/docs/algolia';
import extractTextFromJSX from '@/lib/docs/extractTextFromJSX';

const Docs = () => {
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

if (isProd) {
  saveAlgoliaObject('getting-started', extractTextFromJSX(DocsTemplate())).then(
    (result) => result && console.log('default-theme saved to Algolia.')
  );
}

export default Docs;
