import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Docs: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/getting-started');
  }, [router]);

  return null;
};

export async function getStaticProps({ locale }: RouterLocale) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'docs']))
      // Will be passed to the page component as pages
    }
  };
}

export default Docs;
