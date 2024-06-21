import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DarkThemeTemplate from '@/Components/Templates/DarkMode';
import { isProd } from '@/config';
import { saveAlgoliaObject } from '@/lib/docs/algolia';
import extractTextFromJSX from '@/lib/docs/extractTextFromJSX';

const DarkPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <DarkThemeTemplate />
    </Layout>
  );
};

if (isProd) {
  saveAlgoliaObject('dark-mode', extractTextFromJSX(DarkThemeTemplate())).then(
    (result) => result && console.log('dark-mode saved to Algolia.')
  );
}

export default DarkPage;
