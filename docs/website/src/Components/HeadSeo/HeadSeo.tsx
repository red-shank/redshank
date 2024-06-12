import React from 'react';
import Head from 'next/head';
import { metadata } from '@/config/metadata';

type HeadingSeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const HeadSeo = ({ description, title, image }: HeadingSeoProps) => {
  const newTitle = `${metadata.title} - ${title}`;
  return (
    <Head>
      {title ? (
        <>
          <title>{newTitle}</title>
          <meta property="title" content={newTitle} />
          <meta property="site_name" content={newTitle} />

          <meta property="og:title" content={newTitle} />
          <meta property="og:site_name" content={newTitle} />

          <meta property="twitter:site_name" content={newTitle} />
          <meta property="twitter:title" content={newTitle} />
        </>
      ) : null}
      {description ? (
        <>
          <meta
            property="description"
            content={`${description} from @redshank.`}
          />
          <meta
            property="og:description"
            content={`${description} from @redshank.`}
          />
          <meta
            property="twitter:description"
            content={`${description} from @redshank.`}
          />
        </>
      ) : (
        <></>
      )}
    </Head>
  );
};

export default HeadSeo;
