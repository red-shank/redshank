import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DefaultThemeTemplate, {
  content
} from '@/Components/Templates/DefaultTheme';
import { isProd } from '@/config';
import { saveAlgoliaObject } from '@/lib/docs/algolia';
import extractTextFromJSX from '@/lib/docs/extractTextFromJSX';

const DefaultTheme = () => {
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

if (isProd) {
  const contentString = Object.values(content)
    .map((value) => {
      return extractTextFromJSX(value);
    })
    .join('\n ');

  saveAlgoliaObject('default-theme', contentString).then(
    (result) => result && console.log('default-theme saved to Algolia.')
  );
}

export default DefaultTheme;
