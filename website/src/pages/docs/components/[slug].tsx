import path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import remarkSlug from 'remark-slug';
import mapboxPrism from '@mapbox/rehype-prism';
import remarkAutoLink from 'remark-autolink-headings';
import { serialize } from 'next-mdx-remote/serialize';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import v1 from '@/assets/v1.json';
import { isProd } from '@/config';
import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import { fetchRawDoc, fetchRawDocLocal } from '@/lib/docs/page';
import ComponentTemplate from '@/Components/Templates/Component';

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

export async function getStaticProps({ locale, params }: any) {
  const { slug } = params;

  let meta, doc;

  if (isProd) {
    const rawFileSource = await fetchRawDoc(slug, 'v1', locale);
    const { content, data } = matter(rawFileSource);

    doc = content.toString();
    meta = data;
  } else {
    meta = null;
    const rawFileSource = fetchRawDocLocal(slug, 'v1', locale);
    const { content, data } = matter(rawFileSource);

    doc = content.toString();
    meta = data;
  }

  const mdxSource = await serialize(doc, {
    mdxOptions: {
      remarkPlugins: [remarkAutoLink, remarkSlug],
      rehypePlugins: [mapboxPrism as any]
    }
  });

  return {
    // fetching to mdx in github for get pages component
    props: {
      meta,
      source: mdxSource,
      ...(await serverSideTranslations(locale, ['common', 'docs']))
    }
  };
}
