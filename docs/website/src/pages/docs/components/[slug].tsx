import matter from 'gray-matter';
import remarkSlug from 'remark-slug';
import mapboxPrism from '@mapbox/rehype-prism';
import { serialize } from 'next-mdx-remote/serialize';
// @ts-ignore
import remarkAutoLink from 'remark-autolink-headings';

import v1 from '@/versions/v1.json';
import { isProd } from '@/config';
import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import { fetchRawDoc, fetchRawDocLocal } from '@/lib/docs/page';
import ComponentTemplate from '@/Components/Templates/Component';
import { saveAlgoliaObject } from '@/lib/docs/algolia';

export default function Component({ meta, source }: any) {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.COMPONENTS.name}
    >
      <ComponentTemplate
        title={meta?.title}
        source={source}
        description={meta?.description}
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

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  let rawFileSource;

  if (isProd) {
    rawFileSource = await fetchRawDoc(slug, 'v1');
  } else {
    rawFileSource = fetchRawDocLocal(slug, 'v1');
  }

  if (!rawFileSource) return { notFound: true };

  const { content, data } = matter(rawFileSource);
  const mdxSource = await serialize(content.toString(), {
    mdxOptions: {
      remarkPlugins: [remarkAutoLink as any, remarkSlug],
      rehypePlugins: [mapboxPrism as any]
    }
  });

  if (isProd) {
    await saveAlgoliaObject(slug, content.toString() || '');
  }

  return {
    // fetching to mdx in github for get pages component
    props: {
      meta: data,
      source: mdxSource
    }
  };
}
