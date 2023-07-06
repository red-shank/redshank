import React from 'react';
import Head from 'next/head';

type HeadingSeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const HeadSeo = ({ description, title, image }: HeadingSeoProps) => {
  return (
    <Head>
      {title ? <title>@redshank - {title}</title> : <></>}
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
