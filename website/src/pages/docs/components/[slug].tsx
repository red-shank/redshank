import v1 from '@/assets/v1.json';
import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import ComponentTemplate from '@/Components/Templates/Component';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Component() {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.COMPONENTS.name}
    >
      <ComponentTemplate
        title="Icon"
        description="Welcome to the React Native Beauty Design documentation! Beauty Design allows you to make beautiful, modern, and fast mobile/applications regardless of your design experience, created with React and React Native."
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths: { params: { slug: string } }[] = [];

  v1.forEach(({ type, children }) => {
    if (type !== 'component') return null;
    children.forEach(({ key }) => {
      paths.push({
        params: { slug: key }
      });
    });
  });

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ locale }: any) {
  return {
    // fetching to mdx in github for get props component
    props: {
      // add others vars
      ...(await serverSideTranslations(locale, ['common', 'docs', 'home']))
    }
  };
}
