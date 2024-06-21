import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import TheSxPropTemplate from '@/Components/Templates/TheSxProp';
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
      <TheSxPropTemplate />
    </Layout>
  );
};

if (isProd) {
  saveAlgoliaObject(
    'the-sx-prop',
    extractTextFromJSX(TheSxPropTemplate())
  ).then((result) => result && console.log('the-sx-prop saved to Algolia.'));
}

export default Docs;
